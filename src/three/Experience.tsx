import { StrictMode, Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  useHelper,
} from "@react-three/drei";
import CityGenerated from "./models/CityGenerated";
import * as THREE from "three";
import { useControls } from "leva";

const CameraHelper = ({ cameraRef }: { cameraRef: any }) => {
  useHelper(cameraRef, THREE.CameraHelper);
  return null;
};

const DebugCurve = ({ curve }: { curve: any }) => {
  const points = curve.getPoints(500);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="red" />
    </line>
  );
};

const Scene = ({
  camera,
  setScrollProgress,
  scrollProgress,
  targetScrollProgress,
  lerpFactor,
}: {
  camera?: any;
  setScrollProgress?: any;
  scrollProgress?: any;
  targetScrollProgress?: any;
  lerpFactor?: any;
}) => {
  const cameraCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(248, 34, -4.7),
    new THREE.Vector3(96, 6, -69),
    new THREE.Vector3(65, 6, -75),
  ]);

  useFrame(() => {
    if (camera && targetScrollProgress) {
      const newProgress = THREE.MathUtils.lerp(
        scrollProgress,
        targetScrollProgress.current,
        lerpFactor
      );

      setScrollProgress(newProgress);

      const point = cameraCurve.getPoint(newProgress);
      camera.current.position.copy(point);
    }
  });

  return (
    <>
      <DebugCurve curve={cameraCurve} />
      <Environment preset="sunset" />
      <Suspense fallback={null}>
        <ScrollControls pages={8} damping={0.25}>
          <CityGenerated />
        </ScrollControls>
      </Suspense>
    </>
  );
};

export default function Experience() {
  const controlsLeft = useRef<any>(null);
  const cameraLeft = useRef<any>(null);

  // Add leva debug for lerpfactor & scrollSpeed
  const controls = useControls({
    lerpFactor: { value: 0.02, min: 0, max: 1, step: 0.01 },
    scrollSpeed: { value: 0.003, min: 0, max: 0.01, step: 0.0001 },
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const targetScrollProgress = useRef(0);
  const lerpFactor = controls.lerpFactor;
  const scrollSpeed = controls.scrollSpeed;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      targetScrollProgress.current =
        targetScrollProgress.current + Math.sign(e.deltaY) * scrollSpeed;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div id="about" className="relative h-[100vh] w-full overflow-hidden">
      <div className="h-[100vh] w-full overflow-hidden fixed top-0 left-0">
        <StrictMode>
          <Canvas style={{ width: "100%", height: "100%" }}>
            <ambientLight intensity={0.4} />
            <Scene
              camera={cameraLeft}
              setScrollProgress={setScrollProgress}
              scrollProgress={scrollProgress}
              targetScrollProgress={targetScrollProgress}
              lerpFactor={lerpFactor}
            />

            <PerspectiveCamera
              ref={cameraLeft}
              makeDefault
              fov={70}
              position={[160, 20, -57]}
            />
            <OrbitControls ref={controlsLeft} camera={cameraLeft.current} />
          </Canvas>
        </StrictMode>
      </div>
    </div>
  );
}
