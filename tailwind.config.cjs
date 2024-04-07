// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ['"merriweather"', ...defaultTheme.fontFamily.serif],
				sans: ['"lato"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		// Tailwind Forms plugin complements skeleton ui
		require('@tailwindcss/forms'),
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};
