import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly copywrightLnk: Locator;
  readonly closeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.closeBtn = page.locator("button.close");
    this.copywrightLnk = page.locator("div.footer-end a");
  }

  async clickCloseBtn()
  {
    this.closeBtn.click();
  }

  async clickCopywrightLnk()
  {
    const [newPage] = await Promise.all([
      // Wait for Popup/Page Event
      this.page.waitForEvent('popup'),
      
      // Click Copywright of AutoPract to Open ProgramsBuzz
      this.copywrightLnk.click() 
    ])
    // Return Instance of New Page - ProgramsBuzz
    return newPage;
  }
}