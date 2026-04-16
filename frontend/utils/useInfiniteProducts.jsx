import { useDispatch, useSelector } from "react-redux";
import axios from "../src/api/axiosconfig";
import { useEffect, useState } from "react";
import { loadlazyproduct } from "../src/store/reducers/productSlice";

const useInfiniteProducts = () => {
       const dispatch = useDispatch();
      const {products} = useSelector(state=>state.productsReducer)
     const[hasmore,sethasmore] = useState(true);
       const fetchproducts  = async () =>{
      try{
          const {data} = await axios.get(`/products?_limit=6&_start=${products.length}`);
          if(data.length <6){
            sethasmore(false);
            
          }else{
            sethasmore(true);
            dispatch(loadlazyproduct(data));
          }
          
          
      }
      catch(error){
        console.log(error);
        
      }
    
    }
     useEffect(()=>{
      fetchproducts();
    },[]);

  return {products,hasmore,fetchproducts};
}

export default useInfiniteProducts