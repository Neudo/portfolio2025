import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Scene from "./Scene";
import { useModalStore } from "@/stores/modalStore";
import normalizeWheel from "@/utils/normalizeWheel";

// EXPERIENCE
export default function Experience() {
  const camera1 = useRef<any>(null);
  const controls1 = useRef<any>(null);
  const scrollSpeed = 0.007;
  const { experienceStarted } = useModalStore();
  const targetScrollProgress = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastTouchY = useRef<number | null>(null);

  const lerpFactor = 0.02;

  const isSwiping = useRef(false);

  // Modal and scroll state
  const { isModalOpen } = useModalStore();

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    }

    const handleWheel = (e: WheelEvent) => {
      if (isModalOpen || !experienceStarted) return;
      const normalized = normalizeWheel(e);

      if (scrollProgress <= 1) {
        targetScrollProgress.current +=
          Math.sign(normalized.pixelY) *
          scrollSpeed *
          Math.min(Math.abs(normalized.pixelY) / 100, 1);
        // Clamp between 0 and 1 to prevent camera going underground or too high
        targetScrollProgress.current = Math.max(
          0,
          Math.min(1, targetScrollProgress.current)
        );
      }
    };

    const handlePointerDown = () => {
      if (isModalOpen || !experienceStarted) return;
      isSwiping.current = true;
    };
    const handleTouchStart = (e: TouchEvent) => {
      if (isModalOpen) return;
      isSwiping.current = true;
      lastTouchY.current = e.touches[0].clientY;
    };
    const handleToucheMove = (e: TouchEvent) => {
      if (!isSwiping.current) return;
      if (lastTouchY.current !== null) {
        const deltaY = e.touches[0].clientY - lastTouchY.current;
        const touchMultiplier = 1.4;
        targetScrollProgress.current +=
          Math.sign(deltaY) * scrollSpeed * touchMultiplier;
        // Clamp between 0 and 1 to prevent camera going underground or too high
        targetScrollProgress.current = Math.max(
          0,
          Math.min(1, targetScrollProgress.current)
        );
      }
      lastTouchY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      isSwiping.current = false;
      lastTouchY.current = null;
    };

    const handlePointerUp = () => {
      isSwiping.current = false;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    window.addEventListener("touchmove", handleToucheMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("touchmove", handleToucheMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isModalOpen, scrollProgress, experienceStarted]);

  return (
    <>
      <Canvas eventSource={document.getElementById("root")!}>
        <ambientLight intensity={0.4} />
        <Scene
          camera={camera1}
          lerpFactor={lerpFactor}
          setScrollProgress={setScrollProgress}
          targetScrollProgress={targetScrollProgress}
          scrollProgress={scrollProgress}
        />
        <PerspectiveCamera ref={camera1} fov={70} makeDefault />
        <OrbitControls ref={controls1} camera={camera1.current} />
      </Canvas>
    </>
  );
}
