import * as React from "react";
import { useState, useContext } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { FAB } from "react-native-paper";
import { ProductItem, IProductItem } from "../components/ProductItem";
import { ProductsContext } from "../context/ProductsProvider";

export default function ProductList(props: any) {
  const { products } = useContext(ProductsContext);

  const render = ({ item }: { item: IProductItem }) => {
    return (
      <ProductItem
        id={item.id}
        name={item.name}
        price={item.price}
        type={item.type}
        onClick={() => {
          props.navigation.navigate("CreateNewItem");
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={render}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.fabContainer}>
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => {
            props.navigation.navigate("CreateNewItem");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fabContainer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
  },
  fab: {
    position: "absolute",
    backgroundColor: "#C12121",
    margin: 40,
    right: 0,
    bottom: 0,
  },
});
