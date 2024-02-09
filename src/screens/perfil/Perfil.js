import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  useFonts,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import CardProduct from "../../components/products/CardProduct";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../components/utils/Footer";
import { updateProfileImage } from "../../api/apiPerfil";

import StatusModal from "../../components/modals/StatusModal ";
import { useUser } from "../../components/utils/UserContext";

const Perfil = () => {
  const { userData, setUserInfo } = useUser();
  const [selectedButton, setSelectedButton] = useState("bookmark");
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalStatus, setModalStatus] = useState("error");
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
  });
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
  const sampleProduct1 = {
    Name: "Four Loko ",
    Flavor: "blue",
    PriceProduct: 12,
    ImgProduct:
      "https://res.cloudinary.com/dfbgjpndh/image/upload/v1706714687/wpib0gexhzwuorgemb76.png",
  };
  const sampleProduct2 = {
    Name: "Everrs ",
    Flavor: "Neutral",
    PriceProduct: 5,
    ImgProduct:
      "https://res.cloudinary.com/dfbgjpndh/image/upload/v1706714687/wpib0gexhzwuorgemb76.png",
  };

  const selectedProduct =
    selectedButton === "bookmark" ? sampleProduct1 : sampleProduct2;

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.editButton} onPress={pickImage}>
          {image ? (
            <>
              <Image source={{ uri: image }} style={styles.profileImage} />
              <View style={styles.editIconContainer}>
                <Icon name="plus" size={20} color="#fff" />
              </View>
            </>
          ) : (
            <>
              <Image
                source={{ uri: userData.ProfileImage }}
                style={styles.profileImage}
              />
              <View style={styles.editIconContainer}>
                <Icon name="plus" size={20} color="#fff" />
              </View>
            </>
          )}
        </TouchableOpacity>

        <Text style={styles.profileName}>
          @
          {userData.UserName ||
            userData.FirstName.replace(/\s+/g, "").toLowerCase() +
              userData.LastName.split(" ")[0].replace(/\s+/g, "").toLowerCase()}
        </Text>

        <Text style={styles.profileDescription}>
          {userData.Description ||
            "Experimenté soledad en un vaso, sin encontrar la compañía que esperada."}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("EditPerfil")}
          style={styles.editProfileButton}
        >
          <Text style={styles.editProfileButtonText}>Editar perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          onPress={() => setSelectedButton("bookmark")}
          style={[
            styles.button,
            selectedButton === "bookmark" && styles.selectedButton,
          ]}
        >
          <Icon
            name="bookmark"
            size={24}
            color={selectedButton === "bookmark" ? "#40A5E7" : "#FFFFFF"}
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedButton("heart")}
          style={[
            styles.button,
            selectedButton === "heart" && styles.selectedButton,
          ]}
        >
          <Icon
            name="heart"
            size={24}
            color={selectedButton === "heart" ? "#40A5E7" : "#FFFFFF"}
            style={styles.heartIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.scrollVerticalContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollVertical}
        >
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.enlaces}
            >
              <CardProduct product={selectedProduct} />
              <CardProduct product={selectedProduct} />
              <CardProduct product={selectedProduct} />
              <CardProduct product={selectedProduct} />
            </ScrollView>
          </View>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.enlaces}
            >
              <CardProduct product={selectedProduct} />
              <CardProduct product={selectedProduct} />
              <CardProduct product={selectedProduct} />
              <CardProduct product={selectedProduct} />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <StatusModal
        visible={modalVisible}
        status={modalStatus}
        text={text}
        text2={text2}
      />
      <View style={styles.absoluteIconsContainer}>
        <Footer iconName="home" selectedIcon={null} />
        <Footer iconName="comments" selectedIcon={null} />
        <Footer iconName="star" selectedIcon={null} />
        <Footer iconName="shopping-cart" selectedIcon={null} />
        <Footer iconName="user" selectedIcon={"user"} />
      </View>
    </View>
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
    marginTop: 20,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  editButton: {
    position: "relative",
  },
  editIconContainer: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#40A5E7",
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#161B21",
  },

  editIcon: {
    color: "#fff",
    fontWeight: "bold",
  },

  profileName: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 24,
    color: "#ffffff",
    marginTop: 10,
  },
  profileDescription: {
    color: "#ffffff",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  editProfileButton: {
    backgroundColor: "#3b4959",
    paddingRight: 14,
    paddingLeft: 14,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5,
    marginTop: 20,
  },
  editProfileButtonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  //
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  h3: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  scrollVerticalContainer: {
    paddingTop: 10,
    position: "relative",
    paddingEnd: 5,
    paddingStart: 5,
    flex: 8,
    paddingBottom: 80,
  },
  //
  containerButtons: {
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  bookmarkIcon: {
    marginRight: 20,
  },
  selectedButton: {
    color: "#40A5E7",
    borderRadius: 5,
  },
  //
  absoluteIconsContainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#161B21",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#74797c",
  },
});

export default Perfil;
