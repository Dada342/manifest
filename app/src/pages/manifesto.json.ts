import { getCollection } from 'astro:content';
import { getManifestoJson } from '~/lib/manifesto';
import { jsonResponse } from '~/lib/response';

export async function GET() {
  const signatories = await getCollection('signatories');

  return jsonResponse({
    ...getManifestoJson(),
    signatories: {
      count: signatories.length,
      names: signatories.map((entry) => entry.data.name).sort(),
    },
  });
}
