import { test, expect } from '@playwright/test';

class AddToCart {

    constructor(page){
        this.page = page;

        this.buttonAddToCart = page.locator('//a[contains(text(), "Add to Cart")]');

    };

    async addToCart(){
        await expect(this.buttonAddToCart).click();
    };
};

export default AddToCart;