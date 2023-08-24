import { test, expect } from '@playwright/test';

<<<<<<< HEAD
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

=======
test.beforeEach(async ({ page }, testInfo) => {
  testInfo.setTimeout(12000);
});

test('has title', async ({ page },testInfo) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(15000);
>>>>>>> 3150048 (multiple tabs using page objects)
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
<<<<<<< HEAD

=======
  await page.waitForTimeout(15000);
>>>>>>> 3150048 (multiple tabs using page objects)
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
