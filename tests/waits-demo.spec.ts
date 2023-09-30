import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('https://playwright.dev/');
  });

test('Timeout Testing', async ({ page }, testInfo) => {
  console.log("Default timeout is:"+testInfo.timeout);
  test.setTimeout(testInfo.timeout+20000);
    await page.locator("asgsdfsfdsfsd").click();
    //step 1 - 5 seconds
    // step 2- 20 second
    // step 3- 10 seconds
  });

  