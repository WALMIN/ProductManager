import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export interface IProductItem {
  id: number;
  name: string;
  price: number;
  type: number;
}

interface IProductItemComponent extends IProductItem {
  onClick: () => void;
}

export const ProductItem: React.FC<IProductItemComponent> = (props) => {
  return (
    <Pressable style={styles.container} onPress={props.onClick}>
      <View style={styles.item}>
        <Text>{props.name}</Text>
        <Text>{props.price}</Text>
        <Text>{props.type}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});
