import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getGradientColors } from "../utils/GradientUtils";

const CardShopingCar = ({ product, onPresss }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onPresss}>
        <LinearGradient
          colors={getGradientColors(product.Flavor)}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.card}
        >
          <Image source={{ uri: product.ImgProduct }} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.h1}>{product.Name}</Text>
            <Text style={styles.h2}>Sabor {product.Flavor}</Text>
            <Text style={styles.h2}>{product.Ml} ml</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={handleDecrement}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              onPress={handleIncrement}
              style={styles.quantityButton2}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 6,
    alignItems: "center",
  },
  card: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  image: {
    width: 70,
    height: 120,
    resizeMode: "cover",
    borderRadius: 8,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  h1: {
    fontSize: 20,
    color: "#dee1f2",
    fontFamily: "Montserrat_800ExtraBold",
    marginBottom: 4,
  },
  h2: {
    fontSize: 16,
    color: "#dee1f2",
  },
  h3: {
    fontSize: 12,
    color: "#dee1f2",
    fontFamily: "Montserrat_800ExtraBold",
    marginTop: 4,
  },
  //
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: "#FFF",
    borderWidth: 2,
  },
  quantityButton2: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: "#FFF",
    borderWidth: 2,
  },

  quantityButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 18,
    color: "#FFF",
    margin: 5,
  },
});

export default CardShopingCar;