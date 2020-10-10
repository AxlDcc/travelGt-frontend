import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";
import Button from "../components/Button";
import routes from "../navigation/routes";

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;
  console.log(listing);

  return (
    <View>
      <Image style={styles.image} source={{ uri: listing.UrlImg }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.Name}</Text>
        <Text style={styles.price}>{listing.Category.Name}</Text>
        <View style={styles.userContainer}></View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Ir al destino"
          onPress={() => navigation.navigate(routes.ROUTESLIST, listing)}
        />
        <Button
          title="Hoteles"
          color="secondary"
          onPress={() => console.log("Taringa")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
