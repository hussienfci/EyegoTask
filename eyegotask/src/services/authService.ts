import { AppDispatch } from "@/store/store";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth";
import { loginSuccess, setError, setUser } from "../lib/features/auth_tableData/authSlice";

export const signIn = (email : string , password:string)=> async(dispatch : AppDispatch)=>{
   try{
       const {user} = await signInWithEmailAndPassword(auth , email , password) ; 
       dispatch(loginSuccess(user)) ; 
     }catch(error){
    dispatch(setError(`${error}`))
   }
}

export const signUp = (email :string , password:string )=>async(dispatch:AppDispatch)=>{
  try{
     const {user} = await createUserWithEmailAndPassword(auth, email, password) ; 
    dispatch(setUser(user))

    console.log('New User Registered auth service:', user);
    
  }catch(error){
    dispatch(setError(`${error}`) ) ;
  }
}

export const logoutUser = ()=> async(dispatch:AppDispatch)=>{
    try{
       await auth.signOut() ; 
       dispatch(setUser(null)) ;  
    }catch(error){
        dispatch(setError(`${error}`))
    }
}

export const initAuth = (dispatch: AppDispatch) =>{
    return onAuthStateChanged(auth , (user)=>{
        dispatch(setUser(user) ) ; 
    })
} 

