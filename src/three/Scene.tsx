import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Scene() {
  const city = useLoader(GLTFLoader, "./gltf/low_poly_city.glb");
  const car = useLoader(GLTFLoader, "./gltf/car.glb");

  return (
    // Wrapper qui détermine la durée du scroll « pin »
    <div style={{ height: "800vh", position: "absolute", top: 0, left: 0 }}>
      <div
        id="about"
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 10,
        }}
      >
        <Canvas style={{ width: "100%", height: "100%" }}>
          <Suspense fallback={null}>
            <Environment preset="city" />
            <PerspectiveCamera makeDefault position={[20, 40, 170]} />
            <ambientLight intensity={1} />
            <primitive object={city.scene} scale={1} />
            <primitive object={car.scene} scale={0.008} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
