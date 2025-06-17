<script lang="ts">
	import classNames from 'classnames';
	import SectionTitle from '@components/molecules/sectionTitle.svelte';
	import ExpandCollapseButton from './expandCollapseButton.svelte';
	import { slide } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	export let sectionTitle = '';
	export let isCollapsable = true;
	export let isInitiallyCollapsed = false;
	let clazz = '';
	export { clazz as class };
	$: isCollapsed = isInitiallyCollapsed;

	function toggleVisibility() {
		isCollapsed = !isCollapsed;
	}
</script>

<section class={classNames('border-b border-red-300', clazz)}>
	{#if isCollapsable}
		<button
			class={classNames('cursor-pointer', 'flex', 'justify-center', 'relative', 'w-full', {
				'border-b border-red-300': isCollapsable
			})}
			on:click={toggleVisibility}
		>
			<SectionTitle title={sectionTitle} />
			<ExpandCollapseButton {isCollapsed} />
		</button>
	{/if}
	{#if !isCollapsed}
		<!-- content here -->
		<div transition:slide={{ duration: 300, easing: sineInOut }}>
			<slot />
		</div>
	{/if}
</section>
