import { StrictMode, Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import CityFinal from "./models/CityFinal";
import * as THREE from "three";
import { useControls } from "leva";

const DebugCurve = ({ curve }: { curve: any }) => {
  const points = curve.getPoints(500);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <primitive
      object={
        new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "red" }))
      }
    />
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
    new THREE.Vector3(-46, 22, -15),
    new THREE.Vector3(12, 7.4, -16),
    new THREE.Vector3(30, 10, -16),
    new THREE.Vector3(40, 10, -5),
    new THREE.Vector3(40, 10, 15),
    new THREE.Vector3(33, 10, 20),
    new THREE.Vector3(10, 10, 20),
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
        <CityFinal />
      </Suspense>
    </>
  );
};

// EXPERIENCE
export default function Experience() {
  const camera1 = useRef<any>(null);
  const controls1 = useRef<any>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetScrollProgress = useRef(0);

  const controls = useControls({
    lerpFactor: { value: 0.02, min: 0, max: 1, step: 0.01 },
    scrollSpeed: { value: 0.002, min: 0, max: 0.01, step: 0.0001 },
  });
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
    <>
      <Canvas eventSource={document.getElementById("app")!}>
        <ambientLight intensity={0.4} />
        <Scene
          camera={camera1}
          scrollProgress={scrollProgress}
          setScrollProgress={setScrollProgress}
          targetScrollProgress={targetScrollProgress}
          lerpFactor={lerpFactor}
        />
        <PerspectiveCamera
          ref={camera1}
          fov={70}
          position={[-46, 22, -15]}
          makeDefault
        />
        <OrbitControls ref={controls1} camera={camera1.current} />
      </Canvas>
    </>
  );
}
