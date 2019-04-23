import firebase from 'firebase/app';

type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type Maybe<T, K extends keyof T> = { [P in K]?: T[P] };

// EntityNew        - The expected creation shape from the user
// EntityShapeToDB  - The doc as it exists in Firebase
// EntityShape      - The doc with the id as a property

/**
 * Meetings
 */
export type MeetingNew = Pick<MeetingShape, 'title'>;
export type MeetingShapeToDB = Omit<MeetingShape, 'id'>;
export type MeetingShape = {
  id: string;
  title: string;
  focus: string | null;
  participantData: {
    [uid: string]: {
      displayName: string;
      photoURL: string;
    };
  };
  participantIDs: { [uid: string]: true };
  observerIDs: { [uid: string]: true };
  createdAt: firebase.firestore.Timestamp;
};

type Snap = {
  id: string;
  data: () => {} | undefined;
};

export function meetingFromSnap(snap: Snap): MeetingShape {
  const data = snap.data();
  return {
    id: snap.id,
    title: '',
    focus: null,
    participantIDs: {},
    observerIDs: {},
    participantData: {},
    ...data,
    // @ts-ignore
    createdAt: data.createdAt || { seconds: 0, nanoseconds: 0 },
  };
}

/**
 * Tickets
 */
export type TicketNew = Pick<TicketShape, 'title' | 'link' | 'description' | 'source'> &
  Maybe<TicketShape, 'id'>;
export type TicketShapeToDB = Omit<TicketShape, 'id'>;
export type TicketShape = {
  id: string;
  title: string;
  link: string;
  description: string;
  votes: {
    [uid: string]: number;
  };
  committedValue?: number;
  isRevealed: boolean;
  source: 'jira' | 'form';
  createdAt: firebase.firestore.Timestamp;
};

export function ticketFromSnap(snap: Snap): TicketShape {
  const data = snap.data() || {};
  return {
    id: snap.id,
    title: '',
    link: '',
    description: '',
    votes: {},
    isRevealed: false,
    source: 'form',
    ...data,
    // @ts-ignore
    createdAt: data.createdAt || { seconds: 0, nanoseconds: 0 },
  };
}

/**
 * Credentials
 */
export type CredentialShape = {
  url: string;
  token: string;
  storyPointField: string;
};

/**
 * Profile
 */
export type ProfileShape = {
  hasCreds: boolean;
};
export function profileFromSnap(snap: Snap): ProfileShape {
  const data = snap.data();
  return {
    hasCreds: false,
    ...data,
  };
}
