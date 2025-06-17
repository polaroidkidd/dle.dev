<script lang="ts">
	import AboutSectionContainer from '@components/orgamisms/aboutSectionContainer.svelte';
	import Award from '@components/orgamisms/cv/award.svelte';
	import Basics from '@components/orgamisms/cv/basics.svelte';
	import Education from '@components/orgamisms/cv/education/education.svelte';
	import Certificate from '@components/orgamisms/cv/work/certificate.svelte';
	import Language from '@components/orgamisms/cv/work/language.svelte';
	import Skill from '@components/orgamisms/cv/work/skill.svelte';
	import WorkContainer from '@components/orgamisms/cv/work/workContainer.svelte';
	import type {
		IAward,
		IBasics,
		ICertificate,
		IEducation,
		ILanguage,
		ISkill,
		IWorkContainer
	} from '@model/cv';

	export let basics: IBasics;
	export let work: IWorkContainer[];
	export let education: IEducation[];
	export let awards: IAward[];
	export let certificates: ICertificate[];
	export let skills: ISkill[];
	export let languages: ILanguage[];
</script>

<AboutSectionContainer isInitiallyCollapsed={false} isCollapsable={true} sectionTitle="Skills">
	{#each skills as { name, keywords }}
		<Skill {name} {keywords} />
	{/each}
</AboutSectionContainer>
<AboutSectionContainer isCollapsable={false} class="pb-10">
	<Basics name={basics.name} label={basics.label} profiles={basics.profiles} />
</AboutSectionContainer>

<AboutSectionContainer isInitiallyCollapsed={false} sectionTitle="Certificates">
	{#each certificates.sort( (a, b) => (Date.parse(a.date) > Date.parse(b.date) ? -1 : 1) ) as { name, issuer, date }}
		<Certificate {name} {issuer} {date} />
	{/each}
</AboutSectionContainer>
<AboutSectionContainer isInitiallyCollapsed={false} sectionTitle="Projects">
	{#each work as { startDate, endDate, url, name, summary, highlights, position, technology }}
		<WorkContainer
			{endDate}
			{highlights}
			{name}
			{position}
			{startDate}
			{summary}
			{url}
			{technology}
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

<AboutSectionContainer isInitiallyCollapsed={true} isCollapsable={true} sectionTitle="Languages">
	{#each languages as { language, fluency }}
		<Language {language} {fluency} />
	{/each}
</AboutSectionContainer>
