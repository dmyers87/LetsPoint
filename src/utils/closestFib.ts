/**
 * Finds the closest average fibonacci number
 * 0 and under are removed
 */
export default function closestFib(votes: number[]): number {
  const validVotes = votes.filter(v => v > 0).filter(v => isFinite(v));
  const average = validVotes.reduce((prev, v) => prev + v, 0) / validVotes.length;
  if (isNaN(average) || average === 0) return 0;

  // Find two fib number that bound the value
  let fib0 = 0;
  let fib1 = 1;
  while (!isBound(fib0, average, fib1)) {
    const nextFib1 = fib1 + fib0;
    fib0 = fib1;
    fib1 = nextFib1;

    if (nextFib1 > 1000) {
      throw new Error(`You are spinning on calculating nextFib: votes: ${JSON.stringify(votes)}`);
    }
  }

  // Which Fib number are we closer to
  const isCloserToFib0 = average - fib0 < fib1 - average;
  return isCloserToFib0 ? fib0 : fib1;
}

function isBound(lower: number, val: number, upper: number): boolean {
  return lower <= val && val <= upper;
}
