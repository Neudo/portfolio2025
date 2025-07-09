import React, { useState } from "react";
import { Html, useCursor } from "@react-three/drei";
import { useModalStore } from "../stores/modalStore";

export default function RestartBtn() {
  const { scrollProgress, targetScrollProgress, resetScrollProgress } =
    useModalStore();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const handleRestart = () => {
    console.log(
      "Before reset - scrollProgress:",
      scrollProgress,
      "targetScrollProgress:",
      targetScrollProgress
    );
    resetScrollProgress();
    console.log("After reset - both should be 0");
  };

  if (scrollProgress < 1) return;

  return (
    <Html as="div" position={[6.3, 7.5, 27.878]}>
      <div
        className="restartBtn"
        onClick={handleRestart}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Restart
      </div>
    </Html>
  );
}
