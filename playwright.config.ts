import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	webServer: {
		command: "npm run build && npm run preview",
		port: 3001
	},

	// Reporter to use
	reporter: "html",

	use: {
		// Collect trace when retrying the failed test.
		trace: "on-first-retry"
	},
	testDir: "tests",
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
