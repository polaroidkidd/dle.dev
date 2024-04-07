<script lang="ts">
	import IconChevron from '@components/atoms/icons/IconChevron.svelte';
	import classNames from 'classnames';
	export let isCollapsed: boolean;
</script>

<div
	class={classNames(
		'transition-all tracking-tighter absolute right-0 top-1/2 -translate-y-1/2  text-4xl',
		{
			'rotate-180': !isCollapsed
		}
	)}
>
	<IconChevron width={25} />
</div>
