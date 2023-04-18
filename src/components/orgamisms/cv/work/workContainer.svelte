<script lang="ts">
	import NotableProjectsContainer from "./notableProjectsContainer.svelte";
	import Technologies from "@components/orgamisms/cv/work/technologies.svelte";
	import Position from "./position.svelte";
	import PositionSummary from "./positionSummary.svelte";
	import type { INotableProject } from "@model/cv";
	export let notableProjects: INotableProject[];
	export let primaryTools: string[];
	export let technology: string[];
	export let name: string;
	export let position: string;
	export let url: string | undefined;
	export let startDate: string;
	export let summary: string | undefined;
	export let highlights: string[] | undefined;
	export let endDate: string | undefined;

	const location = name.slice(name.indexOf(",") + 1, name.length);
	const company = name.slice(0, name.indexOf(","));
</script>

<Position {company} {location} {position} {startDate} {endDate} {url} />
<PositionSummary {summary} {highlights} />
<NotableProjectsContainer {notableProjects} />
<Technologies technologies={technology} />
