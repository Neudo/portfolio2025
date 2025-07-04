import { Suspense } from "react";
// import * as THREE from "three";
import CityFinal from "./models/CityFinal";
import { Environment } from "@react-three/drei";

// const DebugCurve = ({ curve }: { curve: any }) => {
//   const points = curve.getPoints(500);
//   const geometry = new THREE.BufferGeometry().setFromPoints(points);

//   return (
//     <primitive
//       object={
//         new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "red" }))
//       }
//     />
//   );
// };

export default function DebugScene() {
  return (
    <>
      <Environment preset="sunset" />
      <Suspense fallback={null}>
        <CityFinal />
      </Suspense>
    </>
  );
}
