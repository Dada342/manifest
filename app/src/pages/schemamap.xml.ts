import { absoluteUrl } from '~/lib/site';
import { textResponse } from '~/lib/response';

export function GET() {
  return textResponse(
    `<?xml version="1.0" encoding="UTF-8"?>
<schemamap xmlns="https://ai-driven-development.org/ns/schemamap">
  <schema>
    <loc>${absoluteUrl('/schema/home.jsonld')}</loc>
    <resource>${absoluteUrl('/')}</resource>
    <type>application/ld+json</type>
  </schema>
</schemamap>
`,
    'application/xml; charset=utf-8'
  );
}
