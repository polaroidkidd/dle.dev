<script lang="ts">
	import classNames from 'classnames';
	let clazz = '';
	export let ariaLabel = '';

	export { clazz as class };
</script>

<button on:click>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={classNames('feather feather-x', clazz)}
		aria-label={ariaLabel}
	>
		<line x1="18" y1="6" x2="6" y2="18" />
		<line x1="6" y1="6" x2="18" y2="18" />
	</svg>
</button>
