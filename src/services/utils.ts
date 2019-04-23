import { MeetingShape } from 'schema';

export type UserShape = {
  id: string;
  displayName: string;
  photoURL: string;
};

export function getObserversFromMeeting(meeting: MeetingShape): UserShape[] {
  return Object.keys(meeting.observerIDs).map(id => ({ id, ...meeting.participantData[id] }));
}

export function getVotersFromMeeting(meeting: MeetingShape): UserShape[] {
  return Object.keys(meeting.participantIDs)
    .filter(pid => !meeting.observerIDs[pid])
    .map(id => ({ id, ...meeting.participantData[id] }));
}

export function getParticipantsFromMeeting(meeting: MeetingShape): UserShape[] {
  return Object.entries(meeting.participantData).map(([id, data]) => ({ id, ...data }));
}
