import { Page } from "@playwright/test";
import PageWrapper from "../base/GenericWebPage";
import ENV from "../utils/env"

export const waitBetweenActions = 1000;

export default class OverviewPage extends PageWrapper {

    constructor(public page: Page) {
        super(page);
    }

    public async filterTimeRange(startDate: string, endDate: string, startTime: string, endTime: string) {
        const waitBetweenSettingDates = waitBetweenActions;
        await this.page.getByText('Today').click(); 
        const datepickerFrom = await this.page.getByTestId('datepicker/input/from').locator('input[type="text"]');
        await datepickerFrom.click();
        await datepickerFrom.fill(startDate, {force: true});
        await datepickerFrom.press('Enter');
        await this.page.waitForTimeout(waitBetweenSettingDates);
        const datepickerTo = await this.page.getByTestId('datepicker/input/to').locator('input[type="text"]')
        await datepickerTo.fill(endDate, {force: true});
        await datepickerTo.press('Enter');
        await this.page.waitForTimeout(waitBetweenSettingDates);
        const timeFrom = await this.page.getByTestId('datepicker/input/container').locator('div:has-text("From​:AM") input[name="hours"]');
        await timeFrom.fill(startTime, {force: true});
        await this.page.getByTestId('datepicker/input/container').locator('div:has-text("From​:AM") input[name="minutes"]').fill('00', {force: true});      
        const timeTo = await this.page.getByTestId('datepicker/input/container').locator('div:has-text("To​:PM") input[name="hours"]');;
        await timeTo.fill(endTime, {force: true});
        await this.page.getByTestId('datepicker/input/container').locator('div:has-text("To​:PM") input[name="minutes"]').fill('00', {force: true});
        const okBtn = await this.page.getByTestId('datepicker/ok')
        await okBtn.click();
        await this.page.getByTestId('datepicker/input/container').click();
    }

    public async addDataSet(datasetUniqueId: string){
        await this.page.getByTestId('dashboard/dataSprawl/datasets/add').click();
        await this.page.getByText('Search in specific fields').click();
        await this.page.getByRole('button', { name: 'Cloud app Name of cloud app connected to Cyberhaven through APIs' }).click();
        await this.page.getByRole('button', { name: 'Cloud App' }).click();
        await this.page.getByRole('button', { name: 'Condition Cloud app' }).click();
        await this.page.getByText('Office 365').click();
        await this.page.locator('div:has-text("BoxOneDriveGoogle DriveSalesforceDropboxSharepointOffice 365")').nth(1).press('Escape');
        await this.page.getByRole('button', { name: 'subcondition' }).click();
        await this.page.getByTestId('universal-search/list/loadMoreFields').click();
        await this.page.getByRole('button', { name: 'Domain Website or email domain' }).click();
        await this.page.getByText('contains').click();
        await this.page.getByRole('button', { name: 'is' }).click();
        await this.page.locator('div.c-ieNwmR:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > textarea:nth-child(1)').fill('onedrive.live.com', {force: true});
        await this.page.waitForTimeout(waitBetweenActions);
        await this.page.getByTestId('dashboard/convert_dataset').click();
        await this.page.getByLabel('Name').click();
        const randId = datasetUniqueId;
        const datasetRandomId = 'Dataset Interview ' + randId;
        console.log(datasetRandomId)
        await this.page.getByLabel('Name').fill(datasetRandomId);
        await this.page.getByTestId('dashboard/submitdataset').click();
    }

    public async addNewPolicy(policyUniqueId: string){
        // This needs to be refactored into smaller actions
        await this.page.getByText('New Policy').click();
        await this.page.getByRole('button', { name: 'Create new policy Start defining your policy from scratch' }).click();
        await this.page.getByLabel('Name').click();
        const policyRandomId = 'Policy Interview ' + policyUniqueId;
        console.log(policyRandomId);
        await this.page.getByLabel('Name').fill(policyRandomId);
        await this.page.locator('#dataset_ids div:has-text("Click to select")').nth(2).click();
        await this.page.locator('div > div:nth-child(6)').click();
        await this.page.locator('.MuiBackdrop-root').click();
        await this.page.getByTestId('dashboard/expandable-settings').getByRole('button').click();
        await this.page.getByTestId('dashboard/expandable-settings').getByRole('button').click();
        await this.page.getByRole('button', { name: 'condition' }).click();
        await this.page.getByRole('button', { name: 'Cloud app Name of cloud app connected to Cyberhaven through APIs' }).click();
        await this.page.getByRole('button', { name: 'Condition Cloud app' }).click();
        await this.page.locator('.MuiBackdrop-root').click();
        await this.page.locator('a:has-text("is")').click();
        await this.page.locator('.MuiBackdrop-root').click();
        await this.page.locator('a:has-text("Cloud app")').click();
        await this.page.getByRole('button', { name: 'Cloud app account Cloud app account email address' }).click();
        await this.page.getByText('contains').click();
        await this.page.getByRole('button', { name: 'ends with' }).click();
        await this.page.getByRole('button', { name: 'Condition Cloud app account' })
        await this.page.locator('xpath=//*[@id="main"]/div[1]/div/div[3]/div/div[2]/form/div[1]/div[1]/div[2]/div/div/div[3]/div/div/div[1]/div/textarea').fill('@qa-interview.com');
        await this.page.waitForTimeout(waitBetweenActions);
        await this.page.getByRole('button', { name: 'Condition Cloud app account' }).click();
        await this.page.getByRole('button', { name: 'condition' }).click();
        await this.page.getByRole('button', { name: 'Cloud app account Cloud app account email address' }).click();
        await this.page.getByText('contains').click();
        await this.page.getByRole('button', { name: 'doesn\'t start with' }).click();
        await this.page.locator('xpath=//*[@id="main"]/div[1]/div/div[3]/div/div[2]/form/div[1]/div[3]/div[2]/div/div/div[3]/div/div/div[1]/div/textarea').fill('admin');
        await this.page.waitForTimeout(waitBetweenActions);
        await this.page.locator('input[name="exclude_origin"]').check();
        const textLocator = '#dataset_ids div:has-text("'+policyRandomId+'")';
        await this.page.locator('#dataset_ids > div > div > div').click();
        await this.page.getByText(policyUniqueId).last().click();        
        await this.page.locator('.MuiPopover-root > .MuiPaper-root').press('Escape');
        await this.page.getByLabel('Name').click();
        await this.page.locator('input[name="rule\\.create_incident"]').check();
        await this.page.getByRole('button', { name: 'Block' }).click();
        await this.page.getByRole('button', { name: 'Setup response message' }).click();
        await this.page.getByText('Show the dialog title').click();
        await this.page.locator('label:has-text("Allow user to override blocking")').click();
        await this.page.locator('textarea:has-text("The action you just performed violates Internal Cyberhaven Name security policie")').fill('This is for interview code challenge'.toUpperCase());
        await this.page.locator('textarea:has-text(" Please, provide a justification for your action")').fill('QA automation job'.toUpperCase());
        await this.page.getByRole('button', { name: 'Apply' }).click();
        await this.page.locator('input[name="rule\\.notify_enabled"]').check();
        await this.page.locator('textarea[name="rule\\.notify_email"]').click();
        await this.page.locator('textarea[name="rule\\.notify_email"]').fill(ENV.USERNAME);
        await this.page.getByTestId('dashboard/submitpolicy').click();
    }
}