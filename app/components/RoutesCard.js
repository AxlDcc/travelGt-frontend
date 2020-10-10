import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";
import { ListItemSeparator } from "./lists";

function RoutesCard({ title, subTitle, time, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={require("../assets/route-card.png")}
        />
        <ListItemSeparator height={3} />
        <View style={styles.detailsContainer}>
          <Text style={styles.time} numberOfLines={1}>
            {time}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: "100%",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    flex: 1,
  },
  time: {
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default RoutesCard;
