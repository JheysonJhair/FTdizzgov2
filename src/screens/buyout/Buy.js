import React, { useState } from "react";
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

import Button from "../../components/forms/Button";

const Buy = ({ route, navigation }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <View>
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
            <Image source={{ uri: product.ImgProduct }} style={styles.image} />
          </LinearGradient>
        </View>
        <View style={styles.infor}>
          <Text style={styles.h1}>{product.Name}</Text>
          <Text style={styles.h22}>
            10 puntos <Text style={styles.h23}>(por persona)</Text>
          </Text>
          <Text style={styles.h31}>Código de recibo:</Text>
          <Text style={styles.h32}>1A21XCS</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.totalContainer}>
            <Text style={styles.h22}>Total acumulado</Text>
            <Text style={styles.h233}>s/23.00</Text>
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
        </View>
        <View style={styles.bottomContainer2}>
          <Button title="Comprar" onPress={() => console.log("Comprar")} />
        </View>
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
  backButton: {
    marginRight: 10,
  },
  image: {
    width: 220,
    height: 390,
    borderRadius: 10,
    resizeMode: "cover",
  },
  containerInformation: {
    justifyContent: "center",
    alignItems: "center",
  },
  infor: {
    justifyContent: "center",
    alignItems: "center",
  },
  totalContainer: {
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  h1: {
    color: "white",
    fontSize: 44,
    fontFamily: "Montserrat_800ExtraBold",
  },
  h22: {
    color: "#40A5E7",
    fontSize: 16,
    fontFamily: "Montserrat_800ExtraBold",
  },
  h23: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_800ExtraBold",
  },
  h233: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "Montserrat_800ExtraBold",
  },
  h31: {
    marginTop: 30,
    color: "#A3AABF",
    fontSize: 16,
    fontWeight: "bold",
  },
  h32: {
    color: "#A3AABF",
    fontSize: 16,
    fontFamily: "Montserrat_800ExtraBold",
  },
  quantityButton: {
    margin: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: "#FFF",
    borderWidth: 2,
  },
  quantityButton2: {
    margin: 10,
    paddingHorizontal: 16,
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
    marginTop: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  bottomContainer2: {
    paddingHorizontal: 30,
    marginTop: 10,
  },
});

export default Buy;
