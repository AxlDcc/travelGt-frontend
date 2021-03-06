import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../config/colors";

function ListItemSeparator({ height = 1 }) {
  return <View style={[styles.separator, { height: height }]} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    backgroundColor: colors.light,
  },
});

export default ListItemSeparator;
