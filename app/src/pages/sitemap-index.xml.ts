import { SITE, absoluteUrl } from '~/lib/site';
import { textResponse } from '~/lib/response';

export function GET() {
  return textResponse(
    `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${absoluteUrl('/sitemap.xml')}</loc>
    <lastmod>${SITE.modifiedDate}</lastmod>
  </sitemap>
</sitemapindex>
`,
    'application/xml; charset=utf-8'
  );
}
