import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Scene from "./Scene";
import { useModalStore } from "@/stores/modalStore";
import RestartBtn from "@/components/RestartBtn";

// EXPERIENCE
export default function Experience() {
  const camera1 = useRef<any>(null);
  const controls1 = useRef<any>(null);
  const scrollSpeed = 0.0019;
  const { experienceStarted } = useModalStore();

  const lerpFactor = 0.02;

  const isSwiping = useRef(false);

  // Modal and scroll state
  const {
    isModalOpen,
    scrollProgress,
    targetScrollProgress,
    setTargetScrollProgress,
  } = useModalStore();

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    }

    const handleWheel = (e: WheelEvent) => {
      if (isModalOpen || !experienceStarted) return;

      if (scrollProgress <= 1) {
        setTargetScrollProgress(
          targetScrollProgress + Math.sign(e.deltaY) * scrollSpeed
        );
      }
    };

    const handlePointerDown = () => {
      if (isModalOpen || !experienceStarted) return;
      isSwiping.current = true;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isSwiping.current) return;
      setTargetScrollProgress(
        targetScrollProgress + Math.sign(e.movementY) * scrollSpeed * 0.2
      );
    };

    const handlePointerUp = () => {
      isSwiping.current = false;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isModalOpen, scrollProgress, experienceStarted]);

  return (
    <>
      <Canvas eventSource={document.getElementById("root")!}>
        <ambientLight intensity={0.4} />
        <Scene camera={camera1} lerpFactor={lerpFactor} />
        <RestartBtn />
        {/* <DebugScene camera={camera1} /> */}
        <PerspectiveCamera ref={camera1} fov={70} makeDefault />
        <OrbitControls ref={controls1} camera={camera1.current} />
      </Canvas>
    </>
  );
}
