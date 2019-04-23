import closestFib from './closestFib';

describe('@closestFib', () => {
  it('Can calculate the average vote closest to a fib. number', () => {
    // average: 1
    expect(closestFib([1, 1, 1, 1])).toBe(1);

    // average: 3
    expect(closestFib([3, 3, 3])).toBe(3);

    // average: 2.3333333333
    expect(closestFib([3, 3, 1])).toBe(2);

    // average: 4.2
    expect(closestFib([1, 5, 5, 5, 5])).toBe(5);

    // average: 7.2
    expect(closestFib([5, 8, 13, 5, 5])).toBe(8);
  });

  it('Errors out when things get out of control', () => {
    expect(() => {
      closestFib([100000000000000000000]);
    }).toThrowErrorMatchingSnapshot();
  });

  it('Does not count zeros when calculating things', () => {
    expect(closestFib([0, 0, 0, 0, 13])).toBe(13);
  });

  it("Doesn't blow up when the values are crazy", () => {
    // Ugly or unexpected
    expect(closestFib([])).toBe(0);
    expect(closestFib([0, 0, 0])).toBe(0);

    // Unlikely, but not caught by ts
    expect(closestFib([-1, -100])).toBe(0);
    expect(closestFib([Infinity])).toBe(0);
    expect(closestFib([Infinity])).toBe(0);
    expect(closestFib([-Infinity])).toBe(0);
    expect(closestFib([-Infinity, Infinity])).toBe(0);
  });
});
