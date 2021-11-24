import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import { FAB } from "react-native-paper";
import { ProductItem, IProductItem } from "../components/ProductItem";
import { ProductsContext } from "../context/ProductsProvider";
import { tokens } from "../translation/appStructure";
import { translate } from "../translation/translation";
import { useContext } from "react";
import { StackScreens } from "../helpers/types";
import { SwipeListView } from "react-native-swipe-list-view";
import { Entypo } from "@expo/vector-icons";
import { LoadingGif } from "../components/LoadingGif";

export const ProductList: React.FC<
  NativeStackScreenProps<StackScreens, "ProductList">
> = (props) => {
  const { products, deleteProduct } = useContext(ProductsContext);

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
      <SwipeListView
        ListEmptyComponent={
          <View style={styles.noContent}>
            <LoadingGif />
            <Text style={styles.firstText}>
              {translate(tokens.screens.productList.NoProducts)}
            </Text>
          </View>
        }
        data={products}
        renderItem={render}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.rowBack}>
            <Pressable>
              <Entypo
                name="trash"
                size={25}
                color="#000000"
                onPress={() => {
                  deleteProduct(data.item.id);
                }}
              />
            </Pressable>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
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
  rowBack: {
    position: "absolute",
    right: 0,
    top: "35%",
    bottom: 0,
    marginRight: 24,
    alignItems: "center",
  },
  noContent: {
    flex: 4,
    marginTop: "60%",
    marginHorizontal: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  firstText: {
    textAlign: "center",
    top: -165,
    fontSize: 25,
    fontWeight: "bold",
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
