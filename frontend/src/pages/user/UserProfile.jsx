import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../store/actions/userActions';

const UserProfile = () => {
    
  const {users}    = useSelector((state)=>state.userReducer);
  
  


  const {register,handleSubmit,reset} = useForm({
    defaultValues:{
      username:users?.username,
      email:users?.email,
      password:users?.password,
      
    }
  });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  UpdateUserHandler = (user)=>{   

            dispatch(asyncupdateuser(users.id,user));
            
            
    };
  const DeleteHandler = () =>{
   dispatch(asyncdeleteuser(users.id));
    navigate('/login');
  }
  const LogoutUserHandler = () =>{
   dispatch(asynclogoutuser());
    navigate('/login');
  }
  return users ? (
    <div>

        <h1 className='font-thin text-5xl text-gray-900'>{users.username}</h1>
        <h1 className='text-gray-900 font-thin text-xl'>{users.email}</h1>
        <hr className='my-20' />
        <form onSubmit={handleSubmit(UpdateUserHandler)} className="flex flex-col w-full justify-start items-start">
        <input {...register("username")} className="outline-0 border-b text-3xl p-2 mb-3 " type="text" placeholder="Username" />
        <input {...register("email")} className="outline-0 border-b text-3xl p-2 mb-3 " type="email" placeholder="abc@mail.com" />
        <input {...register("password")} className="outline-0 border-b text-3xl p-2 mb-3 " type="password" placeholder="*****" />
       
        <button className="mt-5 px-4 py-2  bg-blue-400 rounded active:scale-95"  >Update User</button>
            <button type="button" onClick={LogoutUserHandler} className="mt-5 px-4 py-2 bg-red-400 rounded active:scale-95"  >Logout</button>
        <button type="button" onClick={DeleteHandler} className="mt-5 px-4 py-2 bg-red-400 rounded active:scale-95"  >Delete User</button>
    </form>
    </div>
  ):"Loading"
}

export default UserProfile