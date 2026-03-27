import { test, expect } from '@playwright/test';

class ValidateLoginSuccess {

    constructor(page){
        this.page = page;

        this.campoLogout = page.locator('//a[contains(@href, "logout")]');

    };

    async validateLogin(){
        await expect(this.campoLogout).toBeVisible();
    };
};

export default ValidateLoginSuccess;