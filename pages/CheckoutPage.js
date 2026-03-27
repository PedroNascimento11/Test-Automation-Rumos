import { expect } from '@playwright/test';

class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.cardTypeDropdown = page.locator('select[name="order.cardType"]');
        this.cardNumberField = page.locator('input[name="order.creditCard"]');
        this.expiryDateField = page.locator('input[name="order.expiryDate"]');

        this.firstNameField = page.locator('input[name="order.billToFirstName"]');
        this.lastNameField = page.locator('input[name="order.billToLastName"]');
        this.address1Field = page.locator('input[name="order.billAddress1"]');
        this.address2Field = page.locator('input[name="order.billAddress2"]');
        this.cityField = page.locator('input[name="order.billCity"]');
        this.stateField = page.locator('input[name="order.billState"]');
        this.zipField = page.locator('input[name="order.billZip"]');
        this.countryField = page.locator('input[name="order.billCountry"]');

        this.continueButton = page.locator('input[name="newOrder"][value="Continue"]');
        this.confirmButton = page.getByRole('link', { name: 'Confirm' });
    }

    async selectCardType(cardType) {
        await this.cardTypeDropdown.selectOption(cardType);
    }

    async fillCardNumber(cardNumber) {
        await this.cardNumberField.fill(cardNumber);
    }

    async fillExpiryDate(expiryDate) {
        await this.expiryDateField.fill(expiryDate);
    }

    async fillFirstName(firstName) {
        await this.firstNameField.fill(firstName);
    }

    async fillLastName(lastName) {
        await this.lastNameField.fill(lastName);
    }

    async fillAddress1(address1) {
        await this.address1Field.fill(address1);
    }

    async fillAddress2(address2) {
        await this.address2Field.fill(address2);
    }

    async fillCity(city) {
        await this.cityField.fill(city);
    }

    async fillState(state) {
        await this.stateField.fill(state);
    }

    async fillZip(zipCode) {
        await this.zipField.fill(zipCode);
    }

    async fillCountry(country) {
        await this.countryField.fill(country);
    }

    async fillBillingDetails(user) {
        await this.fillFirstName(user.firstName);
        await this.fillLastName(user.lastName);
        await this.fillAddress1(user.address1);
        await this.fillAddress2(user.address2);
        await this.fillCity(user.city);
        await this.fillState(user.state);
        await this.fillZip(user.zipCode);
        await this.fillCountry(user.country);
    }

    async fillPaymentDetails(orderData, user) {
        await this.selectCardType(orderData.cardType);
        await this.fillCardNumber(orderData.cardNumber);
        await this.fillExpiryDate(orderData.expiryDate);
        await this.fillBillingDetails(user);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickConfirm() {
        await this.confirmButton.click();
    }

    async completeCheckout(orderData, user) {
        await this.fillPaymentDetails(orderData, user);
        await this.clickContinue();
        await this.clickConfirm();
    }

    async validateConfirmationPage(user) {
        await expect(this.page).toHaveURL('https://petstore.octoperf.com/actions/Order.action');
        await expect(this.page.locator('body')).toContainText('Please confirm the information below');
        await expect(this.page.locator('body')).toContainText('Billing Address');
        await expect(this.page.locator('body')).toContainText('Shipping Address');
        await expect(this.page.locator('body')).toContainText(user.country);
    }

    async validateSuccessfulOrder(orderData, itemId, price) {
        await expect(this.page).toHaveURL(/confirmed=true/);
        await expect(this.page.locator('body')).toContainText('Thank you, your order has been submitted.');
        await expect(this.page.locator('body')).toContainText('Payment Details');
        await expect(this.page.locator('body')).toContainText(orderData.cardType);
        await expect(this.page.locator('body')).toContainText(orderData.cardNumber);
        await expect(this.page.locator('body')).toContainText(itemId);
        await expect(this.page.locator('body')).toContainText(`Total: ${price}`);
    }
}

export default CheckoutPage;
