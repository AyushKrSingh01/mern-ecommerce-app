import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../store/actions/productActions";

const CreateProduct = () =>  {
    const {register,handleSubmit,reset} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  CreateProductHandler = (product)=>{
            product.id = nanoid();
            console.log(product );
            
            dispatch(asynccreateproduct(product));
            navigate('/');
         
            
    };
  return (
    <form onSubmit={handleSubmit(CreateProductHandler)} className="flex flex-col w-1/2 justify-start items-start">
        <input {...register("image")} className="outline-0 border-b text-3xl p-2 mb-3 " type="url" placeholder="image url" />
        <input {...register("title")} className="outline-0 border-b text-3xl p-2 mb-3 " type="text" placeholder="Title" />
        <input {...register("price")} className="outline-0 border-b text-3xl p-2 mb-3 " type="number" placeholder="0.00" />
        <textarea {...register("description")} className="outline-0 border-b text-3xl p-2 mb-3 " placeholder="enter descriptin here..."></textarea>
        <input {...register("category")} className="outline-0 border-b text-3xl p-2 mb-3 " type="text" placeholder="Category Name" />
        <button className="mt-5 px-4 py-2 bg-blue-400 rounded active:scale-95"  >Create Product</button>
    </form>
  )
} 

export default CreateProduct