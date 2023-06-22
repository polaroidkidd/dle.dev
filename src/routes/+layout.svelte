<script lang="ts">
	import "@fontsource/lato";
	import "@fontsource/merriweather";
	import "../theme.scss";
	import "@skeletonlabs/skeleton/styles/skeleton.css";
	import "../app.scss";

	import classNames from "classnames";
	import Navbar from "@components/orgamisms/navigation/navbar.svelte";
	import Head from "@components/orgamisms/seo/head.svelte";
	import { fly } from "svelte/transition";
	import { cubicIn, cubicOut } from "svelte/easing";
	import { AppShell, Modal, type ModalComponent } from "@skeletonlabs/skeleton";
	import type { LayoutData } from "./$types";
	import Footer from "@components/orgamisms/footer.svelte";
	import ContactFormModal from "@components/orgamisms/modals/contactFormModal.svelte";

	export let data: LayoutData;

	const duration = 300;
	const delay = duration + 100;
	const y = 100;

	const transitionIn = { easing: cubicOut, x: -y, duration, delay };
	const transitionOut = { easing: cubicIn, x: y, duration };

	const modalComponentRegistry: Record<string, ModalComponent> = {
		contact: {
			ref: ContactFormModal,
			props: { formData: data.form }
		}
	};
</script>

<Head />
<AppShell
	class={classNames(
		"leading-normal",
		"container",
		"md:mx-auto",
		"px-4",
		"pt-16",
		"text-neutral-800",
		"dark:text-neutral-50",
		"overflow-hidden",
		"mx-auto"
	)}
>
	<Navbar slot="header" />
	<Modal
		components={modalComponentRegistry}
		regionBackdrop="backdrop-blur-lg"
	/>
	{#key data.pathname}
		<div in:fly={transitionIn} out:fly={transitionOut} class="content">
			<slot />
		</div>
	{/key}

	<Footer slot="footer" />
</AppShell>
