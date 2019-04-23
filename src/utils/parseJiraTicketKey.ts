const ticketRegex = /((?<!([A-Z]{1,10})-?)[A-Z]+-\d+)/;

export default function parseTicketKey(some: string) {
  const result = ticketRegex.exec(some);
  if (result == null) return null;
  return result[0];
}
