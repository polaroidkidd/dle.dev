<script lang="ts">
	import Typography from "@components/atoms/typography/typography.svelte";
	import NotableProject from "./notableProject.svelte";
	import type { INotableProject } from "@model/cv";
	export let notableProjects: INotableProject[] = [];
</script>

<Typography variant="h2" class="block border-b border-b-red-100 mb-2 pb-0">Notable Projects</Typography>

{#each notableProjects as { project, summary, highlights, technology }, i}
	<NotableProject {project} {summary} {highlights} {technology} isLast={i < notableProjects.length - 1} />
{/each}
