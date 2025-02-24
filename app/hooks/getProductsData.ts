import { useEffect, useState } from "react";
import { ALLPRODUCTURL } from "../constants/apiUrl";
import { ProductItemInterface } from "../commonTypes";

export default function useGetAllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredData, setFilteredProducts] = useState<ProductItemInterface[]>(
    []
  );
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

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

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300); // Adjust delay as needed

    return () => clearTimeout(handler); // Cleanup on each keystroke
  }, [searchText]);

  // Effect to filter data when debouncedSearch changes
  useEffect(() => {
    if (debouncedSearch) {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts); // Reset to all products if search is empty
    }
  }, [debouncedSearch, allProducts]);

  return {
    allProducts,
    setAllProducts,
    filteredData,
    setFilteredProducts,
    setSearchText,
    searchText,
  };
}
