"use client";
// import { Provider } from "react-redux";
// import store from "@/store/store";
import Register from "./Register/page";
import AuthProvider from "@/components/normal/AuthProvider";
export default function Home() {
  return (

      <div  className="w-full">
        
              <AuthProvider>

                    <Register/>
              </AuthProvider>
      </div>
   
  );
}
