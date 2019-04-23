import * as functions from 'firebase-functions';
import axios from 'axios';

import { CredentialShape } from './schema';
import { WithContext, Callable } from './index';
import { getHeaders } from './fetchFromJira';

type RequestShape = {
  ticketUpdates?: {
    // number is the story point value we want to push into Jira
    [tid: string]: number;
  };
};
const pushPointsToJira: WithContext<Callable> = ({ firestore }) => async (
  data: RequestShape,
  context
) => {
  const sendErr = functions.https.HttpsError;

  if (!context.auth) {
    throw new sendErr('permission-denied', 'User must be authorized');
  }
  if (!data.ticketUpdates) {
    console.error('Missing ticketUpdates', { data: data.ticketUpdates });
    throw new sendErr('invalid-argument', 'Missing mid or ticket data');
  }

  // Get the user's credentials
  const uid = context.auth.uid;
  const db = firestore();
  const creds = await db.doc(`/profiles/${uid}/secure/jira`).get();
  const credData = creds.data() as CredentialShape;
  if (!creds.exists || !credData || !credData.storyPointField || !credData.token || !credData.url) {
    throw new sendErr('invalid-argument', 'Invalid credentials saved for this user');
  }

  // customfield_10002
  const updates = [];
  for (const [tid, value] of Object.entries(data.ticketUpdates)) {
    const res = axios.put(
      `${credData.url}/rest/api/latest/issue/${tid}`,
      { fields: { [credData.storyPointField]: value } },
      getHeaders(credData)
    );

    updates.push(res);
  }

  // NOTE: It would be nice to specify which ones succeeded
  await Promise.all(updates);
  return { message: 'success' };
};

export default pushPointsToJira;
