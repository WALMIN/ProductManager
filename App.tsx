import React from "react";
import { AddEditItem } from "./src/screens/AddEditItem";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreens } from "./src/helpers/types";
import { ProductList } from "./src/screens/ProductList";
import { tokens } from "./src/translation/appStructure";
import { setI18nConfig, translate } from "./src/translation/translation";
import ProductsProvider from "./src/context/ProductsProvider";
import { StatusBar } from "react-native";

export default function App() {
  setI18nConfig();
  const Stack = createNativeStackNavigator<StackScreens>();

  return (
    <ProductsProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen
            name="ProductList"
            component={ProductList}
            options={{ title: translate(tokens.screens.productList.Title) }}
          />
          <Stack.Screen
            name="AddEditItem"
            component={AddEditItem}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductsProvider>
  );
}
