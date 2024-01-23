import React from "react";
import { Modal, View, ActivityIndicator, Text, StyleSheet } from "react-native";

const LoadingModal = ({ visible, text }) => (
  <Modal transparent={true} animationType="slide" visible={visible}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <ActivityIndicator
          size="large"
          color="#40A5E7"
          style={{ transform: [{ scale: 1.2 }] }}
        />
        <Text style={styles.loadingText}>{text}...</Text>
        <View style={styles.Text}>
          <Text style={styles.loadingText2}>
            Nos estamos asegurando de que todo valla bien
          </Text>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#212834",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  Text: {
    width: "60%",
    textAlign: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 22,
    color: "white",
    textAlign: "center",
    fontFamily: "Montserrat_800ExtraBold",
  },
  loadingText2: {
    color: "#A3AABF",
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default LoadingModal;
