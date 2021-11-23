import React, { createContext, useState, FC } from "react";
import { Text } from "react-native";
import { ProductItem, ProductsContextState } from "../helpers/types";

const contextDefaultValues: ProductsContextState = {
  products: [
    

  ],
  addProduct: () => {},
};

export const ProductsContext =
  createContext<ProductsContextState>(contextDefaultValues);

const ProductsProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<ProductItem[]>(
    contextDefaultValues.products
  );

  const addProduct = (newProduct: ProductItem) =>
    setProducts((products) => [...products, newProduct]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
