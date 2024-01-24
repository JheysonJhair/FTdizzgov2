import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CardShopingCar from "../../components/products/CardShopingCar";
import CardShopingMescla from "../../components/products/CardShopingMescla";
import Footer from "../../components/utils/Footer";

const ShoppingCart = () => {
  const [activeTab, setActiveTab] = useState("pedidos");

  const product2 = {
    nombre: "Ruskaya",
    options: "Four loko, hielo",
    image: "https://licoresbrisol.com.pe/web/webimg/1495_1_1000.png",
  };

  const product = {
    nombre: "Mescla",
    sabor: "red",
    ml: 250,
    price: 10,
    image: "https://licoresbrisol.com.pe/web/webimg/1495_1_1000.png",
  };

  const handleProductPress = () => {
    console.log("Producto presionado");
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Container2}>
        <View style={styles.header}>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.enlaces}
            >
              <TouchableOpacity
                style={[
                  styles.enlace,
                  activeTab === "pedidos" && styles.enlaceActive,
                ]}
                onPress={() => setActiveTab("pedidos")}
              >
                <Text
                  style={[
                    styles.h2,
                    activeTab === "pedidos" && styles.activeText,
                  ]}
                >
                  Tus pedidos
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.enlace,
                  activeTab === "mezclas" && styles.enlaceActive,
                ]}
                onPress={() => setActiveTab("mezclas")}
              >
                <Text
                  style={[
                    styles.h2,
                    activeTab === "mezclas" && styles.activeText,
                  ]}
                >
                  Tus mezclas
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollVertical}
          >
            {activeTab === "pedidos" && (
              <>
                <CardShopingMescla
                  product={product2}
                  onPress={handleProductPress}
                />
                <CardShopingMescla
                  product={product2}
                  onPress={handleProductPress}
                />
                <CardShopingMescla
                  product={product2}
                  onPress={handleProductPress}
                />
              </>
            )}
            {activeTab === "mezclas" && (
              <>
              <CardShopingCar
                product={product}
                onPress={handleProductPress}
              />
              <CardShopingCar
                product={product}
                onPress={handleProductPress}
              />
            </>
            )}
          </ScrollView>
        </View>
      </View>
      <View style={styles.absoluteIconsContainer}>
        <Footer iconName="home" selectedIcon={null} />
        <Footer iconName="comments" selectedIcon={null} />
        <Footer iconName="star" selectedIcon={null} />
        <Footer iconName="shopping-cart" selectedIcon={"shopping-cart"} />
        <Footer iconName="user" selectedIcon={null} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#141B20",
  },
  Container2: {
    padding: 12,
    paddingBottom: 160,
  },
  headerContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  //
  enlaces: {
    flexDirection: "row",
    paddingTop: 8,
  },
  enlace: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 4,
  },
  h2: {
    color: "#fff",
  },
  enlaceActive: {
    color: "#3498db",
  },
  activeText: {
    fontWeight: "bold",
    color: "#3498db",
  },
  //
  absoluteIconsContainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#161B21",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#74797c",
  },
});

export default ShoppingCart;
