import React, { useState } from "react";
import { Alert } from "react-native";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GoogleButton from "../../components/forms/GoogleButton";
import FacebookButton from "../../components/forms/FacebookButton";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import InputPassword from "../../components/forms/InputPassword";

export default function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onHandleLogin = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email) || !email.includes("@gmail.com")) {
      Alert.alert(
        "Error",
        "Ingresa una dirección de correo electrónico válida con '@gmail.com'."
      );
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }
    if (password.length < 8) {
      Alert.alert("Error", "La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    navigation.navigate("RegisterTwo", { email, password });
    clearForm();
  };

  const handleLogin = () => {
    navigation.navigate("Login");
    console.log("Register success");
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.h1}>DIZZGO</Text>
      <Text style={styles.h2}>Crea tu nueva cuenta</Text>

      <View style={styles.formContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <InputPassword
          placeholder="Contraseña"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <InputPassword
          placeholder="Confirma tu contraseña"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <Button title="Siguiente paso" onPress={() => onHandleLogin()} />
      </View>

      <View style={styles.texto}>
        <Text style={styles.h3}>
          Tienes cuenta?{" "}
          <Text style={styles.span} onPress={handleLogin}>
            Iniciar Sesión
          </Text>
        </Text>
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine}></View>
      </View>
      <View style={styles.socialButtonsContainer}>
        <GoogleButton
          onPress={() => console.log("Botón de Google presionado")}
        />
        <FacebookButton
          onPress={() => console.log("Botón de Facebook presionado")}
        />
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
  //Linea
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  dividerLine: {
    width: "32%",
    height: 1,
    backgroundColor: "#fff",
  },
  dividerText: {
    color: "#fff",
    marginHorizontal: 10,
    fontFamily: "Montserrat_800ExtraBold",
  },
  //Google y Facebook
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    width: "95%",
  },
});
