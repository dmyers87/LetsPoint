import { useEffect, useState } from 'react';
import fservice from '../services/fservice';
import { TicketShape } from '../schema';

export default function useTickets(mid: string): [TicketShape[], boolean] {
  const [isFetching, setIsFetching] = useState(true);
  const [tickets, setTickets] = useState<TicketShape[]>([]);
  useEffect(
    () =>
      fservice.onTicketList(mid, tickets => {
        setIsFetching(false);
        setTickets(tickets);
      }),
    [mid]
  );

  return [tickets, isFetching];
}
