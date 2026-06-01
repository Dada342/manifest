import { jsonResponse } from '~/lib/response';

export function GET() {
  return jsonResponse(
    {
      applinks: { apps: [], details: [] },
      webcredentials: { apps: [] },
    },
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
  );
}
