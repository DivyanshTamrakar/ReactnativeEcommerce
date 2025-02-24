import { ProductItemInterface } from "@/app/commonTypes";
import { FlatList } from "react-native";
import ProductItem from "./productItem";
import { useContext } from "react";
import ProductsContext from "@/app/context/productContext";

export default function ProductList() {
  const { filteredProducts } = useContext(ProductsContext);

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
      data={filteredProducts}
      style={{ marginTop: 10 }}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2} // Ensures two items per row
      initialNumToRender={10}
      columnWrapperStyle={{ gap: 10, marginBottom: 10 }} // Row gap
    />
  );
}
