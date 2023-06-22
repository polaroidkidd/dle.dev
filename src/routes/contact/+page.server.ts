import { superValidate } from "sveltekit-superforms/client";
import { contactSchema } from "../../schemas/contact";
import type { Actions } from "@sveltejs/kit";
import { error, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import {
	NEXTCLOUD_CONTACT_FORM_LOGIN,
	NEXTCLOUD_CONTACT_FORM_PSW
} from "$env/static/private";

interface INextcloudCSRFToken {
	token: string;
}

export const actions = {
	message: async ({ request }: { request: Request }) => {
		const csrfTokenResponse = await fetch("https://cloud.dle.dev/csrftoken");
		const csrfToken = (await csrfTokenResponse.json()) as INextcloudCSRFToken;
		try {
			const form = await superValidate(request, contactSchema);

			// Convenient validation check:
			// TODO for some reason the form is not being set to the request here
			if (!form.valid) {
				// Again, always return { form } and things will just work.
				return fail(400, { form });
			}

			const headers = new Headers();
			headers.set(
				"Authorization",
				"Basic " +
					Buffer.from(
						// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
						`${NEXTCLOUD_CONTACT_FORM_LOGIN}:${NEXTCLOUD_CONTACT_FORM_PSW}`
					).toString("base64")
			);
			headers.set("Content-Type", "application/json");
			headers.set("OCS-APIRequest", "true");

			const response = await fetch(
				"https://cloud.dle.dev/ocs/v2.php/apps/forms/api/v2.1/submission/insert",
				{
					headers: headers,
					method: "POST",
					body: JSON.stringify({
						formId: 1,
						userId: `anon-user-${csrfToken.token}`,
						answers: {
							"1": [form.data.firstName],
							"2": [form.data.lastName],
							"3": [form.data.email],
							"4": [form.data.text]
						},
						shareHash: "g2Tr7W5JC9iqx59TZYiY675n"
					})
				}
			);
			if (response.status !== 200) {
				throw error(response.status);
			}

			form.data = {
				email: "",
				firstName: "",
				lastName: "",
				text: ""
			};

			// Yep, return { form } here too
			return { form };
		} catch (e) {
			throw error(
				500,
				"oops, something went wrong on the server! I've been notified and will look into it. Please try again later or reach out via info@dle.dev"
			);
		}
	}
} satisfies Actions;

export const load = (() => {
	throw error(404, "Not Found");
}) satisfies PageServerLoad;
