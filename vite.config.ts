import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
	plugins: [tsconfigPaths(), sveltekit()],
	server: {
		port: 3000,
		strictPort: true
	},
	preview: {
		port: 3000,
		strictPort: true
	},
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	}
});
