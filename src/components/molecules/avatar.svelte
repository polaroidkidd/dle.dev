<script lang="ts">
	import classNames from 'classnames';
	import Image from '@components/atoms/assets/image.svelte';
	export let imageSrc: string;
	export let alt = '';
</script>

<div
	class={classNames(
		'rounded-full',
		'ring-2',
		'ring-red-400',
		'subpixel-antialiased',
		'antialiased',
		'transition-all',
		'flex',
		'justify-center',
		'w-60',
		'mb-4 md:mb-0',
		'overflow-hidden',
		'm-1'
	)}
>
	<Image {imageSrc} {alt} width={240} height={304} />
</div>
