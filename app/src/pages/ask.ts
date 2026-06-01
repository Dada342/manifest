import { getManifestoJson } from '~/lib/manifesto';
import { jsonResponse } from '~/lib/response';
import { SITE } from '~/lib/site';

export function GET() {
  return jsonResponse({
    name: SITE.shortName,
    protocol: 'nlweb-json-rpc',
    endpoint: '/ask',
    methods: ['ask'],
  });
}

export async function POST({ request }: { request: Request }) {
  const payload = await request.json().catch(() => null);
  const id = payload?.id ?? null;
  const question = String(payload?.params?.question ?? payload?.question ?? '').trim();
  const manifesto = getManifestoJson();
  const query = question.toLowerCase();
  const values = manifesto.values.filter((value) =>
    `${value.preferred} ${value.weighedAgainst} ${value.summary}`.toLowerCase().includes(query)
  );
  const principles = manifesto.principles.filter((principle) =>
    `${principle.statement} ${principle.summary}`.toLowerCase().includes(query)
  );

  return jsonResponse({
    jsonrpc: '2.0',
    id,
    result: {
      answer:
        values.length || principles.length
          ? 'Matches from the manifesto are returned as structured results.'
          : SITE.description,
      values,
      principles,
    },
  });
}
