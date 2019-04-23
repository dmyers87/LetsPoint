export function alpha(a: string, b: string): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

type sortableTimestamp = { seconds: number; nanoseconds: number };

export function byTimestamp(
  a: sortableTimestamp,
  b: sortableTimestamp,
  dir: 'DESC' | 'ASC' = 'DESC'
): number {
  const order = dir === 'DESC' ? 1 : -1;
  if (typeof a !== 'object' || typeof b !== 'object') return 0;

  if (a.seconds < b.seconds) return 1 * order;
  if (a.seconds > b.seconds) return -1 * order;
  if (a.nanoseconds < b.nanoseconds) return 1 * order;
  if (a.nanoseconds > b.nanoseconds) return -1 * order;

  return 0;
}
