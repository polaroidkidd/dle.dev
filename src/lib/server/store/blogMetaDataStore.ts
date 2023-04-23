import { fetchBlogTitlesAndLastEditDate } from "@lib/server/blog";
import type { IBlogMetaData } from "@model/github";
import { get, readable } from "svelte/store";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

let timeoutId: ReturnType<typeof setTimeout>;
function createBlogStore() {
	const store = readable<IBlogMetaData[]>(undefined, (set) => {
		const refreshStore = async () => {
			if (timeoutId) {
				console.info(
					`${dayjs().toISOString()} -- clearing timeoutId before fetching blog entires`
				);
				clearTimeout(timeoutId);
			}
			console.info(`${dayjs().toISOString()} -- fetching blog entires`);
			const blogsMetaDataStore = await fetchBlogTitlesAndLastEditDate();
			set(blogsMetaDataStore);
			timeoutId = setTimeout(
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				refreshStore,
				dayjs.duration({ hours: 1 }).asMilliseconds()
			);
		};

		refreshStore().catch((error) => {
			console.error(error);
		});

		return () => clearTimeout(timeoutId);
	});

	return {
		subscribe: store.subscribe,
		getMeta: () => get(store)
	};
}

export const blogStore = createBlogStore();
