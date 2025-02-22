import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductItem = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(product)}>
      {/* Product Image */}
      <Image 
        source={{ uri: product.images?.[0] || 'https://via.placeholder.com/150' }} 
        style={styles.image} 
        resizeMode="cover" 
      />

      {/* Product Details */}
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
        <Text style={styles.category}>{product.category?.name}</Text>
        <Text style={styles.price}>₹{product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,  // Ensure it expands properly in the row
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      margin: 5, 
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    image: {
      width: '100%',  // Make sure image scales properly
      height: 120,
      borderRadius: 10,
    },
  });

export default ProductItem;
