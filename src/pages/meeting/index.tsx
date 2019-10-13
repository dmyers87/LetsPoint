import React from 'react';
import Router from 'next/router';
import { DndProvider } from 'react-dnd-cjs'
import HTML5Backend from 'react-dnd-html5-backend-cjs'
import Gatekeeper from 'containers/Gatekeeper';
import useQuerystring from 'hooks/useQuerystring';
import MeetingPage from './MeetingPage';

import { ProfileProvider } from 'containers/Profile';

export default function MeetingScreen() {
  const query = useQuerystring();

  // Waiting to read from url
  if (query === null) return null;

  // Not valid
  if (query.mid === undefined || Array.isArray(query.mid) || query.mid === '') {
    console.warn('Landed on meeting page with invalid mid in querystring', query);
    Router.push('/');
    return null;
  }

  return (
    <Gatekeeper>
      <DndProvider backend={HTML5Backend}>
        <ProfileProvider>
          <MeetingPage mid={query.mid} />
        </ProfileProvider>
      </DndProvider>
    </Gatekeeper>
  );
}
