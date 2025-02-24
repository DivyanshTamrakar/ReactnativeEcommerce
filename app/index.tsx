import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ActivityLoader from "./components/activityIndicator";
import Categories from "./components/Categories/categories";
import NoDataFound from "./components/noDataFound";
import ProductList from "./components/ProductList/productList";
import SearchBar from "./components/SearchBarComponent";
import { Colors } from "./constants/Colors";
import ProductsContext from "./context/productContext";
import { useProductSearch } from "./hooks/useProductSearch";

export default function Index() {
  const { allProducts, filteredProducts } = useContext(ProductsContext);
  const { searchText, setSearchText } = useProductSearch();

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={searchText} onChangeText={setSearchText} />

      <Categories />

      {filteredProducts?.length > 0 ? (
        <ProductList />
      ) : allProducts?.length > 0 ? (
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
