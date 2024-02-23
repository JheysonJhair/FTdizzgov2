import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/forms/Button";
import Icon from "react-native-vector-icons/FontAwesome";
import QRCodeImage from "../../components/products/QRCodeImage";

function OrderPedido() {
  const navigation = useNavigation();
  const [showQRCode, setShowQRCode] = useState(false);

  const handleContinue = () => {
    setShowQRCode(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu pedido está en camino...</Text>
      <View style={styles.locationContainer}>
        <View style={styles.iconContainer}>
          <Icon name="map-marker" size={20} color="#A3AABF" />
        </View>
        <Text style={styles.locationText}>Avenida Perú #4587</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.locationContainer}>
          <View style={styles.iconContainer}>
            <Icon name="truck" size={20} color="#A3AABF" />
          </View>
          <Text style={styles.locationText}>Entrega</Text>
        </View>
        <View><Text style={styles.locationText}>30 min</Text></View>
      </View>
      <View style={styles.line}></View>
      <TouchableOpacity onPress={() => navigation.navigate("userLocation")}>
        <View style={styles.locationContainer}>
          <Button title="Confirmar entrega pedido" onPress={handleContinue} />
        </View>
      </TouchableOpacity>

      {showQRCode && (
        <QRCodeImage imageUrl="data:image/png;base64,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" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 20,
    flex: 1,
    backgroundColor: "#161B21",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "Montserrat_800ExtraBold",
    marginBottom: 30,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#212834",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    fontFamily: "Montserrat_800ExtraBold",
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 10,
  },
  line: {
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    height: 1,
    width: "100%",
  },
});

export default OrderPedido;
