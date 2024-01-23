import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  useFonts,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { KeyboardAvoidingView } from "react-native";

import InputTwo from "../../components/forms/InputTwo";
import Button from "../../components/forms/Button";

import { useUser } from "../../components/utils/UserContext";
import LoadingModal from "../../components/modals/LoadingModal";

const EditPerfil = () => {
  const { userData } = useUser();
  const [loading, setLoading] = useState(false);

  const [usuario, setUsuario] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [image, setImage] = useState(null);

  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permiso denegado para acceder a la galería de imágenes.");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  if (!fontsLoaded) {
    return null;
  }
  const MAX_CARACTERES = 40;

  const handleDescripcionChange = (text) => {
    if (text.length <= MAX_CARACTERES) {
      setDescripcion(text);
    }
  };
  const onHandleUpdate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.editButton} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.profileImage} />
            ) : (
              <Image
                source={{ uri: userData.profileImage }}
                style={styles.profileImage}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.labelFoto}>Cambiar foto</Text>
        </View>
        <View style={styles.containerForm}>
          <Text style={styles.labelTu}>Aserca de ti</Text>
          <View style={styles.formSection}>
            <Text style={styles.label}>Nombre de usuario</Text>
            <InputTwo
              placeholder="Usuario"
              onChangeText={(text) => setUsuario(text)}
              value={userData.firstName}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.label}>Apellidos</Text>
            <InputTwo
              placeholder="Apellidos"
              onChangeText={(text) => setApellidos(text)}
              value={userData.lastName}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.label}>Descripción Corta</Text>
            <InputTwo
              placeholder="Descripción"
              onChangeText={handleDescripcionChange}
              value={descripcion}
            />
            <Text style={styles.caracteresRestantes}>
              {MAX_CARACTERES - descripcion.length} caracteres restantes
            </Text>
          </View>
        </View>
        <View style={styles.containerButon}>
          <Button
            title="Actualizar Perfil"
            onPress={() => onHandleUpdate()}
          />
        </View>
      </View>
      <LoadingModal visible={loading} text={"Actualizando..."} />
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
  profileContainer: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  containerForm: {
    width: "80%",
  },
  containerButon: {
    width: "85%",
    marginBottom: 90,
  },
  formSection: {
    marginBottom: 10,
  },
  caracteresRestantes: {
    fontSize: 12,
    color: "#8c8c8c",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
  },
  labelFoto: {
    color: "#a6a6a6",
    fontSize: 16,
    marginBottom: 8,
  },
  labelTu: {
    color: "#40A5E7",
    fontSize: 16,
    marginBottom: 8,
  },
});

export default EditPerfil;
