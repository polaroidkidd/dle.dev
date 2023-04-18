<script lang="ts" context="module">
	export type ITechnologies = {
		technologies?: string[];
		hideTitle?: boolean;
	};
</script>

<script lang="ts">
	import IconAndroid from "@components/atoms/icons/IconAndroid.svelte";
	import IconDocker from "@components/atoms/icons/IconDocker.svelte";
	import IconGithub from "@components/atoms/icons/IconGithub.svelte";
	import IconGradle from "@components/atoms/icons/IconGradle.svelte";
	import IconJava from "@components/atoms/icons/IconJava.svelte";
	import IconJavaScript from "@components/atoms/icons/IconJavaScript.svelte";
	import IconLinkedin from "@components/atoms/icons/IconLinkedin.svelte";
	import IconLoading from "@components/atoms/icons/IconLoading.svelte";
	import IconMaven from "@components/atoms/icons/IconMaven.svelte";
	import IconNextJS from "@components/atoms/icons/IconNextJS.svelte";
	import IconNginx from "@components/atoms/icons/IconNginx.svelte";
	import IconNode from "@components/atoms/icons/IconNode.svelte";
	import IconPython from "@components/atoms/icons/IconPython.svelte";
	import IconReact from "@components/atoms/icons/IconReact.svelte";
	import IconSearch from "@components/atoms/icons/IconSearch.svelte";
	import IconTypeScript from "@components/atoms/icons/IconTypeScript.svelte";
	import IconTensorflow from "@components/atoms/icons/IconTensorflow.svelte";
	import IconJenkins from "@components/atoms/icons/IconJenkins.svelte";
	import IconSqlite from "@components/atoms/icons/IconSqlite.svelte";
	import IconAngular from "@components/atoms/icons/IconAngular.svelte";
	import IconHootSuite from "@components/atoms/icons/IconHootSuite.svelte";
	import IconGoogleAnalytics from "@components/atoms/icons/IconGoogleAnalytics.svelte";
	import IconGitlab from "@components/atoms/icons/IconGitlab.svelte";
	import IconCss from "@components/atoms/icons/IconCss.svelte";
	import IconHtml from "@components/atoms/icons/IconHtml.svelte";
	import IconWebpack from "@components/atoms/icons/IconWebpack.svelte";
	import IconTailwind from "@components/atoms/icons/IconTailwind.svelte";
	import Typography from "@components/atoms/typography/typography.svelte";
	import IconQuestionCircle from "@components/atoms/icons/IconQuestionCircle.svelte";
	export let technologies: string[] = [];
	export let hideTitle = false;

	const parsedTechnologies = technologies.map((tech) =>
		tech.replaceAll(" ", "-").toLocaleLowerCase()
	);
	const TechLogos: Record<string, any> = {
		android: IconAndroid,
		docker: IconDocker,
		github: IconGithub,
		gradle: IconGradle,
		java: IconJava,
		javascript: IconJavaScript,
		linkedin: IconLinkedin,
		loading: IconLoading,
		maven: IconMaven,
		nextjs: IconNextJS,
		nginx: IconNginx,
		node: IconNode,
		python: IconPython,
		react: IconReact,
		search: IconSearch,
		typescript: IconTypeScript,
		tensorflow: IconTensorflow,
		jenkins: IconJenkins,
		sqlite: IconSqlite,
		angular: IconAngular,
		hootsuite: IconHootSuite,
		"google-analytics": IconGoogleAnalytics,
		gitlab: IconGitlab,
		"gitlab-ci": IconGitlab,
		html: IconCss,
		css: IconHtml,
		webpack: IconWebpack,
		tailwind: IconTailwind,
		unknown: IconQuestionCircle
	};

	const logoKeys = Object.keys(TechLogos).filter((key) => {
		return parsedTechnologies.includes(key);
	});

	const usedLogos = logoKeys.map((key) => {
		return {
			component:
				TechLogos[key] !== undefined ? TechLogos[key] : TechLogos["unknown"],
			text: key
		};
	});
</script>

{#if !hideTitle}
	<Typography variant="h3">Technologies:</Typography>
{/if}

<div
	class="flex flex-row py-2 w-1/2 flex-wrap mx-auto justify-center items-center"
>
	{#each usedLogos as { component, text }, i}
		<div class="flex flex-col p-6">
			<svelte:component this={component} class="fill-red-500 h-8 my-1" />
			<Typography align="center">{text}</Typography>
		</div>
	{/each}
</div>
