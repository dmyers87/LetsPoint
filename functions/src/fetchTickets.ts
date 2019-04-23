import * as functions from 'firebase-functions';
import axios from 'axios';

import { CredentialShape, TicketShapeToDB, MeetingShapeToDB } from './schema';
import { WithContext, Callable } from './index';
import * as jira from './fetchFromJira';

type TicketRequestShape = {
  tid?: string;
  mid?: string;
};

const fetchTicket: WithContext<Callable> = ({ firestore }) => async (
  data: TicketRequestShape,
  context
) => {
  const sendErr = functions.https.HttpsError;
  if (!context.auth) {
    throw new sendErr('permission-denied', 'User must be authorized');
  }
  if (!data.mid || !data.tid) {
    console.error('Missing mid or tid', { mid: data.mid, tid: data.tid });
    throw new sendErr('invalid-argument', 'Missing mid or ticket key');
  }

  const uid = context.auth.uid;
  const db = firestore();

  // Ensure user is participant in meeting
  const meeting = await db.doc(`/meetings/${data.mid}`).get();
  const mData = meeting.data() as MeetingShapeToDB;
  if (!meeting.exists || !mData || !mData.participantIDs[uid]) {
    throw new sendErr('permission-denied', 'User is not a participant of this meeting');
  }

  // Get the user's credentials
  const creds = await db.doc(`/profiles/${uid}/secure/jira`).get();
  const credData = creds.data() as CredentialShape;
  if (!creds.exists || !credData) {
    throw new sendErr('invalid-argument', 'No credentials saved for this user');
  }

  // Make the api request
  let ticketResponse;
  try {
    ticketResponse = await jira.getTicket(axios.get, credData, data.tid);
  } catch (error) {
    type AxiosError = { status: number; headers: { [key: string]: string } };
    const response: AxiosError = error.response;

    switch (response.status) {
      case 404:
        throw new sendErr('internal', 'Issue not found on Jira server.', { tid: data.tid });
        break;

      // Documentations says 401, but in practice it is a 403
      case 401:
      case 403:
        let message =
          'Jira could not authorize your request. Your credentials might not be correct.';

        if (
          response.headers['X-Seraph-LoginReason'] === 'AUTHENTICATION_DENIED' &&
          response.headers['X-Authentication-Denied-Reason'].startsWith('CAPTCHA_CHALLENGE')
        ) {
          message =
            'Multiple failed sign in attempts have temporarily locked you out of Jira. Please navigate to your Jira server in another tab and log in.';
        }

        throw new sendErr('internal', message);
        break;

      default:
        console.error('jira request error', error, { uid, tid: data.tid });
        throw new sendErr('internal', 'Failed Jira request');
        break;
    }
  }

  // Insert ticket into meeting
  const newTicket: TicketShapeToDB = {
    title: `${ticketResponse.id}: ${ticketResponse.title}`,
    link: ticketResponse.link,
    description: '',
    votes: {},
    isRevealed: false,
    source: ticketResponse.source,

    // @ts-ignore
    createdAt: firestore.FieldValue.serverTimestamp(),
  };

  await meeting.ref
    .collection('tickets')
    .doc(ticketResponse.id)
    .set(newTicket);

  return { message: 'success' };
};

export default fetchTicket;
