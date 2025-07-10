import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import assert from 'assert';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

Given('el usuario navega al login de SauceDemo', async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('inicia sesión con usuario {string} y contraseña {string}', async (username: string, password: string) => {
  await loginPage.login(username, password);
});

Then('debería ver la página de productos', async () => {
  assert.strictEqual(await loginPage.isOnProductsPage(), true);
  await browser.close();
});

Then('debería ver un mensaje de error de usuario bloqueado', async () => {
  const errorMsg = await loginPage.getErrorMessage();
  console.log('Mensaje de error:', errorMsg);
  // Validamos que contenga el mensaje esperado
  if (!errorMsg?.includes('Epic sadface: Sorry, this user has been locked out.')) {
    throw new Error('Mensaje de error incorrecto o no encontrado');
  }
  await browser.close();
});

When('agrega el producto {string} al carrito', async (productName: string) => {
  productsPage = new ProductsPage(page);
  await productsPage.addProductToCart(productName);
});

Then('el ícono del carrito debería mostrar {string}', async (count: string) => {
  const badgeCount = await productsPage.getCartBadgeCount();
  if (badgeCount !== count) {
    throw new Error(`Se esperaba ${count} producto(s) en el carrito, pero se encontró ${badgeCount}`);
  }
  await browser.close();
});

When('navega al carrito', async () => {
  cartPage = new CartPage(page);
  await cartPage.goToCart();
});

Then('el producto {string} debería estar en el carrito', async (productName: string) => {
  const exists = await cartPage.isProductInCart(productName);
  if (!exists) {
    throw new Error(`El producto "${productName}" no se encontró en el carrito`);
  }
  await browser.close();
});

When(
  'completa el proceso de compra con nombre {string}, apellido {string} y código postal {string}',
  async (firstName: string, lastName: string, postalCode: string) => {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation(firstName, lastName, postalCode);
    await checkoutPage.finishCheckout();
  }
);

Then('debería ver el mensaje de confirmación {string}', async (expectedMessage: string) => {
  const message = await checkoutPage.getConfirmationMessage();
  if (!message?.includes(expectedMessage)) {
    throw new Error(`Mensaje de confirmación incorrecto. Se esperaba: "${expectedMessage}", pero fue: "${message}"`);
  }
  await browser.close();
});