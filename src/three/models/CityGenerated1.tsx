import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/public/gltf/low_poly_city1.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[3615.341, 0, 2076.996]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Colore_0_1.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Colore_0_2.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Colore_0_3.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Colore_0_4.geometry}
            material={materials.Texture_Varie}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Colore_0_5.geometry}
            material={materials.Texture_Strada}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Colore_0_6.geometry}
            material={materials.Tubes__0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Colore_0_7.geometry}
            material={materials.ContornoEdifici}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Colore_0_8.geometry}
            material={materials.Marcapiede}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Colore_0_9.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Colore_0_10.geometry}
            material={materials.Color}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/public/gltf/low_poly_city1.glb");
