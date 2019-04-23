import { byTimestamp } from './sorting';

describe('@byTimestamp', () => {
  it('sorts descending by default', () => {
    const a = { seconds: 0, nanoseconds: 0 };
    const b = { seconds: 10, nanoseconds: 0 };
    expect([a, b].sort(byTimestamp)).toEqual([b, a]);
    expect([b, a].sort(byTimestamp)).toEqual([b, a]);
  });

  it('can sort ascending', () => {
    const a = { seconds: 0, nanoseconds: 0 };
    const b = { seconds: 10, nanoseconds: 0 };
    const asc = (a1: any, b2: any) => byTimestamp(a1, b2, 'ASC');
    expect([a, b].sort(asc)).toEqual([a, b]);
    expect([b, a].sort(asc)).toEqual([a, b]);
  });
});
