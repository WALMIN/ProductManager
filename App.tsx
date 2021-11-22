import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreens } from "./src/helpers/types";
import ProductList from "./src/screens/ProductList";
import { Title } from 'react-native-paper';
export default function App() {
  const Stack = createNativeStackNavigator<StackScreens>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{title: "Items"}}
        />
      </Stack.Navigator>
      <ProductList />
      
    </NavigationContainer>
  );
}

