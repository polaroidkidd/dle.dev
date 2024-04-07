import { getBlogEntryContent } from '@lib/server/blog';
import { error } from '@sveltejs/kit';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { get, writable } from 'svelte/store';

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
				content: getBlogEntryContent(slug.toLowerCase())
			};
		});

		const resolvedPromises = await Promise.all(articlePromises.map((blog) => blog.content));
		const updatedContentMap = resolvedPromises.reduce((acc, curr, index) => {
			return {
				...acc,
				[slugs[index]]: curr
			};
		}, {});

		store.set(updatedContentMap);
		timeoutId = setTimeout(
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			refreshStore,
			dayjs.duration({ hours: 1 }).asMilliseconds()
		);
	};
	refreshStore().catch((error) => {
		console.error(error);
	});
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
				const response = await getBlogEntryContent(slug.toLowerCase());

				store.update((store) => {
					store[slug] = response;
					return store;
				});

				return response;
			} catch (e) {
				throw error(404, {
					message: `Blog with title "${slug
						.split('-')
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(' ')}" Not Found`
				});
			}
		}
	};
}

export const blogArticleStore = createBlogArticleStore();
