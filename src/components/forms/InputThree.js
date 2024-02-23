import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputThree = ({ placeholder, onChangeText, value, isVerified, keyboardType }) => {
  return (
    <TextInput
      style={[styles.input, isVerified && styles.disabledInput]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor="#FFFFFF"
      editable={!isVerified}
      keyboardType={keyboardType} 
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#212834",
    borderColor: "#212834",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: "#40A5E7",
    fontSize: 16,
    width: "100%",
    marginBottom: 8,
  },
  disabledInput: {
    opacity: 0.6,
  },
});

export default InputThree;
