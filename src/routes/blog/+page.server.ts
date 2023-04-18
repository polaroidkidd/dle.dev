import { fetchBlogTitlesAndLastEditDate } from "@lib/server/blog";
import type { PageServerLoad } from "./$types";

import { blogStore } from "@lib/server/store/blogMetaDataStore";
import type { IBlogMetaData } from "@model/github";

export const load = (async () => {
	let blogTitlesAnLastEditDates: IBlogMetaData[] | undefined;
	blogStore.subscribe((data) => {
		blogTitlesAnLastEditDates = data;
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
