<script lang="ts">
	export let width: number | undefined = undefined;
	let clazz = "";
	export { clazz as class };
</script>

<svg
	fill="none"
	stroke="currentColor"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
	{width}
	class={clazz}
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={2}
		d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
	/>
</svg>
