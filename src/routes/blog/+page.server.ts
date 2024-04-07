import { fetchBlogTitlesAndLastEditDate } from '@lib/server/blog';

import type { PageServerLoad } from './$types';

export const load = (({ setHeaders }) => {
	setHeaders({
		'cache-control': 'max-age=31536000,immutable'
	});
	return {
		streamed: {
			blogsMetaData: fetchBlogTitlesAndLastEditDate()
		}
	};
}) satisfies PageServerLoad;
