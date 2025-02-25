import { useEffect } from "react";
import { ALLPRODUCTURL } from "../constants/apiUrl";

export default function useGetSingleProduct() {
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
  return {};
}
