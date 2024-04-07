<script lang="ts">
	import Favicon from './favicon.svelte';

	export let title = 'Daniel L. Einars | Web Dev';
	export let description = 'Bridging the gap between business and engineering.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<Favicon />
	<link rel="alternate" hreflang="en" href="https://svelte.dle.dev" />
	<link rel="canonical" href="https://svelte.dle.dev" />
</svelte:head>
