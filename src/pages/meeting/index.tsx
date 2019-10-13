import React, { useState, useContext, useEffect, useRef, useCallback } from 'react';
import Router from 'next/router';
import { DndProvider } from 'react-dnd-cjs'
import HTML5Backend from 'react-dnd-html5-backend-cjs'
import update from 'immutability-helper'
import Link from 'next/link';
import cx from 'classnames';

import fservice from 'services/fservice';
import AuthConsumer from 'containers/Auth';
import Gatekeeper from 'containers/Gatekeeper';
import useQuerystring from 'hooks/useQuerystring';
import useMeeting from 'hooks/useMeeting';
import useTickets from 'hooks/useTickets';
import { getVotersFromMeeting } from 'services/utils';
import { ArrowLeft, Edit, Save } from 'svgs';

import Layout from 'components/Layout';
import MeetingIntroAlert from './MeetingIntroAlert';
import Ticket from './Ticket';
import TicketWrapper from './TicketWrapper';
import EditObserverList from './EditObserverList';
import NewTicketSection from './NewTicketSection';
import ProgressBar from 'components/ProgressBar';
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

type MyProps = {
  mid: string;
};
function MeetingPage({ mid }: MyProps) {
  // Data
  const userState = useContext(AuthConsumer);
  const uid = userState.user.uid;
  const { meeting, updateMeeting } = useMeeting(mid);
  const [tickets, setTickets, isFetchingTickets] = useTickets(mid);

  // UI state
  const [isEditingMeeting, setEditingMeeting] = useState(false);

  // Edit Form
  const formTitleRef = useRef<HTMLInputElement | null>(null);
  const [formTitle, updateFormTitle] = useState(meeting.title);

  useEffect(() => updateFormTitle(meeting.title), [meeting]);

  // Focus on entering edit mode
  useEffect(() => {
    if (isEditingMeeting && formTitleRef.current) {
      formTitleRef.current.focus();
    }
  }, [isEditingMeeting]);

  // Validate, update meeting and exit edit mode
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formTitle.trim() === '') {
      // add error
      return;
    }

    if (formTitle.trim() !== meeting.title) {
      // Optimistically update our state to avoid a flash
      updateMeeting(s => ({ ...s, title: formTitle }));
      fservice.updateMeeting({ title: formTitle, id: meeting.id });
    }
    setEditingMeeting(false);
  };

  // Reset form fields, and exit edit mode
  const handleReset = () => {
    setEditingMeeting(false);
    updateFormTitle(meeting.title);
  };

  const percTicketsCompleted = tickets.length
    ? Math.round((tickets.filter(t => t.isRevealed).length / tickets.length) * 100)
    : 0;

  const moveTicket = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragTicket = tickets[dragIndex]
      setTickets(
        update(tickets, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragTicket]],
        }),
      )
    },
    [tickets],
  )

  return (
    <Layout>
      <nav className="mb-3">
        <Link href="/dashboard">
          <a className="inline-flex items-center py-2 text-teal-7 hover:text-teal-8 no-underline font-header text-base">
            <ArrowLeft className="w-6 h-6 mr-1" />
            <div>dashboard</div>
          </a>
        </Link>
      </nav>

      {!isEditingMeeting && (
        <div className="mb-6">
          <div className="flex items-start mb-6">
            <h1 className="flex-1 py-2 text-xl leading-tight border-b border-transparent">
              {meeting.title}
            </h1>
            <button
              title="Edit meeting details"
              type="button"
              className="ml-3 btn-fab btn--grey"
              onClick={() => setEditingMeeting(v => !v)}
            >
              <Edit className="w-4 h-4" />
            </button>
          </div>

          <ProgressBar percent={percTicketsCompleted}>
            Tickets Pointed {percTicketsCompleted}%
          </ProgressBar>
        </div>
      )}

      {isEditingMeeting && (
        <>
          <form className="flex items-start mb-6" onSubmit={handleSubmit} autoComplete="off">
            <input
              ref={formTitleRef}
              className={cx(
                'flex-1 font-header text-xl leading-tight',
                'py-2 block w-full placeholder:text-grey-8',
                'border-b border-gray-3',
                'outline-none focus:border-teal-7'
              )}
              placeholder="Meeting title"
              value={formTitle}
              onChange={e => updateFormTitle(e.target.value)}
              required
              onKeyDown={e => e.key === 'Escape' && handleReset()}
            />
            <button type="submit" className="ml-3 btn btn--violet">
              <Save className="w-4 h-4 mr-3" />
              Save
            </button>
          </form>
          <section className="mb-6">
            <h1 className="text-lg mb-2">Move users between roles</h1>
            <EditObserverList
              meeting={meeting}
              addUserToObserverList={anyUID => fservice.addUserToObserverList(mid, anyUID)}
              removeUserFromObserverList={anyUID =>
                fservice.removeUserFromObserverList(mid, anyUID)
              }
            />
          </section>
        </>
      )}

      {!isFetchingTickets && (
        <>
          {tickets.length === 0 && <MeetingIntroAlert />}
          {tickets.length > 0 && (
            <ol className="mb-6 list-reset -mx-3 md:-mx-6 lg:-mx-8">
              {tickets.map((t, i) => (
                <TicketWrapper
                  key={t.id}
                  index={i}
                  tid={t.id}
                  focus={meeting.focus}
                  moveTicket={moveTicket}
                >
                  <Ticket
                    mid={mid}
                    ticket={t}
                    onFocusClick={() =>
                      fservice.updateMeeting({
                        id: mid,
                        focus: t.id === meeting.focus ? null : t.id,
                      })
                    }
                    disableVoting={Boolean(meeting.observerIDs[uid])}
                    currentVote={t.votes[uid]}
                    voterList={getVotersFromMeeting(meeting)}
                  />
                </TicketWrapper>
              ))}
            </ol>
          )}

          <NewTicketSection mid={mid} className="mb-6" />
        </>
      )}
    </Layout>
  );
}
