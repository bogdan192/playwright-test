import { test as baseTest } from "@playwright/test";
import LoginPage from "../pages/login.page";
import OverviewPage from "../pages/overview.page";
import DataflowsPage from "../pages/dataflows.page";
import PageWrapper from "../base/GenericWebPage";

const test = baseTest.extend<{
    loginPage: LoginPage;
    base: PageWrapper;
    overviewPage: OverviewPage;
    dataFlowsPage: DataflowsPage
}>({
    base: async ({ page }, use) => {
        await use(new PageWrapper(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    overviewPage: async ({ page }, use) => {
        await use(new OverviewPage(page));
    },
    dataFlowsPage: async ({ page }, use) => {
        await use(new DataflowsPage(page));
    },
})

export default test;
export const expect = test.expect;