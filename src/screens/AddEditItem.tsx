import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, HelperText, RadioButton, TextInput } from "react-native-paper";
import { ProductsContext } from "../context/ProductsProvider";
import { ProductItem, StackScreens } from "../helpers/types";
import { tokens } from "../translation/appStructure";
import { translate } from "../translation/translation";

interface IProps extends NativeStackScreenProps<StackScreens, "AddEditItem"> {}
export const AddEditItem: React.FC<IProps> = (props) => {
  const params = props.route.params;

  const getTitle = () => {
    if (params.add) {
      return translate(tokens.screens.addEditProduct.AddTitle);
    } else {
      return translate(tokens.screens.addEditProduct.EditTitle);
    }
  };

  const { products, addProduct, updateProduct } = useContext(ProductsContext);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [productType, setProductType] = useState("0");

  const [invalidName, setInvalidName] = useState(false);
  const [invalidPriceRange, setInvalidPriceRange] = useState(false);

  const getPriceNotValidText = (type: number) => {
    if (type === 1) {
      return translate(tokens.screens.addEditProduct.PriceRangeNotValid);
    } else {
      return translate(tokens.screens.addEditProduct.PriceNotValid);
    }
  };

  const checkInput = () => {
    // Check name
    if (name.trim() === "") {
      setInvalidName(true);
    } else {
      setInvalidName(false);
    }

    products.filter((product: ProductItem) => {
      if (product.name.toLowerCase() === name.toLowerCase()) {
        setInvalidName(true);
      }
    });

    // Check price
    if (Number(productType) === 0 && price > 0) {
      setInvalidPriceRange(false);
    } else if (Number(productType) === 1) {
      if (price >= 1000 && price <= 2600) {
        setInvalidPriceRange(false);
      } else {
        setInvalidPriceRange(true);
      }
    } else {
      setInvalidPriceRange(true);
    }
  };

  useEffect(() => {
    setId(params.item.id);
    setName(params.item.name);
    setPrice(params.item.price);
    setProductType(String(params.item.type));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{getTitle()}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label={translate(tokens.screens.addEditProduct.Name)}
          value={name}
          onChangeText={(output) => {
            setName(output.trim());
            setInvalidName(false);
          }}
        />
        <HelperText style={styles.helper} type="error" visible={invalidName}>
          {translate(tokens.screens.addEditProduct.NameNotValid)}
        </HelperText>

        <TextInput
          style={styles.input}
          label={translate(tokens.screens.addEditProduct.Price)}
          value={String(price)}
          keyboardType="numeric"
          onChangeText={(output) => {
            setPrice(Number(output));
            setInvalidPriceRange(false);
          }}
        />
        <HelperText
          style={styles.helper}
          type="error"
          visible={invalidPriceRange}
        >
          {getPriceNotValidText(Number(productType))}
        </HelperText>

        <View style={styles.productType}>
          <RadioButton.Group
            onValueChange={(newValue) => {
              setProductType(newValue);
              setInvalidPriceRange(false);
            }}
            value={productType}
          >
            <Text style={styles.productTypeTitle}>
              {translate(tokens.screens.addEditProduct.ProductType)}
            </Text>
            <View style={styles.radioButton}>
              <RadioButton value={"0"} />
              <Text>{translate(tokens.screens.addEditProduct.Integrated)}</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value={"1"} />
              <Text>{translate(tokens.screens.addEditProduct.Peripheral)}</Text>
            </View>
          </RadioButton.Group>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => {
            checkInput();

            if (
              !invalidName &&
              !invalidPriceRange &&
              name.trim() !== "" &&
              price > 0
            ) {
              if (params.add) {
                addProduct({
                  id: products.length + 1,
                  name: name,
                  price: Number(price),
                  type: Number(productType),
                });
              } else {
                updateProduct({
                  id: id,
                  name: name,
                  price: Number(price),
                  type: Number(productType),
                });
              }

              props.navigation.navigate("ProductList");
            }
          }}
        >
          {translate(tokens.screens.addEditProduct.Save)}
        </Button>

        <Button
          onPress={() => {
            props.navigation.navigate("ProductList");
          }}
        >
          {translate(tokens.screens.addEditProduct.Cancel)}
        </Button>
      </View>
    </View>
  );
};

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
  productType: {
    flex: 1,
    top:'-41%',
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  productTypeTitle: {

    fontWeight: "bold",
    marginTop: 12,
  },
  radioButton: {
    alignItems: "center",
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    paddingHorizontal: 12,
  },
  input: {
    top:'-60%',
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
  helper: {
    width: "100%",
    marginBottom: 4,
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "flex-end",
    width: "100%",
    height: 40,
  },
});
