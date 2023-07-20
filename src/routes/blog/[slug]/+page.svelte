<script lang="ts">
	import IconLoading from "@components/atoms/icons/IconLoading.svelte";
	import type { PageData } from "./$types";
	import IconArrowUp from "@components/atoms/icons/IconArrowUp.svelte";
	import github from "svelte-highlight/styles/github";
	import classNames from "classnames";
	import { onDestroy, onMount } from "svelte";

	export let data: PageData;

	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}
	let observer: MutationObserver;

	onMount(() => {
		observer = new MutationObserver(() => {
			const hashUrl = document.URL.split("#")[1];
			if (hashUrl) {
				document.getElementById(hashUrl)?.scrollIntoView();
			}
		});
		observer.observe(document.body, {
			attributes: false,
			childList: true,
			subtree: true
		});
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html github}
</svelte:head>
<button class:hidden on:click={goTop}>
	<IconArrowUp
		class={classNames(
			"transition-colors",
			"fixed",
			"cursor-pointer",
			"sm:bottom-1",
			"sm:right-1",
			"bottom-1",
			"right-1",
			"stroke-red-300",
			"hover:stroke-red-600"
		)}
	/>
</button>

{#await data.streamed.article}
	<IconLoading
		class="h-12 fill-red-600 absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-3/4"
	/>
{:then article}
<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html article}
{:catch error}
	<h2>{error.message}</h2>
{/await}
