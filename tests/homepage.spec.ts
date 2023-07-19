import { test, expect } from "@playwright/test";

test("homepage", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByRole("heading", { name: "I help companies" })).toBeVisible();
});
