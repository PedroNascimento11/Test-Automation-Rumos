import { test, expect } from '@playwright/test';

class RegisterPage {

    constructor(page){
        this.page = page;

        this.fielduserID = page.locator('//input[contains(@id, "stripes-")]');
        this.fieldPassword = page.locator('input[name="password"]');
        this.fieldRepeatPassword = page.locator('input[name="repeatedPassword"]');
        this.fieldFirstName = page.locator('input[name="account.firstName"]');
        this.fieldLastName = page.locator('input[name="account.lastName"]');
        this.fieldEmail = page.locator('input[name="account.email"]');
        this.fieldPhone = page.locator('input[name="account.phone"]');
        this.fieldAddress1 = page.locator('input[name="account.address1"]');
        this.fieldCity = page.locator('input[name="account.city"]');
        this.fieldState =  page.locator('input[name="account.state"]');
        this.fieldPostalCode = page.locator('input[name="account.zip"]');
        this.fieldCountry = page.locator('input[name="account.country"]');
        this.listLanguage = page.locator('select[name="account.languagePreference"]');
        this.listCategory =  page.locator('select[name="account.favouriteCategoryId"]');
        this.ckbMyList = page.locator('input[name="account.listOption"]');
        this.ckbMyBanner = page.locator('input[name="account.bannerOption"]');
        this.buttonSaveRegistration = page.getByRole('button', { name: 'Save Account Information' });

    };

    async fillUserID(userID){
        await this.fielduserID.fill(userID);
    };

    async fillPassword(password){
        await this.fieldPassword.fill(password);
        await this.fieldRepeatPassword.fill(password);
    };

    async fillFirstName(firstName){
        await this.fieldFirstName.fill(firstName);
    };

    async fillLastName(lastName){
        await this.fieldLastName.fill(lastName);
    };

    async fillEmail(email){
        await this.fieldEmail.fill(email);
    };

    async fillPhone(phone){
        await this.fieldPhone.fill(phone);
    };

    async fillAddress1(address1){
        await this.fieldAddress1.fill(address1);
    };

    async fillCity(city){
        await this.fieldCity.fill(city);
    };

    async fillState(state){
        await this.fieldState.fill(state);
    };

    async fillPostalCode(postalCode){
        await this.fieldPostalCode.fill(postalCode);
    };

    async fillCountry(country){
        await this.fieldCountry.fill(country);
    };

    async selectLanguage(language){
        await this.listLanguage.selectOption(language);
    };

    async selectCategory(category){
        await this.listCategory.selectOption(category);
    };

    async checkMyList(){
        await this.ckbMyList.check();
    };

    async checkMyBanner(){
        await this.ckbMyBanner.check();
    };

    async clickSaveRegister(){
        await this.buttonSaveRegistration.click();
    };

    async realizarRegister(userID, password, repeatedPassword, firstName, lastName, email, phone, address1, city, state, postalCode, country, language, category){
        await this.fillUserID(userID);
        await this.fillPassword(password);
        await this.fillPassword(repeatedPassword);
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillEmail(email);
        await this.fillPhone(phone);
        await this.fillAddress1(address1);
        await this.fillCity(city);
        await this.fillState(state);
        await this.fillPostalCode(postalCode);
        await this.fillCountry(country);
        await this.selectLanguage(language);
        await this.selectCategory(category);
        await this.checkMyList();
        await this.checkMyBanner();
        await this.clickSaveRegister();
    };
};

export default RegisterPage;