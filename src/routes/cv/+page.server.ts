import { fetchCv } from '@lib/server/cv';

import type { PageServerLoad } from './$types';

export const load = (({ setHeaders }) => {
	setHeaders({
		'cache-control': 'max-age=31536000,immutable'
	});
	return {
		streamed: {
			cv: fetchCv()
		}
	};
}) satisfies PageServerLoad;
