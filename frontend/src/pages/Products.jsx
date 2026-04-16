import { lazy,Suspense, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import useInfiniteProducts from "../../utils/useInfiniteProducts";


const ProductTemplete = lazy(()=>import("../components/ProductTemplete"));

const Products = () => {
  
    //const products = useSelector((state)=>state.productsReducer.products);
  const {products,hasmore,fetchproducts} = useInfiniteProducts();
  return (
    
        <InfiniteScroll  dataLength={products.length} next={fetchproducts} hasMore={hasmore} loader={<h1>Loading...</h1>} 
        endMessage={<p style={{textAlign:"center"}}>
                        <b>Yay! You have seen it all</b>
                    </p>}>
            <div className=" flex flex-wrap">
             { products.map(product => (
              <Suspense key={product.id} fallback={
                <h1 className="text-center text-5xl text-yellow-500">
                  LOADING...
                </h1>
              }>
                <ProductTemplete key={product.id} product={product}/></Suspense>))}
              
              
              
            </div>
        </InfiniteScroll>
      
  )
}

export default Products