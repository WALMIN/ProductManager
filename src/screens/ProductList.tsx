import * as React from "react";
import { useState, useContext } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, Text } from "react-native";
import { FAB } from "react-native-paper";
import { ProductItem, IProductItem } from "../components/ProductItem";
import { ProductsContext } from "../context/ProductsProvider";
import { tokens } from "../translation/appStructure";
import { translate } from "../translation/translation";


export default function ProductList(props: {
  navigation: { navigate: (name: string) => void };
}) {
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
        ListEmptyComponent={
          <View style={styles.noContent}>
            <Text style={styles.firstText}>{translate(tokens.screens.productList.NoProducts)}</Text>
          </View>
        }
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


  noContent: {

    flex: 4,
    marginTop: '60%',
    marginHorizontal: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },

  firstText: {

    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',


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
