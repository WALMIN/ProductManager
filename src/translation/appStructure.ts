enum ProductList {
    Title = 'ProductList-Title',
    Name = 'ProductList-Name',
    Type = 'ProductList-Type',
    Price = 'ProductList-Price',
    NoProducts = 'ProductList-NoProducts'
}

enum ProductItem {
    Integrated = 'ProductItem-Integrated',
    Peripheral = 'ProductItem-Peripheral '
}

enum AddEditProduct {
    Name = 'AddEditProduct-Name',
    Price = 'AddEditProduct-Price',
    ProductType = 'AddEditProduct-ProductType',
    Save = 'AddEditProduct-Save',
    Add = 'AddEditProduct-Add',
    Cancel = 'AddEditProduct-Cancel'
}

export const tokens = {
    screens: {
        productList: ProductList,
        productItem: ProductItem,
        addEditProduct: AddEditProduct
    }
}