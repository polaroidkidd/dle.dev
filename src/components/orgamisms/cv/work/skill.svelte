<script lang="ts">
	import Technologies from './technologies.svelte';
	export let name: string;
	export let keywords: string[];
</script>

<div class="flex relative mb-2">
	<div class="mt-3 w-full">
		<div class="mb-2 text-lg text-center w-full my-4">
			<div class="transition-all block">{name}</div>

			<Technologies technologies={keywords} hideTitle={true} />
		</div>
	</div>
</div>
