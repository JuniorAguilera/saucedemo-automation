import { Page } from 'playwright';

export class ProductsPage {
  constructor(private page: Page) {}

  async addProductToCart(productName: string) {
    const locator = this.page.locator('.inventory_item').filter({
      hasText: productName,
    });
    await locator.locator('button').click();
  }

  async getCartBadgeCount(): Promise<string | null> {
    return await this.page.locator('.shopping_cart_badge').textContent();
  }
}