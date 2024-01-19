import React, { useState } from "react";
import { Alert } from "react-native";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import DatePickerInput from "../../components/forms/DatePickerInput";
import PhoneNumberInput from "../../components/forms/PhoneNumberInput ";


export default function RegisterTwo() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const navigation = useNavigation();
  const handleGoogleSignIn = async () => {};

  const onHandleLogin = (email, password) => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  const handleLogin = () => {
    navigation.navigate("Register");
    console.log("Register success");
  };
  const handleDateChange = (date) => {
    console.log("Selected date:", date.toISOString().split("T")[0]);
  };
  const handlePhoneNumberChange = (phoneNumber) => {
    console.log('Número de teléfono:', phoneNumber);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.h1}>Falta poco!</Text>
      <Text style={styles.h2}>Completa los campos</Text>

      <View style={styles.formContainer}>
        <Input placeholder="Nombre" />
        <Input placeholder="Apellidos" />
        <DatePickerInput onDateChange={handleDateChange} />
        <PhoneNumberInput onPhoneNumberChange={handlePhoneNumberChange} />
        <Button
          title="REGISTRATE"
          onPress={() => onHandleLogin(email, password)}
        />
      </View>
      <View style={styles.terminos}>
        <Text style={styles.h3}>Nuestros Términos y Condiciones</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

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
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 15,
    marginTop: 5,
    marginBottom: 25,
  },
  texto: {
    marginTop: 15,
  },
  h3: {
    color: "#A3AABF",
    fontSize: 13,
  },
  span: {
    color: "#40A5E7",
  },
  terminos: {
    position: "absolute",
    bottom: 90,
  },
  h3: {
    color: "#A3AABF",
    fontSize: 13,
  },
});
