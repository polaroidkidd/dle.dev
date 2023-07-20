<script lang="ts">
	import IconCircleQuestionWavy from "@components/atoms/icons/IconCircleQuestionWavy.svelte";
	import IconGithub from "@components/atoms/icons/IconGithub.svelte";
	import IconLinkedin from "@components/atoms/icons/IconLinkedin.svelte";
	import { PROFILE } from "@model/cv";
	import classNames from "classnames";

	export let network: PROFILE;
	export let url: string;
	let clazz = "";
	// eslint-disable-next-line svelte/valid-compile
	export { clazz as class };
	function getIcon(network: PROFILE) {
		switch (network) {
			case PROFILE.LinkedIn:
				return IconLinkedin;
			case PROFILE.Github:
				return IconGithub;
			default:
				return IconCircleQuestionWavy;
		}
	}
</script>

<a
	href={url}
	class={classNames(
		clazz,
		"transition-all flex flex-col justify-center items-center hover:text-red-600 dark:hover:text-red-300"
	)}
>
	<svelte:component this={getIcon(network)} />
	{network}
</a>
