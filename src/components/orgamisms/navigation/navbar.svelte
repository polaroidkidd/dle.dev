<script lang="ts">
	import classNames from "classnames";
	import NavbarLink from "@components/orgamisms/navigation/navbarLink.svelte";
	import ThemeToggle from "../themeToggle.svelte";
	import SearchInput from "../search/searchInput.svelte";
	import IconMail from "@components/atoms/icons/IconMail.svelte";
	import { modalStore, type ModalSettings } from "@skeletonlabs/skeleton";
	let innerWidth = 0;

	function toggleThemeButtonVisibillity(width: number) {
		return width >= 640;
	}

	const modal: ModalSettings = {
		type: "component",
		// Pass the component registry key as a string:
		component: "contact"
	};

	function openModal() {
		document?.body.classList.add("overflow-hidden");
		modalStore.trigger(modal);
	}

	$: toggleThemeButtonVisibillity(innerWidth);
	$: shouldShowDesktopThemeToggle = toggleThemeButtonVisibillity(innerWidth);
</script>

<svelte:window bind:innerWidth />
<nav
	class={classNames(
		"container",
		"mx-auto",

		"px-5",
		"h-14",
		"fixed",
		"top-0",
		"left-0",
		"right-0",
		"z-50",
		"text-base sm:text-xl",
		"print:hidden",
		"navbarContainer"
	)}
>
	<div
		class={classNames(
			"hidden",
			"sm:container",
			"sm:flex sm:flex-row",
			"sm:items-center",
			"sm:h-full",
			"sm:justify-start"
		)}
	>
		<NavbarLink text="home" target="/" />
		<NavbarLink text="blog" target="/blog" />
		<NavbarLink text="cv" target="/cv" />
		<SearchInput />

		<ThemeToggle shouldRender={shouldShowDesktopThemeToggle} />
		<button on:click={openModal}>
			<IconMail
				class={classNames(
					"text-xl",
					"py-2",
					"cursor-pointer",
					"transition-all",
					"h-12 w-12",
					"stroke-red-400",
					"hover:stroke-red-600"
				)}
			/>
		</button>
	</div>

	<!--{/*MOBILE NAVBAR*/}-->
	<div
		class={classNames(
			"flex",
			"flex-row",
			"justify-between",
			"sm:hidden",
			"-mx-5",
			"px-2",
			"w-screen",
			"border-b",
			"border-neutral-800",
			"h-14",
			"relative"
		)}
	>
		<NavbarLink text="home" target="/" />
		<NavbarLink text="blog" target="/blog" />
		<NavbarLink text="cv" target="/cv" />
		<SearchInput />
		<ThemeToggle shouldRender={!shouldShowDesktopThemeToggle} />
		<button on:click={openModal}>
			<IconMail
				class={classNames(
					"text-xl",
					"py-2",
					"cursor-pointer",
					"transition-all",
					"h-12 w-12",
					"stroke-red-400",
					"hover:stroke-red-600"
				)}
			/>
		</button>
	</div>
	<!--	</div>-->
</nav>

<style lang="scss">
	.blogItems {
		transition: max-height 500ms;
	}

	.navbarContainer {
		&::before {
			z-index: -1;
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100vw;
			backdrop-filter: blur(10px);
		}
	}

	.menuBlockFrostedGlass {
		&::before {
			z-index: -1;
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100vw;
			backdrop-filter: blur(10px);
			//background-color: red;
			//border: 2px solid red;
			//mask: linear-gradient(0deg, transparent, black 50%);
		}
	}

	.container {
		transition: max-height 0.2s ease-in-out;
		overflow: hidden;
	}

	.collapsed {
		max-height: 0;
	}

	.open {
		max-height: calc(3 * 42px);
	}
</style>
