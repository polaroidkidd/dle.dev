<script lang="ts">
	import avatar from '@assets/images/daniel_einars-400x500.3aa2364c.jpg';
	import Avatar from '@components/molecules/avatar.svelte';

	import type { IProfile } from '@model/cv';
	import { onDestroy, onMount } from 'svelte';
	import Profile from './profile.svelte';
	export let name: string;
	export let label: string;

	export let profiles: IProfile[];

	const leftProfile: IProfile = profiles[0];
	const rightProfile: IProfile = profiles[1];

	let postfixTimeout: ReturnType<typeof setTimeout>;
	let tagIntervalId: ReturnType<typeof setInterval>;
	let leadIntervalId: ReturnType<typeof setTimeout>;

	let lead = 'Lead';
	const labels = ['Software', 'UX/UI', 'Web', 'Fullstack'];
	let postfix = 'Engineer';

	function updatedLabel() {
		let currentIndex = 0;
		let currentWordLength = 0;
		let charIndex = 0;
		let shouldCountUp = true;
		tagIntervalId = setInterval(() => {
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
					if (currentIndex === 0) {
						clearInterval(tagIntervalId);
						setTimeout(() => {
							label = '';
							animateLead();
						}, 200);
					}
				}
			}
		}, 200);
	}
	function animateLead() {
		let charIndex = lead.length;
		leadIntervalId = setInterval(() => {
			if (charIndex > 0) {
				lead = lead.slice(0, charIndex - 1);
				charIndex = lead.length;
			} else {
				clearInterval(leadIntervalId);
				animatePostfix();
			}
		}, 200);
	}
	function animatePostfix() {
		postfixTimeout = setTimeout(() => {
			postfix += '.';
			if (postfixTimeout) {
				clearTimeout(postfixTimeout);
			}
		}, 500);
	}

	onMount(() => {
		if (tagIntervalId) {
			clearInterval(tagIntervalId);
		}
		updatedLabel();
	});

	onDestroy(() => {
		if (tagIntervalId) {
			clearInterval(tagIntervalId);
		}
		if (leadIntervalId) {
			clearTimeout(leadIntervalId);
		}
		if (postfixTimeout) {
			clearTimeout(postfixTimeout);
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
		<div>{lead} {label} {postfix}</div>
	</div>
</div>
