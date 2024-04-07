<script lang="ts">
	import Hero from '@components/orgamisms/hero.svelte';
	import type { PageData } from './$types';
	import Typography from '@components/atoms/typography/typography.svelte';
	import IconLoading from '@components/atoms/icons/IconLoading.svelte';
	import ArticleCards from '@components/molecules/articleCards.svelte';
	import classNames from 'classnames';

	export let data: PageData;
</script>

<Hero />
<div class=" w-full flex flex-col items-center">
	<Typography variant="h2" size="2xl" align="center">Latest articles</Typography>
	<div class="container max-w-screen-sm pb-10 flex flex-col justify-center items-stretch pt-10">
		<a href={`iosCameraAttribute`}>
			<div
				class={classNames(
					'mb-12',
					'p-4',
					'mx-4',
					'transition-all cursor-pointer',
					'bg-white',
					'flex flex-col justify-center items-start',
					'relative',
					'border',
					'rounded',
					'border-red-300',
					'drop-shadow-md',
					'hover:drop-shadow-lg',
					'border-x',

					// dark
					'dark:hover:border-red-200 dark:bg-neutral-800',
					'dark:border-transparent',
					'dark:hover:border-red-300',
					'dark:bg-neutral-800'
				)}
			>
				<div class="text-lg">iOS Camera Attribute Showcase</div>
				<div class={classNames('p-1', 'text-xs', 'absolute -top-7 -right-0.5')}>
					{new Date().toDateString()}
				</div>
			</div>
		</a>

		{#if data.blogsMetaData !== undefined}
			<ArticleCards blogsMetaData={data.blogsMetaData} />
		{:else if data.streamed !== undefined}
			{#await data.streamed.blogsMetaData}
				<IconLoading class="h-12 fill-red-600" />
			{:then blogsMetaData}
				<ArticleCards {blogsMetaData} />
			{/await}
		{/if}
	</div>
</div>
