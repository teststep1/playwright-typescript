import { expect, type Locator, type Page } from '@playwright/test';

export class ProgramsBuzzPage {
  readonly page: Page;
  readonly searchTxt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchTxt = page.locator("input#edit-keys");
  }

  async fillSearchTxt(txt: string)
  {
    await this.searchTxt.fill(txt);
  }
}