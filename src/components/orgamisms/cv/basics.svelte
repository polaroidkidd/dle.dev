<script lang="ts">
	import Avatar from "@components/molecules/avatar.svelte";
	import avatar from "@assets/images/daniel_einars-400x500.3aa2364c.jpg";

	import Profile from "./profile.svelte";
	import type { ILocation, IProfile } from "@model/cv";

	export let name: string;
	export let label: string;
	export let image: string;
	export let email: string;
	export let phone: string;
	export let location: ILocation;
	export let profiles: IProfile[];

	const leftProfile: IProfile = profiles[0];
	const rightProfile: IProfile = profiles[1];
	const labels = ["Software", "UX/UI", "Web", "Fullstack"];
</script>

<div>
	<div class="grid grid-cols-3 mb-5 print:hidden">
		<div class="flex justify-center items-center">
			<Profile
				network={leftProfile.network}
				url={leftProfile.url}
				class="hover:fill-red-200"
			/>
		</div>
		<div class="flex justify-center items-center">
			<Avatar imageSrc={avatar} alt="" />
		</div>
		<div class="flex justify-center items-center">
			<Profile
				network={rightProfile.network}
				url={rightProfile.url}
				class="hover:fill-red-200"
			/>
		</div>
	</div>
	<div class="flex flex-col justify-center items-center">
		<div>{name}</div>
		<div>Senior {label} Engineer</div>
	</div>
</div>
