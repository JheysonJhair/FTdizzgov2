import React, { useState } from "react";
import { Alert } from "react-native";
import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../../api/apiLogin";

import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import InputPassword from "../../components/forms/InputPassword";
import GoogleButton from "../../components/forms/GoogleButton";
import FacebookButton from "../../components/forms/FacebookButton";
import { useUser } from "../../components/utils/UserContext";


export default function Login() {
  const navigation = useNavigation();
  const { setUserInfo } = useUser();

  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = async (email, password) => {
    try {
      if (!email || !password) {
        Alert.alert("Campos vacíos", "Por favor, complete todos los campos.");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Alert.alert(
          "Correo electrónico inválido",
          "Ingresa un correo electrónico válido."
        );
        return;
      }

      if (!email.toLowerCase().endsWith("@gmail.com")) {
        Alert.alert(
          "Correo electrónico no válido",
          "Por favor, utiliza una cuenta de Gmail."
        );
        return;
      }
      const user = await loginUser(email, password);

      if (user) {
        setUserInfo({
          idUser: user.idUser,
          firstName: user.firstName,
          lastName: user.lastName,
          birthDate: user.birthDate,
          profileImage: user.profileImage,
        });
        const birthDate = new Date(user.birthDate);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age >= 16) {
          navigation.navigate("Home");
        } else {
          Alert.alert("Upps!", "Usted aún es menor de edad!");
        }
      } else {
        console.log("Error de ingreso!");
        Alert.alert("Error de ingreso", "Crea una cuenta, es muy rápido!");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.h1}>DIZZGO</Text>
      <Text style={styles.h2}>Inicia Sesión para continuar</Text>

      <View style={styles.formContainer}>
        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <InputPassword
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View style={styles.checkboxContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.izquierda}>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#40A5E7" : undefined}
              />
              <Text style={styles.checkboxLabel}>Recuérdame</Text>
            </View>
            <View style={styles.derecha}>
              <Text style={styles.forgotPassword}>
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
});
