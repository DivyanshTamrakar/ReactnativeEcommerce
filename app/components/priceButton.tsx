import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const PriceAddButton = ({
  price = 499,
  onAddPress,
}: {
  price?: number;
  onAddPress?: () => void;
}) => {
  return (
    <View style={styles.container}>
      {/* Price Section */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>PRICE</Text>
        <Text style={styles.priceValue}>${price}</Text>
      </View>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
        <Text style={styles.addButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 0.4,
    borderColor: Colors.green,
  },
  priceContainer: {
    flexDirection: "column",
  },
  priceLabel: {
    fontSize: 14,
    color: "#8e8e8e", // Gray color for "PRICE"
    fontWeight: "bold",
  },
  priceValue: {
    fontSize: 25,
    color: Colors.green, // Green price
    fontWeight: "900",
  },
  addButton: {
    backgroundColor: Colors.green, // Green background
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 16,
    color: "#fff", // White text
    fontWeight: "bold",
  },
});

export default PriceAddButton;
