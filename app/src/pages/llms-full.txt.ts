import { getManifestoMarkdown } from '~/lib/manifesto';
import { textResponse } from '~/lib/response';

export function GET() {
  return textResponse(getManifestoMarkdown(), 'text/markdown; charset=utf-8');
}
