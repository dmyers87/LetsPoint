import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import archiveMeeting from './archiveMeeting';
import fetchTickets from './fetchTickets';
import logMeetingCreate from './logMeetingCreate';
import pushPointsToJira from './pushPointsToJira';

// Types
export type ContextShape = {
  firestore: () => FirebaseFirestore.Firestore;
  auth: () => admin.auth.Auth;
};
export type WithContext<T> = (context: ContextShape) => T;

export type Callable = (data: any, context: functions.https.CallableContext) => any;
export type onCreateHandler = (
  snapshot: FirebaseFirestore.DocumentSnapshot,
  context: functions.EventContext
) => any;

// We only want to initialize once
admin.initializeApp();
const globalContext: ContextShape = { firestore: admin.firestore, auth: admin.auth };

// Callable
exports.fetchTickets = functions.https.onCall(fetchTickets(globalContext));
exports.archiveMeeting = functions.https.onCall(archiveMeeting(globalContext));
exports.pushPointsToJira = functions.https.onCall(pushPointsToJira(globalContext));

// Hooks
exports.onMeetingCreate = functions.firestore
  .document('/meetings/{mid}')
  .onCreate(logMeetingCreate(globalContext));
