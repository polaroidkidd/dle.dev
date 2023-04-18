<script lang="ts">
	import IconLoading from "@components/atoms/icons/IconLoading.svelte";
	import type { PageData } from "./$types";
	import github from "svelte-highlight/styles/github";

	export let data: PageData;
</script>

<svelte:head>
	{@html github}
</svelte:head>
{#if data.article !== undefined}
	{@html data.article}
{:else}
	{#await data.streamed.article}
		<IconLoading class="h-12 fill-red-600" />
	{:then article}
		{@html article}
	{:catch error}
		<h2>{error.message}</h2>
	{/await}
{/if}
