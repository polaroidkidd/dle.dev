<script lang="ts">
	import StartEndDate from './work/startEndDate.svelte';
	export let title: string;
	export let date: string;
	export let issuer: string;
	export let summary: string;
</script>

<div class="flex relative mb-2">
	<div class="mt-3 w-full">
		<div class="mb-2 text-lg text-center w-full my-4">
			<div class="transition-all block">{title}</div>

			<div class="text-sm mb-4">&nbsp;awarded by &nbsp;{issuer}</div>

			<div class="text-sm">{summary}</div>
		</div>
	</div>

	<StartEndDate startDate={date} endDate={undefined} showEndDate={false} />
</div>
