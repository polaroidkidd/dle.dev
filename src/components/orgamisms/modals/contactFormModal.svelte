<script lang="ts">
	import type { SuperValidated } from "sveltekit-superforms";
	import { superForm } from "sveltekit-superforms/client";
	import Form from "@components/atoms/forms/form.svelte";
	import Text from "@components/atoms/forms/text.svelte";
	import TextArea from "@components/atoms/forms/textArea.svelte";
	import SimpleButton from "@components/atoms/buttons/simpleButton.svelte";
	import { contactSchema, type IContactSchema } from "../../../schemas/contact";
	import { modalStore, type ModalSettings } from "@skeletonlabs/skeleton";
	import IconClose from "@components/atoms/icons/IconClose.svelte";
	import IconLoading from "@components/atoms/icons/IconLoading.svelte";

	export let formData: SuperValidated<IContactSchema>;
	export let showClose = true;

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
			modalStore.close();
			if (result.status === 200) {
				modalStore.trigger(success);
			} else {
				modalStore.trigger(error);
			}
		}
	});

	function closeModal() {
		modalStore.close();
	}
</script>

<Form
	action="/contact?/message"
	{enhance}
	method="POST"
	class="w-modal relative bg-surface-300 dark:bg-surface-800 rounded-lg  pt-10"
>
	{#if showClose}
		<button on:click={closeModal} class="absolute -top-10 -right-10">
			<IconClose
				class="w-8 border-2 rounded-full bg-surface-900 hover:bg-red-500 transition-colors"
			/>
		</button>
	{/if}
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
	<SimpleButton
		disabled={isSubmitting}
		class=" mt-4 w-full flex justify-center"
	>
		{#if isSubmitting}
			<IconLoading class="h-6 fill-red-950" />
		{:else}
			Submit
		{/if}
	</SimpleButton>
</Form>
