import { useEffect } from "react";
import axios from "./api/axiosconfig";
import { useDispatch, useSelector } from "react-redux";
import {asyncgetusers} from './store/userActions'
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { asynccurrentuser } from "./store/actions/userActions";
import { asyncloadproducts } from "./store/actions/productActions";
const App = () => {
  const {users} = useSelector((state)=>state.userReducer)
  const {products} = useSelector((state)=>state.productsReducer)
  const dispatch  = useDispatch();

  useEffect(()=>{
    !users && dispatch(asynccurrentuser());
  
  },[users])


  // useEffect(()=>{
  //   products.length == 0 && dispatch(asyncloadproducts());
  // },[products])
 
  
   
  return (
   
    <div className="  text-white font-thin w-screen bg-gray-800 px-[10%]">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App