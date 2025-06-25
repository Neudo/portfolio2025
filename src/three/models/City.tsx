import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useMotionValueEvent, useScroll } from "motion/react";

interface Props {
  scrollProgress: number;
  cityRef: React.RefObject<THREE.Group>;
}

function CameraController({ scrollProgress, cityRef }: Props) {
  const { camera } = useThree();
  const prevScrollRef = useRef(scrollProgress);

  useFrame(() => {
    if (camera.position.z <= 150 && cityRef.current) {
      const scrollDelta = scrollProgress - prevScrollRef.current;

      // If scrolling down (positive delta), rotate one way
      // If scrolling up (negative delta), rotate the other way
      if (scrollDelta > 0) {
        // Scrolling down - rotate clockwise
        cityRef.current.rotation.y -= 0.03;
      } else if (scrollDelta < 0) {
        // Scrolling up - rotate counter-clockwise
        cityRef.current.rotation.y += 0.03;
      }

      prevScrollRef.current = scrollProgress;
    }
  });

  return null;
}

export default function City() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });
  const cityRef = useRef<THREE.Group>();

  const cityModel = useLoader(GLTFLoader, "./gltf/low_poly_city.glb");
  return (
    <>
      <CameraController scrollProgress={scrollProgress} cityRef={cityRef} />
      <primitive ref={cityRef} object={cityModel.scene} scale={1} />
    </>
  );
}
