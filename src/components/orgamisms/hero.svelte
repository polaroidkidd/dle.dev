<script lang="ts">
	import classNames from "classnames";
	import avatar from "@assets/images/daniel_einars-400x500.3aa2364c.jpg";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import Typography from "@components/atoms/typography/typography.svelte";
	import Avatar from "@components/molecules/avatar.svelte";

	let ready = false;
	onMount(() => (ready = true));

	const tags = [
		"increase conversions.",
		"generate leads.",
		"tackle technical debt.",
		"design customer journeys.",
		"optimize landingpages.",
		"improve customer retention.",
		"build web applications.",
		"boost developer productivity.",
		"grow."
	];
	$: current = 0;
</script>

<div class={classNames("flex", "flex-col", "items-center  min-h-[600px]")}>
	<Avatar alt="" imageSrc={avatar} />
	{#if ready}
		<div in:fly={{ x: 200, duration: 500 }}>
			<Typography
				family="serif"
				margin={5}
				size="4xl"
				weight="bold"
				align="center"
				variant="h2"
				customClasses={classNames(
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
				I help companies
			</Typography>
		</div>

		<div class="relative w-screen">
			{#each tags as tag, i}
				{#if i === current}
					<div
						in:fly={{
							delay: current != 0 ? 500 : 0,
							x: 200,
							duration: 500
						}}
						out:fly|local={{
							x: -500,
							duration: 500
						}}
						on:introend={() => {
							new Promise(() => {
								setTimeout(() => {
									if (current < tags.length - 1) {
										current++;
									}
								}, 2000);
							});
						}}
						class="absolute left-1/2 -translate-x-1/2 w-screen"
					>
						<Typography
							family="serif"
							align="center"
							padding={3}
							size="4xl"
							weight="bold"
							variant="h2"
							customClasses={classNames(
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
							{tag}
						</Typography>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>
