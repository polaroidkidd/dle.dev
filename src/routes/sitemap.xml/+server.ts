import type { RequestHandler } from './$types';

import { listBlogEntries } from '$lib/content/blog';

const XML_HEADERS = {
  'cache-control': 'public, max-age=0, s-maxage=3600',
  'content-type': 'application/xml; charset=utf-8'
};

type SitemapUrl = {
  path: string;
  changeFrequency?: 'daily' | 'weekly' | 'monthly';
  lastModified?: string;
  priority?: string;
};

export const GET: RequestHandler = ({ url }) => {
  const blogEntries = listBlogEntries();
  const mostRecentBlogUpdate = blogEntries.reduce<string | null>((latest, entry) => {
    const timestamp = entry.updatedAt ?? entry.publishedAt;

    if (!timestamp) {
      return latest;
    }

    if (!latest) {
      return timestamp;
    }

    return timestamp > latest ? timestamp : latest;
  }, null);

  const pages: SitemapUrl[] = [
    {
      path: '/',
      changeFrequency: 'weekly',
      priority: '1.0'
    },
    {
      path: '/blog',
      changeFrequency: 'weekly',
      lastModified: formatLastModified(mostRecentBlogUpdate),
      priority: '0.8'
    },
    ...blogEntries.map((entry) => ({
      path: `/blog/${entry.slug}`,
      changeFrequency: 'monthly' as const,
      lastModified: formatLastModified(entry.updatedAt ?? entry.publishedAt),
      priority: '0.6'
    }))
  ];

  const body = renderSitemap(
    pages.map((page) => ({
      ...page,
      location: new URL(page.path, url.origin).href
    }))
  );

  return new Response(body, {
    headers: XML_HEADERS
  });
};

function renderSitemap(
  pages: Array<
    SitemapUrl & {
      location: string;
    }
  >
) {
  const urls = pages
    .map((page) =>
      [
        '  <url>',
        renderTag('loc', page.location),
        renderTag('lastmod', page.lastModified),
        renderTag('changefreq', page.changeFrequency),
        renderTag('priority', page.priority),
        '  </url>'
      ]
        .filter(Boolean)
        .join('\n')
    )
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>'
  ].join('\n');
}

function renderTag(name: string, value?: string) {
  if (!value) {
    return '';
  }

  return `    <${name}>${escapeXml(value)}</${name}>`;
}

function formatLastModified(value: string | null | undefined) {
  if (!value) {
    return undefined;
  }

  return value.slice(0, 10);
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
