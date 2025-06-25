import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import City from "./models/City";

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="about"
      ref={containerRef}
      className="relative h-[600vh] w-full overflow-hidden"
    >
      <div className="h-[100vh] w-full overflow-hidden fixed top-0 left-0">
        <Canvas
          style={{ width: "100%", height: "100%" }}
          shadows
          camera={{ position: [20, 40, 300] }}
        >
          <Suspense fallback={null}>
            <Environment preset="city" />
            <City />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
