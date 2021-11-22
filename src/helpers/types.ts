export type StackScreens = {
  ProductList: undefined;
  CreateNewItem: undefined;
};

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  type: number;
}

export type ProductsContextState = {
  products: ProductItem[];
  addProduct: (product: ProductItem) => void;
};
