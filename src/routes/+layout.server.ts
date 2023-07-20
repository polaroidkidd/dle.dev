import type { LayoutServerLoad } from "./$types";

import { superValidate } from "sveltekit-superforms/server";
import { contactSchema, type IContactSchema } from "../schemas/contact";
import type { SuperValidated } from "sveltekit-superforms";

let form: SuperValidated<IContactSchema> | null = null;

export const load = (async ({ url }) => {
	if (form === null) {
		form = await superValidate(contactSchema);
	}
	const { pathname } = url;
	return {
		form,
		pathname
	};
}) satisfies LayoutServerLoad;
