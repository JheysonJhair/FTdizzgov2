import React from "react";
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
const Register = () => {

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <View style={styles.terminos}>
        <Text style={styles.h3}>Nuestros Términos y Condiciones</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161B21",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    
  },
  formContainer: {
    width: "80%",
  },
  h1: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 34,
    color: "#ffffff",
    marginBottom: 5,
    marginTop: 20,

  },
  h2: {
    fontFamily: "Montserrat_800ExtraBold",
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },
  terminos: {
    position: 'absolute',
    bottom: 70, 
  },
  h3: {
    color: "#A3AABF",
    fontSize: 13,
  },

});

export default Register;
