<script lang="ts">
	export let imageSrc: string;
	export let alt = '';
	export let width: number;
	export let height: number;
	export let loadingStrategy: 'eager' | 'lazy' | undefined | null = 'eager';
</script>

<img src={imageSrc} {alt} {width} {height} loading={loadingStrategy} />
