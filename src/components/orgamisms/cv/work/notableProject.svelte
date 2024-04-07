<script lang="ts">
	import Typography from '@components/atoms/typography/typography.svelte';
	import classNames from 'classnames';
	import Technologies from './technologies.svelte';
	export let project: string;
	export let summary: string;
	export let highlights: string[] | undefined;
	export let technology: string[] | undefined;
	export let isLast: boolean;
</script>

<div
	class={classNames('pt-2 mb-4 pb-2', {
		'border-b border-b-red-100': !isLast
	})}
>
	<div class="mb-2">
		<span>Client:</span>
		<span>{project}</span>
	</div>

	<div class="pb-6">
		<p class="pb-6">{summary}</p>
		{#if highlights}
			<Typography variant="h3">Responsibilities</Typography>
			<ul>
				{#each highlights as highlight}
					<li>{highlight}</li>
				{/each}
			</ul>
		{/if}
	</div>
	<Technologies technologies={technology} />
</div>
