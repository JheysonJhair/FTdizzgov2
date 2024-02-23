import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const QRCodeImage = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text  style={styles.title}>
        Tu repartidor debe escanear el código para confirmar la entrega
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 270,
    height: 270,
    borderRadius: 20,
    backgroundColor: "white",
  },
  title:{
    color: "white",
    width: "70%",
    textAlign: "center",
    marginTop: 20,
  }
});

export default QRCodeImage;
