import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { loginUser } from "../../api/apiLogin";
import { useUser } from "../../components/utils/UserContext";

const Load = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_400Regular_Italic,
  });
  const [showLogo, setShowLogo] = useState(true); // Estado para controlar la visibilidad del logo

  const { setUserInfo } = useUser();

  const retrieveUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem("userData");
      if (userData !== null) {
        const { email: savedEmail, password: savedPassword } =
          JSON.parse(userData);

        const user = await loginUser(savedEmail, savedPassword);
        if (user.msg === "Ingreso correctamente") {
          setUserInfo({
            IdUser: user.value.IdUser,
            FirstName: user.value.FirstName,
            LastName: user.value.LastName,
            BirthDate: user.value.BirthDate,
            Phone: user.value.Phone,
            ProfileImage: user.value.ProfileImage,
            UserName: user.value.UserName,
            Description: user.value.Description,
          });
          navigation.navigate("Home");
        } else {
          navigation.navigate("Welcome");
        }
      } else {
        navigation.navigate("Welcome");
      }
    } catch (error) {
      console.error("Error al recuperar datos de usuario:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false); // Ocultar el logo después de 2 segundos
      retrieveUserData(); // Llamar a la función para recuperar los datos del usuario
    }, 2000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, [navigation]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Text animation="flipInX" style={styles.containerLogoText}>
          DIZZGO
        </Animatable.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  containerLogo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogoText: {
    color: "#fff",
    fontSize: 38,
    fontFamily: "Montserrat_800ExtraBold",
  },
});

export default Load;
