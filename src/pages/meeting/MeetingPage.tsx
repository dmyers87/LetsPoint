import React, { useState, useContext, useEffect, useRef, useCallback } from 'react';
import update from 'immutability-helper'
import Link from 'next/link';

import fservice from 'services/fservice';
import AuthConsumer from 'containers/Auth';
import useMeeting from 'hooks/useMeeting';
import useTickets from 'hooks/useTickets';
import { getVotersFromMeeting } from 'services/utils';

import { ArrowLeft } from 'svgs';
import Layout from 'components/Layout';
import MeetingIntroAlert from './MeetingIntroAlert';
import EditMeetingForm from './EditMeetingForm';
import Ticket from './Ticket';
import TicketWrapper from './TicketWrapper';
import NewTicketSection from './NewTicketSection';

import MeetingHeader from './MeetingHeader';

type MyProps = {
  mid: string;
};
function MeetingPage({ mid }: MyProps) {
  // Data
  const userState = useContext(AuthConsumer);
  const uid = userState.user.uid;
  const { meeting } = useMeeting(mid);
  const [tickets, setTickets, isFetchingTickets] = useTickets(mid);

  // UI state
  const [isEditingMeeting, setEditingMeeting] = useState(false);
  const [isReordering, setIsReordering] = useState(false);

  // Update ticket order in DB when we're done re-ordering
  useEffect(() => {
    if (!isReordering) {
      fservice.updateTicketOrder(mid, tickets);
    }
  }, [isReordering])

  const percTicketsCompleted = tickets.length
    ? Math.round((tickets.filter(t => t.isRevealed).length / tickets.length) * 100)
    : 0;

  // Callback for DnD of tickets
  const moveTicket = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragTicket = tickets[dragIndex];
      let newTickets = update(tickets, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, dragTicket]],
      });
      newTickets = newTickets.map((item, index) => {
        item.order = index;
        return item;
      });
      setTickets(newTickets);
    },
    [tickets],
  );

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

      {!isEditingMeeting ? (
        <MeetingHeader
          title={meeting.title}
          percentComplete={percTicketsCompleted}
          onEditClick={setEditingMeeting}
          onReorderClick={setIsReordering}
        />
      ) : (
        <EditMeetingForm mid={mid} setEditStatus={setEditingMeeting} />
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
                  canDrag={isReordering}
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

          <NewTicketSection mid={mid} newTicketIndex={tickets.length} className="mb-6" />
        </>
      )}
    </Layout>
  );
}

export default MeetingPage;
