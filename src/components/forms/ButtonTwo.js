import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      style={styles.boton}
      onPress={onPress}
    >
      <Text style={styles.textoBoton}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: 'transparent',  
    borderColor: '#C6CBD9',           
    borderWidth: 1,  
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    width: '95%',
  },
  textoBoton: {
    color: 'white',
    fontSize: 19,
    fontFamily: "Montserrat_800ExtraBold", 
  },
});

export default Button;