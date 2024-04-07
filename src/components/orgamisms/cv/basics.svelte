<script lang="ts">
	import Avatar from '@components/molecules/avatar.svelte';
	import avatar from '@assets/images/daniel_einars-400x500.3aa2364c.jpg';

	import Profile from './profile.svelte';
	import type { IProfile } from '@model/cv';
	import { onMount, onDestroy } from 'svelte';
	export let name: string;
	export let label: string;

	export let profiles: IProfile[];

	const leftProfile: IProfile = profiles[0];
	const rightProfile: IProfile = profiles[1];
	let intervalId: ReturnType<typeof setInterval>;
	const labels = ['Software', 'UX/UI', 'Web', 'Fullstack'];
	function updatedLabel() {
		let currentIndex = 0;
		let currentWordLength = 0;
		let charIndex = 0;
		let shouldCountUp = true;
		intervalId = setInterval(() => {
			currentWordLength = labels[currentIndex].length;
			label = labels[currentIndex].slice(0, charIndex);
			if (charIndex < currentWordLength && shouldCountUp) {
				charIndex++;
				if (charIndex === currentWordLength) {
					shouldCountUp = false;
				}
			} else if (!shouldCountUp) {
				charIndex--;
				if (charIndex === 0) {
					charIndex = 0;
					currentIndex = currentIndex === labels.length - 1 ? 0 : ++currentIndex;
					shouldCountUp = true;
				}
			}
		}, 200);
	}
	onMount(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
		updatedLabel();
	});

	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<div>
	<div class="grid grid-cols-3 mb-5 print:hidden">
		<div class="flex justify-center items-center">
			<Profile network={leftProfile.network} url={leftProfile.url} class="hover:fill-red-200" />
		</div>
		<div class="flex justify-center items-center">
			<Avatar imageSrc={avatar} alt="" />
		</div>
		<div class="flex justify-center items-center">
			<Profile network={rightProfile.network} url={rightProfile.url} class="hover:fill-red-200" />
		</div>
	</div>
	<div class="flex flex-col justify-center items-center">
		<div>{name}</div>
		<div>Senior {label} Engineer</div>
	</div>
</div>
