import { useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function City() {
  const scrollY = useScroll();
  // useFrame((state, delta) => {
  //   // The offset is between 0 and 1, you can apply it to your models any way you like
  //   const offset = 1 - scrollY.offset;
  //   state.camera.position.set(20, 40, Math.cos((offset * Math.PI) / 3) * -10);
  //   state.camera.lookAt(20, 40, 300);
  // });

  const cityModel = useLoader(GLTFLoader, "./gltf/low_poly_city.glb");
  return <primitive object={cityModel.scene} scale={1} />;
}
