import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";
const ProductTemplete = ({product}) => {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.userReducer.users);
       const AddtoCartHandler=(product)=>{
          const copyuser = {...users,cart:[...users.cart]}
          const x = copyuser.cart.findIndex((c)=>c?.product?.id == product.id);
          if(x == -1){
              copyuser.cart.push({
                product ,
                quantity:1
              });
          }
          else{
            copyuser.cart[x]={
              product,
              quantity: copyuser.cart[x].quantity + 1,
            }
          }
          
          dispatch(asyncupdateuser(users.id,copyuser));
          console.log(copyuser);
        }
  return (
    <div className="w-[32%] mr-3 mb-3 border shadow" key={product.id}>
                  <img className="w-full h-[30vh] object-cover" src={product.image || null} alt={product.title} />
                  <h1>{product.title}</h1>
                  <small>{product.description.slice(0,100)}..</small>
                  <div className="mt-3 flex justify-between items-center p-3">
                    <p>{product.price}</p>
                    <button onClick={()=>AddtoCartHandler(product)}>Add to Cart</button>
                  </div>
                  <Link className="block m-auto w-1/2" to={`/product/${product.id}`}>More info</Link>
          </div>    
  )
}

export default ProductTemplete