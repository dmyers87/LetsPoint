import * as functions from 'firebase-functions';
import { WithContext, Callable } from './index';
import { MeetingShape } from './schema';

type MyShape = {
  mid?: string;
  to?: 'archive' | 'active';
};

const archiveMeeting: WithContext<Callable> = ({ firestore, auth }) => async (
  data: MyShape,
  context
) => {
  const sendErr = functions.https.HttpsError;
  if (!context.auth) {
    throw new sendErr('permission-denied', 'User must be authorized');
  }
  if (!data.mid || !data.to) {
    throw new sendErr('invalid-argument', 'Missing mid or to field');
  }

  const uid = context.auth.uid;
  const db = firestore();

  const meetingRef = db.doc(`/meetings/${data.mid}`);
  const archiveMeetingRef = db.doc(`/archivedMeetings/${data.mid}`);

  const fromRef = data.to === 'archive' ? meetingRef : archiveMeetingRef;
  const toRef = data.to === 'archive' ? archiveMeetingRef : meetingRef;
  await transfer(fromRef, toRef, { uid, db });

  return { message: 'success' };
};

async function transfer(
  fromRef: FirebaseFirestore.DocumentReference,
  toRef: FirebaseFirestore.DocumentReference,
  { uid, db }: { uid: string; db: FirebaseFirestore.Firestore }
) {
  const sendErr = functions.https.HttpsError;

  // Is the user allowed to do this
  const m = await fromRef.get();
  const mData = m.data() as MeetingShape;
  if (!m.exists || mData === undefined) throw new sendErr('invalid-argument', 'Meeting dne');
  const isParticipant = mData.participantIDs[uid] === true;
  if (!isParticipant) throw new sendErr('permission-denied', 'User must be in participant list');

  // Now we move the doc and subcollection
  await db.runTransaction(async t => {
    // Read
    const [meeting, tickets] = await Promise.all([
      t.get(fromRef),
      t.get(fromRef.collection('tickets')),
    ]);

    // Validate
    const meetingData = meeting.data();
    if (!meeting.exists || meetingData === undefined) {
      throw new sendErr('invalid-argument', 'Meeting dne in transaction');
    }

    // Transfer meeting
    t.set(toRef, meetingData);
    t.delete(fromRef);

    // Transfer tickets
    tickets.docs.forEach(ticket => {
      t.create(toRef.collection('tickets').doc(ticket.id), ticket.data());
      t.delete(ticket.ref);
    });

    // Transaction response, resolved Promise
    return null;
  });
}

export default archiveMeeting;
