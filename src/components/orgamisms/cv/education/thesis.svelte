<script lang="ts">
	export let thesis: string | undefined;
</script>

{#if thesis}
	<div class="text-sm">{thesis}</div>
	<div class="py-2">Thesis</div>
{/if}
