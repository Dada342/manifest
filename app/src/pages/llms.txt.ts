import { MACHINE_ENDPOINTS, SITE, absoluteUrl } from '~/lib/site';
import { textResponse } from '~/lib/response';

export function GET() {
  const endpoints = MACHINE_ENDPOINTS.map((path) => `- ${absoluteUrl(path)}`).join('\n');

  return textResponse(`# ${SITE.name}

${SITE.description}

## Primary Content

- Canonical HTML: ${absoluteUrl('/')}
- Raw Markdown: ${absoluteUrl('/index.md')}
- Full LLM context: ${absoluteUrl('/llms-full.txt')}
- Structured JSON: ${absoluteUrl('/manifesto.json')}
- IndexNow key: ${absoluteUrl(`/${SITE.indexNowKey}.txt`)}

## Machine-Readable Endpoints

${endpoints}

## Repository

${SITE.repoUrl}
`);
}
