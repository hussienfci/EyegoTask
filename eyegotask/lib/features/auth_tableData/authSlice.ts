import { configureStore, createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name:"auth" , 
    initialState:{user:null , loading : false } , 
    reducers:{
        loginSuccess(state , action){
            state.user = action.payload ; 
            localStorage.setItem("user" , action.payload) ; 
        } , 
        logout(state){
            state.user = null ; 
            localStorage.removeItem("user") ; 
        }, 
        
    }, 
}) ; 



export const {loginSuccess, logout} = authSlice.actions ; 


