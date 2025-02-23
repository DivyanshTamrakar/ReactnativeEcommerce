import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";
import useGetAllProducts from "./hooks/getProductsData";
import SearchBar from "./components/SearchBarComponent";
import ProductItem from "./components/productItem";
import { useEffect, useState } from "react";
import { Pressable } from "react-native-gesture-handler";
import { ProductItemInterface } from "./commonTypes";

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
      <View>
        <SearchBar
          value={searchText}
          onChangeText={handleChange}
          placeholder={"Enter Product Name..."}
        />
      </View>

      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          style={{ marginTop: 10 }}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2} // Ensures two items per row
          initialNumToRender={10}
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
    backgroundColor: "#c3c3c3",
  },
  text: {
    color: "#000",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#000",
  },
});
