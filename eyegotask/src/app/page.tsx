"use client";
import { Provider } from "react-redux";
import store from "../../lib/store";
import Dashboard from "../../pages/dashboard/page";
import BackgroundBeamsWithCollisionDemo from "../../components/normal/Background";

import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collision";
  
export default function Home() {
  return (
   <div >
    
    <Provider store={store}>
      <BackgroundBeamsWithCollisionDemo>

          <Dashboard />
      </BackgroundBeamsWithCollisionDemo>
    </Provider>
   </div>
   
  );
}
