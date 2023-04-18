<script lang="ts">
	export let language: string;
	export let fluency: string;
</script>

<div class="flex relative mb-2">
	<div class="mt-3 w-full">
		<div class="mb-2 text-lg text-center w-full my-4">
			<div class="transition-all block">{language}</div>

			<div class="text-sm mb-4">{fluency}</div>
		</div>
	</div>
</div>
