import { getBlogEntries, getBlogMetaData } from "@lib/server/blog";
import type { RequestEvent, RequestHandler } from "./$types";

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

async function fetchSitemap(host = "dle.dev"): Promise<string> {
	const blogEntries = await getBlogEntries();
	const blogSitemapData: Array<{ url: string; lastUpdate: string }> = [];

	for (const blogEntry of blogEntries) {
		const meta = await getBlogMetaData(blogEntry.name);

		const date = new Date(meta[0].commit.author.date);

		blogSitemapData.push({
			lastUpdate: date.toISOString(),
			url: `blog/${blogEntry.name.replace(/\.md/g, "")}`
		});
	}

	const today = new Date();

	const siteMapXMLUrls = [
		...[
			sitemapURLTemplate.replaceAll("!!__URL__!!", host).replace("!!__LAST_MOD__!!", `${today.toISOString()}`),
			sitemapURLTemplate.replaceAll("!!__URL__!!", `${host}/cv`).replace("!!__LAST_MOD__!!", `${today.toISOString()}`)
		],
		...blogSitemapData.map((data) => {
			return sitemapURLTemplate
				.replaceAll("!!__URL__!!", `${host}/${data.url}`)
				.replace("!!__LAST_MOD__!!", data.lastUpdate);
		})
	].join("\n");

	return sitemapTemplate.replace("!!__SITEMAP_URLS__!!", siteMapXMLUrls);
}

export const GET = (async ({ url: { hostname } }: RequestEvent) => {
	if (sitemaps[hostname] === undefined) {
		sitemaps[hostname] = await fetchSitemap(hostname);
	}
	const res = new Response(sitemaps[hostname]);
	res.headers.set("Cache-Control", "max-age=0, s-maxage=3600");
	res.headers.set("Content-Type", "application/xml");

	return res;
}) satisfies RequestHandler;
