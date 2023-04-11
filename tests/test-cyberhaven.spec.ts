import test from "../src/utils/fixtures";
import ENV from "../src/utils/env"
import { expect } from "@playwright/test";
import { getDateXDaysAgo, makeId} from "../src/utils/tools"


test.beforeEach(async ({ page }) => {
    await page.goto(ENV.BASE_URL);
  });

test("Test Create dataset and Policies", async ({ page, loginPage, overviewPage, dataFlowsPage }) => {
    
    await loginPage.doLogIn(ENV.USERNAME, ENV.PASSWORD);
    
    await expect(page).toHaveURL(ENV.BASE_URL + '/overview')

    const currentDate = new Date(Date.now());

    const dateTwoWeeksAgo = getDateXDaysAgo(14, currentDate).toString();

    // This still doesnt work
    await overviewPage.filterTimeRange(dateTwoWeeksAgo, currentDate.toString(), '06', '08')
    
    const randId = makeId(12);

    await overviewPage.addDataSet(randId);

    await expect(page.getByText('Dataset was created')).toBeVisible();

    await overviewPage.addNewPolicy(randId);

    await expect(page.getByText('Policy was created')).toBeVisible();

    await page.getByTestId('navigation/dashboardv2').click();

    await expect(page).toHaveURL('https://releasefd.cyberhaven.io/dataflows-overview');

    await dataFlowsPage.scrollPolicyIntoView(randId);

    await expect(page.locator(await dataFlowsPage.getPolicyLocator(randId))).toBeVisible();

})