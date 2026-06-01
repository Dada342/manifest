import { getCollection } from 'astro:content';
import { jsonResponse } from '~/lib/response';

export async function GET() {
  const signatories = await getCollection('signatories');

  return jsonResponse({
    version: '2.1',
    software: {
      name: 'static-astro-manifesto',
      version: '0.1.0',
      repository: 'https://github.com/ai-driven-dev/manifest',
    },
    protocols: ['web'],
    services: { inbound: [], outbound: ['rss2.0'] },
    openRegistrations: false,
    usage: { users: { total: signatories.length } },
    metadata: { nodeName: 'AI-Driven Development manifesto' },
  });
}
