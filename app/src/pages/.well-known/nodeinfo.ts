import { absoluteUrl } from '~/lib/site';
import { jsonResponse } from '~/lib/response';

export function GET() {
  return jsonResponse({
    links: [
      {
        rel: 'http://nodeinfo.diaspora.software/ns/schema/2.1',
        href: absoluteUrl('/nodeinfo/2.1'),
      },
    ],
  });
}
