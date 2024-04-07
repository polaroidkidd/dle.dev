import { sveltekit } from '@sveltejs/kit/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
export default defineConfig({
	plugins: [tsconfigPaths(), sveltekit()],
	server: {
		port: 4000
	},
	preview: {
		port: 4000
	},
	optimizeDeps: {
		esbuildOptions: {
			target: 'esnext'
		}
	},
	build: {
		target: 'es2020'
	},
	test: {
		include: ['tests/unit/**/*.{test,spec}.{js,ts}']
	}
});
