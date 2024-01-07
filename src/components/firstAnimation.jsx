/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import {useAnimations, useGLTF, useFBX } from "@react-three/drei";

export function First(props) {
  const { nodes, materials } = useGLTF("/untitled.glb");
  const { animations: first } = useFBX("animations/Animate.fbx");
 const group = useRef();

 console.log(first)
  const { actions } = useAnimations(first, group);
 console.log(actions)

  
  return (
    <group {...props} ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[0.111, 0.085, -0.119]}
        rotation={[0.048, 0.474, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[-0.044, 0.99, -0.2]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={nodes.Icosphere001.material}
        position={[0.069, 0.837, 0.096]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={nodes.Icosphere002.material}
        position={[0.058, 0.617, -0.005]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={nodes.Icosphere003.material}
        position={[-0.223, 1.203, 0.193]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={nodes.Icosphere004.material}
        position={[-0.13, 0.598, 0.169]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere005.geometry}
        material={nodes.Icosphere005.material}
        position={[-0.338, 1.041, -0.389]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere006.geometry}
        material={nodes.Icosphere006.material}
        position={[-0.194, 0.806, 0.781]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007.geometry}
        material={nodes.Icosphere007.material}
        position={[-0.379, 0.791, 0.601]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere008.geometry}
        material={nodes.Icosphere008.material}
        position={[-0.471, 1.013, 0.036]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere009.geometry}
        material={nodes.Icosphere009.material}
        position={[-0.559, 1.515, -0.304]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere010.geometry}
        material={nodes.Icosphere010.material}
        position={[-0.329, 0.327, 0.39]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere011.geometry}
        material={nodes.Icosphere011.material}
        position={[-0.296, 0.928, -0.162]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere012.geometry}
        material={nodes.Icosphere012.material}
        position={[-0.521, 1.656, -0.448]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere013.geometry}
        material={nodes.Icosphere013.material}
        position={[-0.428, 1.541, -0.205]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere014.geometry}
        material={nodes.Icosphere014.material}
        position={[-0.598, 1.424, -0.746]}
        rotation={[-2.321, -0.637, -2.565]}
        scale={0.068}
      />
    </group>
  );
}

useGLTF.preload("/untitled.glb");

