import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, onChangeText, value, isVerified }) => {
  return (
    <TextInput
      style={[styles.input, isVerified && styles.disabledInput]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
      placeholderTextColor="#C6CBD9"
      editable={!isVerified} 
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
    width: '95%',
    marginBottom: 8,
  },
  disabledInput: {
    opacity: 0.6, 
  },
});

export default Input;
