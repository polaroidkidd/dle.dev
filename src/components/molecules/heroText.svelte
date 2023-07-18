<script lang="ts">
	import Typography from "@components/atoms/typography/typography.svelte";
	import classNames from "classnames";
	export let text = "";
</script>

<Typography
	family="serif"
	align="center"
	padding={3}
	size="4xl"
	weight="bold"
	variant="h2"
	class={classNames(
		"bg-clip-text",
		"text-transparent",
		"bg-gradient-to-b",
		"from-yellow-300",
		"to-purple-700",
		"bg-gradient-to-r",
		"from-pink-500",
		"via-red-500",
		"to-yellow-500",
		"background-animate",
		"backgroundAnimate"
	)}
>
	{text}
</Typography>
