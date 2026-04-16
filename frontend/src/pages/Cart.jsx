import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userActions";

const Cart = () => {
  const dispatch = useDispatch();
    const users = useSelector((state)=>state.userReducer.users);
    const products = useSelector((state)=>state.productsReducer.products);

  const IncreaseQuantityHandler = (index,product)=>{
          const copyuser = {...users, cart:[...users.cart]}
            
                  copyuser.cart[index]={
                    ...copyuser.cart[index],
                    quantity: copyuser.cart[index].quantity + 1,
                  
                }
                
              dispatch(asyncupdateuser(users.id,copyuser));
                console.log(copyuser);
  }
   const DecreaseQuantityHandler = (index,product)=>{
      const copyuser = {...users, cart:[...users.cart]}
                  
              if(users.cart[index].quantity > 1){
                   copyuser.cart[index]={
                    ...copyuser.cart[index],
                    quantity: copyuser.cart[index].quantity - 1, 
                }
              }else{
                copyuser.cart.splice(index,1);
              } 
                 
                
               dispatch(asyncupdateuser(users.id,copyuser));
                console.log(copyuser);
  }
  const cartItems=  users.cart.map((c,index)=>{
    return(
         <li className="bg-gray-700 mb-10 p-3 rounded flex items-center justify-between" key={c.product.id}>
         <img className="mr-10 w-[7vmax] h-[7vmax] object-cover " src={c.product.image} alt="" />
         <span> {c.product.title}</span>
         <span>{c.product.price}</span>
        <p>
          <button onClick={()=>DecreaseQuantityHandler(index,c)} className="text-2xl">-</button>
          <span className="mx-3 p-1 rounded">{c.quantity}</span>
          <button onClick={()=>IncreaseQuantityHandler(index,c)} className="text-2xl">+</button>
        </p>
         
         </li>);
         }
  )
  return (
    <div>{cartItems}</div>
  )
}

export default Cart