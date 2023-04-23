import type { LayoutServerLoad } from "./$types";

export const load = (({ url }) => {
	const { pathname } = url;
	return {
		pathname
	};
}) satisfies LayoutServerLoad;
