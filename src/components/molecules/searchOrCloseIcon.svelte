<script lang="ts">
	import IconSearch from '@components/atoms/icons/IconSearch.svelte';
	import IconClose from '@components/atoms/icons/IconClose.svelte';
	import classNames from 'classnames';
	export let showMobileSearch: boolean;
	export let showClose: boolean;
	export let onClickSearch: () => void;
</script>

{#if !showMobileSearch && !showClose}
	<IconSearch
		ariaLabel="search"
		class={classNames('ml-2 h-6 cursor-pointer', {
			'absolute top-2 right-2 z-20': showMobileSearch
		})}
		on:click={onClickSearch}
	/>
{:else}
	<IconClose
		ariaLabel="close"
		class={classNames('ml-2 h-6 cursor-pointer', {
			'absolute top-2 right-2 z-20': showMobileSearch
		})}
		on:click={onClickSearch}
	/>
{/if}
