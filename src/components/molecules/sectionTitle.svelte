<script lang="ts">
	import Typography from "@components/atoms/typography/typography.svelte";

	export let title: string;
</script>

<Typography align="center" size="2xl" customClasses="py-3">
	{title}
</Typography>
