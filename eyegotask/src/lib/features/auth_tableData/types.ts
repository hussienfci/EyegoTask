import { User } from "firebase/auth";

export interface UserData{
    uId : string ; 
    email:string ; 
    displayName:string  ;
}

export interface AuthState{
    currentUser:User | null ; 
    isLoading: boolean ; 
    error:string | null ; 
}

export interface LoginCredentials{
    email:string ; 
    password:string ; 
}

export interface RegisterCredentials extends LoginCredentials{
    displayName:string ;
}