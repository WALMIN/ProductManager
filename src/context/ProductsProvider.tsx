import React, { createContext, useState, FC, useEffect } from "react";
import { ProductItem, ProductsContextState } from "../helpers/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const contextDefaultValues: ProductsContextState = {
  products: [],
  addProduct: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
};

export const ProductsContext =
  createContext<ProductsContextState>(contextDefaultValues);

const ProductsProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<ProductItem[]>(
    contextDefaultValues.products
  );

  useEffect(() => {
    const init = async () => {
      const productsString = await AsyncStorage.getItem("products");
      if (productsString && productsString.length > 0) {
        setProducts(JSON.parse(productsString) as ProductItem[]);
      }
    };
    init();
  }, []);

  const addProduct = async (newProduct: ProductItem) => {
    setProducts((products) => [...products, newProduct]);
    await saveDataToAsyncStorage([...products, newProduct]);
  };

  const updateProduct = (updatedProduct: ProductItem) => {
    products.filter(async (product: ProductItem) => {
      if (product.id === updatedProduct.id) {
        product.id = updatedProduct.id;
        product.name = updatedProduct.name;
        product.price = updatedProduct.price;
        product.type = updatedProduct.type;
        setProducts([...products]);
        await saveDataToAsyncStorage([...products]);
      }
    });
  };

  const deleteProduct = async (id: Number) => {
    const newList = products.filter((item) => item.id !== id);
    setProducts(newList);
    await saveDataToAsyncStorage(newList);
  };

  const saveDataToAsyncStorage = async (value: ProductItem[]) => {
    try {
      await AsyncStorage.setItem("products", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
