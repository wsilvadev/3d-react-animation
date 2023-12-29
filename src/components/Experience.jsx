import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import React, { Suspense } from "react";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <group position-y={-1}>
         <Avatar/>

      </group>
      <OrbitControls />
      
    </>
  );
};
