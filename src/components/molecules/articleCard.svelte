<script lang="ts">
	import classNames from "classnames";
	export let title: string;
	export let date: string;
	export let isLast = false;
</script>

<a href={`blog/${title}`}>
	<div
		class={classNames(
			{ "mb-12": !isLast },
			"p-4",
			"mx-4",
			"transition-all cursor-pointer",
			"bg-white",
			"flex flex-col justify-center items-start",
			"relative",
			"border",
			"rounded",
			"border-red-300",
			"drop-shadow-md",
			"hover:drop-shadow-lg",
			"border-x",

			// dark
			"dark:hover:border-red-200 dark:bg-neutral-800",
			"dark:border-transparent",
			"dark:hover:border-red-300",
			"dark:bg-neutral-800"
		)}
	>
		<div class="text-lg">
			{title
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ")}
		</div>
		<div class={classNames("p-1", "text-xs", "absolute -top-7 -right-0.5")}>
			{new Date(date).toDateString()}
		</div>
	</div>
</a>
