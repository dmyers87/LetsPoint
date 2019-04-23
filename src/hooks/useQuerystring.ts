import querystring from 'querystring';
import { useEffect, useState } from 'react';

export default function(): null | querystring.ParsedUrlQuery {
  const [query, setQuery] = useState<null | querystring.ParsedUrlQuery>(null);
  useEffect(() => {
    const q = querystring.parse(window.location.search.replace(/^\?/, ''));
    setQuery(q);
  }, []);

  return query;
}
