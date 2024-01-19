import React from "react";
import { TouchableOpacity, Text } from "react-native";
import * as Google from "expo-auth-session/providers/google";

const GoogleButton = ({ onPress }) => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: "id",
  });

  return (
    <TouchableOpacity
      style={{ ...styles.socialButton, backgroundColor: "#40A5E7" }}
      onPress={() => {
        promptAsync();
        onPress && onPress();
      }}
    >
      <Text style={styles.socialButtonText}>G</Text>
    </TouchableOpacity>
  );
};

const styles = {
  socialButton: {
    backgroundColor: "#40A5E7",
    borderRadius: 25,
    marginEnd: 4,
    marginStart: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  socialButtonText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Montserrat_800ExtraBold",
  },
};

export default GoogleButton;
