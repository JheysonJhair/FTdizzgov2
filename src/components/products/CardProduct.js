import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getGradientColors } from "../utils/GradientUtils";

const ProductCard = ({ product, onPress }) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={getGradientColors(product.Flavor)}
          style={styles.card}
        >
          <View style={styles.content}>
            <Text style={styles.h1}>{product.Name}</Text>
            <Text style={styles.h2}>{product.Flavor}</Text>
            <Text style={styles.h3}>s/{product.PriceProduct}</Text>
          </View>
        </LinearGradient>
        <Image source={{ uri: product.ImgProduct }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 13,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
    position: "relative",
    alignItems: "center",
  },
  card: {
    width: 112,
    height: 170,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    textAlign: "left",
    zIndex: 1,
  },

  image: {
    width: 80,
    height: 120,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    transform: [{ rotate: "12deg" }],
    marginTop: -20,
    marginLeft: 20,
    position: "absolute",
    zIndex: 3,
  },
  content: {
    paddingTop: 90,
    alignItems: "center",
    position: "absolute",
    zIndex: 2,
    width: "100%",
  },
  h1: {
    width: "95%",
    fontSize: 13,
    color: "#000",
    fontFamily: "Montserrat_800ExtraBold",
    marginTop: 8,
    textAlign: "center",
  },
  h2: {
    fontSize: 11,
    color: "#000",
  },
  h3: {
    fontSize: 12,
    color: "#000",
    fontFamily: "Montserrat_800ExtraBold",
    marginLeft: "auto",
    marginTop: 2,
    textAlign: "right",
    marginEnd: 14,
  },
});

export default ProductCard;
