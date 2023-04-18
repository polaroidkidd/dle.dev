<script lang="ts">
	import classNames from "classnames";
	import type { PageData } from "./$types";
	import Typography from "@components/atoms/typography/typography.svelte";
	import ArticleCards from "@components/molecules/articleCards.svelte";
	import IconLoading from "@components/atoms/icons/IconLoading.svelte";

	export let data: PageData;
</script>

<div class={classNames("flex", "flex-col", "items-center")}>
	<div class="mt-32 w-full flex flex-col items-center">
		<Typography variant="h2" size="2xl" align="center">
			Latest articles
		</Typography>
		<div
			class="container max-w-screen-sm pb-10 flex flex-col justify-center items-stretch pt-10"
		>
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
</div>
