<script lang="ts">
	import classNames from "classnames";

	export let action = "";

	export let enhance;
	let clazz = "";
	export { clazz as class };
	export let method: "GET" | "POST";
</script>

<form
	use:enhance
	{method}
	{action}
	class={classNames("px-8", "pt-6", "pb-8", "mb-4", clazz)}
>
	<slot />
</form>
