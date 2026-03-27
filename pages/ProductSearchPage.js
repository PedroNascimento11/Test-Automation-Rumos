class ProductSearchPage {

    constructor(page) {
        this.page = page;

        this.searchBox = page.locator('input[name="keyword"]');

        this.fishProducts = [
            {
                productId: 'FI-SW-01',
                productName: 'Angelfish',
                productLocator: page.getByRole('link', { name: 'FI-SW-01' }),
                items: [
                    {
                        itemId: 'EST-1',
                        description: 'Large Angelfish',
                        price: '$16.50',
                        itemLocator: page.getByRole('link', { name: 'EST-1' })
                    },
                    {
                        itemId: 'EST-2',
                        description: 'Small Angelfish',
                        price: '$16.50',
                        itemLocator: page.getByRole('link', { name: 'EST-2' })
                    }
                ]
            },
            {
                productId: 'FI-SW-02',
                productName: 'Tiger Shark',
                productLocator: page.getByRole('link', { name: 'FI-SW-02' }),
                items: [
                    {
                        itemId: 'EST-3',
                        description: 'Toothless Tiger Shark',
                        price: '$18.50',
                        itemLocator: page.getByRole('link', { name: 'EST-3' })
                    }
                ]
            },
            {
                productId: 'FI-FW-01',
                productName: 'Koi',
                productLocator: page.getByRole('link', { name: 'FI-FW-01' }),
                items: [
                    {
                        itemId: 'EST-4',
                        description: 'Spotted Koi',
                        price: '$18.50',
                        itemLocator: page.getByRole('link', { name: 'EST-4' })
                    },
                    {
                        itemId: 'EST-5',
                        description: 'Spotless Koi',
                        price: '$18.50',
                        itemLocator: page.getByRole('link', { name: 'EST-5' })
                    }
                ]
            },
            {
                productId: 'FI-FW-02',
                productName: 'Goldfish',
                productLocator: page.getByRole('link', { name: 'FI-FW-02' }),
                items: [
                    {
                        itemId: 'EST-20',
                        description: 'Adult Male Goldfish',
                        price: '$5.50',
                        itemLocator: page.getByRole('link', { name: 'EST-20' })
                    },
                    {
                        itemId: 'EST-21',
                        description: 'Adult Male Goldfish',
                        price: '$5.29',
                        itemLocator: page.getByRole('link', { name: 'EST-21' })
                    }
                ]
            }
        ];
    }

    async openRandomFishProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.fishProducts.length);
        const selectedProduct = this.fishProducts[randomProductIndex];

        await selectedProduct.productLocator.click();

        return selectedProduct;
    }

    async openRandomItemFromProduct(selectedProduct) {
        if (!selectedProduct.items || selectedProduct.items.length === 0) {
            throw new Error(`Product ${selectedProduct.productName} has no configured items.`);
        }

        const randomItemIndex = Math.floor(Math.random() * selectedProduct.items.length);
        const selectedItem = selectedProduct.items[randomItemIndex];

        await selectedItem.itemLocator.click();

        return selectedItem;
    }
}

export default ProductSearchPage;
