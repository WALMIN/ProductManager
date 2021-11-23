export type StackScreens = {
  ProductList: undefined;
  AddEditItem: {
    item: ProductItem;
    add: boolean;
  };
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
  updateProduct: (product: ProductItem) => void;
};
