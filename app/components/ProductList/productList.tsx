import { ProductItemInterface } from "@/app/commonTypes";
import { FlatList } from "react-native";
import ProductItem from "./productItem";

export default function ProductList({
  allProducts,
}: {
  allProducts: ProductItemInterface[];
}) {
  const renderItem = ({ item }: { item: ProductItemInterface }) => {
    return (
      <ProductItem
        key={item.id}
        product={item}
        onPress={() => {}}
        id={item.id}
      />
    );
  };

  return (
    <FlatList
      data={allProducts}
      style={{ marginTop: 10 }}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2} // Ensures two items per row
      initialNumToRender={10}
      columnWrapperStyle={{ gap: 10, marginBottom: 10 }} // Row gap
    />
  );
}
