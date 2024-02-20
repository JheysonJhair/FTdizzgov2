import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const ProductOrder = ({ route, navigation }) => {
  const handleGoBack = () => {
    navigation.navigate("Home");
  };
  const { ProductsData } = route.params;
  const handleShopingCar = () => {
    navigation.navigate("Carrito");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#5394bc", "#5394bc"]}
        style={styles.containerGradient}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={23} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.shopingButton}
            onPress={handleShopingCar}
          >
            <Ionicons name="cart" size={23} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <ScrollView style={styles.content}>
        <LinearGradient
          colors={["#5394bc", "#161B21"]}
          style={styles.containerInformation}
        >
          <View>
            <View style={styles.valorContainer}>
              <Text style={styles.valorPedido}>Tu pedido</Text>
            </View>
            <View style={styles.productContainerMix}>
              <View style={styles.imageContainerFont}>
                <View style={[{ position: "absolute", alignSelf: "center" }]}>
                  <Image
                    source={{ uri: ProductsData.mainProduct.ImgProduct }}
                    style={styles.image}
                  />
                </View>
                {ProductsData.secondaryProducts.map((product, index) => (
                  <Image
                    key={index}
                    source={{ uri: product.ImgProduct }}
                    style={[
                      styles.image,
                      {
                        position: "absolute",
                        left: index === 0 ? 0 : undefined,
                        right: index === 1 ? 0 : undefined,
                      },
                    ]}
                  />
                ))}
              </View>
            </View>
            <View style={styles.contendorValores}>
              <View style={styles.valorContainer}>
                <Text style={styles.valor}>
                  {ProductsData.mainProduct.Name} +{" "}
                  {ProductsData.secondaryProducts[0] &&
                    ProductsData.secondaryProducts[0].Name}{" "}
                  +{" "}
                  {ProductsData.secondaryProducts[1] &&
                    ProductsData.secondaryProducts[1].Name}{" "}
                </Text>

                <Text style={styles.valorPuntos}>Ganaras 30 puntos</Text>
              </View>
            </View>
            <View style={styles.containerPadre}></View>
          </View>
        </LinearGradient>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.mixButtonText2}>Total a pagar</Text>
            <Text style={[styles.mixButtonText, { marginTop: 5 }]}>
             {ProductsData.totalPrice}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mixButton}
          onPress={() => console.log("fin")}
        >
          <Text style={styles.mixButtonText}>Hacer pedido</Text>
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
  shopingButton: {
    position: "absolute",
    right: 15,
    top: 12,
  },
  content: {
    flex: 1,
  },
  contendorValores: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  valorContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  valorPedido: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15,
  },
  valor: {
    color: "white",
    textAlign: "center",
    width: 320,
    fontSize: 28,
    marginBottom: 10,
    fontFamily: "Montserrat_800ExtraBold",
  },
  valorPuntos: {
    color: "#0C98B7",
    fontFamily: "Montserrat_800ExtraBold",
  },
  productContainerMix: {
    position: "relative",
    marginBottom: 15,
  },
  image: {
    width: 190,
    height: 220,
    borderRadius: 10,
  },
  imageContainerFont: {
    position: "relative",
    height: 235,
    backgroundColor: "",
  },
  iconContainer: {
    backgroundColor: "#212834",
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 25,
    position: "absolute",
    bottom: -30,
    alignSelf: "center",
  },
  containerPadre: {
    alignItems: "center",
    justifyContent: "center",
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
    width: "60%",
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
  mixButtonText2: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});

export default ProductOrder;
