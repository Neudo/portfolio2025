import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Car() {
  const car = useLoader(GLTFLoader, "./gltf/car.glb");
  return <primitive object={car.scene} scale={0.008} />;
}
