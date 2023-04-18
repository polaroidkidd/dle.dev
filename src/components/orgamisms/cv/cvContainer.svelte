<script lang="ts">
	import type {
		IAward,
		IBasics,
		ICertificate,
		IEducation,
		ILanguage,
		ISkill,
		IWorkContainer
	} from "@model/cv";
	import AboutSectionContainer from "@components/orgamisms/aboutSectionContainer.svelte";
	import Basics from "@components/orgamisms/cv/basics.svelte";
	import WorkContainer from "@components/orgamisms/cv/work/workContainer.svelte";
	import Award from "@components/orgamisms/cv/award.svelte";
	import Education from "@components/orgamisms/cv/education/education.svelte";
	import Language from "@components/orgamisms/cv/work/language.svelte";
	import Certificate from "@components/orgamisms/cv/work/certificate.svelte";
	import Skill from "@components/orgamisms/cv/work/skill.svelte";

	export let basics: IBasics;
	export let work: IWorkContainer[];
	export let education: IEducation[];
	export let awards: IAward[];
	export let certificates: ICertificate[];
	export let skills: ISkill[];
	export let languages: ILanguage[];
</script>

<AboutSectionContainer isCollapsable={false}>
	<Basics
		name={basics.name}
		label={basics.label}
		image={basics.image}
		email={basics.email}
		phone={basics.phone}
		location={basics.location}
		profiles={basics.profiles}
	/>
</AboutSectionContainer>

<AboutSectionContainer
	isInitiallyCollapsed={true}
	sectionTitle="Employment History"
>
	{#each work as { startDate, endDate, url, name, summary, highlights, notableProjects, position, primaryTools, technology }}
		<WorkContainer
			{endDate}
			{highlights}
			{name}
			{position}
			{startDate}
			{summary}
			{url}
			{notableProjects}
			{technology}
			{primaryTools}
		/>
	{/each}
</AboutSectionContainer>
<AboutSectionContainer isInitiallyCollapsed={true} sectionTitle="Education">
	{#each education as { institution, url, area, startDate, endDate, thesis }}
		<Education {institution} {url} {area} {startDate} {endDate} {thesis} />
	{/each}
</AboutSectionContainer>

<AboutSectionContainer isInitiallyCollapsed={true} sectionTitle="Awards">
	{#each awards as { title, issuer, date, summary }}
		<Award {title} {issuer} {date} {summary} />
	{/each}
</AboutSectionContainer>

<AboutSectionContainer isInitiallyCollapsed={true} sectionTitle="Certificates">
	{#each certificates as { name, issuer, date }}
		<Certificate {name} {issuer} {date} />
	{/each}
</AboutSectionContainer>

<AboutSectionContainer
	isInitiallyCollapsed={true}
	isCollapsable={true}
	sectionTitle="Skills"
>
	{#each skills as { name, keywords }}
		<Skill {name} {keywords} />
	{/each}
</AboutSectionContainer>

<AboutSectionContainer
	isInitiallyCollapsed={true}
	isCollapsable={true}
	sectionTitle="Languages"
>
	{#each languages as { language, fluency }}
		<Language {language} {fluency} />
	{/each}
</AboutSectionContainer>
