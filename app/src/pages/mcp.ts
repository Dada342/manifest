import { getManifestoJson } from '~/lib/manifesto';
import { jsonResponse } from '~/lib/response';
import { SITE } from '~/lib/site';

const tools = [
  {
    name: 'get_manifesto',
    description: 'Return the AI-Driven Development manifesto as structured JSON.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'search_manifesto',
    description: 'Search values and principles for a case-insensitive text query.',
    inputSchema: {
      type: 'object',
      properties: { query: { type: 'string' } },
      required: ['query'],
      additionalProperties: false,
    },
  },
];

export function GET() {
  return jsonResponse({
    name: SITE.shortName,
    protocol: 'mcp-json-rpc',
    endpoint: '/mcp',
    tools,
  });
}

export async function POST({ request }: { request: Request }) {
  const payload = await request.json().catch(() => null);
  const id = payload?.id ?? null;
  const method = payload?.method;

  if (method === 'tools/list') {
    return jsonResponse({ jsonrpc: '2.0', id, result: { tools } });
  }

  if (method === 'tools/call') {
    const name = payload?.params?.name;
    const args = payload?.params?.arguments ?? {};
    const manifesto = getManifestoJson();

    if (name === 'get_manifesto') {
      return jsonResponse({ jsonrpc: '2.0', id, result: { content: manifesto } });
    }

    if (name === 'search_manifesto') {
      const query = String(args.query ?? '').trim().toLowerCase();
      const values = manifesto.values.filter((value) =>
        `${value.preferred} ${value.weighedAgainst} ${value.summary}`.toLowerCase().includes(query)
      );
      const principles = manifesto.principles.filter((principle) =>
        `${principle.statement} ${principle.summary}`.toLowerCase().includes(query)
      );

      return jsonResponse({
        jsonrpc: '2.0',
        id,
        result: { content: { query, values, principles } },
      });
    }
  }

  return jsonResponse(
    {
      jsonrpc: '2.0',
      id,
      error: { code: -32601, message: 'Method not found' },
    },
    { status: 404 }
  );
}
