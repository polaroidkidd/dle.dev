<script lang="ts">
	import type { SuperValidated } from "sveltekit-superforms";
	import { superForm } from "sveltekit-superforms/client";
	import Form from "@components/atoms/forms/form.svelte";
	import Text from "@components/atoms/forms/text.svelte";
	import TextArea from "@components/atoms/forms/textArea.svelte";
	import SimpleButton from "@components/atoms/buttons/simpleButton.svelte";
	import { contactSchema, type IContactSchema } from "../../../schemas/contact";
	import { modalStore, type ModalSettings } from "@skeletonlabs/skeleton";

	import IconLoading from "@components/atoms/icons/IconLoading.svelte";
	import classNames from "classnames";

	export let formData: SuperValidated<IContactSchema>;
	let isSubmitting = false;
	const success: ModalSettings = {
		type: "alert",
		title: "Sucess",
		body: "We have received your message and will reach out shortly!",
		buttonTextCancel: "OK"
	};

	const error: ModalSettings = {
		type: "alert",
		title: "Error",
		body: "Something went wrong on our end. We apologize for the inconvenience. Please try again at a later point or reach out via info@dle.dev",
		buttonTextCancel: "OK"
	};

	const { form, errors, enhance } = superForm(formData, {
		validationMethod: "onblur",
		defaultValidator: "keep",
		validators: contactSchema,
		taintedMessage: null,
		multipleSubmits: "abort",
		onSubmit: () => {
			isSubmitting = true;
		},
		onResult: ({ result }) => {
			isSubmitting = false;
			modalStore.clear();
			if (result.status === 200) {
				modalStore.trigger(success);
			} else {
				modalStore.trigger(error);
			}
			document?.body.classList.remove("overflow-hidden");
		}
	});

	function closeModal() {
		modalStore.clear();
		document?.body.classList.remove("overflow-hidden");
	}
</script>

<Form
	action="/contact?/message"
	{enhance}
	method="POST"
	class={classNames(
		"relative scroll-p-8",
		"",
		"w-screen -m-4 rounded-none mt-16",
		"md:dark:bg-surface-800 md:rounded-lg  md:pt-10 md:m-0 md:w-modal md:h-min md:bg-surface-300 md:mt-0"
	)}
>
	<Text
		type="text"
		fieldName="firstName"
		labelText="First Name"
		bind:value={$form.firstName}
		invalidData={$errors.firstName}
	/>
	<Text
		type="text"
		fieldName="lastName"
		labelText="Last Name"
		bind:value={$form.lastName}
		invalidData={$errors.lastName}
	/>
	<Text
		type="email"
		fieldName="email"
		labelText="Email"
		bind:value={$form.email}
		invalidData={$errors.email}
	/>

	<TextArea
		fieldName="text"
		labelText="Message"
		bind:value={$form.text}
		invalidData={$errors.text}
	/>
	<div class="flex justify-around pt-5">
		<SimpleButton
			type="reset"
			ariaLabel="Close Contact Modal"
			disabled={isSubmitting}
			onClick={closeModal}
		>
			Cancel
		</SimpleButton>
		<SimpleButton
			type="submit"
			disabled={isSubmitting}
			ariaLabel="Submit Contact Form"
		>
			{#if isSubmitting}
				<IconLoading class="h-6 fill-red-950" />
			{:else}
				Submit
			{/if}
		</SimpleButton>
	</div>
</Form>
