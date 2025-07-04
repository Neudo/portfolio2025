import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Scene from "./Scene";
import DebugScene from "./DebugScene";
import { useModalStore } from "@/stores/modalStore";

// EXPERIENCE
export default function Experience() {
  const camera1 = useRef<any>(null);
  const controls1 = useRef<any>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetScrollProgress = useRef(0);

  const lerpFactor = 0.02;
  const scrollSpeed = 0.002;
  const isSwiping = useRef(false);

  // Modal
  const { isModalOpen } = useModalStore();

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isModalOpen) return;

      targetScrollProgress.current =
        targetScrollProgress.current + Math.sign(e.deltaY) * scrollSpeed;
    };

    const handlePointerDown = () => {
      if (isModalOpen) return;
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
  }, [isModalOpen]);

  return (
    <>
      <Canvas eventSource={document.getElementById("root")!}>
        <ambientLight intensity={0.4} />
        {/* <Scene
          camera={camera1}
          scrollProgress={scrollProgress}
          setScrollProgress={setScrollProgress}
          targetScrollProgress={targetScrollProgress}
          lerpFactor={lerpFactor}
        /> */}
        <DebugScene camera={camera1} />
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
