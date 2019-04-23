import parse from './parseJiraTicketKey';

describe('@parseTicketKey', () => {
  it('Will parse from a correct key', () => {
    expect(parse('AWK-1234')).toBe('AWK-1234');
    expect(parse('AWK-123')).toBe('AWK-123');
    expect(parse('AWK-12345678')).toBe('AWK-12345678');
  });

  it('Will return null when there is a miss', () => {
    expect(parse('nothing to see here')).toBe(null);
  });

  it('Will parse a key with spaces', () => {
    expect(parse('AWK-1234 ')).toBe('AWK-1234');
    expect(parse(' AWK-1234')).toBe('AWK-1234');
    expect(parse(' AWK-1234 ')).toBe('AWK-1234');
  });

  it('Will parse from a url', () => {
    expect(parse('https://jira.mysite.com/issues?key=AWK-1234')).toBe('AWK-1234');
  });
});
