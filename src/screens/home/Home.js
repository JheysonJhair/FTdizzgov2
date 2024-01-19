import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const route = useRoute();
  const userName = route.params?.userName || "";
  const perfil = route.params?.imgPerfil || "";

  const navigation = useNavigation();

  return (
    <View style={styles.c}>
        <View style={styles.container}>
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>
              Hola,{" "}
              <Text style={{ fontWeight: "bold" }}>
                {userName.charAt(0).toUpperCase()}
                {userName.slice(1).toLowerCase()}
              </Text>{" "}
            </Text>
            <Text style={styles.productDescription}>
              Cuida tu salud y mente con un trago.
            </Text>
          </View>
          <Image
            source={{
              uri: perfil,
            }}
            style={styles.productImage}
          />
        </View>
    </View>
  );
}

// ... (código anterior)

const styles = StyleSheet.create({
  c: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: "#555",
  },
  productImage: {
    width: 100, // Ajusta el ancho según tus necesidades
    height: 100, // Ajusta la altura según tus necesidades
    marginLeft: 16,
    borderRadius: 8,
  },
});
