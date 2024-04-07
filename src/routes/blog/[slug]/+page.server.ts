import { getBlogEntryContent } from '@lib/server/blog';

import type { PageServerLoad } from './$types';

export const load = (({ params }) => {
	const slug = params?.slug;

	return {
		streamed: {
			article: getBlogEntryContent(slug.toLowerCase())
		}
	};
}) satisfies PageServerLoad;
