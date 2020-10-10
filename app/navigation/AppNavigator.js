import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import SitesNavigator from "./SitesNavigator";
import RegionNavigator from "./RegionNavigator";
import MapNavigator from "./MapNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Top"
      component={SitesNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="fire" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Mapa"
      component={MapNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="find" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Region"
      component={RegionNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="map" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
