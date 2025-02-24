import { FlatList, StyleSheet, Text, View } from "react-native";
import { ProductItemInterface } from "../../commonTypes";
import { Colors } from "../../constants/Colors";
import { useContext, useEffect, useState } from "react";
import CategoryItem from "./categoryItem";
import { removeDuplicateItems } from "./helperFunctions";
import ProductsContext from "@/app/context/productContext";

const Categories = () => {
  const [touchedId, settouchedId] = useState<number | null>(null);

  const { allProducts, setFilteredProducts } = useContext(ProductsContext);

  useEffect(() => {
    if (allProducts?.length > 0) {
      const newArray = allProducts.filter((product: ProductItemInterface) => {
        return product.category.id === touchedId; // Directly accessing category.id
      });

      setFilteredProducts(newArray);
    }
  }, [touchedId]);

  return (
    <View>
      <Text style={styles.heading}>Categories</Text>
      <FlatList
        data={removeDuplicateItems(allProducts)}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <CategoryItem
            touchedId={touchedId}
            settouchedId={settouchedId}
            item={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 8,
  },

  heading: {
    fontSize: 30,
    marginLeft: 10,
    fontWeight: "900",
    marginTop: 18,
    color: Colors.lightGrey4,
  },
});

export default Categories;
