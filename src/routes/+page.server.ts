import { fetchBlogTitlesAndLastEditDate } from "@lib/server/blog";
import type { PageServerLoad } from "./$types";

import { blogStore } from "@lib/server/store/blogMetaDataStore";
import type { IBlogMetaData } from "@model/github";

export const load = (async ({ setHeaders }) => {
	const blogTitlesAnLastEditDates: IBlogMetaData[] | undefined =
		blogStore.getMeta();

	setHeaders({
		"cache-control": "max-age=31536000,immutable"
	});
	return blogTitlesAnLastEditDates === undefined
		? {
				streamed: {
					blogsMetaData: fetchBlogTitlesAndLastEditDate()
				}
		  }
		: {
				blogsMetaData: blogTitlesAnLastEditDates
		  };
}) satisfies PageServerLoad;
