import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.h1}>{product.title}</Text>
          <Text style={styles.h2}>Sabor: {product.sabor}</Text>
          <Text style={styles.h3}>${product.price}</Text>
        </View>
      </View>
      <Image source={{ uri: product.image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 6,
    position: 'relative',
    alignItems: 'center'
  },
  card: {
    width: 130,
    height: 170,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    elevation: 3,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
  },
  content: {
    paddingTop: 100,
    alignItems: 'left',
    position: 'absolute',
    zIndex: 2,
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    transform: [{ rotate: '10deg' }],
    marginTop: -18,
    position: 'absolute',
    zIndex: 3,
  },
  h1: {
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 4, // Asegurar que el texto esté por encima de la imagen
  },
  h2: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
    zIndex: 4,
  },
  h3: {
    fontSize: 11,
    color: '#000000',
    marginLeft: 'auto', // Mueve el h3 hacia la derecha
    marginTop: 2,
    zIndex: 4,
  },
});

export default ProductCard;
