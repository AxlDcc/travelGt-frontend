import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/LocationListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingRoutesScreen from "../screens/RoutesListingsScreen.js";
import MapViewScreen from "../screens/MapViewScreen";

const Stack = createStackNavigator();

const SitesNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    <Stack.Screen name="ListingRoutesScreen" component={ListingRoutesScreen} />
  </Stack.Navigator>
);

export default SitesNavigator;
