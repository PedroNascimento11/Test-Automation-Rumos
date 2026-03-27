import { test, expect } from '@playwright/test';

class Commons {

    constructor(page){
        this.page = page;

        this.botaoConsentir = page.getByRole('button', { name: 'Consent' });

    };

    async AceitarCookies(){
        await this.botaoConsentir.click();
    };
};

export default Commons;