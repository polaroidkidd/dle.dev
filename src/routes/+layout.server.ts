import type { SuperValidated } from 'sveltekit-superforms';
import { superValidate } from 'sveltekit-superforms/server';

import { contactSchema, type IContactSchema } from '../schemas/contact';
import type { LayoutServerLoad } from './$types';

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
