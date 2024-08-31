// src/components/Model.tsx
import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { scene } = useGLTF("/models/scene-transformed.glb");

  return <primitive scale={[5, 5, 5]} object={scene} {...props} />;
}
