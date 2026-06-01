import { SITE, absoluteUrl } from '~/lib/site';
import { textResponse } from '~/lib/response';

export function GET() {
  return textResponse(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
  <channel>
    <title>${SITE.name}</title>
    <link>${absoluteUrl('/')}</link>
    <description>${SITE.description}</description>
    <language>en</language>
    <lastBuildDate>${new Date(`${SITE.modifiedDate}T00:00:00Z`).toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl('/feed.xml')}" rel="self" type="application/rss+xml" />
    <sy:updatePeriod>monthly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <item>
      <title>${SITE.name}</title>
      <link>${absoluteUrl('/')}</link>
      <guid isPermaLink="true">${absoluteUrl('/')}</guid>
      <pubDate>${new Date(`${SITE.publishedDate}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${SITE.description}</description>
    </item>
  </channel>
</rss>
`,
    'application/rss+xml; charset=utf-8'
  );
}
