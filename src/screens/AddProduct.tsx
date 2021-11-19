import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddProduct() {
  return (
    <View style={styles.container}>
      <Text>AddProduct</Text>
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
