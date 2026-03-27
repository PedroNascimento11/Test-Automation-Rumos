// @ts-check
import { test, expect } from '@playwright/test';
import { randomInt } from 'node:crypto';
import Commons from '../pages/Commons';
import LoginPage from '../pages/loginPage';
import ValidateLoginSuccess from '../pages/ValidateLoginSuccess';
import RegisterPage from '../pages/RegisterPage';
import ValidateRegistration from '../pages/ValidateRegistration';

test('login com sucesso', async ({ page }) => {

  const login = new LoginPage(page);
  const validateLogin = new ValidateLoginSuccess(page);

  await page.goto('/Account.action?signonForm=');

  await login.realizarLogin("taruhosok@mailinator.com", "Pa$$w0rd!");

  await validateLogin;

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

test('Register com sucesso', async ({ page }) => {

  const registerPage = new RegisterPage(page);
  const validateRegistration = new ValidateRegistration(page);

  /**
   * @param {number} length
   */
  function randomText(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }

  const randomUser = randomText(8) + '_' + randomInt(200);
  const randomPassword = randomText(8) + randomInt(1000, 9999);
  const firstNameSplit = randomUser.split('_')[0];
  const randomEmail = randomUser + '@gmail.com';
  const phoneNumber = String(randomInt(100000000, 1000000000));
  const address1 = `${randomText(12)} street`;
  const zipCode = String(randomInt(1000, 9999));

  await page.goto('https://petstore.octoperf.com/actions/Account.action?newAccountForm=');

  await registerPage.realizarRegister(
    randomUser,
    randomPassword,
    randomPassword,
    firstNameSplit,
    randomText(10),
    randomEmail,
    phoneNumber,
    address1,
    randomText(8),
    randomText(7),
    zipCode,
    randomText(7),
    'japanese',
    'DOGS'
  );

  await validateRegistration.validateRegistration();

});