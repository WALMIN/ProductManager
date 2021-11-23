import { tokens } from "./appStructure";
export const english = {
  [tokens.screens.productList.Title]: "Products",
  [tokens.screens.productList.Name]: "Name",
  [tokens.screens.productList.Type]: "Type",
  [tokens.screens.productList.Price]: "Price",
  [tokens.screens.productList.NoProducts]:
    "You do not have any products. Press the red button below to add a new one.",

  [tokens.screens.productItem.Integrated]: "Integrated",
  [tokens.screens.productItem.Peripheral]: "Peripheral",
  [tokens.screens.productItem.UnknownType]: "Unknown type",

  [tokens.screens.addEditProduct.AddTitle]: "Create a new product",
  [tokens.screens.addEditProduct.EditTitle]: "Edit a product",
  [tokens.screens.addEditProduct.Name]: "Name",
  [tokens.screens.addEditProduct.NameNotValid]: "Name is not valid",
  [tokens.screens.addEditProduct.Price]: "Price",
  [tokens.screens.addEditProduct.PriceNotValid]: "Price must be above 0",
  [tokens.screens.addEditProduct.PriceRangeNotValid]:
    "Price must be between 1000 and 2600",
  [tokens.screens.addEditProduct.ProductType]: "Product type",
  [tokens.screens.addEditProduct.Integrated]: "Integrated",
  [tokens.screens.addEditProduct.Peripheral]: "Peripheral",
  [tokens.screens.addEditProduct.Save]: "Save",
  [tokens.screens.addEditProduct.Add]: "Add",
  [tokens.screens.addEditProduct.Cancel]: "Cancel",
};
