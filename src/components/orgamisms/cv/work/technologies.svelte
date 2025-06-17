<script lang="ts" context="module">
	export type ITechnologies = {
		technologies?: string[];
		hideTitle?: boolean;
	};
</script>

<script lang="ts">
	import {
		IconAndroid,
		IconAngular,
		IconBootstrap,
		IconCloudflare,
		IconCss,
		IconCypress,
		IconDocker,
		IconFail2Ban,
		IconGithub,
		IconGithubActions,
		IconGitlab,
		IconGoogleAnalytics,
		IconGradle,
		IconHootSuite,
		IconHtml,
		IconI18n,
		IconJava,
		IconJavaScript,
		IconJenkins,
		IconLinkedin,
		IconLoading,
		IconMaven,
		IconNextJS,
		IconNginx,
		IconNode,
		IconOpenAPI,
		IconPlaywright,
		IconPrisma,
		IconPupeteer,
		IconPython,
		IconQuestionCircle,
		IconReact,
		IconReactRedux,
		IconReactSaga,
		IconSearch,
		IconSqlite,
		IconStorybook,
		IconSvelte,
		IconTailwind,
		IconTanstackQuery,
		IconTensorflow,
		IconTypeScript,
		IconUbuntu,
		IconVite,
		IconWebpack,
		IconWebRTC
	} from '@components/atoms/icons';
	import Typography from '@components/atoms/typography/typography.svelte';
	import type { SvelteComponent } from 'svelte';
	export let technologies: string[] = [];
	export let hideTitle = false;

	const TechLogos: Record<string, unknown> = {
		playwright: IconPlaywright,
		android: IconAndroid,
		docker: IconDocker,
		openapi: IconOpenAPI,
		'docker-compose': IconDocker,
		github: IconGithub,
		gradle: IconGradle,
		i18n: IconI18n,
		bootstrap: IconBootstrap,
		java: IconJava,
		javascript: IconJavaScript,
		linkedin: IconLinkedin,
		'react query': IconTanstackQuery,
		'react redux': IconReactRedux,
		'react saga': IconReactSaga,
		webrtc: IconWebRTC,
		loading: IconLoading,
		maven: IconMaven,
		nextjs: IconNextJS,
		nginx: IconNginx,
		nodejs: IconNode,
		python: IconPython,
		'ubuntu server': IconUbuntu,
		fail2ban: IconFail2Ban,
		react: IconReact,
		search: IconSearch,
		typescript: IconTypeScript,
		tensorflow: IconTensorflow,
		jenkins: IconJenkins,
		sqlite: IconSqlite,
		'github actions': IconGithubActions,
		cloudflare: IconCloudflare,
		angular: IconAngular,
		hootsuite: IconHootSuite,
		'google-analytics': IconGoogleAnalytics,
		gitlab: IconGitlab,
		'gitlab ci': IconGitlab,
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
		technologies.reduce((acc, curr) => {
			return {
				...acc,
				[curr]: {
					name: curr,

					component: TechLogos[`${curr.toLowerCase()}`] ?? TechLogos['unknown']
				}
			};
		}, {});
</script>

{#if !hideTitle}
	<Typography variant="h3">Technologies:</Typography>
{/if}

<div class="flex flex-row py-2 flex-wrap mx-auto justify-center items-center">
	{#each Object.values(usedLogos) as { component, name }}
		<div class="flex flex-col justify-center items-center p-6">
			<svelte:component this={component} class="fill-red-500 h-8 my-1 mx-auto" />
			<Typography align="center">{name}</Typography>
		</div>
	{/each}
</div>
