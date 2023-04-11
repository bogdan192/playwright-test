import { Page } from "@playwright/test";
import PageWrapper from "../base/GenericWebPage";

export default class LoginPage extends PageWrapper {

    private loginPageElements = {
        username: "",
        password:""
    }


    constructor(public page: Page) {
        super(page);
    }

    public async enterUserName(username: string) {
        const email = this.page.getByPlaceholder('Email');
        await email.click();
        await email.fill(username);
    }

    public async enterPassword(password: string) {
        const pwd = this.page.getByPlaceholder('Password');
        await pwd.click();
        await pwd.fill(password);
    }

    public async clickLogIn() {
        // Dont use this
        // #root > div > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation3.c-PJLV.c-PJLV-ikEMWby-css.css-wrj8nc > div > form > div > div.c-PJLV.c-PJLV-idviRhy-css.c-jyFkjd > button
        // Use the nice locator
        const loginButton = this.page.getByRole('button', { name: 'Log in' }).last();
        await loginButton.click({force: true});
    }

    public async doLogIn(username: string, password: string){
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLogIn();
    }
}