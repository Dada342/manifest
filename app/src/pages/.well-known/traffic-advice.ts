import { jsonResponse } from '~/lib/response';

export function GET() {
  return jsonResponse([
    {
      user_agent: 'prefetch-proxy',
      fraction: 1.0,
    },
  ]);
}
