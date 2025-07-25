import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/store/store"
import { useEffect } from "react";
import { initAuth } from "../services/authService";



export const useAuth = ()=>{
    const dispatch = useDispatch<AppDispatch>() ; 
    const {currentUser , isLoading , error} = useSelector((state:RootState) => state.auth)   ; 


    useEffect(()=> {
        const unsubscribe = initAuth(dispatch) ; 
        return ()=> unsubscribe() ; 
    }, [dispatch]) ; 

    return {currentUser , isLoading , error} ; 

} ;
