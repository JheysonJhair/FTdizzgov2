import React, { useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { useLocation } from "../../components/utils/LocationContext ";

function MapDelivery({ route }) {
  const { latitud, longitude } = route.params;
  const { locationData } = useLocation();
console.log(locationData)
  const [origin, setOrigin] = useState({
    latitude: -13.6374022,
    longitude: -72.8999067,
  });
  const [destination, setDestination] = useState({
    latitude: -13.633595417759722,
    longitude: -72.88768925525375,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker coordinate={origin}></Marker>
        <Marker coordinate={destination}></Marker>
        <Polyline coordinates={[origin,destination]}></Polyline>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapDelivery;
