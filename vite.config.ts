import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
	plugins: [tsconfigPaths(), sveltekit()],
	server: {
		port: 3000
	},
	preview: {
		port: 3001
	},
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	}
});
