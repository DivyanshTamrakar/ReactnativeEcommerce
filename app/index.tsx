import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { ProductItemInterface } from "./commonTypes";
import SearchBar from "./components/SearchBarComponent";
import ProductItem from "./components/productItem";
import useGetAllProducts from "./hooks/getProductsData";
import { Colors } from "./constants/Colors";

export default function Index() {
  const { allProducts } = useGetAllProducts();
  const [filteredData, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (allProducts.length > 0) {
      setFilteredProducts(allProducts);
    }
  }, [allProducts]);

  const handleChange = (newText: string) => {
    setSearchText(newText);
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(newText.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

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
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor="#c3c3c3" barStyle="dark-content" /> */}

      <SearchBar value={searchText} onChangeText={handleChange} />

      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          style={{ marginTop: 10 }}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2} // Ensures two items per row
          initialNumToRender={10}
          columnWrapperStyle={{ gap: 10, marginBottom: 10 }} // Row gap
        />
      ) : (
        <ActivityIndicator
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 4,
  },
  text: {
    color: Colors.black,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: Colors.black,
  },
});
