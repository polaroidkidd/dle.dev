<script lang="ts">
	export let summary: string | undefined;
	export let highlights: string[] | undefined;
</script>

<div class="mb-4">
	{#if summary}
		<div>
			<h2 class="block border-b border-b-red-100 mb-2 pb-0">Responsibilities</h2>
			<p>{summary}</p>
		</div>
	{/if}

	{#if highlights}
		<div class="py-6">
			<div>Highlights:</div>
			<ul>
				{#each highlights as highlight}
					<li>{highlight}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
