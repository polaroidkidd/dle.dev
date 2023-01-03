import type { NextApiRequest, NextApiResponse } from "next";
import { getBlogEntries, getBlogMetaData } from "@lib/blogEntries";

const sitemapURLTemplate = `<url>
    <loc>https://!!__URL__!!</loc>
  <lastmod>!!__LAST_MOD__!!</lastmod>
  </url>`;

const sitemapTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    !!__SITEMAP_URLS__!!
</urlset>
`;

const sitemaps: Record<string, string | undefined> = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");
  const host = req.headers.host ?? "dle.dev";
  if (sitemaps[host] === undefined) {
    sitemaps[host] = await fetchSitemap(req.headers.host);
  }
  res.end(sitemaps[host]);
}

export async function fetchSitemap(host = "dle.dev"): Promise<string> {
  const blogEntries = await getBlogEntries();
  const blogSitemapData: Array<{ url: string; lastUpdate: string }> = [];

  for (const blogEntry of blogEntries) {
    const meta = await getBlogMetaData(blogEntry.name);

    const date = new Date(meta[0].commit.author.date);

    blogSitemapData.push({
      lastUpdate: date.toISOString(),
      url: `blog/${blogEntry.name.replace(/\.md/g, "")}`,
    });
  }

  const today = new Date();

  const siteMapXMLUrls = [
    ...[
      sitemapURLTemplate
        .replaceAll("!!__URL__!!", host)
        .replace("!!__LAST_MOD__!!", `${today.toISOString()}`),
      sitemapURLTemplate
        .replaceAll("!!__URL__!!", `${host}/cv`)
        .replace("!!__LAST_MOD__!!", `${today.toISOString()}`),
    ],
    ...blogSitemapData.map((data) => {
      return sitemapURLTemplate
        .replaceAll("!!__URL__!!", `${host}/${data.url}`)
        .replace("!!__LAST_MOD__!!", data.lastUpdate);
    }),
  ].join("\n");

  return sitemapTemplate.replace("!!__SITEMAP_URLS__!!", siteMapXMLUrls);
}
