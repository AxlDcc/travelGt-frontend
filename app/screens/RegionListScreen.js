import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/listings";
import routes from "../navigation/routes";
import useApi from "../hooks/useApi";
import Screen from "../components/Screen";
import listingsApi from "../api/locations";

function RegionListScreen({ route, navigation }) {
  const region = route.params;
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getLocations
  );
  const filtered = region
    ? listings.filter((c) => c.Region.Id === region.Id)
    : [];
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={filtered}
        keyExtractor={(listing) => listing.Id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.Name}
            subTitle={item.Category.Name}
            imageUrl={item.UrlImg}
            isPopular={item.isPopular}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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

export default RegionListScreen;
