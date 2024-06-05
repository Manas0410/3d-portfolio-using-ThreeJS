import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Plane = ({ IsRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);

  const { actions } = useAnimations(animations, ref);

  // useFrame((_, delta) => {
  //   if (IsRotating) {
  //     ref.current.rotation.y += 0.2 * delta;
  //   }
  // });

  useEffect(() => {
    if (IsRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, IsRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
