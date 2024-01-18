import React, { useState } from "react";
import { Alert } from "react-native";
import Checkbox from "expo-checkbox";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import InputPassword from "../../components/forms/InputPassword";

export default function Login() {
  const navigation = useNavigation();

  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleGoogleSignIn = async () => {};
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const onHandleLogin = (email, password) => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };
  const handleLogin = async () => {
    navigation.navigate("ProductCard", {
      userName: user.firstName,
      imgPerfil: user.profileImage,
    });
  };

  const handleRegister = () => {
    navigation.navigate("Register");
    console.log("Register success");
  };

  const handleForgotPassword = () => {
    console.log("Olvidaste tu contraseña?");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.h1}>DIZZGO</Text>
      <Text style={styles.h2}>Inicia Sesión para continuar</Text>

      <View style={styles.formContainer}>
        <Input placeholder="Email" />
        <InputPassword placeholder="Contraseña" />
        <View style={styles.checkboxContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.izquierda}>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />
              <Text style={styles.checkboxLabel}>Recuérdame</Text>
            </View>
            <View style={styles.derecha}>
              <Text
                style={styles.forgotPassword}
                onPress={handleForgotPassword}
              >
                Olvidaste tu contraseña?
              </Text>
            </View>
          </View>
        </View>
        <Button
          title="Ingresar"
          onPress={() => onHandleLogin(email, password)}
        />
      </View>

      <View style={styles.texto}>
        <Text style={styles.h3}>
          No tienes cuenta?{" "}
          <Text style={styles.span} onPress={handleRegister}>
            Registrate
          </Text>
        </Text>
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine}></View>
      </View>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={handleGoogleSignIn}
        >
          <Text style={styles.socialButtonText}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>F</Text>
        </TouchableOpacity>
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
  //checkboxContainer
  checkboxContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
  },
  izquierda: {
    flexDirection: "row",
    alignItems: "center",
  },
  derecha: {
    width: 200,
    alignItems: "flex-end",
  },
  checkboxLabel: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 5,
  },
  forgotPassword: {
    color: "#fff",
    fontSize: 13,
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
  socialButton: {
    backgroundColor: "#40A5E7",
    borderRadius: 25,
    marginEnd: 4,
    marginStart: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  socialButtonText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Montserrat_800ExtraBold",
  },
});
