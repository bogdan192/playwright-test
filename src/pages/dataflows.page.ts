import { Page } from "@playwright/test";
import PageWrapper from "../base/GenericWebPage";

export default class DataflowsPage extends PageWrapper {


    constructor(public page: Page) {
        super(page);
    }

    public async getPolicyLocator(policyUniqueId: string){
        const policyFullName = 'Policy Interview ' + policyUniqueId;
        const policyLocator = 'div[role="group"]:has-text("'+ policyFullName.toUpperCase() + '")';
        return policyLocator;
    }

    public async scrollPolicyIntoView(policyUniqueId: string){
      const policyLocator = await this.getPolicyLocator(policyUniqueId);
      await this.page.locator(policyLocator).last().scrollIntoViewIfNeeded();
      await this.page.locator(policyLocator).last().scrollIntoViewIfNeeded();
    }

}