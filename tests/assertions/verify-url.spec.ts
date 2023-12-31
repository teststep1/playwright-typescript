
import { test, expect } from '@playwright/test';

test('Verify URL using Exact Match', async ({page})=>{
    await page.goto('https://www.programsbuzz.com')
    await page.locator('text=Blog').click()
    await expect(page).toHaveURL('https://www.programsbuzz.com/blog');  
})

test('Verify URL using Partial Match', async ({page})=>{
    await page.goto('https://www.programsbuzz.com')
    await page.locator('text=Blog').click()
    await expect(page).toHaveURL(/blog/); 
})

test('Verify URL containing slashes', async ({page})=>{
    await page.goto('https://www.programsbuzz.com')
    await page.locator('text=Blog').click()
    await expect(page).toHaveURL(/\/blog/);
})

test('Verify URL using Regex Interface', async ({page})=>{
    await page.goto('https://www.programsbuzz.com')
    await page.locator('text=Blog').click()
    await expect(page).toHaveURL(new RegExp('/blog$'));
})