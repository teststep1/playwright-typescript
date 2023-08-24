import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/home.page';
import { ProgramsBuzzPage } from '../page-objects/programsbuzz.page';


let homePageObj:HomePage;
let programsBuzzPageObj: ProgramsBuzzPage;

test.beforeEach(async ({ page }, testInfo) => {
    homePageObj = new HomePage(page);
  });


test('Handle Multiple Tabs using Page Objects', async ({ page }) => {
    
    // Visit Auto Pract Webbsite
    await page.goto("http://autopract.com");
    
    // Close Popup of Auto Pract Website
    await homePageObj.clickCloseBtn();
    
    // Print URL of Auto Pract Website
    console.log(page.url());
    
    // Receive New Page Instance After Clicking
    let newPage = await homePageObj.clickCopywrightLnk();
    
    // Print URL of New Page
    console.log(newPage.url());
    
    // Call Constructor of New Page using newPage Instance
    programsBuzzPageObj = new ProgramsBuzzPage(newPage);
    
    // Fill in Search Value for New Page
    await programsBuzzPageObj.fillSearchTxt("random");
})
