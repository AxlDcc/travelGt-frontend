import React from "react";
import { FlatList, StyleSheet } from "react-native";

import RoutesCard from "../components/RoutesCard";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Via CA9 SUR: Calzada Raul Aguilar Batres",
    price: "16.00 km",
    time: "25 Minutos",
  },
  {
    id: 2,
    title: "Peten random",
    price: "Monumento",
    time: "25 Minutos",
  },
];

function ListingRoutesScreen({ route, navigation }) {
  const mainObject = route.params;
  console.log(mainObject);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <RoutesCard
            title={item.title}
            subTitle={item.price}
            time={item.time}
            onPress={() =>
              navigation.navigate(routes.MAPVIEWSCREEN, mainObject)
            }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingRoutesScreen;
