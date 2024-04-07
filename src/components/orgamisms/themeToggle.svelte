<script lang="ts">
	import classNames from 'classnames';
	import Cookies from 'js-cookie';

	export let shouldRender: boolean;
	function loadTheme(): boolean {
		const themeCookie = Cookies.get('theme');
		if (themeCookie) {
			if (themeCookie === 'dark') {
				document.querySelector('html')?.classList.add('dark');
				return true;
			}
		}
		const date = new Date();
		const expires = new Date(date.setMonth(date.getMonth() + 1));
		Cookies.set('theme', 'light', {
			secure: true,
			expires: expires
		});
		return false;
	}

	function toggle() {
		document.querySelector('html')?.classList.toggle('dark');
		const themeCookie = Cookies.get('theme');
		const date = new Date();
		const expires = new Date(date.setMonth(date.getMonth() + 1));
		Cookies.set('theme', themeCookie === 'light' ? 'dark' : 'light', {
			secure: true,
			expires: expires
		});

		const faviconEl: HTMLElement | null = document.getElementById('favicon-icon');
		if (isDarkTheme) {
			faviconEl?.setAttribute('href', 'favicon-light.svg');
		} else {
			faviconEl?.setAttribute('href', 'favicon-dark.svg');
		}

		isDarkTheme = !isDarkTheme;
	}
	$: isDarkTheme = loadTheme();
</script>

{#if shouldRender}
	<button
		on:click={toggle}
		class={classNames('my-auto sm:ml-auto pl-4 animate', !isDarkTheme ? 'moon' : 'sun')}
		type="button"
		aria-label="Toggle Theme Button"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="0"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="animate moon"
		>
			<mask id="mask" class="animate">
				<rect x="0" y="0" width="100%" height="100%" fill="white" class="animate" />
				<circle cx="12" cy="4" r="4" class="animate" />
			</mask>
			<circle cx="12" cy="12" mask="url(#mask)" class="animate moon" />
			<g stroke="currentColor" stroke-width="2" class="animate">
				<line x1="12" y1="1" x2="12" y2="3" class="animate" />
				<line x1="12" y1="21" x2="12" y2="23" class="animate" />
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" class="animate" />
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" class="animate" />
				<line x1="1" y1="12" x2="3" y2="12" class="animate" />
				<line x1="21" y1="12" x2="23" y2="12" class="animate" />
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" class="animate" />
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" class="animate" />
			</g>
		</svg>
	</button>
	<!-- content here -->
{:else}
	<div class="w-[51px]" />
{/if}

<style lang="scss">
	.pointer {
		cursor: pointer;
	}
	.animate {
		transition: all 0.25s cubic-bezier(0, 1.5, 1, 1.5);
	}
	.sun {
		fill: #ffdaa6;
		svg {
			transform: rotate(0);
			line {
				stroke: #ffdaa6;
				opacity: 1;
			}
			circle {
				r: 5px;
			}
			mask {
				circle {
					cy: 0;
				}
			}
		}
	}
	.moon {
		svg {
			transform: rotate(40deg);
			line {
				opacity: 0;
			}
			circle {
				r: 9px;
			}
			mask {
				circle {
					cy: 5px;
				}
			}
		}
	}
</style>
