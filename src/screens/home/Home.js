import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import CardProduct from "../../components/products/CardProduct";
import CardProductParty from "../../components/products/CardProductParty";
import SearchInput from "../../components/forms/SearchInput";
import Footer from "../../components/utils/Footer";
import { useUser } from "../../components/utils/UserContext";
import {
  getBestSellers,
  getRecommended,
  getFiltradoTipoBebida,
} from "../../api/apiProduct";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [bestSellers, setBestSellers] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [partyWeapon, setPartyWeapon] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Para ti");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const { userData } = useUser();
  const navigation = useNavigation();

  const party = {
    Name: "La combinación perfecta",
    Options: "Pack Whisky Something Special: Botella 750ml + Botella 200ml",
    PriceProduct: 220,
    Flavor: "",
    ImgProduct:
      "https://res.cloudinary.com/dfbgjpndh/image/upload/v1706714687/wpib0gexhzwuorgemb76.png",
  };

  const filterProductsByType = async (type) => {
    let typeId;
    if (type == "whisky") typeId = 0;
    else if (type == "ron") typeId = 1;
    else if (type == "pisco") typeId = 2;
    else if (type == "vinos") typeId = 4;
    else if (type == "enlatados") typeId = 5;

    try {
      const response = await getFiltradoTipoBebida(10, typeId);
      if (response.success) {
        setFilteredProducts(response.data);
      } else {
        console.error(
          "Error al filtrar productos por tipo de bebida:",
          response.error
        );
      }
    } catch (error) {
      console.error("Error al filtrar productos por tipo de bebida:", error);
    }
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (selectedCategory === "Para ti") {
          const response1 = await getBestSellers(5);
          const response2 = await getRecommended(8);
          if (Array.isArray(response1.data)) {
            setBestSellers(response1.data);
            setPartyWeapon(response1.data);
          }
          if (Array.isArray(response2.data)) {
            setRecommended(response2.data);
          }
        } else {
          await filterProductsByType(selectedCategory.toLowerCase());
        }
      } catch (error) {
        console.error("Error al obtener productos:", error.message);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleProductClick = (product) => {
    navigation.navigate("Information", { product });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <View style={styles.searchInputContainer}>
                <SearchInput
                  placeholder="Buscar licores"
                  onChangeText={(text) => setSearchQuery(text)}
                  value={searchQuery}
                />
              </View>
              <View style={styles.profileContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
                  <Icon name="bell" size={18} color="#fff" />
                </TouchableOpacity>
                <View style={styles.profileImageContainer}>
                  <TouchableOpacity onPress={toggleProfileOptions}>
                    <Image
                      source={{
                        uri: `${userData.ProfileImage}?v=${userData.ProfileImageVersion}`,
                      }}
                      style={styles.profileImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.enlaces}
              >
                {[
                  "Para ti",
                  "Whisky",
                  "Pisco",
                  "Ron",
                  "Vinos",
                  "Enlatados",
                  "Refrescos",
                ].map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={styles.enlace}
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text
                      style={[
                        styles.h2,
                        {
                          color:
                            selectedCategory === category ? "#40A5E7" : "#fff",
                          borderBottomColor:
                            selectedCategory === category ? "#40A5E7" : "#1E1E1E",
                          borderBottomWidth: 1,
                          fontWeight: "bold",
                        },
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.separatorLine}></View>
          <View style={styles.scrollVerticalContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.scrollVertical}
            >
              <View>
                {selectedCategory === "Para ti" ? (
                  <>
                    <View style={styles.content}>
                      <Text style={styles.h3}>Lo más vendido</Text>
                      <Icon name="arrow-right" size={22} color="#fff" />
                    </View>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={styles.enlaces}
                    >
                      {bestSellers.map((product) => (
                        <CardProduct
                          key={product.IdProduct}
                          product={product}
                          onPress={() => handleProductClick(product)}
                        />
                      ))}
                    </ScrollView>
                  </>
                ) : (
                  <>
                    <View style={styles.content}>
                      <Text style={styles.h3}>
                        {selectedCategory === "Para ti"
                          ? "Lo más vendido"
                          : `Bebidas con ${selectedCategory}`}
                      </Text>
                    </View>
                    <ScrollView
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={styles.scrollViewContent}
                    >
                      <View style={styles.cardContainer}>
                        {filteredProducts.map((product) => (
                          <CardProduct
                            key={product.IdProduct}
                            product={product}
                            onPress={() => handleProductClick(product)}
                            style={styles.cardItem}
                          />
                        ))}
                      </View>
                    </ScrollView>
                  </>
                )}
                {selectedCategory === "Para ti" && (
                  <>
                    <View style={styles.content}>
                      <Text style={styles.h3}>Recomendados</Text>
                      <Icon name="arrow-right" size={22} color="#fff" />
                    </View>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={styles.enlaces}
                    >
                      {recommended.map((product) => (
                        <CardProduct
                          key={product.IdProduct}
                          product={product}
                          onPress={() => handleProductClick(product)}
                        />
                      ))}
                    </ScrollView>
                    <View style={styles.content}>
                      <Text style={styles.h3}>Arma tu propia fiesta</Text>
                      <Icon name="arrow-right" size={22} color="#fff" />
                    </View>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={styles.enlaces}
                    >
                      {/* {partyWeapon.map((product) => (
                      <CardProduct
                        key={product.IdProduct}
                        product={product}
                        onPress={() => handleProductClick(product)}
                      />
                    ))} */}
                      <CardProductParty
                        key={party.IdProduct}
                        product={party}
                        onPress={() => handleProductClick(party)}
                      />
                      <CardProductParty
                        key={party.IdProduct}
                        product={party}
                        onPress={() => handleProductClick(party)}
                      />
                    </ScrollView>
                  </>
                )}
              </View>
            </ScrollView>
          </View>
          {showProfileOptions && (
            <TouchableWithoutFeedback onPress={toggleProfileOptions}>
              <View style={styles.overlay}></View>
            </TouchableWithoutFeedback>
          )}
          <View style={styles.absoluteIconsContainer}>
            <Footer iconName="home" selectedIcon={"home"} />
            <Footer iconName="comments" selectedIcon={null} />
            <Footer iconName="star" selectedIcon={null} />
            <Footer iconName="shopping-cart" selectedIcon={null} />
            <Footer iconName="user" selectedIcon={null} />
          </View>
          {showProfileOptions && (
            <TouchableWithoutFeedback onPress={toggleProfileOptions}>
              <View style={styles.profileOptionsContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("MiCodigoQR")}
                  style={styles.profileOption}
                >
                  <Icon name="qrcode" size={20} color="#000" />
                  <Text style={styles.profileOptionText}>Mi código QR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("AjustesYPrivacidad")}
                  style={styles.profileOption}
                >
                  <Icon name="gear" size={20} color="#272728" />
                  <Text style={styles.profileOptionText}>
                    Ajustes y privacidad
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141B20",
  },
  contentContainer: {
    flex: 1,
  },
  headerContainer: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInputContainer: {
    flex: 1,
    paddingRight: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImageContainer: {
    borderRadius: 40,
    overflow: "hidden",
    marginLeft: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  separatorLine: {
    borderBottomColor: "#74797c",
    borderBottomWidth: 1,
    marginTop: 5,
  },
  enlaces: {
    flexDirection: "row",
    paddingTop: 8,
  },
  enlace: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 4,
  },
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
    flex: 1,
    paddingBottom: 58,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cardContainer: {
    width: "102%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardItem: {
    width: "30%",
  },
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  profileOptionsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  profileOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    width: "90%",
    borderTopWidth: 1,
    borderTopColor: "#ededed",
  },
  profileOptionText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
