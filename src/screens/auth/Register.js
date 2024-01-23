import React, { useState } from "react";
import { Alert } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import GoogleButton from "../../components/forms/GoogleButton";
import FacebookButton from "../../components/forms/FacebookButton";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import InputPassword from "../../components/forms/InputPassword";
import VerificationInput from "../../components/forms/VerificationInput ";

import { verifyEmail } from "../../api/apiLogin";
import { verifyCode } from "../../api/apiLogin";

import LoadingModal from "../../components/modals/LoadingModal";

export default function Register() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [isVerified, setIsVerified] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isReceivingCode, setIsReceivingCode] = useState(false);

  const onHandleLogin = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
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

  const handleReceiveCode = async () => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email) || !email.includes("@gmail.com")) {
      Alert.alert(
        "Error",
        "Ingresa una dirección de correo electrónico válida con '@gmail.com'."
      );
      return;
    }
    try {
      const verificationResponse = await verifyEmail(email);

      if (verificationResponse && verificationResponse.success) {
        setIsReceivingCode(true);
      } else {
        Alert.alert(
          "Error",
          "Hubo un problema al verificar el correo electrónico. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Hubo un problema al verificar el correo electrónico. Por favor, inténtalo de nuevo."
      );
    }
  };

  const handleVerficar = async () => {
    try {
      const verificationResponse = await verifyCode(verificationCode);

      if (verificationResponse && verificationResponse.success) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);

        setIsVerified(true);
        setIsCorrect(true);
      } else {
        Alert.alert(
          "Error",
          "Hubo un problema al verificar el codigo. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Hubo un problema al verificar el codigo. Por favor, inténtalo de nuevo."
      );
    }
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleLogin = () => {
    navigation.navigate("Login");
    console.log("Register success");
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
          isVerified={isReceivingCode}
        />
        {isReceivingCode ? (
          <View style={styles.formContainer2}>
            <VerificationInput
              placeholder="Ingrese el código"
              onChangeText={(text) => setVerificationCode(text)}
              value={verificationCode}
              isVerified={isVerified}
            />
            {isCorrect ? (
              <View style={styles.formContainer2}>
                <InputPassword
                  placeholder="Contraseña"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  editable={isVerified}
                />
                <InputPassword
                  placeholder="Confirma tu contraseña"
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                  editable={isVerified}
                />
                <Button
                  title="Siguiente paso"
                  onPress={() => onHandleLogin()}
                />
              </View>
            ) : (
              <Button title="Verificar" onPress={() => handleVerficar()} />
            )}
          </View>
        ) : (
          <Button title="Recibir Código" onPress={() => handleReceiveCode()} />
        )}
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
      <LoadingModal visible={loading} text={"Verificando..."} />
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
  formContainer2: {
    width: "100%",
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
