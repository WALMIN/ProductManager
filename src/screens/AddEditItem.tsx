import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, HelperText, RadioButton, TextInput, Paragraph, Dialog, Portal, Provider, IconButton } from "react-native-paper";
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
  const [price, setPrice] = useState("0");
  const [productType, setProductType] = useState("0");

  const [visible, setVisible] = useState(false);
  const [edited, setedited] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const goBack = () => {
  
     if (edited) {
       showDialog();
     } else {
       props.navigation.navigate("ProductList");
     }
  }

  const getPriceNotValidText = (type: number) => {
    if (type === 1) {
      return translate(tokens.screens.addEditProduct.PriceRangeNotValid);
    } else {
      return translate(tokens.screens.addEditProduct.PriceNotValid);
    }
  };

  const invalidNameInput = () => {
    if (name.trim() === "") {
      return false;
    } else {
      if (products.some((item) => item.name === name && item.id !== id)) {
        return true;
      } else {
        return false;
      }
    }
  };

  const invalidPriceRange = () => {
    if (Number(productType) === 0 && Number(price) > 0) {
      return false;
    } else if (Number(productType) === 1) {
      if (Number(price) >= 1000 && Number(price) <= 2600) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };
  

  useEffect(() => {
    props.navigation.setOptions({
      title: getTitle(),
      headerLeft: () => (
        <IconButton icon="arrow-left" color="#000000" onPress={() => {
         goBack()
        }}>
        </IconButton>
      ),
    });

    setId(params.item.id);
    setName(params.item.name);
    setPrice(String(params.item.price));
    setProductType(String(params.item.type));
    
  }, [edited]);
  

    
  
 

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        style={styles.input}
        label={translate(tokens.screens.addEditProduct.Name)}
        value={name}
        onChangeText={(output) => {
          setName(output.trim());
          setedited(true);
          console.log(edited);
        }}
      />
      <HelperText
        style={styles.helper}
        type="error"
        visible={invalidNameInput()}
      >
        {translate(tokens.screens.addEditProduct.NameNotValid)}
      </HelperText>

      <TextInput
        mode="outlined"
        style={styles.input}
        label={translate(tokens.screens.addEditProduct.Price)}
        value={String(price)}
        keyboardType="numeric"
        onChangeText={(output) => {
          setPrice(output);
          setedited(true);
        }}
      />
      <HelperText
        style={styles.helper}
        type="error"
        visible={invalidPriceRange()}
      >
        {getPriceNotValidText(Number(productType))}
      </HelperText>

      <View style={styles.productType}>
        <RadioButton.Group
          onValueChange={(newValue) => {
            setProductType(newValue);
            setedited(true);
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

      <Button
        style={styles.btn}
        icon="content-save-outline"
        mode="contained"
        onPress={() => {
          if (!invalidNameInput() && !invalidPriceRange()) {
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

      <Provider>
        <View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Unsaved!</Dialog.Title>
              <Dialog.Content>
                <Paragraph>You have unsaved changes</Paragraph>
                <Paragraph>Are you sure you want to go back?</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => { props.navigation.navigate('ProductList') }}>Go back</Button>
                <Button onPress={hideDialog}>Cancel</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  productType: {
    width: "100%",
  },
  productTypeTitle: {
    fontWeight: "bold",
    marginTop: 6,
  },
  radioButton: {
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    width: "100%",
  },
  helper: {
    width: "100%",
    marginBottom: 4,
  },
  btn: {
    alignSelf: "flex-start",
    marginTop: 16,
  },
});
