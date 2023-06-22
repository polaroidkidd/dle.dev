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
	class="btn variant-filled"
	tabindex={tabIndex}
	{disabled}
>
	<slot />
</button>
