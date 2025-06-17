<script lang="ts">
	import IconDle from '@components/atoms/icons/IconDle.svelte';
	import Typography from '@components/atoms/typography/typography.svelte';
	import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	const modal: ModalSettings = {
		type: 'component',
		// Pass the component registry key as a string:
		component: 'contact'
	};
	function openModal() {
		modalStore.trigger(modal);
	}

	let year = 2023;
	onMount(() => {
		year = new Date().getFullYear();
	});
</script>

<footer class="w-full pt-32 flex items-center justify-center mb-12">
	<div class="lg:w-2/3 w-full px-4 flex flex-col">
		<Typography variant="h2" size="6xl" class="mb-5">How can I help you. Get in touch!</Typography>
		<Typography variant="h2" size="6xl" />

		<div class="flex mt-8 flex-col lg:flex-row lg:justify-between">
			<Typography class="lg:w-2/3">
				We can help you make the right decisions when it comes to building your internet presence,
				evaluating agencies and their work or even just provide feedback on your current site.
			</Typography>

			<div class="w-44 pt-6 lg:pt-0">
				<button
					on:click={openModal}
					class="transition-colors bg-red-400 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center hover:bg-red-500"
				>
					<Typography class="text-white">Reach Out</Typography>
				</button>
			</div>
		</div>
		<div class="flex-col flex divide-y divide-red-400">
			<div class="hidden lg:flex mt-24 justify-between items-end">
				<IconDle class="w-7 h-7 fill-red-400" />

				<a href="/cv" class="hidden lg:block cursor-pointer">
					<Typography class="hover:text-red-400 uppercase">About</Typography>
				</a>
				<a href="/blog" class="hidden lg:block cursor-pointer">
					<Typography class="hover:text-red-400 uppercase">Blog</Typography>
				</a>
				<a href="/cv" class="hidden lg:block cursor-pointer">
					<Typography class="hover:text-red-400 uppercase">CV</Typography>
				</a>
			</div>

			<p class="w-full my-12 flex align-middle justify-center">
				<Typography class="pt-12">Copyright © {year} dle</Typography>
			</p>
		</div>
	</div>
</footer>
