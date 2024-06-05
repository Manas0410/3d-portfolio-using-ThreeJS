import React, { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sky = ({ IsRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (IsRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;

// chanhge div to mesh to make primitive elem
// use hook useGLTF and pass downloaded 3d model gltf file
// define object by using primitive tagg
// pass attribute object={hookval.scene}
