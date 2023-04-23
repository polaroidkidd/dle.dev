module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	plugins: ["svelte3", "@typescript-eslint"],
	ignorePatterns: ["*.cjs", "*.js", "playwright.config.ts"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	settings: {
		"svelte3/typescript": () => require("typescript")
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	parserOptions: {
		// add these parser options
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
		extraFileExtensions: [".svelte"]
	}
};
