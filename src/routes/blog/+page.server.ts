import { listBlogEntries } from '$lib/content/blog';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    entries: listBlogEntries()
  };
};
