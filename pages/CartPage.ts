import { Page } from 'playwright';

export class CartPage {
  constructor(private page: Page) {}

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async isProductInCart(productName: string): Promise<boolean> {
    const product = this.page.locator('.cart_item').filter({
      hasText: productName,
    });
    return await product.count() > 0;
  }
}