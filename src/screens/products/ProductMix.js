import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardProductBuy from "../../components/products/CardProductBuy";

const ProductMix = ({ route, navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };
  const { product } = route.params;
  const sampleProduct = {
    title: "Four Loko ",
    sabor: "Neutral",
    price: 12,
    image:
      "https://res.cloudinary.com/dgbtcphdn/image/upload/v1695007501/XGOO/productos/hhcdith9uikjalo0xfaz.png",
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={23} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton2}>
          <Ionicons name="cart" size={23} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.productContainer}>
          <View style={styles.valorContainer}>
            <Text  style={styles.rating2}>NombredelaMezcla</Text>
          </View>
          <Image source={{ uri: product.ImgProduct }} style={styles.image} />
          <View style={styles.contendorValores}>
            <View style={styles.valorContainer}>
              <View style={styles.ratingContainerItem2}>
                <Ionicons name="md-remove" size={26} color="#A3AABF" />
              </View>
            </View>
            <View style={styles.valorContainer}>
              <View style={styles.ratingContainerItem2}>
                <Ionicons name="ios-refresh" size={26} color="#A3AABF" />
              </View>
            </View>
            <View style={styles.valorContainer}>
              <View style={styles.ratingContainerItem2}>
                <Ionicons name="md-remove" size={26} color="#A3AABF" />
              </View>
            </View>
          </View>

          <View style={styles.contendorValores}>
            <View style={styles.valorContainer}>
              <Text style={styles.rating}>Mezcla hasta 3 productos </Text>

              <Text style={styles.valor}>{product.Name} + Everss + Hielo</Text>
            </View>
          </View>
        </View>
        <View style={styles.producto}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.subtitle}>Recomendado para ti</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <CardProductBuy product={sampleProduct} />
                <CardProductBuy product={sampleProduct} />
                <CardProductBuy product={sampleProduct} />
                <CardProductBuy product={sampleProduct} />
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>s/220.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mixButton}>
          <Text style={styles.mixButtonText}>Ordenar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161B21",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backButton2: {
    position: "absolute",
    right: 15,
    top: 12,
  },
  content: {
    flex: 1,
  },
  image: {
    width: 220,
    height: 270,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontFamily: "Montserrat_800ExtraBold",
  },

  ratingContainerItem2: {
    backgroundColor: "#212834",
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat_800ExtraBold",
    marginBottom: 10,
  },
  rating: {
    color: "#40A5E7",
  },
  rating2: {
    color: "#fff",
  },
  contendorValores: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  valorContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  valor: {
    color: "white",
    width: "70%",
    fontSize: 28,
    fontFamily: "Montserrat_800ExtraBold",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#212834",
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Montserrat_800ExtraBold",
  },
  mixButton: {
    width: 200,
    backgroundColor: "#40A5E7",
    padding: 10,
    borderRadius: 4,
  },
  mixButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat_800ExtraBold",
  },
  producto: {
    padding: 10,
  },
});

export default ProductMix;
