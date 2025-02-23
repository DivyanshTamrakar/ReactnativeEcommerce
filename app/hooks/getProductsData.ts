import { useEffect, useState } from "react";
import { ALLPRODUCTURL } from "../constants/apiUrl";
import { ProductItemInterface } from "../commonTypes";

export default function useGetAllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredData, setFilteredProducts] = useState<ProductItemInterface[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ALLPRODUCTURL);
        const result = await response.json();
        if (result) {
          setAllProducts(result);
        }
      } catch (error) {
        console.warn(error);
      } finally {
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (allProducts.length > 0) {
      setFilteredProducts(allProducts);
    }
  }, [allProducts]);

  return { allProducts, setAllProducts, filteredData, setFilteredProducts };
}
