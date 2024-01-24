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
import { LinearGradient } from "expo-linear-gradient";
import CardProductBuy from "../../components/products/CardProductBuy";

const ProductInformation = ({ route, navigation }) => {
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
      <View>
        <LinearGradient
          colors={["#40A5E7", "#40A5E7"]}
          style={styles.containerGradient}
        >
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={23} color="white" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View>
        <LinearGradient
          colors={["#40A5E7", "#161B21"]}
          style={styles.containerInformation}
        >
          <Text style={styles.hh1}>{product.tipo}</Text>
          <Text style={styles.h1}>{product.nombre}</Text>
          <View style={styles.containerProduct}>
            <View style={styles.productDetails}>
              <View style={styles.sabor}>
                <Text style={styles.h3}>SABOR</Text>
                <Text style={styles.h2}>{product.sabor}</Text>
              </View>
              <View style={styles.alcohol}>
                <Text style={styles.h3}>ALCOHOL</Text>
                <Text style={styles.h2}>{product.alcohol}%</Text>
              </View>
            </View>
            <View style={styles.productDetails}>
              <View style={styles.sabor2}>
                <Text style={styles.h3}>ML</Text>
                <Text style={styles.h2}>{product.ml}</Text>
              </View>
              <View style={styles.alcohol}>
                <Text style={styles.h3}>PRECIO</Text>
                <Text style={styles.h2}>s/{product.price}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Mezclar</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: product.image }}
            style={[styles.image, styles.absoluteImage]}
          />
        </LinearGradient>
      </View>
      <View style={styles.containerBotones}>
        <TouchableOpacity style={styles.botonComprar}>
          <Ionicons name="cart" size={24} color="#A3AABF" />
          <Text style={styles.botonText}>Agregar</Text>
        </TouchableOpacity>
        <View style={styles.botonCircularContainer}>
          <TouchableOpacity style={styles.botonCircular}>
            <Ionicons name="bookmark" size={24} color="#A3AABF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.botonCircular}>
            <Ionicons name="heart" size={24} color="#A3AABF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.producto} >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text style={styles.hh}>Productos Similares</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <CardProductBuy product={sampleProduct} />
              <CardProductBuy product={sampleProduct} />
              <CardProductBuy product={sampleProduct} />
              <CardProductBuy product={sampleProduct} />
            </ScrollView> 
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161B21",
  },
  containerGradient: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  //
  backButton: {
    marginRight: 10,
  },
  containerInformation: {
    paddingBottom: 65,
    paddingTop: 10,
    paddingLeft: 30,
  },
  hh1: {
    color: "white",
    fontSize: 26,
    fontFamily: "Montserrat_800ExtraBold",
    zIndex: 99,
  },
  hh:{
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginStart: 10,
    marginBottom: 10,
  },
  h1: {
    color: "white",
    fontSize: 48,
    fontFamily: "Montserrat_800ExtraBold",
  },
  containerProduct: {
    paddingTop: 20,
  },
  productDetails: {
    flexDirection: "row",
    marginBottom: 10,
  },
  sabor: {
    marginEnd: 50,
  },
  sabor2: {
    marginEnd: 76,
  },
  h2: {
    color: "white",
    fontSize: 22,
    fontFamily: "Montserrat_800ExtraBold",
  },
  h3: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 16,
  },
  button: {
    marginTop: 17,
    backgroundColor: "#40A5E7",
    padding: 10,
    width: 210,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat_800ExtraBold",
  },
  //
  containerBotones: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: "#161B21",
    marginBottom: 20,
  },
  botonComprar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#212834",
    borderRadius: 5,
    paddingLeft: 14,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 14,
  },
  botonText: {
    color: "#A3AABF",
    marginLeft: 10,
  },
  botonCircularContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  botonCircular: {
    backgroundColor: "#212834",
    borderRadius: 50,
    padding: 10,
    marginLeft: 10,
  },
  producto:{
    padding: 10,
  },
  //
  image: {
    width: 200,
    height: 370,
    borderRadius: 10,
    resizeMode: "cover",
    position: "absolute",
  },

  absoluteImage: {
    top: 50,
    right: -30,
  },
});

export default ProductInformation;
