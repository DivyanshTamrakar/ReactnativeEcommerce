import { useEffect, useState } from "react";
import { ALLPRODUCTURL } from "../constants/apiUrl";

export default function useGetAllProducts(){
    const [allProducts,setAllProducts] = useState([]);


    useEffect(()=>{
        const fetchData = async ()  => {
            try {
                const response = await fetch(ALLPRODUCTURL);
                const result = await response.json()
                if(result){
                    setAllProducts(result)
                }
                
            } catch (error) {
                
            }finally{
    
            }
        }

        fetchData();
    },[])

    return {allProducts,setAllProducts}
}