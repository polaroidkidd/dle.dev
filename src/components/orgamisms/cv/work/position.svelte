<script lang="ts">
	import Typography from '@components/atoms/typography/typography.svelte';
	import classNames from 'classnames';
	import StartEndDate from './startEndDate.svelte';
	export let company: string;
	export let location: string;
	export let position: string;
	export let url: string | undefined;
	export let startDate: string;
	export let endDate: string | undefined;
</script>

<div class="flex relative mb-2">
	<div class="mt-3 w-full">
		<div class="flex flex-col mb-2 w-full my-4">
			{#if url}
				<a href={url} target="_blank" rel="noreferrer">
					<Typography
						align="center"
						size="lg"
						variant="h2"
						class={classNames(
							'transition-all',
							'text-red-600',
							'underline',
							'hover:text-red-400',
							'visited:text-red-600',
							'dark:hover:text-red-300',
							'dark:text-red-400'
						)}
					>
						{company}
					</Typography>
				</a>
			{:else}
				<div class="transition-all block">
					<Typography align="center" size="lg" variant="h2">
						{company}
					</Typography>
				</div>
			{/if}

			<Typography variant="span" size="sm" align="center">
				&nbsp;in&nbsp;{location}
			</Typography>

			<Typography variant="span" size="sm" align="center">
				{position}
			</Typography>
		</div>
	</div>

	<StartEndDate {startDate} {endDate} />
</div>
