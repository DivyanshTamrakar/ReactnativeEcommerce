import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductItem from "../ProductList/productItem";
import { ProductItemInterface } from "@/app/commonTypes";
import { Colors } from "@/app/constants/Colors";

export default function RelatedProducts({
  relatedProducts,
}: {
  relatedProducts: ProductItemInterface[];
}) {
  return (
    <View style={styles.relatedContainer}>
      <Text style={styles.header}>Related Products</Text>

      <FlatList
        data={relatedProducts.slice(0, 6)}
        renderItem={({ item }) => (
          <ProductItem product={item} onPress={() => {}} id={item.id} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  relatedContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 20,
    marginHorizontal: 10,
  },
  header: {
    color: Colors.lightGrey2,
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 10,
  },
});
