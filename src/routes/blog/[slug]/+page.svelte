<script lang="ts">
	import IconLoading from "@components/atoms/icons/IconLoading.svelte";
	import type { PageData } from "./$types";
	import IconArrowUp from "@components/atoms/icons/IconArrowUp.svelte";
	import github from "svelte-highlight/styles/github";
	import classNames from "classnames";

	export let data: PageData;

	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:head>
	{@html github}
</svelte:head>
<svelte:window on:scroll={handleOnScroll} />
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
	{@html article}
{:catch error}
	<h2>{error.message}</h2>
{/await}
