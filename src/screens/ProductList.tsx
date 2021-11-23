import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { useContext } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { FAB } from "react-native-paper";
import { ProductItem, IProductItem } from "../components/ProductItem";
import { ProductsContext } from "../context/ProductsProvider";
import { StackScreens } from "../helpers/types";

export const ProductList: React.FC<
  NativeStackScreenProps<StackScreens, "ProductList">
> = (props) => {
  const { products } = useContext(ProductsContext);

  const render = ({ item }: { item: IProductItem }) => {
    return (
      <ProductItem
        id={item.id}
        name={item.name}
        price={item.price}
        type={item.type}
        onClick={() => {
          props.navigation.navigate("AddEditItem", {
            item: {
              id: item.id,
              name: item.name,
              price: item.price,
              type: item.type,
            },
            add: false,
          });
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
            props.navigation.navigate("AddEditItem", {
              item: {
                id: -1,
                name: "",
                price: 0,
                type: 0,
              },
              add: true,
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

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
