<script lang="ts">
	import StartEndDate from "../work/startEndDate.svelte";
	import Thesis from "./thesis.svelte";
	export let institution: string;
	export let url: string;
	export let area: string;
	export let startDate: string;
	export let endDate: string;
	export let thesis: string | undefined;
</script>

<div class="flex relative mb-2">
	<div class="mt-3 w-full">
		<div class="mb-2 text-lg text-center w-full my-4">
			{#if url}
				<a
					href={url}
					target="_blank"
					class="transition-all block text-red-600 underline hover:text-red-400 visited:text-red-600 dark:hover:text-red-300 dark:text-red-400"
					rel="noreferrer"
				>
					{institution}
				</a>
			{:else}
				<!-- else content here -->
				<div class="transition-all block">{institution}</div>
			{/if}

			<span class="text-sm">{area}</span>
			<Thesis {thesis} />
		</div>
	</div>

	<StartEndDate {startDate} {endDate} />
</div>
