import { jsonResponse } from '~/lib/response';

export function GET() {
  return jsonResponse({ ok: true });
}
