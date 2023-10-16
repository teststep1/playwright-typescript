import { test, expect } from '@playwright/test';


test('config authentication', async ({ page }) => {
  await page.goto("");
  await expect(page.locator("div.example>h3")).toHaveText("Basic Auth");
})


test('Set HTTP Credentials', async ({ browser }) => {
  const context = await browser.newContext();

  await context.setHTTPCredentials({username: 'admin', password: 'admin'});
  const page = await context.newPage();
  await page.goto("");
  await expect(page.locator("div.example>h3")).toHaveText("Basic Auth");
})

test('Basic Auth Demo', async ({ browser }) => {
  const context = await browser.newContext(
    {
      httpCredentials: {
        username: 'admin',
        password: 'admin'
      }
    }
  )

  const page = await context.newPage();
  await page.goto("");
  await expect(page.locator("div.example>h3")).toHaveText("Basic Auth");

})

test('HTTP Authentication URL', async ({ page }) => {
  await page.goto("");

  await expect(page.locator("div.example>h3")).toHaveText("Basic Auth");
  
})
