import type { IAbout } from '@model/cv';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { get, readable } from 'svelte/store';

import { fetchCv } from '../cv';
dayjs.extend(duration);

let timeoutId: ReturnType<typeof setTimeout>;

function createCvStore() {
	const cvStore = readable<IAbout | undefined>(undefined, (set) => {
		const refreshStore = async () => {
			if (timeoutId) {
				console.info(`${dayjs().toISOString()} -- clearing timeoutId before fetching public cv`);
				clearTimeout(timeoutId);
			}
			console.info(`${dayjs().toISOString()} -- fetching public cv`);
			const cv = await fetchCv();

			set(cv);
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
		subscribe: cvStore.subscribe,
		getCv: () => get(cvStore)
	};
}

export const cvStore = createCvStore();
