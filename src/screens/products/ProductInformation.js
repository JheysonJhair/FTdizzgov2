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

const ProductInformation = ({ route, navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };
  const { product } = route.params;

  const handleProductClick = (product) => {
    navigation.navigate("Mix", { product });
  };
  const handleShopingCar = () => {
    navigation.navigate("Carrito");
  };
  const handleMapPress = () => {
    const latitudDestination = -13.634155378255885;
    const longitudDestination = -72.88540463535574;

    navigation.navigate("mapLocation", {
      latitudDestination,
      longitudDestination,
    });
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
        <View style={styles.productContainer}>
          <Image source={{ uri: product.ImgProduct }} style={styles.image} />
          <Text style={styles.title}>{product.Name}</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingContainerItem}>
              <Text style={styles.rating}>
                <Ionicons sty name="star" size={16} color="white" />
                <Text> 4.5</Text>
              </Text>
            </View>
            <View style={styles.ratingContainerItem}>
              <Ionicons name="star" size={16} color="yellow" />
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View>
              <Text style={styles.price}>s/ {product.PriceProduct}</Text>
              <Text style={styles.points}>10 puntos</Text>
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="bookmark" size={20} color="#A3AABF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart" size={20} color="#A3AABF" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contendorValores}>
            <View style={styles.valorContainer}>
              <View style={styles.containerDetail}>
                <Text style={styles.valor}>{product.Flavor}</Text>
              </View>
              <Text style={styles.subtitle}>Sabor</Text>
            </View>
            <View style={styles.valorContainer}>
              <View style={styles.containerDetail}>
                <Text style={styles.valor}>{product.Volume * 100}%</Text>
              </View>
              <Text style={styles.subtitle}>% Alcohol</Text>
            </View>
            <View style={styles.valorContainer}>
              <View style={styles.containerDetail}>
                <Text style={styles.valor}>{product.Ml}</Text>
              </View>
              <Text style={styles.subtitle}>Ml</Text>
            </View>
          </View>

          <View style={styles.containerMap}>
            <View style={styles.storeContainer}>
              <Text style={styles.descriptionTitle}>Licorería más cercana</Text>
              <Text style={styles.storeName}>"Al que te dije"</Text>
              <Text style={styles.closingTime}>Cierra en 18 horas</Text>
            </View>
            <TouchableOpacity onPress={handleMapPress}>
              <View style={styles.storeContainer2}>
                <Ionicons name="md-map" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Descripción</Text>
            <Text style={styles.description}>{product.Description}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="cart" size={24} color="#000" />
          <Text style={styles.addButtonText}>Agregar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mixButton}
          onPress={() => handleProductClick(product)}
        >
          <Text style={styles.mixButtonText}>Mezclar</Text>
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
  productContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  image: {
    width: 220,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontFamily: "Montserrat_800ExtraBold",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingContainerItem: {
    backgroundColor: "#212834",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 25,
    marginEnd: 20,
  },
  containerDetail: {
    backgroundColor: "#212834",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 25,
  },
  rating: {
    color: "white",
  },
  //
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  price: {
    color: "white",
    fontSize: 25,
    fontFamily: "Montserrat_800ExtraBold",
  },
  points: {
    color: "#0C98B7",
  },
  actionsContainer: {
    flexDirection: "row",
  },
  actionButton: {
    backgroundColor: "#212834",
    borderRadius: 30,
    padding: 15,
    marginLeft: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 14,
  },
  //
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  contendorValores: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  valorContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  valor: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat_800ExtraBold",
  },
  //
  containerMap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  storeContainer: {
    marginBottom: 20,
  },
  storeContainer2: {
    width: 40,
    height: 40,
    backgroundColor: "#0C98B7",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  store: {
    color: "white",
  },
  storeName: {
    color: "#A3AABF",
  },
  closingTime: {
    color: "#40A5E7",
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionTitle: {
    color: "white",
    fontSize: 19,
    fontFamily: "Montserrat_800ExtraBold",
  },
  description: {
    color: "#A3AABF",
  },
  //
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    color: "#000",
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Montserrat_800ExtraBold",
  },
  mixButton: {
    width: "55%",
    backgroundColor: "#40A5E7",
    padding: 11,
    borderRadius: 4,
  },
  mixButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat_800ExtraBold",
  },
});

export default ProductInformation;
