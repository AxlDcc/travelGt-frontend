import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import RegionScreen from "../screens/RegionScreen";
import RegionListScreen from "../screens/RegionListScreen";
import ListingRoutesScreen from "../screens/RoutesListingsScreen.js";

const Stack = createStackNavigator();

const RegionNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="RegionScreen" component={RegionScreen} />
    <Stack.Screen name="RegionListScreen" component={RegionListScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    <Stack.Screen name="ListingRoutesScreen" component={ListingRoutesScreen} />
  </Stack.Navigator>
);

export default RegionNavigator;
