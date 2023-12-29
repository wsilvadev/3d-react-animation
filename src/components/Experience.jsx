import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import React, { Suspense } from "react";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <group position={0}>
         <Avatar/>
      </group>
      <OrbitControls />
      
    </>
  );
};
