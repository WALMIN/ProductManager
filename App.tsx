import React from "react";
import CreateNewItem from "./src/components/CreateNewItem";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreens } from "./src/helpers/types";
import ProductList from "./src/screens/ProductList";
import { tokens } from "./src/translation/appStructure";
import { setI18nConfig, translate } from "./src/translation/translation";

export default function App() {
  setI18nConfig();
  const Stack = createNativeStackNavigator<StackScreens>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ title: translate(tokens.screens.productList.Title) }}
        />
        <Stack.Screen
          name="CreateNewItem"
          component={CreateNewItem}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
