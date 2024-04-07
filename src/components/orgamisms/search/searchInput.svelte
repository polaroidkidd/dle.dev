<script lang="ts">
	import IconLoading from '@components/atoms/icons/IconLoading.svelte';
	import SearchOrCloseIcon from '@components/molecules/searchOrCloseIcon.svelte';
	import classNames from 'classnames';
	import SearchResults from './searchResults.svelte';
	import debounce from 'just-debounce-it';

	import { navigating } from '$app/stores';

	let showMobileSearch = false;
	let innerWidth = 0;
	let isLoading = false;
	let timer: ReturnType<typeof setTimeout>;
	let query = '';

	function mobileSearchVisibillity(width: number) {
		return width <= 640;
	}

	function onClickSearch() {
		if (results.length > 0) {
			results = [];
			query = '';
		}

		if (mobileSearchVisibillity(innerWidth)) {
			if (results.length === 0 && !showMobileSearch) {
				showMobileSearch = true;
			} else {
				showMobileSearch = false;
			}
		}
	}
	let results: Array<string> = [];

	$: mobileSearchVisibillity(innerWidth);
	$: if ($navigating?.to !== $navigating?.from) {
		showMobileSearch = false;
		results = [];
		query = '';
	}

	const search = debounce(async (searchQuery: string) => {
		clearTimeout(timer);
		if (query !== null) {
			isLoading = true;
			const response = await fetch(`/blog?q=${searchQuery}`);
			isLoading = false;
			results = (await response.json()) as [];
		}
	}, 150);

	$: if (query.length > 0) {
		search(query);
	}
</script>

<svelte:window bind:innerWidth />

<div
	class={classNames('flex items-center my-auto sm:w-full', {
		[`z-10 fixed top-0 left-0 right-0 bottom-0 mobileSearchContainer`]: showMobileSearch
	})}
	data-cy="searchOverlay"
>
	<div
		class={classNames(
			'flex items-center w-full',
			'sm:border rounded border-red-300 ',
			'bg-transparent',
			'ml-3',
			'h-9'
		)}
	>
		<SearchOrCloseIcon {showMobileSearch} showClose={results.length > 0} {onClickSearch} />
		<input
			class={classNames(
				'bg-transparent',
				'outline-none',
				'sm:h-full',
				'sm:w-full',
				'px-4',
				'sm:visible',
				'text-base',
				'rounded-none',
				{
					hidden: !showMobileSearch && mobileSearchVisibillity(innerWidth)
				},
				{
					'visible absolute top-0 left-0 right-0 w-full text-center h-10 bg-white': showMobileSearch
				}
			)}
			placeholder={'Quick Search'}
			name={'search'}
			bind:value={query}
			size={1}
		/>
		<IconLoading
			ariaLabel="loading"
			class={classNames('fill-red-600 p-2 absolute top-0 left-0 md:static  z-100 h-10 md:h-9 ', {
				hidden: !isLoading
			})}
		/>
	</div>

	<SearchResults
		{results}
		hasNoResults={query.length > 0 && results.length === 0}
		{isLoading}
		closeSearchResults={() => {
			results = [];
			query = '';
		}}
	/>
</div>

<style lang="scss">
	.searchContainer {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		z-index: 100;
		&::before {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			backdrop-filter: blur(8px);
		}
	}

	.mobileLoadingIconContainer {
		position: fixed;
		top: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.mobileLoadingIcon {
		fill: theme('colors.red.500');
		width: 5rem;
	}

	.mobileSearchContainer {
		&::before {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			backdrop-filter: blur(30px);
		}
	}

	.searchCloseIcon {
		@media (min-width: '640px') {
			cursor: theme('cursor.auto');
			top: unset;
			right: unset;
			display: block;
		}
	}

	.noScroll {
		overflow: hidden;
	}
</style>
