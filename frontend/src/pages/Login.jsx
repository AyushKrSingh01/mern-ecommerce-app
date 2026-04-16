import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/userActions";

const Login = () => {
    const {register,handleSubmit,reset} = useForm();
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const LoginHandler = (user)=>{
            dispatch(asyncloginuser(user));
            navigate('/');
            
    };
  return (
    <form onSubmit={handleSubmit(LoginHandler)} className="flex flex-col w-1/2 justify-start items-start">
        <input {...register("email")} className="outline-0 border-b text-3xl p-2 mb-3 " type="email" placeholder="john@doe.com" />
        <input {...register("password")} className="outline-0 border-b text-3xl p-2 mb-3 " type="password" placeholder="********" />
        <button className="mt-5 px-4 py-2 bg-blue-400 rounded active:scale-95">Login User</button>
        <p className="mt-5">Don't have an account? <Link className="text-blue-400" to="/register">Register</Link>
        </p>
    </form>
  )
} 

export default Login