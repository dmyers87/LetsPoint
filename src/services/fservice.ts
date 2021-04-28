import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

import { byTimestamp } from '../utils/sorting';
import config from './env';

import {
  MeetingShape,
  meetingFromSnap,
  MeetingNew,
  MeetingShapeToDB,
  TicketShape,
  ticketFromSnap,
  TicketNew,
  TicketShapeToDB,
  CredentialShape,
  ProfileShape,
  profileFromSnap,
} from '../schema';

class FirebaseService {
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
  functions: firebase.functions.Functions;

  constructor() {
    try {
      firebase.initializeApp(config);
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
      }
    }

    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.functions = firebase.functions();
  }

  _getTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.auth.signInWithPopup(provider);
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password).catch(err => {
      if (err.code === 'auth/email-already-in-use') {
        console.log('email in use, trying to sign in');
        return this.auth
          .signInWithEmailAndPassword(email, password)
          .catch(reason => console.warn(reason));
      } else {
        console.error('trouble creating a user', err);
        throw err;
      }
    });
  }

  signOut() {
    return this.auth.signOut().catch(err => console.error('error related to signing out', err));
  }

  /**
   * Get a subscription to the user's list of meetings
   * NOTE: OrderBy is applied client side to avoid needing an index for over specificity
   */
  onMeetingList(cb: (meetings: MeetingShape[]) => void): () => void {
    const user = this.auth.currentUser;
    if (user == null) {
      console.error('Tried to call onMeetingList with no user');
      return function noop() {};
    }

    return this.db
      .collection(`/meetings`)
      .where(`participantIDs.${user.uid}`, '==', true)
      .onSnapshot(querySnapshot => {
        cb(
          querySnapshot.docs
            .map(meetingFromSnap)
            .sort((a, b) => byTimestamp(a.createdAt, b.createdAt))
        );
      });
  }

  onMeeting(mid: string, cb: (meeting: MeetingShape | false) => void) {
    return this.db.doc(`/meetings/${mid}`).onSnapshot(snap => {
      if (false === snap.exists) return cb(false);

      cb(meetingFromSnap(snap));
    });
  }

  createMeeting(meeting: MeetingNew) {
    const user = this.auth.currentUser;
    if (user == null) {
      return Promise.reject('Tried to call createMeeting with no user');
    }

    const m: MeetingShapeToDB = {
      ...meeting,
      participantIDs: { [user.uid]: true },
      participantData: {
        [user.uid]: {
          displayName: user.displayName || '',
          photoURL: user.photoURL || '',
        },
      },
      // @ts-ignore
      createdAt: this._getTimestamp(),
    };

    return this.db.collection(`/meetings`).add(m);
  }

  updateMeeting({ id, ...rest }: { id: string } & Partial<MeetingShape>) {
    const user = this.auth.currentUser;
    if (user == null) {
      return Promise.reject('Tried to call createMeeting with no user');
    }
    if (!id) return Promise.reject('Tried updating a meeting without an id');

    return this.db.doc(`/meetings/${id}`).update({ ...rest });
  }

  getArchivedMeetingList(): Promise<MeetingShape[]> {
    const user = this.auth.currentUser;
    if (user == null) {
      return Promise.reject('User noth authorized');
    }

    return this.db
      .collection(`/archivedMeetings`)
      .where(`participantIDs.${user.uid}`, '==', true)
      .get()
      .then(data =>
        data.docs.map(meetingFromSnap).sort((a, b) => byTimestamp(a.createdAt, b.createdAt))
      );
  }

  archiveMeeting(mid: string, to: 'active' | 'archive') {
    const user = this.auth.currentUser;
    if (user == null) {
      return Promise.reject('Tried to call createMeeting with no user');
    }

    return this.functions.httpsCallable('archiveMeeting')({ mid, to });
  }

  addSelfToMeeting(mid: string) {
    const user = this.auth.currentUser;
    if (user == null) {
      console.error('Tried to call addSelfToMeeting with no user');
      return;
    }

    return this.db.doc(`/meetings/${mid}`).update({
      [`participantIDs.${user.uid}`]: true,
      [`participantData.${user.uid}`]: {
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
    });
  }

  addUserToObserverList(mid: string, uid: string) {
    return this._updateUserInObserverList(mid, uid, true);
  }

  removeUserFromObserverList(mid: string, uid: string) {
    return this._updateUserInObserverList(mid, uid, firebase.firestore.FieldValue.delete());
  }

  _updateUserInObserverList(mid: string, uid: string, value: true | firebase.firestore.FieldValue) {
    return this.db.doc(`/meetings/${mid}`).update({ [`observerIDs.${uid}`]: value });
  }

  /**
   * Ordering is done on the server
   */
  onTicketList(mid: string, cb: (tickets: TicketShape[]) => any) {
    return this.db
      .collection(`/meetings/${mid}/tickets`)
      .orderBy('createdAt')
      .onSnapshot(querySnapshot => {
        cb(querySnapshot.docs.map(ticketFromSnap));
      });
  }

  createTicket(mid: string, ticket: TicketNew) {
    const t: TicketShapeToDB = {
      title: ticket.title,
      link: ticket.link || '',
      description: ticket.description || '',
      votes: {},
      isRevealed: false,

      // @ts-ignore
      createdAt: this._getTimestamp(),
    };
    return this.db.collection(`/meetings/${mid}/tickets`).add(t);
  }

  updateTicket(mid: string, ticket: Partial<TicketShape>) {
    const { id, ...rest } = ticket;
    if (!id) {
      return Promise.reject('Must provide ticket id');
    }

    return this.db.doc(`/meetings/${mid}/tickets/${id}`).update(rest);
  }

  voteOnTicket(mid: string, tid: string, vote: number) {
    const user = this.auth.currentUser;
    if (user === null) return Promise.reject('User not logged in');

    return this._ticket(mid, tid).update({ [`votes.${user.uid}`]: vote });
  }

  revealTicket(mid: string, tid: string) {
    return this._ticket(mid, tid).update({ isRevealed: true });
  }

  deleteTicket(mid: string, tid: string) {
    return this._ticket(mid, tid).delete();
  }

  _ticket(mid: string, tid: string) {
    return this.db.doc(`/meetings/${mid}/tickets/${tid}`);
  }

  createCredentials({
    url,
    username,
    password,
  }: {
    url: string;
    username: string;
    password: string;
  }) {
    const user = this.auth.currentUser;
    if (user === null) return Promise.reject('User not logged in');

    const credForDB: CredentialShape = {
      url,
      token: btoa(`${username}:${password}`),
      storyPointField: '', // TODO: Automate this
    };

    // Setting a fixed doc ID for now, if we want to add more credentials then
    // it makes sense to do more here
    const profileRef = this.db.doc(`/profiles/${user.uid}`);
    const jiraRef = this.db.doc(`/profiles/${user.uid}/secure/jira`);

    const b = this.db.batch();
    b.set(profileRef, { hasCreds: true }, { merge: true });
    b.set(jiraRef, credForDB);

    return b.commit();
  }

  onProfile(cb: (profile: ProfileShape) => any): () => void {
    const user = this.auth.currentUser;
    if (user === null) {
      console.error('trying to call onProfile with no user');
      return function noop() {};
    }

    return this._profile(user.uid).onSnapshot(snap => {
      cb(profileFromSnap(snap));
    });
  }

  getProfile() {
    const user = this.auth.currentUser;
    if (user === null) return Promise.reject('User not logged in');

    return this._profile(user.uid)
      .get()
      .then(profileFromSnap);
  }

  _profile(uid: string) {
    return this.db.doc(`/profiles/${uid}`);
  }

  importTicketFromJiraTID(mid: string, tid: string) {
    return this.functions.httpsCallable('fetchTickets')({ tid, mid });
  }

  pushPointsToJira(ticketUpdates: { [tid: string]: number }) {
    return this.functions.httpsCallable('pushPointsToJira')({ ticketUpdates });
  }
}

export default new FirebaseService();
