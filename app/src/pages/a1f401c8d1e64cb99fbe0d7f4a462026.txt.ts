import { textResponse } from '~/lib/response';
import { SITE } from '~/lib/site';

export function GET() {
  return textResponse(`${SITE.indexNowKey}\n`);
}
