import { Suspense, useEffect, useRef, useState } from "react";
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
    new THREE.Vector3(12, 7.4, -16), // About
    new THREE.Vector3(30, 10, -16),
    new THREE.Vector3(40, 10, -5),
    new THREE.Vector3(40, 10, 15),
    new THREE.Vector3(33, 10, 20), // skills
    new THREE.Vector3(16, 10, 20), // Projects
    new THREE.Vector3(-1, 10, 20), // Contact
  ]);

  const rotationTargets = [
    {
      progress: 0,
      rotation: new THREE.Euler(-2.16, -1.046, -2.23),
    },
    {
      progress: 0.13,
      rotation: new THREE.Euler(0.0068, -0.15, 0.001),
    },
    {
      progress: 0.33,
      rotation: new THREE.Euler(-2.87, -0.53, -3.0),
    },
    {
      progress: 0.78,
      rotation: new THREE.Euler(0.34, -1.42, 0.34),
    },
    {
      progress: 0.87,
      rotation: new THREE.Euler(0.13, -0.39, 3.14),
    },
    {
      progress: 1,
      rotation: new THREE.Euler(2.9, -0.12, 3.11),
    },
  ];

  const getLerpedRotation = (progress: number) => {
    for (let i = 0; i < rotationTargets.length - 1; i++) {
      const start = rotationTargets[i];
      const end = rotationTargets[i + 1];

      if (progress >= start.progress && progress <= end.progress) {
        const lerpFactor =
          (progress - start.progress) / (end.progress - start.progress);

        return new THREE.Euler(
          THREE.MathUtils.lerp(start.rotation.x, end.rotation.x, lerpFactor),
          THREE.MathUtils.lerp(start.rotation.y, end.rotation.y, lerpFactor),
          THREE.MathUtils.lerp(start.rotation.z, end.rotation.z, lerpFactor)
        );
      }
    }
  };

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

      const targetRotation = getLerpedRotation(newProgress);
      camera.current.rotation.copy(targetRotation);

      console.log("Rotation->>>>", camera.current.rotation);
      console.log("Progress ----->", newProgress);
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
  const isSwiping = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      targetScrollProgress.current =
        targetScrollProgress.current + Math.sign(e.deltaY) * scrollSpeed;
    };

    const handlePointerDown = () => {
      isSwiping.current = true;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isSwiping.current) return;
      targetScrollProgress.current =
        targetScrollProgress.current +
        Math.sign(e.movementY) * scrollSpeed * 0.2;
    };

    const handlePointerUp = () => {
      isSwiping.current = false;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    // window.addEventListener("pointerdown", handlePointerDown);
    // window.addEventListener("pointermove", handlePointerMove);
    // window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
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
