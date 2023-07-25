import { devices, type PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	webServer: {
		command: "pnpm run build && pnpm run preview",
		port: 3001
	},

	// Reporter to use
	reporter: "html",

	use: {
		// Collect trace when retrying the failed test.
		trace: "on-first-retry",
		// Viewport used for all pages in the context.
		viewport: { width: 1920, height: 1080 }
	},
	testDir: "tests",
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,

	projects: [
		{
			name: "chromium",
			use: {
				...devices["Desktop Chrome"],
				channel: "chrome"
			}
		}
	]
};

export default config;
