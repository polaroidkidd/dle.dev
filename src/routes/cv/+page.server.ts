import type { PageServerLoad } from "./$types";

import type { IAbout } from "@model/cv";
import { cvStore } from "@lib/server/store/cvStore";
import { fetchCv } from "@lib/server/cv";

export const load = (({ setHeaders }) => {
	const fetchedCv: IAbout | undefined = cvStore.getCv();

	setHeaders({
		"cache-control": "max-age=31536000,immutable"
	});
	return fetchedCv === undefined
		? {
				streamed: {
					cv: fetchCv()
				}
		  }
		: {
				cv: fetchedCv
		  };
}) satisfies PageServerLoad;
1;
