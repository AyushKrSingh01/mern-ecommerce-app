import axios from '../../api/axiosconfig'
import {toast} from 'react-toastify'
import { loaduser,removeuser } from '../reducers/userSlice';
export const asynccurrentuser=(user)=>async (dispatch,getState)=>{
    try{
            const user = JSON.parse(localStorage.getItem("user"));
            if(user) dispatch(loaduser(user));
            else console.log("Login to Access the Resource");
            
    }
    catch(error){
        toast.error("Not Valid!")
    }
}

export const asynclogoutuser=(user)=>async (dispatch,getState)=>{
    try{
            localStorage.removeItem("user");
            dispatch(removeuser());
            
            
    }
    catch(error){
        toast.error("Not Valid!")
    }
}
export const asyncloginuser = (user) => async (dispatch,getState)=>{
    try{
        const {data} = await axios.get(`/users?email=${user.email}`);
       
        localStorage.setItem("user",JSON.stringify(data[0]));
        dispatch(asynccurrentuser());
    }
    catch(error){
        toast.error("Not Valid!");
    }
}
export const asyncregisteruser = (user) => async (dispatch,getState)=>{
    try{
        const res =await axios.post("/users",user);
        console.log(res);
    }
    catch(error){
        toast.error("Not Valid!");
    }
}

export const asyncupdateuser = (id,user) => async (dispatch,getState)=>{
    try{

      const {data} = await axios.patch(`/users/${id}`,user);

        localStorage.setItem("user",JSON.stringify(data));
        dispatch(asynccurrentuser());
    }
    catch(error){
        toast.error("Not Valid!");
    }
}


export const asyncdeleteuser = (id) => async (dispatch,getState)=>{
    try{

     await axios.delete(`/users/${id}`);
     dispatch(asynclogoutuser());
 
     
    }
    catch(error){
        toast.error("Not Valid!");
    }
}