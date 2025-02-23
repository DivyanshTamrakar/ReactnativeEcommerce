import { ProductItemInterface } from "@/app/commonTypes";
import { Colors } from "@/app/constants/Colors";
import { Link } from "expo-router";
import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  product: ProductItemInterface;
  onPress: () => void;
  id: number;
};

const ProductItem: FC<Props> = ({ product, onPress, id }) => {
  return (
    <Link
      href={{ pathname: "/about", params: { id } }}
      style={styles.container}
    >
      {/* Product Image */}
      <Image
        source={{
          uri: product.images?.[0] || "https://via.placeholder.com/150",
        }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Product Details */}
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={styles.category}>{product.category?.name}</Text>
        <Text style={styles.price}>₹{product.price}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure it expands properly in the row
    backgroundColor: "#fff",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    margin: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: "100%", // Make sure image scales properly
    height: 120,
    objectFit: "cover",
  },
  details: {
    padding: 10,
  },
  category: {
    color: Colors.lightGrey2,
    fontSize: 10,
  },
  title: {
    color: Colors.lightGrey2,
    fontSize: 12,
  },
  price: {
    color: Colors.black,
    fontSize: 13,
  },
});

export default ProductItem;
