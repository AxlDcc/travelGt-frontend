import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

function RegionScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );
  //const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    loadListings();
  }, []);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.Id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.Name}
            imageUrl={item.ImageUrl}
            onPress={() => navigation.navigate(routes.REGIONLIST, item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => console.log("peru")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default RegionScreen;
