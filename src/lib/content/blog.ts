import type { Component } from 'svelte';

const DEFAULT_AUTHOR = 'Daniel Einars';

type BlogContentModule = {
  default: Component<Record<string, never>>;
};

type BlogMetadata = {
  title?: string;
  description?: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
};

export type BlogEntrySummary = {
  slug: string;
  title: string;
  author: string;
  publishedAt: string | null;
  updatedAt: string | null;
  summary: string;
};

export type BlogEntry = BlogEntrySummary & {
  Content: Component<Record<string, never>>;
};

const metadataEntries = import.meta.glob('/src/content/blog/*.svx', {
  import: 'metadata',
  eager: true
}) as Record<string, BlogMetadata>;

const contentEntries = import.meta.glob<BlogContentModule>('/src/content/blog/*.svx');

const blogEntries = Object.entries(metadataEntries)
  .map(([path, metadata]) => createEntry(path, metadata))
  .sort((left, right) => compareDates(right.publishedAt, left.publishedAt));

const blogEntryPaths = new Map(blogEntries.map((entry) => [entry.slug, entry.path]));

export function listBlogEntries() {
  return blogEntries.map(stripInternalFields);
}

export async function getBlogEntry(slug: string): Promise<BlogEntry | null> {
  const entry = blogEntries.find((candidate) => candidate.slug === slug);
  const entryPath = blogEntryPaths.get(slug);
  const loadModule = entryPath ? contentEntries[entryPath] : undefined;

  if (!entry || !loadModule) {
    return null;
  }

  const module = await loadModule();

  return {
    ...stripInternalFields(entry),
    Content: module.default
  };
}

function createEntry(path: string, metadata: BlogMetadata) {
  const slug =
    path
      .split('/')
      .at(-1)
      ?.replace(/\.svx$/, '') ?? path;
  const title = metadata.title?.trim() || slug;
  const summary = metadata.description?.trim() || 'A short technical note from the archive.';

  return {
    path,
    slug,
    title,
    author: metadata.author?.trim() || DEFAULT_AUTHOR,
    publishedAt: parseDate(metadata.publishedAt ?? null),
    updatedAt: parseDate(metadata.updatedAt ?? null),
    summary
  };
}

function stripInternalFields(entry: (typeof blogEntries)[number]) {
  const { path, ...publicEntry } = entry;

  void path;

  return publicEntry;
}

function parseDate(value: string | null) {
  if (!value) {
    return null;
  }

  const parsed = Date.parse(value);

  if (Number.isNaN(parsed)) {
    return null;
  }

  return new Date(parsed).toISOString();
}

function compareDates(left: string | null, right: string | null) {
  if (left && right) {
    return left.localeCompare(right);
  }

  if (left) {
    return 1;
  }

  if (right) {
    return -1;
  }

  return 0;
}
