import React, { createContext, useState, FC } from "react";
import { ProductItem, ProductsContextState } from "../helpers/types";

const contextDefaultValues: ProductsContextState = {
  products: [
    {
      id: 1,
      name: "Mjölk",
      price: 1.2,
      type: 0,
    },
    {
      id: 2,
      name: "Ägg",
      price: 3.0,
      type: 1,
    },
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
