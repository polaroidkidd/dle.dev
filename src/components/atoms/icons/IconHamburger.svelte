<script lang="ts">
	import classNames from "classnames";
	let clazz = "";
	export { clazz as class };
</script>

<svg
	class={classNames("w-6 h-6", clazz)}
	fill="none"
	stroke="currentColor"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={2}
		d="M4 6h16M4 12h16m-7 6h7"
	/>
</svg>
