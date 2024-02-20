import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import InputThree from "../../components/forms/InputThree";
import Button from "../../components/forms/Button";

function ActivateLocation() {
  const [location, setLocation] = useState("");
  const [showButton, setShowButton] = useState(false);
  const navigation = useNavigation();

  const handleLocationChange = (text) => {
    setLocation(text);
    setShowButton(text.trim().length > 0);
  };

  const handleContinue = () => {
    console.log("Ubicacion " + location);
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agrega tu ubicación o escoge una</Text>
      <InputThree
        placeholder="Ingresa una dirección de entrega"
        onChangeText={handleLocationChange}
        value={location}
      />

      <TouchableOpacity onPress={() => navigation.navigate("userLocation")}>
        <View style={styles.locationContainer}>
          <View style={styles.iconContainer}>
            <Icon name="map-marker" size={20} color="#A3AABF" />
          </View>
          <Text style={styles.locationText}>Activar mi ubicación</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.line}></View>
      <Text style={styles.deliveryText}>
        A esta dirección te entregaremos tu pedido
      </Text>

      {showButton && <Button title="Continuar" onPress={handleContinue} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 20,
    flex: 1,
    backgroundColor: "#161B21",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "Montserrat_800ExtraBold",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  continueButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "blue",
    marginRight: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  iconContainer: {
    backgroundColor: "#212834",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    fontFamily: "Montserrat_800ExtraBold",
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 10,
  },
  deliveryText: {
    marginTop: 10,
    marginBottom: 15,
    color: "#FFFFFF",
    textAlign: "center",
  },
  line: {
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    height: 1,
    width: "100%",
  },
});

export default ActivateLocation;
