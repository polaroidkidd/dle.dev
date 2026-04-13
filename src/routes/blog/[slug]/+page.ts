import { error } from '@sveltejs/kit';

import { getBlogEntry, listBlogEntries } from '$lib/content/blog';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const [entry, entries] = await Promise.all([getBlogEntry(params.slug), listBlogEntries()]);

  if (!entry) {
    error(404, 'Blog post not found');
  }

  return {
    entry,
    entries
  };
};
