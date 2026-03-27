import { test, expect } from '@playwright/test';

class ValidateRegistration {

    constructor(page){
        this.page = page;

    };

    async validateRegistration(){
        await expect(this.page).toHaveURL('https://petstore.octoperf.com/actions/Catalog.action');
    };
};

export default ValidateRegistration;

