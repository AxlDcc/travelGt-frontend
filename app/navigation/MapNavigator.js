import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MapViewScreen from "../screens/MapViewScreen";

const Stack = createStackNavigator();

const MapNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MapViewScreen" component={MapViewScreen} />
  </Stack.Navigator>
);

export default MapNavigator;
