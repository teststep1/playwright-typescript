import { test, expect } from '@playwright/test';


test('role and aria-attribute example 2', async ({ page }) => {
    await page.goto("https://www.amazon.in/");

    await page.getByRole("link", {name: "Hello, sign in Account & Lists"}).click();

    await page.getByRole("img",{name:"Amazon"}).click();  

    await page.pause();
})

test('role and aria-attribute example 1', async ({ page }) => {
    await page.goto("https://www.amazon.in/");

    await page.getByRole("button", {name: "Open Menu"}).click();
    await page.pause();
})

test('Implicit Roles', async ({ page }) => {
    await page.goto("https://www.amazon.in/");

    await page.getByRole("link", {name: "Hello, sign in Account & Lists"}).click();

    await page.getByRole("textbox", {name: "Email or mobile phone number"}).fill("tarun.goswami");

    await page.getByRole("button", {name: "Continue"}).click();
})

test('aria-attribute only', async ({ page }) => {
    await page.goto("https://www.amazon.in/");

    await page.getByRole("textbox", {name: "Search Amazon.in"}).fill("dell laptop");
    await page.pause(); 
})

