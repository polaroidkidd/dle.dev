<script lang="ts">
	import type { IBlogMetaData } from '@model/github';
	import ArticleCard from './articleCard.svelte';
	export let blogsMetaData: IBlogMetaData[];
</script>

{#each blogsMetaData as { publishedOn, title }, i}
	<ArticleCard date={publishedOn} {title} isLast={i === blogsMetaData.length - 1} />
{/each}
