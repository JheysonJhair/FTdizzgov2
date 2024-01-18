import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor="#C6CBD9"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    borderColor: '#C6CBD9',
    borderWidth: 1,
    padding: 14,
    borderRadius: 6,
    color: 'white',
    fontSize: 16,
    width: "95%",
    marginBottom: 8,
  },
});

export default Input;
