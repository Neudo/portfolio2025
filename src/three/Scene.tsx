import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { City } from "./City";

export default function Scene() {
  const city = useLoader(GLTFLoader, "./gltf/low_poly_city.glb");
  const car = useLoader(GLTFLoader, "./gltf/car.glb");

  return (
    <div id="about">
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={null}>
          {/* <OrbitControls makeDefault /> */}
          <Environment preset="city" />
          <PerspectiveCamera makeDefault position={[20, 40, 170]} />
          <ambientLight intensity={1} />
          <primitive object={city.scene} scale={1} />
          <primitive object={car.scene} scale={0.008} />
          {/* <City /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
