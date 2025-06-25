import { Suspense, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import City from "./models/City";
import { useMotionValueEvent, useScroll } from "motion/react";
import * as THREE from "three";

function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();
  camera.lookAt(new THREE.Vector3(0, 3, 0));
  useFrame(() => {
    const newZ = -scrollProgress * 1000 + 300;
    if (newZ <= 150) {
      camera.position.z = 150;
    } else {
      camera.position.z = newZ;
    }
    camera.updateProjectionMatrix();
  });

  return null;
}

export default function Scene() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return (
    <div id="about" className="relative h-[1600vh] w-full overflow-hidden">
      <div className="h-[100vh] w-full overflow-hidden fixed top-0 left-0">
        <Canvas
          style={{ width: "100%", height: "100%" }}
          shadows
          camera={{ position: [20, 40, 300] }}
        >
          <CameraController scrollProgress={scrollProgress} />
          <Suspense fallback={null}>
            <Environment preset="city" />
            <City />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
