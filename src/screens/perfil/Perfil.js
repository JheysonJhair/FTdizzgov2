import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";

import CardProduct from "../../components/products/CardProduct";
import Footer from "../../components/utils/Footer";

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
        setText("Actualizado con éxito");
        setText2("¡Su perfil se subió exitosamente!");
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
    Name: "Johnnie Walker",
    Flavor: "Red label",
    PriceProduct: 64.9,
    ImgProduct:
      "https://res.cloudinary.com/dfbgjpndh/image/upload/v1706936662/Whiskys/lk6iniw9x8s8wsfqw5to.png",
  };
  const sampleProduct2 = {
    Name: "Johnnie Walker",
    Flavor: "Double Black",
    PriceProduct: 234.9,
    ImgProduct:
      "https://res.cloudinary.com/dfbgjpndh/image/upload/v1706932744/Whiskys/x0g3jzoakf6cohekbwit.png",
  };

  const selectedProduct =
    selectedButton === "bookmark" ? sampleProduct1 : sampleProduct2;
  const handleProductClick = (product) => {
    navigation.navigate("Information", { product });
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
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
                userData.LastName.split(" ")[0]
                  .replace(/\s+/g, "")
                  .toLowerCase()}
          </Text>

          <Text style={styles.profileDescription}>
            {userData.Description ||
              "Experimenté soledad en un vaso, sin encontrar la compañía que esperaba."}
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.cardContainer}>
            <CardProduct
              key={selectedProduct.IdProduct}
              product={selectedProduct}
              onPress={() => handleProductClick(selectedProduct)}
              style={styles.cardItem}
            />
            <CardProduct
              key={selectedProduct.IdProduct}
              product={selectedProduct}
              onPress={() => handleProductClick(selectedProduct)}
              style={styles.cardItem}
            />
            <CardProduct
              key={selectedProduct.IdProduct}
              product={selectedProduct}
              onPress={() => handleProductClick(selectedProduct)}
              style={styles.cardItem}
            />
            <CardProduct
              key={selectedProduct.IdProduct}
              product={selectedProduct}
              onPress={() => handleProductClick(selectedProduct)}
              style={styles.cardItem}
            />
            <CardProduct
              key={selectedProduct.IdProduct}
              product={selectedProduct}
              onPress={() => handleProductClick(selectedProduct)}
              style={styles.cardItem}
            />
            <CardProduct
              key={selectedProduct.IdProduct}
              product={selectedProduct}
              onPress={() => handleProductClick(selectedProduct)}
              style={styles.cardItem}
            />
            <CardProduct
              key={selectedProduct.IdProduct}
              product={selectedProduct}
              onPress={() => handleProductClick(selectedProduct)}
              style={styles.cardItem}
            />
            <CardProduct
              key={selectedProduct.IdProduct}
              product={selectedProduct}
              onPress={() => handleProductClick(selectedProduct)}
              style={styles.cardItem}
            />
            <CardProduct
              key={selectedProduct.IdProduct}
              product={selectedProduct}
              onPress={() => handleProductClick(selectedProduct)}
              style={styles.cardItem}
            />
          </View>
        </ScrollView>
        <StatusModal
          visible={modalVisible}
          status={modalStatus}
          text={text}
          text2={text2}
        />
      </ScrollView>
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
  scrollVerticalContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 52,
  },
  absoluteIconsContainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#161B21",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 13,
    borderTopWidth: 1,
    borderTopColor: "#74797c",
  },
  content: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 52,
  },
  cardContainer: {
    width: "95%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardItem: {
    width: "30%",
  },
});

export default Perfil;
