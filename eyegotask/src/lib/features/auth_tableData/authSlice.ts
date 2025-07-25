import { AuthState, UserData } from './types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  User } from "firebase/auth";


const intialState:AuthState ={
    currentUser: null , 
    isLoading:false, 
    error:null 
}

export const authSlice = createSlice({
    name:"auth" , 
    initialState:intialState , 
    reducers:{
        loginSuccess(state , action){
            state.currentUser = action.payload ; 
            state.isLoading = false ; 
            state.error= null ;

            console.log('User logged in:', state.currentUser);

        } , 
        setError:(state , action: PayloadAction<string>)=> {
            state.error = action.payload ;  
        }, 
        setLoading:(state , action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload ; 
        } , 
        clearError:(state)=> {
            state.error = null ; 
        } , 
        setUser:(state , action:PayloadAction<User | null>)=> {
          state.currentUser = action.payload  ;  
          console.log('New User Register:', action.payload);
        }
    }, 
}) ; 

export const {loginSuccess , setUser, setError, setLoading, clearError} = authSlice.actions ; 


// export const transformUserData = (user:User | null): UserData | null=>{
//     if(!user)
//         return null ; 
//     else{
//         return {
//             uId:user.uid , 
//             email:user.email || '', 
//             displayName:user.displayName || '' ,
//         }
//     }
// } 

