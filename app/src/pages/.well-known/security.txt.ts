import { SITE, absoluteUrl } from '~/lib/site';
import { textResponse } from '~/lib/response';

export function GET() {
  const expires = new Date();
  expires.setUTCFullYear(expires.getUTCFullYear() + 1);

  return textResponse(`Contact: ${SITE.repoUrl}/security/advisories/new
Expires: ${expires.toISOString()}
Preferred-Languages: en
Canonical: ${absoluteUrl('/.well-known/security.txt')}
Policy: ${SITE.repoUrl}/security/policy
`);
}
