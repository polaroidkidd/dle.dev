/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
			rules: {
				'simple-import-sort/imports': 'off',
				'simple-import-sort/exports': 'off',
				'css/no-unknown-property': 'off'
			}
		}
	],
	rules: {
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'unused-imports/no-unused-imports-ts': 2,
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error'
	}
};
