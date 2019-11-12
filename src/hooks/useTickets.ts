import { useEffect, useState } from 'react';
import fservice from 'services/fservice';
import { TicketShape } from 'schema';

export default function useTickets(mid: string): [TicketShape[], Function, boolean] {
  const [isFetching, setIsFetching] = useState(true);
  const [tickets, setTickets] = useState<TicketShape[]>([]);
  useEffect(
    () =>
      fservice.onTicketList(mid, tickets => {
        if (tickets.every((ticket) => ticket.order !== undefined)) {
          tickets.sort((a, b) => a.order - b.order);
        }

        setIsFetching(false);
        setTickets(tickets);
      }),
    [mid]
  );

  return [tickets, setTickets, isFetching];
}
