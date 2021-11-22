import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Badge, Card, IconButton } from "react-native-paper";
import { tokens } from "../translation/appStructure";
import { translate } from "../translation/translation";

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
  const getType = (id: number) => {
    if (id === 0) {
      return translate(tokens.screens.productItem.Integrated);
    } else if (id === 1) {
      return translate(tokens.screens.productItem.Peripheral);
    } else {
      return translate(tokens.screens.productItem.UnknownType);
    }
  };

  return (
    <Card.Title
      style={styles.card}
      title={props.name}
      subtitle={getType(props.type)}
      left={() => <Text>${props.price}</Text>}
      right={() => <IconButton icon="chevron-right" onPress={props.onClick} />}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
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
    elevation: 6,
  },
  content: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
