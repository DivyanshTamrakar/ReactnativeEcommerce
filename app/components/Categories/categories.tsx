import { FlatList, StyleSheet, Text, View } from "react-native";
import { ProductItemInterface } from "../../commonTypes";
import { Colors } from "../../constants/Colors";
import { useEffect, useState } from "react";
import CategoryItem from "./categoryItem";
import { removeDuplicateItems } from "./helperFunctions";

const Categories = ({
  allProducts,
  setFilteredProducts,
}: {
  allProducts: ProductItemInterface[];
  setFilteredProducts: any;
}) => {
  const [touchedId, settouchedId] = useState<number | null>(null);

  useEffect(() => {
    const newArray = allProducts.filter(
      (item, index) => item.category.id === touchedId
    );
    setFilteredProducts(newArray);
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
