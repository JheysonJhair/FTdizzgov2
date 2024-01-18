import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const PhoneNumberInput = ({ onPhoneNumberChange }) => {
  const [countryCode, setCountryCode] = useState('+51');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryCodeChange = (text) => {
    setCountryCode(text);
    onPhoneNumberChange(`${text}${phoneNumber}`);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    onPhoneNumberChange(`${countryCode}${text}`);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, { flex: 2, marginRight: 5 }]}>
        <TextInput
          style={styles.input}
          placeholder="Código de país"
          value={countryCode}
          onChangeText={handleCountryCodeChange}
          placeholderTextColor="#C6CBD9"
        />
      </View>
      <View style={[styles.inputContainer, { flex: 8, marginLeft: 5 }]}>
        <TextInput
          style={styles.input}
          placeholder="Celular"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          keyboardType="numeric"
          placeholderTextColor="#C6CBD9"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    justifyContent: 'space-between',
    marginBottom:10
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: '#C6CBD9',
    borderWidth: 1,
    padding: 14,
    borderRadius: 6,
    color: 'white',
    fontSize: 16,
    width: '100%',
  },
});

export default PhoneNumberInput;
