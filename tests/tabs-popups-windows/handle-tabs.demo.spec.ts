import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/home.page';
import { ProgramsBuzzPage } from '../../page-objects/programsbuzz.page';


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

test.only('verify multiple tabs', async({page})=>{
  // const page = await context.newPage();
  await page.goto("http://autopract.com");

  // Close Auto Pract Popup
  await page.locator("button.close").click();

  // newPage Store Page Instance of ProgramsBuzz
  const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      // Click on Copywright Link in Footer Section of Auto Pract
      page.locator("div.footer-end a").click() 
    ])
    
    // Wait for Page Load
    await newPage.waitForLoadState();          
    
    // title of new tab page - ProgramsBuzz
    console.log(await newPage.title());
    
    // title of existing page - Auto Pract
    console.log(await page.title());
})
