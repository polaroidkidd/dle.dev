import type { PageServerLoad } from "./$types";

import { blogArticleStore } from "@lib/server/store/blogArticleStore";

export const load = (({ params }) => {
	const slug = params?.slug;

	const article = blogArticleStore.getArticle(slug);

	return article === undefined
		? {
				streamed: {
					article: blogArticleStore.updateStoreAndGetArticle(slug)
				}
		  }
		: {
				article: article
		  };
}) satisfies PageServerLoad;
