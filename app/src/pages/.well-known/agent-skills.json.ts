import { absoluteUrl } from '~/lib/site';
import { jsonResponse } from '~/lib/response';

export function GET() {
  return jsonResponse({
    skills: [
      {
        id: 'read-aidd-manifesto',
        name: 'Read the AI-Driven Development manifesto',
        description:
          'Load the canonical manifesto, values, principles, signatory count, and structured-data endpoints.',
        resources: [absoluteUrl('/index.md'), absoluteUrl('/manifesto.json'), absoluteUrl('/schema/home.jsonld')],
      },
      {
        id: 'search-aidd-manifesto',
        name: 'Search the manifesto',
        description: 'Call the MCP-compatible JSON-RPC endpoint to search values and principles.',
        endpoint: absoluteUrl('/mcp'),
        method: 'tools/call',
        tool: 'search_manifesto',
      },
    ],
  });
}
