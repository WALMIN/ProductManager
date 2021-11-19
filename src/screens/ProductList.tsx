import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
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
