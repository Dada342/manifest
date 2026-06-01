import { getHomeJsonLd } from '~/lib/manifesto';
import { jsonResponse } from '~/lib/response';

export function GET() {
  return jsonResponse(getHomeJsonLd(), {
    headers: { 'Content-Type': 'application/ld+json; charset=utf-8' },
  });
}
