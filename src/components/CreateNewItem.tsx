import React, { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductsContext } from "../context/ProductsProvider";

export default function CreateNewItem() {
  const { products, addProduct } = useContext(ProductsContext);

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [productType, setproductType] = useState(0);

  let obj = {
    itemId: "",
    name: "",
    price: 0,
    productType: "",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Create New Product</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={setname}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          keyboardType="numeric"
          onChangeText={setprice}
        />
        {/* En radio button för att byta mellan integrated/periperhal */}
      </View>
      <View style={styles.saveButtonContainer}>
        <Button
          title="Save"
          onPress={() => {
            addProduct({
              id: products.length + 1,
              name: name,
              price: Number(price),
              type: productType,
            });
          }}
        />
      </View>

      <View style={styles.cancelButtonContainer}>
        <Button title="Cancel" onPress={alert} />
      </View>
    </View>
  );
  console.log(obj);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    flex: 1,
    fontSize: 30,
    marginTop: 50,
    justifyContent: "flex-start",
  },
  inputContainer: {
    justifyContent: "flex-start",
    marginStart: 1,
  },
  input: {
    justifyContent: "center",
    alignContent: "flex-start",
    marginBottom: 20,
    margin: 5,
    width: 340,
    height: 60,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
  },
  saveButtonContainer: {
    marginBottom: 10,
    alignSelf: "flex-end",
    width: 140,
    height: 40,
  },
  cancelButtonContainer: {
    marginBottom: 10,
    alignSelf: "flex-end",
    width: 140,
    height: 40,
  },
});
