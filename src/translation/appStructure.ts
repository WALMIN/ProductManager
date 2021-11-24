enum ProductList {
  Title = "ProductList-Title",
  Name = "ProductList-Name",
  Type = "ProductList-Type",
  Price = "ProductList-Price",
  NoProducts = "ProductList-NoProducts",
}

enum ProductItem {
  Integrated = "ProductItem-Integrated",
  Peripheral = "ProductItem-Peripheral",
  UnknownType = "ProductItem-UnknownType",
}

enum AddEditProduct {
  AddTitle = "AddEditProduct-AddTitle",
  EditTitle = "AddEditProduct-EditTitle",
  Name = "AddEditProduct-Name",
  NameNotValid = "AddEditProduct-NameNotValid",
  Price = "AddEditProduct-Price",
  PriceNotValid = "AddEditProduct-PriceNotValid",
  PriceRangeNotValid = "AddEditProduct-PriceRangeNotValid",
  ProductType = "AddEditProduct-ProductType",
  Integrated = "AddEditProduct-Integrated",
  Peripheral = "AddEditProduct-Peripheral",
  Save = "AddEditProduct-Save",
  Add = "AddEditProduct-Add",
  Cancel = "AddEditProduct-Cancel",
  GoBackTitle = "AddEditProduct-GoBackTitle",
  GoBackMessage = "AddEditProduct-GoBackMessage",
  GoBack = "AddEditProduct-GoBack",
}

export const tokens = {
  screens: {
    productList: ProductList,
    productItem: ProductItem,
    addEditProduct: AddEditProduct,
  },
};
