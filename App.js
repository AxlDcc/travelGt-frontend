import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import chartsScreen from "./app/screens/ChartsScreen";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={AppNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
