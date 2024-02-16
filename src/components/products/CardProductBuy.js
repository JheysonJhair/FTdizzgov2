import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getGradientColors } from "../utils/GradientUtils";

const ProductCardBuy = ({ product }) => {
  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={getGradientColors(product.sabor)}
        style={styles.card}
      >
        <View style={styles.content}>
          <Text style={styles.h1}>{product.Name}</Text>
          <Text style={styles.h2}>Sabor: {product.Flavor}</Text>
          <Text style={styles.h3}>s/{product.PriceProduct}</Text>
        </View>
        <View style={styles.circle}></View>
        <Ionicons sty name="star" size={9} color="white" style={styles.icon} />
        <Text style={styles.texto} >4.5</Text>
      </LinearGradient>
      <Image source={{ uri: product.ImgProduct }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 6,
    position: "relative",
    alignItems: "center",
  },
  card: {
    width: 140,
    height: 170,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
    textAlign: "center",
    zIndex: 1,
  },

  image: {
    width: 80,
    height: 120,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    transform: [{ rotate: "10deg" }],
    marginTop: -24,
    position: "absolute",
    zIndex: 3,
  },
  content: {
    paddingTop: 100,
    paddingLeft: 20,
    alignItems: "left",
    position: "absolute",
    zIndex: 2,
    width: "100%",
  },
  h1: {
    fontSize: 17,
    color: "#000",
    fontFamily: "Montserrat_800ExtraBold",
    textAlign: "left",
  },
  h2: {
    fontSize: 12,
    color: "#000",
    textAlign: "left",
  },
  h3: {
    fontSize: 12,
    color: "#000",
    fontFamily: "Montserrat_800ExtraBold",
    marginTop: 2,
    textAlign: "left",
    marginEnd: 30,
  },
  icon: {
    position: "absolute",
    bottom: 12,
    right: 32,
    zIndex: 4,
  },
  texto: {
    position: "absolute",
    bottom: 10,
    right: 15,
    zIndex: 4,
    fontSize:11,
    color: "#fff",
  },
  circle: {
    position: "absolute",
    bottom: 6,
    right: 6,
    width: 45,
    height: 20,
    borderRadius: 12,
    backgroundColor: "#212834",
    zIndex: 3,
  },
});

export default ProductCardBuy;
