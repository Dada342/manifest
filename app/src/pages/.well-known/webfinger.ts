import { SITE, absoluteUrl } from '~/lib/site';
import { jsonResponse } from '~/lib/response';

export function GET({ url }: { url: URL }) {
  const resource = url.searchParams.get('resource');

  if (resource !== 'acct:manifest@ai-driven-development.org') {
    return jsonResponse({ error: 'resource not found' }, { status: 404 });
  }

  return jsonResponse({
    subject: resource,
    aliases: [absoluteUrl('/')],
    links: [
      { rel: 'self', type: 'text/html', href: absoluteUrl('/') },
      { rel: 'alternate', type: 'text/markdown', href: absoluteUrl('/index.md') },
      { rel: 'http://webfinger.net/rel/profile-page', type: 'text/html', href: SITE.repoUrl },
    ],
  });
}
