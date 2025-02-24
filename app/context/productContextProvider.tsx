import { useEffect, useState } from "react";
import ProductsContext from "./productContext";
import { ProductItemInterface } from "../commonTypes";
import { ALLPRODUCTURL } from "@/app/constants/apiUrl";

import { ReactNode } from "react";

const ProductContexProvider = ({ children }: { children: ReactNode }) => {
  const [allProducts, setAllProducts] = useState<
    ProductItemInterface[] | undefined
  >(undefined);
  const [filteredProducts, setFilteredProducts] = useState<
    ProductItemInterface[]
  >([]);

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
    if (allProducts && allProducts?.length > 0) {
      setFilteredProducts(allProducts);
    }
  }, [allProducts]);

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        setAllProducts,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductContexProvider;
