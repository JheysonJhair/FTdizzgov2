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

import CardProductBuy from "../../components/products/CardProductBuy";
const backgroundImage = require("../../assets/blur.png");

const ProductMix = ({ route, navigation }) => {
  const handleGoBack = () => {
    navigation.navigate("Home");
  };
  const handleGoBack2 = () => {
    navigation.navigate("Home");
  };
  const { product } = route.params;
  const [progressWidth, setProgressWidth] = useState(40);
  const [mixName, setMixName] = useState("NombredelaMezcla");

  const sampleProduct = {
    Name: "Everest",
    Flavor: "Neutral",
    PriceProduct: 10,
    ImgProduct:
      "https://embotelladosdelivery.com/wp-content/uploads/2021/08/Evervess-Botella-1.5-lts-.png",
  };
  const sampleProduct2 = {
    Name: "Hielo",
    Flavor: "Old N°7",
    PriceProduct: 97,
    ImgProduct:
      "https://dislicoresqa.vtexassets.com/arquivos/ids/257324/134001-BOLSA_HIELO_IGLU_3KG.png?v=637892565196030000",
  };
  const sampleProduct3 = {
    Name: "Whisky",
    Flavor: "Neutral",
    PriceProduct: 10,
    ImgProduct:
      "https://res.cloudinary.com/dfbgjpndh/image/upload/v1706829262/Whiskys/ujzlqp1twvzomciiw5uu.png",
  };
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleMixNameChange = (text) => {
    setMixName(text);
  };
  const handleProductSelection = (selectedProduct) => {
    if (selectedProducts.length < 2) {
      setSelectedProducts([...selectedProducts, selectedProduct]);
      setProgressWidth(progressWidth + 30);
    }
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts.splice(index, 1);
    setSelectedProducts(updatedProducts);
    setProgressWidth(progressWidth - 30);
  };
  const handleShopingCar = () => {
    navigation.navigate("Carrito");
  };

  return (
    <View style={styles.container}>
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
      <ScrollView style={styles.content}>
        <View>
          <View style={styles.valorContainer}>
            <TextInput
              style={styles.mixNameInput}
              value={mixName}
              onChangeText={handleMixNameChange}
            />
          </View>
          <View style={styles.productContainerMix}>
            <View style={styles.imageContainerFont}>
              <View style={styles.backgroundImageContainer}>
                <Image
                  source={backgroundImage}
                  style={[
                    styles.image,
                    {
                      alignSelf: "center",
                      justifyContent: "center",
                      width: 300,
                      height: 270,
                    },
                  ]}
                />
              </View>
              <View
                style={[
                  styles.imageContainer,
                  { position: "absolute", alignSelf: "center" },
                ]}
              >
                <Image
                  source={{ uri: product.ImgProduct }}
                  style={styles.image}
                />
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={handleGoBack2}>
                    <Ionicons name="ios-refresh" size={26} color="#A3AABF" />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {selectedProducts.map((selectedProduct, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <TouchableOpacity
                      onPress={() => handleRemoveProduct(index)}
                    >
                      <Image
                        source={{ uri: selectedProduct.ImgProduct }}
                        style={styles.image}
                      />
                      <View style={styles.iconContainer}>
                        <Ionicons name="md-remove" size={26} color="#A3AABF" />
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.contendorValores}>
            <View style={styles.valorContainer}>
              <Text style={styles.valor}>
                {product.Name} +{" "}
                {selectedProducts.length > 0 && selectedProducts[0].Name} +{" "}
                {selectedProducts.length > 1 && selectedProducts[1].Name}
                {selectedProducts.length > 2 && selectedProducts[2].Name}
              </Text>
            </View>
          </View>
          <View style={styles.containerPadre}>
            <View style={styles.containerDiversion}>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../assets/vectorHappy.png")}
                  style={{ width: 45, height: 45 }}
                />
              </View>
              <View style={styles.barra}>
                <View style={styles.containerTextos}>
                  <View style={styles.textoIzquierda}>
                    <Text style={styles.valorFiesta}>
                      Diversión en la Fiesta
                    </Text>
                  </View>
                  <View style={styles.textoDerecha}>
                    <Text style={styles.valorFiesta}>S/. 150.00</Text>
                  </View>
                </View>
                <View style={styles.progressBarContainer}>
                  <View
                    style={[styles.progressBar, { width: `${progressWidth}%` }]}
                  />
                  <Text style={styles.valorPorcentaje}>{progressWidth}%</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.producto}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.subtitle}>Recomendado para ti</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  onPress={() => handleProductSelection(sampleProduct)}
                >
                  <CardProductBuy
                    product={sampleProduct}
                    onPress={() => handleProductSelection(sampleProduct)}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleProductSelection(sampleProduct2)}
                >
                  <CardProductBuy
                    product={sampleProduct2}
                    onPress={() => handleProductSelection(sampleProduct2)}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleProductSelection(sampleProduct3)}
                >
                  <CardProductBuy
                    product={sampleProduct3}
                    onPress={() => handleProductSelection(sampleProduct3)}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleProductSelection(sampleProduct3)}
                >
                  <CardProductBuy
                    product={sampleProduct3}
                    onPress={() => handleProductSelection(sampleProduct3)}
                  />
                </TouchableOpacity>
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
  shopingButton: {
    position: "absolute",
    right: 15,
    top: 12,
  },
  //
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
  valorFiesta: {
    color: "white",
  },
  mixNameInput: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Montserrat_800ExtraBold",
    textAlign: "center",
  },
  //
  productContainerMix: {
    position: "relative",
    marginBottom: 35,
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
  backgroundImageContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  imageContainer: {
    position: "relative",
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
  //
  containerPadre: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerDiversion: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  barra:{
    width: "80%",
  },  
  containerTextos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:5
  },
  textoIzquierda: {
    flex: 4, 
  },
  textoDerecha: {
    flex: 2, 
    alignItems: 'flex-end',
  },
  valorPorcentaje: {
    textAlign: "center",
    color: "#fff",
    fontSize:12,
    zIndex: 999,
    marginLeft: "35%",
    position: "absolute",
  },
  progressBarContainer: {
    height: 19,
    backgroundColor: "#212834",
    borderRadius: 10,
    marginBottom: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#9FEF00",
    borderRadius: 10,
  },
  //
  rating: {
    marginBottom: 6,
    marginTop: 12,
    color: "#40A5E7",
  },
  valor: {
    color: "white",
    width: 320,
    fontSize: 24,
    marginBottom:10,
    fontFamily: "Montserrat_800ExtraBold",
    textAlign: "center",
  },
  producto: {
    padding: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat_800ExtraBold",
    marginBottom: 10,
  },
  //
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
});

export default ProductMix;
