import React from "react";
import { Text, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import Button from "../../components/forms/Button";
import ButtonTwo from "../../components/forms/ButtonTwo";
import {
  useFonts,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.h1}>DIZZGO</Text>
      <Text style={styles.h2}>Bienvenido!</Text>

      <View style={styles.formContainer}>
        <Button
          title="Crear Cuenta"
          onPress={() => navigation.navigate("Register")}
        />
        <ButtonTwo
          title="Ingresar"
          onPress={() => navigation.navigate("Carrito")}
        />
      </View>

      <View style={styles.terminos}>
        <Text style={styles.h3}>Nuestros Términos y Condiciones</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161B21",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  formContainer: {
    width: "80%",
  },
  h1: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 34,
    color: "#ffffff",
    marginBottom: 5,
    marginTop: 20,
  },
  h2: {
    fontFamily: "Montserrat_800ExtraBold",
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },
  terminos: {
    position: "absolute",
    bottom: 70,
  },
  h3: {
    color: "#A3AABF",
    fontSize: 13,
  },
});

export default Welcome;
