import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, IconButton } from "react-native-paper";

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
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <View style={styles.info}>
          <Text>{props.name}</Text>
          <Text>${props.price}</Text>
          <Text>{props.type}</Text>
        </View>
        <View style={styles.spacer}></View>
        <IconButton
          style={styles.button}
          icon="chevron-right"
          color="#000000"
          size={24}
          onPress={() => {
            props.onClick;
          }}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    paddingVertical: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 6,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  info: {
    flex: 3,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  spacer: {
    flex: 1,
    width: "100%",
  },
  button: {
    flex: 1,
    alignItems: "flex-end",
  },
});
