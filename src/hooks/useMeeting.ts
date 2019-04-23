import { useEffect, useState, useContext } from 'react';
import Router from 'next/router';
import fservice from 'services/fservice';
import { MeetingShape, meetingFromSnap } from 'schema';
import AuthConsumer from 'containers/Auth';

export default function useMeeting(mid: string) {
  const userState = useContext(AuthConsumer);
  const uid = userState.user.uid;

  // Fetching the meeting
  const [isFetchingMeeting, updateIsFetching] = useState(true);
  const [meeting, updateMeeting] = useState<MeetingShape>(
    meetingFromSnap({ id: mid, data: () => ({}) })
  );

  useEffect(
    () =>
      fservice.onMeeting(mid, meetingData => {
        // No meeting, redirect
        if (meetingData === false) {
          console.warn(`Request for meetings?mid=${mid} dne in db`);
          Router.push('/dashboard');
          return;
        }

        // Have a meeting, update state
        updateIsFetching(false);
        updateMeeting(meetingData);

        // meeting.status is 'public' so add ourselves to the participant list
        if (meetingData.participantIDs[uid] === undefined) {
          fservice.addSelfToMeeting(mid);
        }
      }),
    [mid, uid]
  );

  return { meeting, isFetchingMeeting, updateMeeting };
}
