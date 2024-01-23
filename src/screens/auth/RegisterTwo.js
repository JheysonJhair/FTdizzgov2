import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import DatePickerInput from "../../components/forms/DatePickerInput";
import PhoneNumberInput from "../../components/forms/PhoneNumberInput ";
import { useRoute } from "@react-navigation/native";
import { registerUser } from "../../api/apiLogin";

export default function RegisterTwo() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  const email = route.params?.email || "";
  const password = route.params?.password || "";

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [telefono, setTelefono] = useState("");

  const onHandleRegister = async () => {
    if (!nombre || !apellidos || !fechaNacimiento || !telefono) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }
    const phoneNumberRegex = /^\+51\d{9}$/;

    if (!phoneNumberRegex.test(telefono)) {
      Alert.alert("Error", "El número de teléfono debe tener 9 dígitos.");
      return;
    }

    try {
      const response = await registerUser({
        email,
        password,
        firstName: nombre,
        lastName: apellidos,
        birthDate: fechaNacimiento,
        phoneNumber: telefono,
        profileImage:
          "https://i.pinimg.com/736x/4b/a3/43/4ba343a87d8da59e1e4d0bdf7dc09484.jpg",
      });
      if (response.status === 201) {
        Alert.alert("Registrado!", "Usted se registró correctamente!");
        navigation.navigate("Login");
      } else {
        console.error(
          "Error en la solicitud de registro: Código de estado",
          response.status
        );
      }
    } catch (error) {
      console.error("Error en la solicitud de registro", error);
    }
  };

  const handleDateChange = (date) => {
    console.log("Selected date:", date.toISOString().split("T")[0]);
    setFechaNacimiento(date);
  };
  const handlePhoneNumberChange = (phoneNumber) => {
    console.log("Número de teléfono:", phoneNumber);
    setTelefono(phoneNumber);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.h1}>Falta poco!</Text>
      <Text style={styles.h2}>Completa los campos</Text>

      <View style={styles.formContainer}>
        <Input
          placeholder="Nombre"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
        <Input
          placeholder="Apellidos"
          value={apellidos}
          onChangeText={(text) => setApellidos(text)}
        />
        <DatePickerInput onDateChange={handleDateChange} />
        <PhoneNumberInput onPhoneNumberChange={handlePhoneNumberChange} />
        <Button title="REGISTRATE" onPress={() => onHandleRegister()} />
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
    bottom: 30,
  },
  h3: {
    color: "#A3AABF",
    fontSize: 13,
  },
});
