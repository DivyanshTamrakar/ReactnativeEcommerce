import ActivityLoader from "@/app/components/activityIndicator";
import CarouselSlider from "@/app/components/carousel";
import PriceAddButton from "@/app/components/priceButton";
import { Colors } from "@/app/constants/Colors";
import useProductDetails from "@/app/hooks/useProductDetails";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import RelatedProducts from "./components/RelatedProducts/relatedProducts";

const ProductDetailsScreen = () => {
  const { product, relatedProducts, loading } = useProductDetails();

  if (loading) return <ActivityLoader />;

  return (
    <>
      <ScrollView>
        {product ? (
          <View style={styles.container}>
            <CarouselSlider imagesArray={product.images} />
            <Text style={styles.text}>{product.title}</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <RelatedProducts relatedProducts={relatedProducts} />
          </View>
        ) : (
          <ActivityLoader />
        )}
      </ScrollView>

      <PriceAddButton
        price={product?.price}
        onAddPress={() => console.log("Added to cart")}
      />
    </>
  );
};

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

export default ProductDetailsScreen;
