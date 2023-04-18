import { get, readable } from "svelte/store";
import { fetchCv } from "../cv";
import type { IAbout } from "@model/cv";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

let timeoutId: ReturnType<typeof setTimeout>;

function createCvStore() {
	const cvStore = readable<IAbout | undefined>(undefined, (set) => {
		const refreshStore = async () => {
			if (timeoutId) {
				console.info(
					`${dayjs().toISOString()} -- clearing timeoutId before fetching public cv`
				);
				clearTimeout(timeoutId);
			}
			console.info(`${dayjs().toISOString()} -- fetching public cv`);
			const cv = await fetchCv();

			set(cv);
			timeoutId = setTimeout(
				refreshStore,
				dayjs.duration({ hours: 1 }).asMilliseconds()
			);
		};

		refreshStore();
		return () => clearTimeout(timeoutId);
	});
	return {
		subscribe: cvStore.subscribe,
		getCv: () => get(cvStore)
	};
}

export const cvStore = createCvStore();
