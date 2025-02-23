import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ProductItemInterface } from "./commonTypes";
import ActivityLoader from "./components/activityIndicator";
import Categories from "./components/Categories/categories";
import ProductList from "./components/ProductList/productList";
import SearchBar from "./components/SearchBarComponent";
import { Colors } from "./constants/Colors";
import useGetAllProducts from "./hooks/getProductsData";
import NoDataFound from "./components/noDataFound";

export default function Index() {
  const { allProducts, setFilteredProducts, filteredData } =
    useGetAllProducts();

  const [searchText, setSearchText] = useState<string>("");

  const handleChange = (newText: string) => {
    setSearchText(newText);
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(newText.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={searchText} onChangeText={handleChange} />

      <Categories
        allProducts={allProducts}
        setFilteredProducts={setFilteredProducts}
      />

      {filteredData.length > 0 ? (
        <ProductList allProducts={filteredData} />
      ) : allProducts.length > 0 ? (
        <NoDataFound />
      ) : (
        <ActivityLoader />
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
