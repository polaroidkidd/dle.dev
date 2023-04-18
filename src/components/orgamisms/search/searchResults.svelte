<script lang="ts">
	import classNames from "classnames";
	import { browser } from "$app/environment";
	type IGroupedResults = Record<string, string[]>;

	export let results: string[] = [];
	export let hasNoResults: boolean;
	$: groupedResults = results.reduce<IGroupedResults>((acc, curr) => {
		const [title, chapter] = curr.split("#");

		if (acc[title]) {
			acc[title].push(chapter);
		} else {
			acc[title] = [chapter];
		}
		return acc;
	}, {});
	$: {
		if (browser) {
			if (results.length !== 0) {
				document.querySelector("html")?.classList.add("noScroll");
			} else {
				document.querySelector("html")?.classList.remove("noScroll");
			}
		}
	}

	export let closeSearchResults: () => void;
</script>

{#if results.length !== 0}
	<!-- content here -->
	<button
		class={classNames(
			"fixed top-[40px] sm:top-[55px] left-0 h-screen w-screen backdrop-blur-lg flex flex-col"
		)}
		on:click={closeSearchResults}
	>
		<div
			class={classNames(
				"overflow-y-auto",
				"flex flex-col w-full",
				"mx-auto",
				"sm:mt-10",
				"w-full",
				"max-w-xl",
				"min-h-0",
				"sm:max-h-[calc(100vh_-_10rem)]",
				"bg-white dark:bg-neutral-900",
				"sm:border-x sm:border rounded shadow-2xl border-red-400"
			)}
		>
			<div class={classNames("flex-grow h-full min-h-fit overflow-y-auto")}>
				{#each Object.keys(groupedResults) as blog, index}
					<div>
						<h2 class="font-black px-5 pb-0">
							{blog
								.split("-")
								.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
								.join(" ")}
						</h2>

						{#each groupedResults[blog] as chapter}
							<a href={`/blog/${blog}#${chapter.replace(/--/g, "-")}`}>
								<div
									class={classNames(
										"cursor-pointer",
										{ "border-b": !false },
										"border-red-400",
										"flex",
										"p-4",
										"hover:bg-white hover:bg-opacity-80",
										"dark:hover:bg-neutral-700 hover:bg-opacity-80",
										"rounded-t",
										"pl-10 pr-5",
										"h-full",
										"transition-colors"
									)}
								>
									<div>
										{chapter
											.replace(/[0-9]/g, "")
											.split("-")
											.map(
												(word) => word.charAt(0).toUpperCase() + word.slice(1)
											)
											.join(" ")}
									</div>
								</div>
							</a>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</button>
{/if}

{#if hasNoResults}
	<button
		class={classNames(
			"fixed top-[40px] sm:top-[55px] left-0 h-screen w-screen backdrop-blur-lg flex flex-col"
		)}
		on:click={closeSearchResults}
	>
		<div
			class={classNames(
				"overflow-y-auto",
				"flex flex-col w-full",
				"mx-auto",
				"sm:mt-10",
				"w-full",
				"max-w-xl",
				"min-h-0",
				"sm:max-h-[calc(100vh_-_10rem)]",
				"bg-white dark:bg-neutral-900",
				"sm:border-x sm:border rounded shadow-2xl border-red-400"
			)}
		>
			<div class={classNames("flex-grow h-full min-h-fit overflow-y-auto")}>
				<h2>Looks like I didn't write about that yet</h2>
			</div>
		</div>
	</button>
{/if}

<style lang="scss">
	.noScroll {
		overflow: hidden;
	}
</style>
