import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import CardProduct from "../../components/products/CardProduct";
import SearchInput from "../../components/forms/SearchInput";
import Footer from "../../components/utils/Footer";
import { useUser } from "../../components/utils/UserContext";
import {
  getBestSellers,
  getRecommended,
  getPartyWeapon,
} from "../../api/apiProduct";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [bestSellers, setBestSellers] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [partyWeapon, setPartyWeapon] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos"); 

  const { userData } = useUser();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response1 = await getBestSellers(100);
        const response2 = await getRecommended(100);
        // const response3 = await getPartyWeapon(3);

        if (Array.isArray(response1.data)) {
          setBestSellers(response1.data);
          setPartyWeapon(response1.data);
        }
        if (Array.isArray(response2.data)) {
           setRecommended(response2.data);
         }
        // if (Array.isArray(response3.data)) {
        //   setPartyWeapon(response3.data);
        // } else {
        //   console.error("Error, no es un arreglo los productos");
        // }
      } catch (error) {
        console.error("No se encontro productos, api error:", error.message);
      }
    };

    fetchBestSellers();
  }, []);

  const handleProductClick = (product) => {
    navigation.navigate("Information", { product });
  };

  return (
    <View style={styles.Container}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <Icon name="bell" size={22} color="#fff" />
            </TouchableOpacity>
            <View style={styles.profileImageContainer}>
              <Image
                source={{
                  uri: `${userData.ProfileImage}?v=${userData.ProfileImageVersion}`,
                }}
                style={styles.profileImage}
              />
            </View>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.enlaces}
          >
            {["Todos", "Whisky", "Pisco", "Ron", "Vinos", "Enlatados", "Refrescos"].map(category => (
              <TouchableOpacity
                key={category}
                style={[styles.enlace, { backgroundColor: selectedCategory === category ? '#40A5E7' : '#141B20' }]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={[styles.h2, { color: selectedCategory === category ? '#fff' : '#fff' }]}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.separatorLine}></View>
      {selectedCategory === "Todos" && (
        <View style={styles.scrollVerticalContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollVertical}
          >
            <View>
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
            </View>
            <View>
              <View style={styles.content}>
                <Text style={styles.h3}>Recomendado</Text>
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
            </View>
            <View>
              <View style={styles.content}>
                <Text style={styles.h3}>Arma tú propia fiesta</Text>
                <Icon name="arrow-right" size={22} color="#fff" />
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.enlaces}
              >
                {partyWeapon.map((product) => (
                  <CardProduct
                    key={product.IdProduct}
                    product={product}
                    onPress={() => handleProductClick(product)}
                  />
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      )}
      <View style={styles.absoluteIconsContainer}>
        <Footer iconName="home" selectedIcon={"home"} />
        <Footer iconName="comments" selectedIcon={null} />
        <Footer iconName="star" selectedIcon={null} />
        <Footer iconName="shopping-cart" selectedIcon={null} />
        <Footer iconName="user" selectedIcon={null} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#141B20",
  },
  headerContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInputContainer: {
    flex: 1,
    paddingEnd: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImageContainer: {
    borderRadius: 50,
    overflow: "hidden",
    marginLeft: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  separatorLine: {
    borderBottomColor: "#74797c",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  //
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
  h2: {
    color: "#fff",
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
    position: "relative",
    paddingEnd: 12,
    paddingStart: 12,
    flex: 8,
    paddingBottom: 80,
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
