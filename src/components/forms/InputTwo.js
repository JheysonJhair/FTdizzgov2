import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputTwo = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
      placeholderTextColor="#C6CBD9"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#212834',
    borderColor: '#212834',
    borderWidth: 1,
    padding: 11,
    borderRadius: 6,
    color: 'white',
    fontSize: 16,
    width: "50%",
    marginBottom: 8,
  },
});

export default InputTwo;
