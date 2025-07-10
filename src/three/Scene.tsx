import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import CityFinal from "./models/CityFinal";
import { Environment, Sky } from "@react-three/drei";
import { useModalStore } from "../stores/modalStore";

export default function Scene({
  camera,
  lerpFactor,
  setScrollProgress,
  targetScrollProgress,
  scrollProgress,
}: {
  camera?: any;
  lerpFactor?: any;
  setScrollProgress?: any;
  targetScrollProgress?: any;
  scrollProgress?: any;
}) {
  const cameraCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-27, 17, -15),
    new THREE.Vector3(12, 7.4, -16), // About
    new THREE.Vector3(30, 7, -16),
    new THREE.Vector3(33, 7, -5),
    new THREE.Vector3(33, 7, 15),
    new THREE.Vector3(33, 10, 20), // skills
    new THREE.Vector3(16, 7, 20), // Projects
    new THREE.Vector3(4, 7, 20), // Contact
  ]);

  const rotationTargets = [
    {
      progress: 0,
      rotation: new THREE.Euler(-2.36, -1, -2.1),
    },
    {
      progress: 0.09,
      rotation: new THREE.Euler(0, 0, 0),
    },
    {
      progress: 0.19,
      rotation: new THREE.Euler(0, -1.5, 0),
    },
    {
      progress: 0.33,
      rotation: new THREE.Euler(0, -3.1, 0),
    },
    {
      progress: 0.5,
      rotation: new THREE.Euler(0, -3.1, 0),
    },
    {
      progress: 0.73,
      rotation: new THREE.Euler(0, -1, 0),
    },
    {
      progress: 0.87,
      rotation: new THREE.Euler(0, -3, 0),
    },
    {
      progress: 1,
      rotation: new THREE.Euler(-0.55, -3, 0),
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
  const { theme } = useModalStore();

  const skyProps = {
    day: {
      sunPosition: [0, 1, 0] as [number, number, number],
      turbidity: 10,
      rayleigh: 0.22,
      mieCoefficient: 0.01,
      mieDirectionalG: 1,
    },
    night: {
      sunPosition: [1, 0, 0] as [number, number, number],
      turbidity: 0,
      rayleigh: 10,
      mieCoefficient: 0.03,
      mieDirectionalG: 0.5,
    },
  };
  useFrame(() => {
    if (camera) {
      const newProgress = THREE.MathUtils.lerp(
        scrollProgress,
        targetScrollProgress.current,
        lerpFactor
      );

      setScrollProgress(newProgress);

      if (newProgress >= 0) {
        const point = cameraCurve.getPoint(newProgress);

        if (newProgress <= 0.9999) {
          camera.current.position.copy(point);
        } else {
          camera.current.position.x = 4;
          camera.current.position.y = 7;
          camera.current.position.z = 20;
        }
      }
      const targetRotation = getLerpedRotation(newProgress);
      if (newProgress <= 0.9999 && targetRotation) {
        camera.current.rotation.copy(targetRotation);
      } else {
        camera.current.rotation.x = -0.54;
        camera.current.rotation.y = -3;
        camera.current.rotation.z = 0;
      }
    }
  });

  return (
    <>
      {/* Animated Sky */}
      <Environment preset={theme === "day" ? "sunset" : "night"} />
      <Sky {...skyProps[theme === "day" ? "day" : "night"]} distance={300} />
      <Suspense fallback={null}>
        <CityFinal currentProgress={scrollProgress} />
      </Suspense>
    </>
  );
}
