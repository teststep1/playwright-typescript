import { test, expect } from '@playwright/test';

test.only('Refresh Browser Page', async ({ page }) => {

    await page.goto('http://autopract.com/selenium/refresh/');

   // declare variable
   const input1 = page.locator("#display");
   const input2 = page.locator("#clear");

   // fill in input value
   await input1.type("Hello");
   await input2.type("World");

   // reload page
   await page.reload();

   // get value of both inputs
   const input1Value = await input1.inputValue(); 
   const input2Value = await input2.inputValue(); 

   // verify values after refresh
    expect(input1Value).toEqual("Hello");
    expect(input2Value).toEqual("");
    
})
