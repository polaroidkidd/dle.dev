<script lang="ts">
	import { onMount } from 'svelte';

	let query: MediaQueryList;
	let faviconEl: HTMLElement | null = null;

	function toggleFavicon() {
		if (query.matches) {
			faviconEl?.setAttribute('href', 'favicon-dark.svg');
		} else {
			faviconEl?.setAttribute('href', 'favicon-light.svg');
		}
	}

	onMount(() => {
		query = window.matchMedia('(prefers-color-scheme: dark)');
		faviconEl = document.getElementById('favicon-icon');
		query.addEventListener('change', toggleFavicon);
		() => {
			query.removeEventListener('change', toggleFavicon);
		};
	});
</script>

<link rel="icon" id="favicon-icon" href="/favicon-light.svg" type="image/svg+xml" />
