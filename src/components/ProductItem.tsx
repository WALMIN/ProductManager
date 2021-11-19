import React = require('react');
import { StyleSheet, Text, View } from 'react-native';

export default function ProductItem() {
  return ( 
    <View style={styles.container}>
      <Text>ProductItem</Text>
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
