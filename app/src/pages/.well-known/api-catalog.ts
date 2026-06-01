import { MACHINE_ENDPOINTS, SITE, absoluteUrl } from '~/lib/site';
import { jsonResponse } from '~/lib/response';

export function GET() {
  return jsonResponse(
    {
      linkset: [
        {
          anchor: SITE.origin,
          item: MACHINE_ENDPOINTS.map((path) => ({
            href: absoluteUrl(path),
            type:
              path.endsWith('.xml') || path.endsWith('feed.xml')
                ? 'application/xml'
                : path.endsWith('.json') || path.endsWith('.jsonld')
                  ? 'application/json'
                  : 'text/plain',
          })),
        },
      ],
    },
    { headers: { 'Content-Type': 'application/linkset+json; charset=utf-8' } }
  );
}
