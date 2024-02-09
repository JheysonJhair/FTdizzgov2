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
  const getProductType = (type) => {
    switch (type) {
      case 0:
        return "Whisky";
      case 1:
        return "Ron";
      case 2:
        return "Gaseosa";
      case 3:
        return "Agua";
      case 4:
        return "Licor de Malta";
      case 5:
        return "Vodka";
      default:
        return "Desconocido";
    }
  };
  const getGradientColors = (sabor) => {
    switch (sabor) {
      case "blue":
        return ["#0635a3", "#161B21"];
      case "red":
        return ["#FF1493", "#161B21"];
      case "neutral":
        return ["#FFFACD", "#161B21"];
      case "Apple":
        return ["#468949", "#161B21"];
      default:
        return ["#a04e38", "#161B21"];
    }
  };
  const getGradientColors2 = (sabor) => {
    switch (sabor) {
      case "blue":
        return ["#0635a3", "#0635a3"];
      case "red":
        return ["#FF1493", "#FF1493"];
      case "neutral":
        return ["#FFFACD", "#FFFACD"];
      case "Apple":
        return ["#468949", "#468949"];
      default:
        return ["#a04e38", "#a04e38"];
    }
  };
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
          colors={getGradientColors2(product.Flavor)}
          style={styles.containerGradient}
        >
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={23} color="white" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View>
        <LinearGradient
          colors={getGradientColors(product.Flavor)}
          style={styles.containerInformation}
        >
          <Text style={styles.hh1}>{getProductType(product.Type)}</Text>
          <Text style={styles.h1}>{product.Name}</Text>
          <View style={styles.containerProduct}>
            <View style={styles.productDetails}>
              <View style={styles.sabor}>
                <Text style={styles.h3}>SABOR</Text>
                <Text style={styles.h2}>{product.Flavor}</Text>
              </View>
              <View style={styles.alcohol}>
                <Text style={styles.h3}>ALCOHOL</Text>
                <Text style={styles.h2}>{product.Volume*100}%</Text>
              </View>
            </View>
            <View style={styles.productDetails}>
              <View style={styles.sabor2}>
                <Text style={styles.h3}>ML</Text>
                <Text style={styles.h2}>{product.Ml}</Text>
              </View>
              <View style={styles.alcohol}>
                <Text style={styles.h3}>PRECIO</Text>
                <Text style={styles.h2}>s/{product.PriceProduct}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Mezclar</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: product.ImgProduct }}
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

      <View style={styles.producto}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.hh}>Productos Similares</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
    paddingBottom: 15,
    paddingTop: 10,
    paddingLeft: 30,
  },
  hh1: {
    color: "#eaedff",
    fontSize: 26,
    fontWeight: "bold",
    zIndex: 99,
  },
  hh: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginStart: 10,
    marginBottom: 10,
  },
  h1: {
    color: "white",
    fontSize: 40,
    width: "80%",
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
    width: "40%",
  },
  sabor2: {
    width: "40%",
  },
  h2: {
    color: "white",
    fontSize: 19,
    fontFamily: "Montserrat_800ExtraBold",
  },
  h3: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 16,
  },
  button: {
    marginTop: 17,
    backgroundColor: "#a04e38",
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
    marginBottom: 10,
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
  producto: {
    padding: 10,
  },
  //
  image: {
    width: "60%",
    height: "110%",
    borderRadius: 10,
    resizeMode: "cover",
    position: "absolute",
    zIndex:100
  },

  absoluteImage: {
    top: 100,
    right: -40,
  },
});

export default ProductInformation;
