import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateNewItem from './src/components/CreateNewItem';
import ProductList from './src/screens/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      
      <CreateNewItem/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
