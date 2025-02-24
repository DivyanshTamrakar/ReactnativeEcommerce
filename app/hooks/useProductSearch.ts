import { useEffect, useState, useContext } from "react";

import { debounce } from "../utils/debounce";
import ProductsContext from "../context/productContext";

export const useProductSearch = () => {
  const { allProducts, setFilteredProducts } = useContext(ProductsContext);

  const [searchText, setSearchText] = useState<string>("");

  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const handler = debounce((text) => {
      setDebouncedSearch(text);
    }, 300);

    handler(searchText);

    return () => handler.cancel(); // Cleanup function
  }, [searchText]);

  useEffect(() => {
    if (debouncedSearch.trim()) {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [debouncedSearch, allProducts]);

  return { searchText, setSearchText };
};
