import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputThree from "../../components/forms/InputThree";
import Button from "../../components/forms/Button";

function AskedNumber() {
  const [number, setNumber] = useState("");
  const [validNumber, setValidNumber] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const isValidNumber = /^[0-9]{9}$/.test(number);
    setValidNumber(isValidNumber);
  }, [number]);

  const handleNumberChange = (text) => {
    setNumber(text);
  };

  const handleContinue = () => {
    navigation.navigate("OrderPedido");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>Ingrese su número de celular</Text>
        <Text style={styles.title2}>
          Le llamaremos cuando su pedido este cerca
        </Text>
        <InputThree
          placeholder="Número de celular"
          onChangeText={handleNumberChange}
          value={number}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.locationContainer}>
          <Button
            title="Confirmar y ordenar pedido"
            onPress={handleContinue}
            disabled={!validNumber}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161B21",
  },
  containerInfo: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#161B21",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "Montserrat_800ExtraBold",
    marginBottom: 30,
  },
  title2: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  locationContainer: {
    padding:10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AskedNumber;
