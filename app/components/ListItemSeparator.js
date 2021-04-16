import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../config/colors";

function ListItemSeparator(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.light,
    width: "100%",
    height: 2,
  },
});

export default ListItemSeparator;
