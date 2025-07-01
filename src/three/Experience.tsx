import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";
import Scene from "./Scene";
import DebugScene from "./DebugScene";

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
        {/* <DebugScene camera={camera1} /> */}
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
