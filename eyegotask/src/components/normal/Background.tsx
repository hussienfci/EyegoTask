"use client" ; 
import React, { ReactNode } from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
    
export default function BackgroundBeamsWithCollisionDemo({children}:{children: ReactNode}) {
  return (
    <BackgroundBeamsWithCollision>
     {children}
    </BackgroundBeamsWithCollision>
  );
}
