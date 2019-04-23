import * as s from './schema';

// Axios types
type httpGetter = <T>(
  url: string,
  options: { headers: { Authorization: string }; params: {} }
) => Promise<{ data: T }>;

type IssueResponse = {
  id: string;
  key: string; // This is the key we will typically use
  fields: {
    summary: string;
    description: string;
  };
};

/**
 * Fetch a ticket by key
 */
export function getTicket(
  get: httpGetter,
  credData: s.CredentialShape,
  tid: string
): Promise<s.TicketNew> {
  return get<IssueResponse>(`${credData.url}/rest/api/latest/issue/${tid}`, {
    ...getHeaders(credData),
    params: { fields: 'key,summary' },
  })
    .then(res => res.data)
    .then(t => {
      const newTicket: s.TicketNew = {
        id: t.key,
        title: t.fields.summary,
        link: `${credData.url}/browse/${t.key}`,
        description: '',
        source: 'jira',
      };
      return newTicket;
    });
}

/**
 * Get request headers for Basic Authorization
 */
export function getHeaders(credData: s.CredentialShape) {
  return {
    headers: {
      Authorization: `Basic ${credData.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
}
