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
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
const yape = require("../../assets/yape.png");
const efectivo = require("../../assets/efectivo.png");

const ProductOrder = ({ route, navigation }) => {
  const [selectedOption, setSelectedOption] = useState("domicilio");
  const [isScrolled, setIsScrolled] = useState(false);
  const handleGoBack = () => {
    navigation.navigate("Home");
  };
  const { ProductsData } = route.params;
  const handleShopingCar = () => {
    navigation.navigate("Carrito");
  };
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  const handleMapPress = () => {
    const latitudDestination = -13.633595417759722;
    const longitudDestination = -72.88768925525375;

    navigation.navigate("mapLocation", {
      latitudDestination,
      longitudDestination,
    });
  };
  const handleScroll = (event) => {
    setIsScrolled(event.nativeEvent.contentOffset.y > 0);
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={isScrolled ? ["#161B21", "#161B21"] : ["#5394bc", "#5394bc"]}
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
      <ScrollView
        style={styles.content}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <LinearGradient
          colors={["#5394bc", "#161B21"]}
          style={styles.containerInformation}
        >
          <View>
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
            <View style={styles.contenedorButtoms}>
              <TouchableOpacity
                onPress={() => handleOptionSelection("domicilio")}
              >
                <View
                  style={[
                    styles.entregaDomicilio,
                    selectedOption === "domicilio" && styles.selectedOption,
                  ]}
                >
                  <Text style={styles.texto}>Entrega a domicilio</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOptionSelection("tienda")}>
                <View
                  style={[
                    styles.recojerTienda,
                    selectedOption === "tienda" && styles.selectedOption,
                  ]}
                >
                  <Text style={styles.texto}>Recojer en tienda</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>

        {selectedOption === "domicilio" ? (
          <View style={styles.domicilio}>
            <View style={styles.entregaContainer}>
              <View style={styles.entregaItem}>
                <Text style={styles.entregaTitulo}>
                  Entrega <Icon name="clock-o" size={18} color="#A3AABF" />
                </Text>
                <Text style={styles.entregaDetalle}>37 min</Text>
              </View>
              <View style={styles.entregaItem}>
                <Text style={styles.entregaTitulo}>
                  Envío <Icon name="truck" size={18} color="#A3AABF" />
                </Text>
                <Text style={styles.entregaDetalle}>s/ 5.00</Text>
              </View>
              <View style={styles.entregaItem}>
                <Text style={styles.entregaTitulo}>
                  Calificación <Icon name="star" size={18} color="#A3AABF" />
                </Text>
                <Text style={styles.entregaDetalle}>4.8 178</Text>
              </View>
            </View>
            <View style={styles.direccionContainer}>
              <View style={styles.direccionDetalle}>
                <Text style={styles.direccionTitulo}>Dirección de entrega</Text>
                <Text style={styles.direccionTexto}>Avenida El Polo Mz H</Text>
                <Text style={styles.cambiarTexto2}>
                  (entrega 19:00pm - 20:00pm)
                </Text>
              </View>
              <View style={styles.cambiarContainer}>
                <TouchableOpacity>
                  <Text style={styles.cambiarTexto}>Cambiar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.direccionContainer}>
              <View style={styles.direccionDetalle}>
                <Text style={styles.direccionTitulo}>Tienda</Text>
                <Text style={styles.direccionTexto}>El barcito</Text>
                <Text style={styles.direccionTexto}>Avenida Peru 1458752</Text>
              </View>
              <View style={styles.cambiarContainer}>
                <TouchableOpacity onPress={handleMapPress}>
                  <View style={styles.storeContainer2}>
                    <Ionicons name="md-map" size={23} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.direccionContainer}>
              <View style={styles.direccionDetalle}>
                <Text style={styles.direccionTitulo}>
                  Persona encarga de recoger
                </Text>
                <Text style={styles.direccionTexto}>Jhair Arone Angeles</Text>
              </View>
              <View style={styles.cambiarContainer}>
                <TouchableOpacity>
                  <Text style={styles.cambiarTexto}>Cambiar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.direccionContainer}>
              <View style={styles.direccionDetalle}>
                <Text style={styles.direccionTitulo}>Método de pago</Text>
                <View style={styles.contenedorPago}>
                  <Image
                    source={yape}
                    style={[
                      styles.image,
                      {
                        alignSelf: "center",
                        justifyContent: "center",
                        width: 45,
                        height: 45,
                      },
                    ]}
                  />
                  <Text style={styles.direccionTexto2}>Yape (Recomendado)</Text>
                </View>
                <View style={styles.contenedorPago}>
                  <Image
                    source={efectivo}
                    style={[
                      styles.image,
                      {
                        alignSelf: "center",
                        justifyContent: "center",
                        width: 45,
                        height: 45,
                      },
                    ]}
                  />
                  <Text style={styles.direccionTexto2}>
                    Efectivo (Pagaras con s/0.00)
                  </Text>
                </View>
              </View>
              <View style={styles.cambiarContainer}>
                <TouchableOpacity>
                  <Text style={styles.cambiarTexto}>Cambiar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.direccionContainer}>
              <View style={styles.direccionDetalle}>
                <Text style={styles.direccionTitulo}>Resumen</Text>
                <Text style={styles.direccionTexto}>Costo de productos</Text>
                <Text style={styles.direccionTexto}>Costo de envíos</Text>
                <Text style={styles.direccionTexto}>Costo de servicios</Text>
              </View>
              <View style={styles.cambiarContainer}>
                <Text style={styles.direccionTitulo}></Text>
                <Text style={styles.direccionTexto}>s/15.00</Text>
                <Text style={styles.direccionTexto}>s/3.00</Text>
                <Text style={styles.direccionTexto}>s/0.50</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.domicilio}>
            <View style={styles.direccionContainer}>
              <View style={styles.direccionDetalle}>
                <Text style={styles.direccionTitulo}>Tienda</Text>
                <Text style={styles.direccionTexto}>El barcito</Text>
                <Text style={styles.direccionTexto}>Avenida Peru 1458752</Text>
              </View>
              <View style={styles.cambiarContainer}>
                <TouchableOpacity onPress={handleMapPress}>
                  <View style={styles.storeContainer2}>
                    <Ionicons name="md-map" size={23} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.direccionContainer}>
              <View style={styles.direccionDetalle}>
                <Text style={styles.direccionTitulo}>
                  Persona encarga de recoger
                </Text>
                <Text style={styles.direccionTexto}>Jhair Arone Angeles</Text>
              </View>
              <View style={styles.cambiarContainer}>
                <TouchableOpacity>
                  <Text style={styles.cambiarTexto}>Cambiar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.direccionContainer}>
              <View style={styles.direccionDetalle}>
                <Text style={styles.direccionTitulo}>Método de pago</Text>
                <View style={styles.contenedorPago}>
                  <Image
                    source={yape}
                    style={[
                      styles.image,
                      {
                        alignSelf: "center",
                        justifyContent: "center",
                        width: 45,
                        height: 45,
                      },
                    ]}
                  />
                  <Text style={styles.direccionTexto2}>Yape (Recomendado)</Text>
                </View>
                <View style={styles.contenedorPago}>
                  <Image
                    source={efectivo}
                    style={[
                      styles.image,
                      {
                        alignSelf: "center",
                        justifyContent: "center",
                        width: 45,
                        height: 45,
                      },
                    ]}
                  />
                  <Text style={styles.direccionTexto2}>
                    Efectivo (Pagaras con s/0.00)
                  </Text>
                </View>
              </View>
              <View style={styles.cambiarContainer}>
                <TouchableOpacity>
                  <Text style={styles.cambiarTexto}>Cambiar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.direccionContainer}>
              <View style={styles.direccionDetalle}>
                <Text style={styles.direccionTitulo}>Resumen</Text>
                <Text style={styles.direccionTexto}>Costo de productos</Text>
                <Text style={styles.direccionTexto}>Costo de envíos</Text>
                <Text style={styles.direccionTexto}>Costo de servicios</Text>
              </View>
              <View style={styles.cambiarContainer}>
                <Text style={styles.direccionTitulo}></Text>
                <Text style={styles.direccionTexto}>s/15.00</Text>
                <Text style={styles.direccionTexto}>s/3.00</Text>
                <Text style={styles.direccionTexto}>s/0.50</Text>
              </View>
            </View>
          </View>
        )}
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
          onPress={() =>  navigation.navigate("AskedNumber")}
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
  },
  image: {
    width: 190,
    height: 220,
    borderRadius: 10,
  },
  imageContainerFont: {
    position: "relative",
    height: 225,
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
  //
  domicilio: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  contenedorButtoms: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  opcion: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  texto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  entregaDomicilio: {
    backgroundColor: "#333d4f",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  recojerTienda: {
    backgroundColor: "#333d4f",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selectedOption: {
    backgroundColor: "#40A5E7",
  },
  //
  entregaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    flex: 1,
  },
  entregaItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  entregaItemCenter: {
    alignItems: "center",
  },
  entregaTitulo: {
    fontSize: 16,
    color: "#A3AABF",
  },
  entregaDetalle: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  direccionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    color: "white",
  },
  direccionDetalle: {
    marginBottom: 10,
    color: "white",
  },
  direccionTitulo: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat_800ExtraBold",
    marginBottom: 5,
  },
  direccionTexto: {
    fontSize: 14,
    color: "#fff",
  },
  direccionTexto2: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 10,
  },
  cambiarContainer: {
    marginBottom: 10,
  },
  cambiarTexto: {
    fontSize: 14,
    color: "#40A5E7",
    fontFamily: "Montserrat_800ExtraBold",
  },
  cambiarTexto2: {
    color: "#40A5E7",
  },
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  //
  storeContainer2: {
    width: 50,
    marginTop: 6,
    height: 50,
    backgroundColor: "#0C98B7",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  contenedorPago: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
});

export default ProductOrder;
