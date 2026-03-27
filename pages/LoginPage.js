import { test, expect } from '@playwright/test';

class LoginPage {

    constructor(page){
        this.page = page;

        this.campoEmail = page.locator('//input[@data-qa= "login-email"]');
        this.campoPassword = page.getByRole('textbox', { name: 'Password' });
        this.botaoLogin = page.getByRole('button', { name: 'Login' });

    };

    async preencherEmail(email){
        await this.campoEmail.fill(email);
    };

    async preencherPassword(password){
        await this.campoPassword.fill(password);
    };

    async clickBotaoLogin(){
        await this.botaoLogin.click();
    };

    async realizarLogin(email, password){
        await this.preencherEmail(email);
        await this.preencherPassword(password);
        await this.clickBotaoLogin();
    };
};

export default LoginPage;