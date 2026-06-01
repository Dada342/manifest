import { SITE, absoluteUrl } from '~/lib/site';
import { jsonResponse } from '~/lib/response';

export function GET() {
  return jsonResponse({
    name: SITE.shortName,
    description: SITE.description,
    url: absoluteUrl('/'),
    version: '0.1.0',
    preferredTransport: 'json-rpc',
    endpoints: {
      mcp: absoluteUrl('/mcp'),
      nlweb: absoluteUrl('/ask'),
      skills: absoluteUrl('/.well-known/agent-skills.json'),
    },
    capabilities: ['read_manifesto', 'search_manifesto'],
  });
}
