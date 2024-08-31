"use client";
import { Environment, PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

export default function RenderModel({ children, className }) {
  return (
    <Canvas className={`w-screen h-screen relative ${className}`}>
      <PresentationControls>
        <Stage>{children}</Stage>
      </PresentationControls>
    </Canvas>
  );
}
