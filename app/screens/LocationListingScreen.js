import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import CategoryPickerItem from "../components/CategoryPickerItem";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import listingsApi from "../api/locations";
import Picker from "../components/Picker";
import useLocation from "../hooks/useLocation";

function ListingsScreen({ navigation }) {
  const location = useLocation();

  const [values, setFieldValue] = useState();
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getCurrentListings(location)
  );

  const filtered = values
    ? listings.filter((c) => c.Category.Id === values.value)
    : listings;
  useEffect(() => {
    loadListings();
  }, []);

  const categories = [
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Cultural",
      value: 1,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Natural",
      value: 2,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Arqueológico",
      value: 4,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Playa",
      value: 5,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Volcan",
      value: 6,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Ninguno",
      value: 0,
    },
  ];

  return (
    <Screen style={styles.screen}>
      <Picker
        items={categories}
        numberOfColumns={3}
        PickerItemComponent={CategoryPickerItem}
        width="70%"
        selectedItem={values}
        onSelectItem={(item) => setFieldValue(item)}
        placeholder={"Categoria"}
      />
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

export default ListingsScreen;
