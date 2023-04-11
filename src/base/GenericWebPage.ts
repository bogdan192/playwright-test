import { Locator, Page } from "@playwright/test";
export default class PageWrapper {

    constructor(public page: Page) {
    }

    public getUrl(): string {
        return this.page.url();
    }

}