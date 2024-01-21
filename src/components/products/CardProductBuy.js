import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const ProductCardBuy = ({ product }) => {
  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={getGradientColors(product.sabor)}
        style={styles.card}
      >
        <View style={styles.content}>
          <Text style={styles.h1}>{product.title}</Text>
          <Text style={styles.h2}>Sabor: {product.sabor}</Text>
          <Text style={styles.h3}>s/{product.price}</Text>
        </View>
        <View style={styles.circle}></View>
        {/* Icono "+" */}
        <FontAwesome name="plus" size={18} color="#fff" style={styles.icon} />

      </LinearGradient>
      <Image source={{ uri: product.image }} style={styles.image} />
    </View>
  );
};

const getGradientColors = (sabor) => {
  switch (sabor) {
    case 'blue':
      return ['#0635a3', '#0686a0']; 
    case 'red':
      return ['#FF1493', '#FF4500']; 
    case 'neutral':
      return ['#FFFACD', '#D3D3D3']; 
    default:
      return ['#b9bac9', '#71727f']; 
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 6,
    position: 'relative',
    alignItems: 'center',
  },
  card: {
    width: 140,
    height: 170,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    textAlign: 'center',
    zIndex: 1,
  },

  image: {
    width: 80,
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    transform: [{ rotate: '10deg' }],
    marginTop: -24,
    position: 'absolute',
    zIndex: 3,
  },
  content: {
    paddingTop: 100,
    paddingLeft: 20,
    alignItems: 'left', 
    position: 'absolute',
    zIndex: 2,
    width: '100%', 
  },
  h1: {
    fontSize: 17,
    color: '#000',
    fontFamily: "Montserrat_800ExtraBold", 
    textAlign: 'left', 
  },
  h2: {
    fontSize: 12,
    color: '#000',
    textAlign: 'left',
  },
  h3: {
    fontSize: 12,
    color: '#000',
    fontFamily: "Montserrat_800ExtraBold", 
    marginTop: 2,
    textAlign: 'left',
    marginEnd: 30,
  },
  icon: {
    position: 'absolute',
    bottom: 14,
    right: 16,
    zIndex: 4,
  },
  circle: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#212834',
    zIndex: 3,
  },
});

export default ProductCardBuy;
