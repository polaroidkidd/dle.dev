<script lang="ts">
	import CvContainer from "@components/orgamisms/cv/cvContainer.svelte";
	import type { PageData } from "./$types";
	import IconLoading from "@components/atoms/icons/IconLoading.svelte";

	export let data: PageData;
</script>

<article class="headings">
	{#if data.cv !== undefined}
		<CvContainer
			basics={data.cv.basics}
			work={data.cv.work}
			education={data.cv.education}
			awards={data.cv.awards}
			certificates={data.cv.certificates}
			skills={data.cv.skills}
			languages={data.cv.languages}
		/>
	{:else if data.streamed !== undefined}
		{#await data.streamed.cv}
			<div class="w-full flex justify-center">
				<IconLoading class="h-12 fill-red-600" />
			</div>
		{:then cv}
			<CvContainer
				basics={cv.basics}
				work={cv.work}
				education={cv.education}
				awards={cv.awards}
				certificates={cv.certificates}
				skills={cv.skills}
				languages={cv.languages}
			/>
		{/await}
	{/if}
</article>

<style lang="scss">
	.headings {
		@for $i from 1 through 6 {
			h#{$i} {
				@apply py-2;
			}
		}
	}
</style>
