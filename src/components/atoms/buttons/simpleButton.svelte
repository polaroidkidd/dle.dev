<script lang="ts">
	import classNames from "classnames";
	export let tabIndex = -1;
	export let disabled = false;
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	export let onClick: () => void = function noop() {};
	export let formAction: string | null = null;
	export let ariaLabel: string | null = null;
	export let type: "reset" | "submit" | null | undefined = null;
	let clazz = "";

	export { clazz as class };
</script>

<button
	{type}
	aria-label={ariaLabel}
	formaction={formAction}
	on:click={onClick}
	class={classNames(
		"transition-colors",
		"bg-transparent border-white border",
		"hover:bg-white",
		"text-white hover:text-red-700",
		"font-bold",
		"py-2",
		"px-4",
		"rounded",
		clazz
	)}
	tabindex={tabIndex}
	{disabled}
>
	<slot />
</button>
