import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProductCard = ({ product, onPress }) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={getGradientColors(product.sabor)}
          style={styles.card}
        >
          <View style={styles.content}>
            <Text style={styles.h1}>{product.nombre}</Text>
            <Text style={styles.h2}>Sabor: {product.sabor}</Text>
            <Text style={styles.h3}>s/{product.price}</Text>
          </View>
        </LinearGradient>
        <Image source={{ uri: product.image }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const getGradientColors = (sabor) => {
  switch (sabor) {
    case "blue":
      return ["#0635a3", "#0686a0"];
    case "red":
      return ["#FF1493", "#FF4500"];
    case "neutral":
      return ["#FFFACD", "#D3D3D3"];
    case "aple":
      return ["#013317", "#8aad99"];
    default:
      return ["#b9bac9", "#71727f"];
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 6,
    position: "relative",
    alignItems: "center",
  },
  card: {
    width: 130,
    height: 170,
    borderRadius: 8,
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
    marginTop: -10,
    marginLeft: 25,
    position: "absolute",
    zIndex: 3,
  },
  content: {
    paddingTop: 100,
    alignItems: "center",
    position: "absolute",
    zIndex: 2,
    width: "100%",
  },
  h1: {
    fontSize: 17,
    color: "#000",
    fontFamily: "Montserrat_800ExtraBold",
    textAlign: "center",
  },
  h2: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
  },
  h3: {
    fontSize: 12,
    color: "#000",
    fontFamily: "Montserrat_800ExtraBold",
    marginLeft: "auto",
    marginTop: 2,
    textAlign: "center",
    marginEnd: 30,
  },
});

export default ProductCard;
