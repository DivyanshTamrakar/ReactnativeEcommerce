import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { ALLPRODUCTURL } from "./constants/apiUrl";
import { ProductItemInterface } from "./commonTypes";
import CarouselSlider from "./components/carousel";
import PriceAddButton from "./components/priceButton";
import { Colors } from "./constants/Colors";

export default function AboutScreen() {
  const params = useLocalSearchParams();
  const [product, setProduct] = useState<ProductItemInterface>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ALLPRODUCTURL + `/${params.id}`);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.warn(error);
      } finally {
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <View style={styles.container}>
      <CarouselSlider imagesArray={product?.images} />
      <ScrollView>
        <Text style={styles.text}>{product?.title}</Text>
        <Text style={styles.descriptionText}>{product?.description}</Text>
      </ScrollView>
      <PriceAddButton
        price={499}
        onAddPress={() => console.log("Added to cart")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.lightGrey2,
    fontWeight: "900",
    fontSize: 25,
    paddingHorizontal: 20,
    marginTop: 70,
  },

  descriptionText: {
    fontWeight: "400",
    fontSize: 14,
    paddingHorizontal: 20,
    color: Colors.lightGrey4,
    marginTop: 10,
    lineHeight: 18,
  },
});
