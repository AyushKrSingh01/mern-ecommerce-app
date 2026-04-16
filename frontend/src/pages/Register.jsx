import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { asyncregisteruser } from "../store/actions/userActions";
const Register = () => {
    const {register,handleSubmit,reset} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  RegisterHandler = (user)=>{
            user.id = nanoid();
            user.isAdmin=false;
            user.cart=[];
            dispatch(asyncregisteruser(user));
            navigate("/login");
            
    };
  return (
    <form onSubmit={handleSubmit(RegisterHandler)} className="flex flex-col w-1/2 justify-start items-start">
        <input {...register("username")} className="outline-0 border-b text-3xl p-2 mb-3 " type="text" placeholder="John-Doe" />
        <input {...register("email")} className="outline-0 border-b text-3xl p-2 mb-3 " type="email" placeholder="john@doe.com" />
        <input {...register("password")} className="outline-0 border-b text-3xl p-2 mb-3 " type="password" placeholder="********" />
        <button className="mt-5 px-4 py-2 bg-blue-400 rounded active:scale-95"  >Register User</button>
        <p className="mt-5">Already have an account? <Link className="text-blue-400" to="/login">Login</Link>
        </p>
    </form>
  )
} 

export default Register