import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  useFonts,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

import TextArea from "../../components/forms/TextArea";
import InputTwo from "../../components/forms/InputTwo";
import Button from "../../components/forms/Button";

import { useUser } from "../../components/utils/UserContext";
import StatusModal from "../../components/modals/StatusModal ";
import { updateProfile } from "../../api/apiPerfil";
import { updateProfileImage } from "../../api/apiPerfil";
const EditPerfil = () => {
  const { userData, setUserInfo } = useUser();

  const [initialUsuario, setInitialUsuario] = useState(
    userData.UserName ||
      userData.FirstName.replace(/\s+/g, "").toLowerCase() +
        userData.LastName.split(" ")[0].replace(/\s+/g, "").toLowerCase()
  );
  const [initialDescripcion, setInitialDescripcion] = useState(
    userData.Description ||
      "Experimenté soledad en un vaso, sin encontrar la compañía que esperada."
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [modalStatus, setModalStatus] = useState("error");
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const [usuario, setUsuario] = useState(initialUsuario);
  const [descripcion, setDescripcion] = useState(initialDescripcion);
  const [image, setImage] = useState(null);
  const MAX_CARACTERES = 71;

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

    if (!result.cancelled) {
      const formData = new FormData();
      formData.append("file", {
        uri: result.uri,
        type: "image/jpeg",
        name: "file",
      });

      const updateResult = await updateProfileImage(userData.IdUser, formData);

      if (updateResult.success) {
        setImage(result.uri);
        setModalStatus("success");
        setModalVisible(true);
        setText("Actualizado con exito");
        setText2("Su perfil se subió exitosamente!.");
        setTimeout(() => {
          setModalVisible(false);
        }, 2000);
        setUserInfo({ ...userData, ProfileImage: result.uri });
      } else {
        console.error(
          "Error al actualizar la imagen de perfil:",
          updateResult.error
        );
      }
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  const handleUsuarioChange = (text) => {
    setUsuario(text);
  };

  const handleDescripcionChange = (text) => {
    if (text.length <= MAX_CARACTERES) {
      setDescripcion(text);
    }
  };

  const onHandleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("UserName", usuario);
      formData.append("Description", descripcion);
      formData.append("IdUser", userData.IdUser);

      const { success, error } = await updateProfile(formData);

      if (success) {
        setUserInfo({
          ...userData,
          UserName: usuario,
          Description: descripcion,
        });
        setModalStatus("loading");
        setModalVisible(true);
        setText("Verificando...");
        setText2(
          "Recuerda que no podrás cambiar el nombre de usuario pasado 7 días."
        );
      } else {
        setModalStatus("error");
        setModalVisible(true);
        setText("Opps! algo salió mal");
        setText2("Intentalo mas tarde porfavor.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
    }
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
                source={{ uri: userData.ProfileImage }}
                style={styles.profileImage}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.labelFoto}>Cambiar foto</Text>
        </View>
        <View style={styles.containerForm}>
          <Text style={styles.labelTu}>Acerca de ti</Text>
          <View style={styles.formSection}>
            <Text style={styles.label}>Nombre de usuario</Text>
            <InputTwo
              placeholder="Usuario"
              onChangeText={handleUsuarioChange}
              value={usuario}
            />
          </View>
          <View style={styles.formSection}>
            <Text style={styles.label}>Descripción Corta</Text>
            <TextArea
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
          <Button title="Actualizar Perfil" onPress={onHandleUpdate} />
        </View>
      </View>
      <StatusModal
        visible={modalVisible}
        status={modalStatus}
        text={text}
        text2={text2}
      />
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