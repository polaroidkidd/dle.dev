<script lang="ts">
	import Typography from "@components/atoms/typography/typography.svelte";
	import classNames from "classnames";
	export let startDate: string;
	export let endDate: string | undefined;
	export let showEndDate = true;

	function getEndDate(endDate?: string, showEndDate = true) {
		return showEndDate
			? endDate
				? ` - ${new Date(endDate).toLocaleDateString(undefined, {
						weekday: undefined,
						year: "numeric",
						month: "short"
				  })}`
				: " - Today"
			: "";
	}
</script>

<div class={classNames("absolute top-3 right-3")}>
	<div class="flex flex-row justify-end">
		<div class="min-w-max">
			<Typography size="sm">
				{new Date(startDate).toLocaleDateString(undefined, {
					weekday: undefined,
					year: "numeric",
					month: "short"
				})}
				{getEndDate(endDate, showEndDate)}
			</Typography>
		</div>
	</div>
</div>
