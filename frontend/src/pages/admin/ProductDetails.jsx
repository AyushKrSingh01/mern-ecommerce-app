import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { asyncdeleteproduct, asyncpatchproduct } from "../../store/actions/productActions";

const ProductDetails = () => {
  const {id} = useParams();
  const {productsReducer:{products},userReducer:{users}} = useSelector((state)=>state);
  const product = products?.find((product)=>product.id == id);

  


  const {register,handleSubmit,reset} = useForm({
    defaultValues:{
      image:product?.image,
      title:product?.title,
      price:product?.price,
      category:product?.category,
      description:product?.description 
    }
  });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  UpdateProductHandler = (product)=>{        
            dispatch(asyncpatchproduct(id,product));
            
            
    };
  const DeleteHandler = () =>{
    dispatch(asyncdeleteproduct(id));
    navigate('/product');
  }
  return product? (
    <>
    <div className="w-full flex">
      
        <img className="w-1/2 h-1/2 object-cover" src={product.image} alt="" />
      
      <div className="font-thin w-1/2 h-1/2 px-10">
      <h1 className="font-thin mb-10 text-5xl">{product.title}</h1>
      <h2 className="text-3xl text-green-400">${product.price}</h2>
      <p>{product.description}</p>
      <button className="text-xl rounded font-medium p-5 mt-20 active:scale-95 bg-white text-black">Add to Cart</button>
      </div>
    </div>
    <hr />
    {users && users.isAdmin && <form onSubmit={handleSubmit(UpdateProductHandler)} className="flex flex-col w-full justify-start items-start">
        <input {...register("image")} className="outline-0 border-b text-3xl p-2 mb-3 " type="url" placeholder="image url" />
        <input {...register("title")} className="outline-0 border-b text-3xl p-2 mb-3 " type="text" placeholder="Title" />
        <input {...register("price")} className="outline-0 border-b text-3xl p-2 mb-3 " type="number" placeholder="0.00" />
        <textarea {...register("description")} className="outline-0 border-b text-3xl p-2 mb-3 " placeholder="enter descriptin here..."></textarea>
        <input {...register("category")} className="outline-0 border-b text-3xl p-2 mb-3 " type="text" placeholder="Category Name" />
        <button className="mt-5 px-4 py-2 bg-blue-400 rounded active:scale-95"  >Update Product</button>
        <button type="button" onClick={DeleteHandler} className="mt-5 px-4 py-2 bg-red-400 rounded active:scale-95"  >Delete Product</button>
    </form>
      }
    
  </>
  ):"loading..."
}

export default ProductDetails