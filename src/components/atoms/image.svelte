<script lang="ts">
	export let imageSrc: string;
	export let alt = "";
	export let width: number;
	export let height: number;
</script>

<img src={imageSrc} {alt} {width} {height} />
