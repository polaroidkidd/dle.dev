<script lang="ts" context="module">
	export type ITechnologies = {
		technologies?: string[];
		hideTitle?: boolean;
	};
</script>

<script lang="ts">
	import IconAndroid from '@components/atoms/icons/IconAndroid.svelte';
	import IconAngular from '@components/atoms/icons/IconAngular.svelte';
	import IconCloudflare from '@components/atoms/icons/IconCloudflare.svelte';
	import IconCss from '@components/atoms/icons/IconCss.svelte';
	import IconCypress from '@components/atoms/icons/IconCypress.svelte';
	import IconDocker from '@components/atoms/icons/IconDocker.svelte';
	import IconFail2Ban from '@components/atoms/icons/IconFail2Ban.svelte';
	import IconGithub from '@components/atoms/icons/IconGithub.svelte';
	import IconGithubActions from '@components/atoms/icons/IconGithubActions.svelte';
	import IconGitlab from '@components/atoms/icons/IconGitlab.svelte';
	import IconGoogleAnalytics from '@components/atoms/icons/IconGoogleAnalytics.svelte';
	import IconGradle from '@components/atoms/icons/IconGradle.svelte';
	import IconHootSuite from '@components/atoms/icons/IconHootSuite.svelte';
	import IconHtml from '@components/atoms/icons/IconHtml.svelte';
	import IconJava from '@components/atoms/icons/IconJava.svelte';
	import IconJavaScript from '@components/atoms/icons/IconJavaScript.svelte';
	import IconJenkins from '@components/atoms/icons/IconJenkins.svelte';
	import IconLinkedin from '@components/atoms/icons/IconLinkedin.svelte';
	import IconLoading from '@components/atoms/icons/IconLoading.svelte';
	import IconMaven from '@components/atoms/icons/IconMaven.svelte';
	import IconNextJS from '@components/atoms/icons/IconNextJS.svelte';
	import IconNginx from '@components/atoms/icons/IconNginx.svelte';
	import IconNode from '@components/atoms/icons/IconNode.svelte';
	import IconPrisma from '@components/atoms/icons/IconPrisma.svelte';
	import IconPupeteer from '@components/atoms/icons/IconPupeteer.svelte';
	import IconPython from '@components/atoms/icons/IconPython.svelte';
	import IconQuestionCircle from '@components/atoms/icons/IconQuestionCircle.svelte';
	import IconReact from '@components/atoms/icons/IconReact.svelte';
	import IconSearch from '@components/atoms/icons/IconSearch.svelte';
	import IconSqlite from '@components/atoms/icons/IconSqlite.svelte';
	import IconStorybook from '@components/atoms/icons/IconStorybook.svelte';
	import IconSvelte from '@components/atoms/icons/IconSvelte.svelte';
	import IconTailwind from '@components/atoms/icons/IconTailwind.svelte';
	import IconTensorflow from '@components/atoms/icons/IconTensorflow.svelte';
	import IconTypeScript from '@components/atoms/icons/IconTypeScript.svelte';
	import IconUbuntu from '@components/atoms/icons/IconUbuntu.svelte';
	import IconVite from '@components/atoms/icons/IconVite.svelte';
	import IconWebpack from '@components/atoms/icons/IconWebpack.svelte';
	import IconWebRtc from '@components/atoms/icons/IconWebRTC.svelte';
	import Typography from '@components/atoms/typography/typography.svelte';
	import type { SvelteComponent } from 'svelte';
	export let technologies: string[] = [];
	export let hideTitle = false;

	const parsedTechnologies = technologies.map((tech) =>
		tech.replaceAll(' ', '-').toLocaleLowerCase()
	);
	const TechLogos: Record<string, unknown> = {
		android: IconAndroid,
		docker: IconDocker,
		'docker-compose': IconDocker,
		github: IconGithub,
		gradle: IconGradle,
		java: IconJava,
		javascript: IconJavaScript,
		linkedin: IconLinkedin,
		webrtc: IconWebRtc,
		loading: IconLoading,
		maven: IconMaven,
		nextjs: IconNextJS,
		nginx: IconNginx,
		nodejs: IconNode,
		python: IconPython,
		'ubuntu-server': IconUbuntu,
		fail2ban: IconFail2Ban,
		react: IconReact,
		search: IconSearch,
		typescript: IconTypeScript,
		tensorflow: IconTensorflow,
		jenkins: IconJenkins,
		sqlite: IconSqlite,
		'github-actions': IconGithubActions,
		cloudflare: IconCloudflare,
		angular: IconAngular,
		hootsuite: IconHootSuite,
		'google-analytics': IconGoogleAnalytics,
		gitlab: IconGitlab,
		'gitlab-ci': IconGitlab,
		html: IconCss,
		css: IconHtml,
		webpack: IconWebpack,
		tailwind: IconTailwind,
		unknown: IconQuestionCircle,
		svelte: IconSvelte,
		sveltekit: IconSvelte,
		storybook: IconStorybook,
		vite: IconVite,
		prisma: IconPrisma,
		cypress: IconCypress,
		pupeteer: IconPupeteer
	};

	const usedLogos: Record<string, { name: string; component: typeof SvelteComponent }> =
		parsedTechnologies.reduce((acc, curr) => {
			console.info('curr: ', curr);
			return {
				...acc,
				[curr]: {
					name: curr,

					component: TechLogos[curr] ?? TechLogos['unknown']
				}
			};
		}, {});
</script>

{#if !hideTitle}
	<Typography variant="h3">Technologies:</Typography>
{/if}

<div class="flex flex-row py-2 w-1/2 flex-wrap mx-auto justify-center items-center">
	{#each Object.values(usedLogos) as { component, name }}
		<div class="flex flex-col p-6">
			<svelte:component this={component} class="fill-red-500 h-8 my-1" />
			<Typography align="center">{name}</Typography>
		</div>
	{/each}
</div>
