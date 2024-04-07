<script lang="ts">
	const camera = 'camera' as 'user';
</script>

<label class=" mt-10 fileContainer ui-btn flex justify-center">
	<input
		class="mx-auto"
		type="file"
		accept="image/jpeg"
		id="photo_upload"
		multiple
		data-role="none"
		capture={camera}
	/>
</label>
