import { getBlogEntryContent } from "@lib/server/blog";
import { error } from "@sveltejs/kit";

import { get, writable } from "svelte/store";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);
let timeoutId: ReturnType<typeof setTimeout>;
function createBlogArticleStore() {
	const store = writable<Record<string, string>>({});
	const refreshStore = async () => {
		if (timeoutId) {
			console.info(
				`${dayjs().toISOString()} -- clearing timeoutId before fetching articles to refresh store`
			);
			clearTimeout(timeoutId);
		}

		const contentMap = get(store);
		const slugs = Object.keys(contentMap);
		const articlePromises = slugs.map((slug) => {
			console.info(`${dayjs().toISOString()} -- refreshing article "${slug}"`);

			return {
				title: slug,
				content: getBlogEntryContent(slug.toLowerCase() as string)
			};
		});

		const resolvedPromises = await Promise.all(
			articlePromises.map((blog) => blog.content)
		);
		const updatedContentMap = resolvedPromises.reduce((acc, curr, index) => {
			return {
				...acc,
				[slugs[index]]: curr
			};
		}, {});

		store.set(updatedContentMap);
		timeoutId = setTimeout(
			refreshStore,
			dayjs.duration({ hours: 1 }).asMilliseconds()
		);
	};
	refreshStore();

	return {
		subscribe: store.subscribe,
		set: store.set,
		reset: () => store.set({}),
		getArticle: (slug: string) => {
			return get(store)[slug];
		},
		updateStoreAndGetArticle: async (slug: string) => {
			try {
				console.info(`${dayjs().toISOString()} -- fetching article: "${slug}"`);
				const response = await getBlogEntryContent(
					slug.toLowerCase() as string
				);

				store.update((store) => {
					store[slug] = response;
					return store;
				});

				return response;
			} catch (e) {
				throw error(404, {
					message: `Blog with title "${slug
						.split("-")
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(" ")}" Not Found`
				});
			}
		}
	};
}

export const blogArticleStore = createBlogArticleStore();
