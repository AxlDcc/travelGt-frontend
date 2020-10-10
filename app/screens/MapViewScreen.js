import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";

function MapViewScreen({ route, navigation }) {
  const listing = route.params;
  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const GOOGLE_MAPS_APIKEY = "AIzaSyC331MS9hMAdH-FUCoueWMgIOas2ei5Udo";
  const location = useLocation();
  console.log(listing);
  return (
    <Screen>
      <MapView
        style={styles.mapStyle}
        provider="google"
        showsUserLocation
        region={{
          latitude: location ? location.latitude : 14.5053015,
          longitude: location ? location.longitude : -90.5725657,
          longitudeDelta: LATITUDE_DELTA,
          latitudeDelta: LONGITUDE_DELTA,
        }}
      ></MapView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: "100%",
    height: "100%",
  },
});

export default MapViewScreen;
