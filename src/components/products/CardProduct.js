import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getGradientColors } from "../utils/GradientUtils";

const ProductCard = ({ product, onPress }) => {
  const windowWidth = Dimensions.get("window").width;
  const cardSpacing = 11; 
  const numColumns = 3;
  const cardWidth = (windowWidth - cardSpacing * (numColumns + 1)) / numColumns;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.cardContainer, { width: cardWidth }]}
    >
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
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 13,
    marginBottom: 6,
    marginLeft: 7,
    marginRight: 7,
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    textAlign: "left",

    zIndex: 1,
  },
  image: {
    width: "65%",
    height: 105,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    transform: [{ rotate: "12deg" }],
    marginTop: -18,
    position: "absolute",
    zIndex: 3,
  },
  content: {
    paddingTop: 85,
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
    textAlign: "center",
  },
  h2: {
    fontSize: 11,
    color: "#000",
    width: "95%",
    textAlign: "center",
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
