import React, { createContext, useState, FC } from "react";
import { Text } from "react-native";
import { ProductItem, ProductsContextState } from "../helpers/types";

const contextDefaultValues: ProductsContextState = {
  products: [
    

  ],
  addProduct: () => {},
  updateProduct: () => {},
};

export const ProductsContext =
  createContext<ProductsContextState>(contextDefaultValues);

const ProductsProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<ProductItem[]>(
    contextDefaultValues.products
  );

  const addProduct = (newProduct: ProductItem) =>
    setProducts((products) => [...products, newProduct]);

  const updateProduct = (updatedProduct: ProductItem) => {
    products.filter((product: ProductItem) => {
      if (product.id === updatedProduct.id) {
        product.id = updatedProduct.id;
        product.name = updatedProduct.name;
        product.price = updatedProduct.price;
        product.type = updatedProduct.type;
        setProducts([...products]);
      }
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
