import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { FAB } from "react-native-paper";
import { ProductItem, IProductItem } from "../components/ProductItem";

export default function ProductList() {
  const [clickedItem, setClickedItem] = useState<number>();

  const test: IProductItem[] = [
    {
      id: 0,
      name: "Test 0",
      price: 0,
      type: 0,
    },
    {
      id: 1,
      name: "Test 1",
      price: 1,
      type: 1,
    },
    {
      id: 2,
      name: "Test 2",
      price: 2,
      type: 2,
    },
  ];

  const render = ({ item }: { item: IProductItem }) => {
    return (
      <ProductItem
        id={item.id}
        name={item.name}
        price={item.price}
        type={item.type}
        onClick={() => setClickedItem(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={test}
        renderItem={render}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.fabContainer}>
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => console.log("Pressed")}
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
