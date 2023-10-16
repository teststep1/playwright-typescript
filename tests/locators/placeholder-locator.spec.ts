import { test, expect } from '@playwright/test';

test('Get By Placeholder', async ({ page }) => {
    await page.goto("https://www.amazon.in/");

    await page.getByPlaceholder("Search Amazon.in").fill("avengers slap bands");
    await page.pause();
})
