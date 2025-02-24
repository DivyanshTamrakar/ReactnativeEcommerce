import { useEffect, useState, useContext } from "react";
import { useLocalSearchParams } from "expo-router";
import { ALLPRODUCTURL } from "@/app/constants/apiUrl";
import { ProductItemInterface } from "@/app/commonTypes";
import ProductsContext from "@/app/context/productContext";

const useProductDetails = () => {
  const params = useLocalSearchParams();
  const { allProducts } = useContext(ProductsContext);

  const [product, setProduct] = useState<ProductItemInterface | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<
    ProductItemInterface[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch product details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${ALLPRODUCTURL}/${params.id}`);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.warn("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  // Find related products by category
  useEffect(() => {
    if (product && allProducts.length > 0) {
      const related = allProducts.filter(
        (item: ProductItemInterface) =>
          item?.category?.name?.toLowerCase() ===
          product?.category?.name?.toLowerCase()
      );
      setRelatedProducts(related);
    }
  }, [product, allProducts]);

  return { product, relatedProducts, loading };
};

export default useProductDetails;
