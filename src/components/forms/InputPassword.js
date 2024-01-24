import React, { useState } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const InputPassword = ({ placeholder, onChangeText, value, editable }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.container, !editable && styles.notEditable]}>
      <TextInput
        style={[styles.input, !editable && styles.notEditableText]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
        placeholderTextColor="#C6CBD9"
        secureTextEntry={!showPassword}
        editable={editable}
      />
      <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
        <Icon
          name={showPassword ? "eye" : "eye-slash"}
          size={20}
          color="#C6CBD9"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#C6CBD9",
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 10,
    width: "95%",
    paddingHorizontal: 12,
    padding: 2,
  },
  notEditable: {
    opacity: 0.5,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 10,
  },
  notEditableText: {
    color: "gray",
  },
  eyeIcon: {
    padding: 10,
  },
});

export default InputPassword;
