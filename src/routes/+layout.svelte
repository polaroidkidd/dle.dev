<script lang="ts">
	import "@fontsource/lato";
	import "@fontsource/merriweather";
	import "../app.scss";
	import classNames from "classnames";
	import Navbar from "@components/orgamisms/navigation/navbar.svelte";
	import Head from "@components/orgamisms/seo/head.svelte";
	import { fly } from "svelte/transition";
	import { cubicIn, cubicOut } from "svelte/easing";
	import type { LayoutData } from "./$types";
	export let data: LayoutData;

	const duration = 300;
	const delay = duration + 100;
	const y = 100;

	const transitionIn = { easing: cubicOut, y: -y, duration, delay };
	const transitionOut = { easing: cubicIn, y: y, duration };
</script>

<Head />
<div
	class={classNames(
		"leading-normal",
		"container",
		"md:mx-auto",
		"px-4",
		"pt-16",
		"text-neutral-800",
		"dark:text-neutral-50",
		"overflow-hidden"
	)}
>
	<Navbar />

	{#key data.pathname}
		<div in:fly={transitionIn} out:fly={transitionOut}>
			<slot />
		</div>
	{/key}
</div>
