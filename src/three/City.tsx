import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function City(props: any) {
  const { nodes, materials } = useGLTF("./gltf/low_poly_city.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-994.679, 893.681, 1144.579]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_BIANCO_0.geometry}
            material={materials.BIANCO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_NERO_0.geometry}
            material={materials.NERO}
          />
        </group>
        <group
          position={[-563.566, 514.031, 1185.09]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[29.132, 24.953, 21.57]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_quadrato_dx_VASI001_0.geometry}
            material={materials["VASI.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_quadrato_dx_TERRA001_0.geometry}
            material={materials["TERRA.001"]}
          />
        </group>
        <group
          position={[-563.566, 514.432, 1521.768]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[29.132, 24.953, 21.57]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_quadrato_sx_VASI001_0.geometry}
            material={materials["VASI.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_quadrato_sx_TERRA001_0.geometry}
            material={materials["TERRA.001"]}
          />
        </group>
        <group
          position={[-209.451, 511.146, 765.796]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[29.132, 24.953, 21.57]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_dx_1_VASI001_0.geometry}
            material={materials["VASI.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_dx_1_TERRA001_0.geometry}
            material={materials["TERRA.001"]}
          />
        </group>
        <group
          position={[-328.778, 511.146, 765.796]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[29.132, 24.953, 21.57]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_dx_2_VASI001_0.geometry}
            material={materials["VASI.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_dx_2_TERRA001_0.geometry}
            material={materials["TERRA.001"]}
          />
        </group>
        <group
          position={[-449.022, 511.146, 765.796]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[29.132, 24.953, 21.57]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_dx_3_VASI001_0.geometry}
            material={materials["VASI.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_dx_3_TERRA001_0.geometry}
            material={materials["TERRA.001"]}
          />
        </group>
        <group
          position={[-209.451, 511.146, 1609.734]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[29.132, 24.953, 21.57]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_sx_1_VASI001_0.geometry}
            material={materials["VASI.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_sx_1_TERRA001_0.geometry}
            material={materials["TERRA.001"]}
          />
        </group>
        <group
          position={[-328.778, 511.146, 1609.734]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[29.132, 24.953, 21.57]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_sx_2_VASI001_0.geometry}
            material={materials["VASI.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_sx_2_TERRA001_0.geometry}
            material={materials["TERRA.001"]}
          />
        </group>
        <group
          position={[-449.022, 511.146, 1609.734]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[29.132, 24.953, 21.57]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_sx_3_VASI001_0.geometry}
            material={materials["VASI.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vaso_rettangolare_sx_3_TERRA001_0.geometry}
            material={materials["TERRA.001"]}
          />
        </group>
        <group
          position={[1758.825, 720.678, 1775.21]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CANCELLO_GROSSO_ENTRATA_lowpolytex001_0.geometry}
            material={materials["lowpolytex.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CANCELLO_GROSSO_ENTRATA_CARTELLO001_0.geometry}
            material={materials["CARTELLO.001"]}
          />
        </group>
        <group
          position={[-866.22, 529.804, -598.653]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TERRENO001_BASI_EDIFICI_0.geometry}
            material={materials.BASI_EDIFICI}
          />
          <group
            position={[-0.897, 1.345, 6.021]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.insegna_texture_0.geometry}
              material={materials.texture}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.insegna_Material004_0.geometry}
              material={materials["Material.004"]}
            />
          </group>
          <group
            position={[-4.327, 3.93, 0.368]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante_vasi_0.geometry}
              material={materials.vasi}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante_terra_0.geometry}
              material={materials.terra}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-3.413, 1.324, 6.647]}
            rotation={[-0.072, 0.304, -1.613]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-2.918, 1.281, 6.359]}
            rotation={[-0.072, 0.304, -1.151]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere037_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-2.777, 1.419, 7.18]}
            rotation={[-0.072, 0.304, -1.151]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere038_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-2.563, 1.257, 7.084]}
            rotation={[-0.072, 0.304, 0.128]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere039_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-2.589, 1.608, 7.082]}
            rotation={[-0.072, 0.304, -1.151]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[1.561, 1.309, 6.442]}
            rotation={[0.03, -0.205, 1.75]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[1.083, 1.222, 6.217]}
            rotation={[0.03, -0.205, 2.212]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere034_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[1.042, 1.15, 7.001]}
            rotation={[0.03, -0.205, 2.212]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere035_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[0.807, 1.245, 6.919]}
            rotation={[0.03, -0.205, -2.792]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere036_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[0.904, 0.932, 6.943]}
            rotation={[0.03, -0.205, 2.212]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.casa_base_palette_0.geometry}
            material={materials.palette}
            position={[-0.907, 0.282, 0.034]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.finestra_dx_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-0.907, 0.146, 0.034]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.finestra_sx_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-1.086, 0.282, 0.158]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-0.86, 3.601, 1.757]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.porta001_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-0.907, 0.266, 0.034]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tetto_palette_0.geometry}
            material={materials.palette}
            position={[-0.907, 0.282, 0.034]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetri_dx_vetri001_0.geometry}
            material={materials["vetri.001"]}
            position={[-0.907, 0.146, 0.034]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetri_porta_vetri001_0.geometry}
            material={materials["vetri.001"]}
            position={[-0.907, 0.266, 0.034]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetri_sx_vetri001_0.geometry}
            material={materials["vetri.001"]}
            position={[-1.086, 0.282, 0.158]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[3.623, -2.49, 0.703]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[2.427, 3.706, 0.703]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base_insegne_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-0.971, 1.404, 5.148]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pali__0.geometry}
            material={materials["Cube.002__0"]}
            position={[-2.016, 1.156, 6.023]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pali001__0.geometry}
            material={materials["Cube.002__0"]}
            position={[-0.958, 1.156, 6.023]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pali002__0.geometry}
            material={materials["Cube.002__0"]}
            position={[0.167, 1.156, 6.023]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cespugli_foglie_0.geometry}
            material={materials.foglie}
            position={[-4.327, 3.93, 0.369]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-0.958, 3.599, 0.93]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-2.007, 3.599, 0.93]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.553}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[4.432, 2.523, 0.93]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[4.432, 1.626, 0.93]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[4.432, 0.729, 0.93]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[4.432, -0.18, 0.93]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[4.432, -1.193, 0.93]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tenda_frontale001_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[4.463, 1.933, 4.051]}
            rotation={[0, 0, -3.141]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tettoia_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[1.138, 3.394, 3.723]}
            rotation={[0, 0, Math.PI / 2]}
          />
        </group>
        <group
          position={[2340.958, 528.432, -3054.478]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.prato_mall_BASI_EDIFICI_0.geometry}
            material={materials.BASI_EDIFICI}
          />
          <group
            position={[6.6, -1.44, 6.99]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.79}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bancone_texture_cocktail_0.geometry}
              material={materials.cocktail}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bancone_texture_pavimentop_terrazza_0.geometry}
              material={materials.pavimentop_terrazza}
            />
          </group>
          <group
            position={[1.751, -0.357, 7.543]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={1.79}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.poster_texture001_0.geometry}
              material={materials["texture.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.poster_poster_0.geometry}
              material={materials.poster}
            />
          </group>
          <group
            position={[4.244, -3.469, 4.051]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_vetri_0.geometry}
              material={materials.vetri}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_TEXTURE_FINALE001_0.geometry}
              material={materials["TEXTURE_FINALE.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_pavimentop_terrazza_0.geometry}
              material={materials.pavimentop_terrazza}
            />
          </group>
          <group
            position={[4.239, 9.845, 0.043]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube024_texture001_0.geometry}
              material={materials["texture.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube024_postermuro_0.geometry}
              material={materials.postermuro}
            />
          </group>
          <group
            position={[-1.306, 14.016, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1004_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1004_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.306, 15.008, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_2004_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_2004_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.306, 16.008, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3004_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3004_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[0.999, 8.982, 0.128]}
            rotation={[0, 0, Math.PI]}
            scale={[0.682, 1.053, 0.682]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante001_vasi001_0.geometry}
              material={materials["vasi.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante001_terra001_0.geometry}
              material={materials["terra.001"]}
            />
          </group>
          <group
            position={[-1.446, -2.113, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3001_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3001_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.446, -1.12, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1001_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1001_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.446, -0.039, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1002_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1002_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.446, 0.953, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_2001_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_2001_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.446, 1.953, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3002_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3002_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.446, 2.946, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1003_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1003_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.446, 3.938, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_2002_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_2002_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.446, 4.938, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3003_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3003_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.446, 5.99, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3007_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3007_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.446, 6.998, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1007_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1007_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.306, 17.159, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1008_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_1008_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.306, 18.151, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_2003_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_2003_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <group
            position={[-1.306, 19.151, 0.206]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.242, 0.207, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3008_VASI_0.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_dx_3008_TERRA_0.geometry}
              material={materials.TERRA}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bottino_Material005_0.geometry}
            material={materials["Material.005"]}
            position={[2.723, -0.586, 6.857]}
            rotation={[0, 0, -1.547]}
            scale={2.517}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.porta_bar_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[4.044, -0.403, 7.425]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.79}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tenda_frontale002_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[6.576, -1.274, 8.529]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[1.51, 1.034, 0.777]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetri_vetri_0.geometry}
            material={materials.vetri}
            position={[4.244, 9.845, 0.061]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.79}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetri_centrali_vetri_0.geometry}
            material={materials.vetri}
            position={[4.244, 9.835, 4.091]}
            rotation={[0, 0, Math.PI]}
            scale={1.79}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetri_porta_bar_vetri_0.geometry}
            material={materials.vetri}
            position={[4.044, -0.403, 7.427]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.79}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetri_porta_principale_vetri_0.geometry}
            material={materials.vetri}
            position={[-3.328, 9.896, 1.591]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[4.244, 9.835, 4.072]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.porta_principale_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[-3.328, 9.896, 1.591]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TETTO_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[4.244, 9.845, 0.061]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tettoia001_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[1.14, 9.868, 4.091]}
            rotation={[0, 0, Math.PI]}
            scale={[1.428, 1.752, 0.87]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[1.217, 12.911, 5.776]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={1.112}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.prato_bar_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[4.244, -3.469, 4.051]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.79}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.piramide_vetri_0.geometry}
            material={materials.vetri}
            position={[4.244, 9.856, 0.061]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sgabello_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[0.943, -4.941, 6.884]}
            rotation={[0, 0, -0.12]}
            scale={1.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sgabello001_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[4.255, -4.808, 6.884]}
            scale={1.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sgabello002_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[6.793, -4.941, 6.884]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sgabello003_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[3.003, -3.264, 6.827]}
            scale={0.803}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sgabello004_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[5.629, -3.093, 6.884]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sgabello005_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[5.764, -3.918, 6.896]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sgabello006_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[3.608, -5.631, 6.988]}
            rotation={[0, 0, 1.004]}
            scale={1.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sgabello007_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[2.986, -3.88, 6.882]}
            rotation={[0, 0, -0.332]}
            scale={1.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sgabello009_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[4.697, -4.82, 6.884]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sgabello008_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[2.508, -5.631, 6.853]}
            rotation={[0, 0, 2.061]}
            scale={1.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere052_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.303, 13.792, 0.435]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere053_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.301, 14.231, 0.439]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere054_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.311, 14.786, 0.426]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere055_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.301, 15.219, 0.431]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere056_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.306, 15.777, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere057_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.302, 16.22, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cespugli001_foglie001_0.geometry}
            material={materials["foglie.001"]}
            position={[0.999, 8.982, 0.128]}
            rotation={[0, 0, Math.PI]}
            scale={[0.682, 1.053, 0.682]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere058_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.394, -2.343, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere059_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.443, -1.9, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere060_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.444, -1.344, 0.435]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere061_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.441, -0.906, 0.439]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere040_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.444, -0.262, 0.435]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere041_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.441, 0.176, 0.439]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere042_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.451, 0.731, 0.426]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere043_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.442, 1.164, 0.431]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere044_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.447, 1.723, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere045_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.443, 2.166, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere046_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.444, 2.722, 0.435]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere047_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.441, 3.16, 0.439]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere048_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.451, 3.715, 0.426]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere049_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.442, 4.148, 0.431]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere050_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.447, 4.707, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere051_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.443, 5.15, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere062_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.394, 5.759, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere063_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.443, 6.203, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere099_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.444, 6.759, 0.435]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere100_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.441, 7.197, 0.439]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere101_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.303, 16.935, 0.435]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere102_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.301, 17.374, 0.439]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere103_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.311, 17.929, 0.426]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere104_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.301, 18.362, 0.431]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere105_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.306, 18.92, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere106_CESPUGLI_0.geometry}
            material={materials.CESPUGLI}
            position={[-1.302, 19.363, 0.44]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ombrellone_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[6.949, -5.581, 7.458]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ombrellone001_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[4.428, -5.653, 7.458]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={2.303}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ombrellone002_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[1.65, -5.581, 7.458]}
            rotation={[0, 0, 2.698]}
            scale={2.303}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ombrellone003_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[2.426, -3.34, 7.458]}
            rotation={[0, 0, Math.PI]}
            scale={2.303}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ombrellone004_texture001_0.geometry}
            material={materials["texture.001"]}
            position={[6.327, -3.497, 7.458]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={2.303}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bottino001_Material005_0.geometry}
            material={materials["Material.005"]}
            position={[1.006, 13.69, 0.289]}
            rotation={[0, 0, -1.547]}
            scale={1.962}
          />
        </group>
        <group
          position={[-866.19, 529.804, 402.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TERRENO002_BASI_EDIFICI_0.geometry}
            material={materials.BASI_EDIFICI}
          />
          <group position={[2.618, -1.291, 0.358]} rotation={[0, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante002_vasi002_0.geometry}
              material={materials["vasi.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante002_terra002_0.geometry}
              material={materials["terra.002"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetri_porta001_vetri002_0.geometry}
            material={materials["vetri.002"]}
            position={[2.401, -0.734, 1.437]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetro_dx_vetri002_0.geometry}
            material={materials["vetri.002"]}
            position={[-0.185, -0.171, 2.131]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetro_facciata_sxx_vetri002_0.geometry}
            material={materials["vetri.002"]}
            position={[-0.185, -3.388, 2.054]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetro_sx_vetri002_0.geometry}
            material={materials["vetri.002"]}
            position={[-0.185, -0.171, 2.131]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base001_vasi002_0.geometry}
            material={materials["vasi.002"]}
            position={[-0.182, -0.202, 0.169]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.porta003_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[2.401, -0.734, 1.437]}
            rotation={[0, 0, -Math.PI]}
            scale={1.308}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tetto002_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.185, -0.171, 2.007]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.casa_base001_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.185, -3.388, 2.054]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base002_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-1.623, -1.937, 3.857]}
            rotation={[0, 0, -Math.PI]}
            scale={1.308}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base_tubo001_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-1.779, -2.743, 3.848]}
            rotation={[0, 0, 2.748]}
            scale={1.308}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cassetta001_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-1.623, -1.937, 4.088]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo001_tubo001_0.geometry}
            material={materials["tubo.001"]}
            position={[-1.78, -2.726, 4.186]}
            rotation={[0, 0, -Math.PI]}
            scale={1.308}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_nero002_0.geometry}
            material={materials["nero.002"]}
            position={[-1.639, -1.791, 4.317]}
            rotation={[0, 0, -Math.PI]}
            scale={1.308}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cespugli002_foglie002_0.geometry}
            material={materials["foglie.002"]}
            position={[2.618, -1.291, 0.358]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tenda_frontale003_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.125, -4.157, 2.842]}
            rotation={[-0.002, 0, 1.571]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tenda_frontale_piccola_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[1.651, 3.593, 3.088]}
            rotation={[0, 0, -3.141]}
          />
        </group>
        <group
          position={[-765.16, 528.432, -2927.171]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={45.973}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.terreno_texture002_0.geometry}
            material={materials["texture.002"]}
          />
          <group
            position={[13.749, -9.085, 7.07]}
            scale={[1.288, 1.929, 2.807]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.condizionatore_nero004_0.geometry}
              material={materials["nero.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.condizionatore_nero003_0.geometry}
              material={materials["nero.003"]}
            />
          </group>
          <group position={[18.83, -9.085, 7.07]} scale={[1.288, 1.929, 2.807]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.condizionatore001_nero004_0.geometry}
              material={materials["nero.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.condizionatore001_nero003_0.geometry}
              material={materials["nero.003"]}
            />
          </group>
          <group
            position={[-15.007, -11.16, 4.422]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={2.175}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.freccia_insegna_0.geometry}
              material={materials.insegna}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.freccia_texture002_0.geometry}
              material={materials["texture.002"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[4.069, -14.037, 5.284]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[4.137, -10.551, 1.938]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[4.069, 3.721, 5.284]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[4.137, 7.207, 1.938]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[-9.061, -14.037, 5.284]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[-9.129, -10.551, 1.938]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[-9.061, 3.721, 5.284]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[-9.129, 7.207, 1.938]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[11.999, 2.544, 0.674]}
            rotation={[0, 0, -Math.PI]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pilastro_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[-15.305, -10.899, 2.707]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina005_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.26, -11.986, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.229, -12.016, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.464, -12.03, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina001_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.037, -11.986, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia001_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.068, -12.016, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio001_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-9.833, -12.03, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina002_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.037, -11.374, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia002_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.068, -11.404, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio002_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-9.833, -11.419, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina003_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.037, -9.618, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia003_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.068, -9.648, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio003_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-9.833, -9.663, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina004_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.037, -9.103, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia004_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.068, -9.132, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio004_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-9.833, -9.147, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina006_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.037, 5.824, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia005_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.068, 5.794, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio005_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-9.833, 5.779, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina007_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.037, 6.31, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia006_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.068, 6.28, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio006_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-9.833, 6.266, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina008_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.037, 8.1, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia007_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.068, 8.07, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio007_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-9.833, 8.056, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina009_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.037, 8.642, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia008_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-10.068, 8.612, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio008_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-9.833, 8.597, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina010_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.304, 8.642, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia009_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.273, 8.612, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio009_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.508, 8.597, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina011_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.304, 8.169, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia010_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.273, 8.14, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio010_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.508, 8.125, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina012_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.304, 6.385, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia011_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.273, 6.356, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio011_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.508, 6.341, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina013_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.304, 5.949, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia012_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.273, 5.919, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio012_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.508, 5.904, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina014_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.304, -9.09, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia013_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.273, -9.12, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio013_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.508, -9.135, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina015_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.304, -9.589, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia014_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.273, -9.619, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio014_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.508, -9.633, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina016_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.304, -11.353, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia015_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.273, -11.383, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio015_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.508, -11.398, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina017_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.304, -11.899, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia016_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.273, -11.928, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio016_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[3.508, -11.943, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina018_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.26, -11.476, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia017_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.229, -11.505, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio017_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.464, -11.52, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina019_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.26, -9.65, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia018_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.229, -9.679, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio018_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.464, -9.694, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina020_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.26, -9.167, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia019_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.229, -9.197, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio019_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.464, -9.212, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina021_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.26, 5.812, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia020_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.229, 5.782, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio020_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.464, 5.767, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina022_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.26, 6.288, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia021_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.229, 6.259, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio021_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.464, 6.244, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina023_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.26, 8.102, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia022_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.229, 8.073, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio022_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.464, 8.058, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina024_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.26, 8.525, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia023_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.229, 8.495, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio023_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-8.464, 8.481, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina025_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.977, 8.749, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia024_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[5.008, 8.72, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio024_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.773, 8.705, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina026_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.977, 8.199, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia025_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[5.008, 8.17, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio025_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.773, 8.155, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina027_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.977, 6.333, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia026_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[5.008, 6.303, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio026_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.773, 6.288, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina028_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.977, 5.825, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia027_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[5.008, 5.796, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio027_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.773, 5.781, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina029_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.977, -9.185, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia028_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[5.008, -9.215, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio028_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.773, -9.229, 1.916]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina030_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.977, -9.685, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia029_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[5.008, -9.715, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio029_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.773, -9.729, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina031_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.977, -11.4, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia030_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[5.008, -11.429, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio030_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.773, -11.444, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_benzina032_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.977, -11.971, 0.969]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.maniglia031_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[5.008, -12.001, 1.845]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.beccuccio031_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[4.773, -12.015, 2.233]}
            scale={1.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.porta004_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[12.419, -1.664, 2.683]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SHOP_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[16.04, -1.663, 3.831]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tetto_shop_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[16.04, -1.663, 3.831]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tettoia002_benzinaio_0.geometry}
            material={materials.benzinaio}
            position={[-2.287, -1.214, 5.019]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.salvagente_texture002_0.geometry}
            material={materials["texture.002"]}
            position={[-15.319, -11.253, 0.137]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetri_porta002_vetri003_0.geometry}
            material={materials["vetri.003"]}
            position={[12.532, -1.339, 2.416]}
            scale={2.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetri_shop_vetri003_0.geometry}
            material={materials["vetri.003"]}
            position={[16.04, -1.663, 3.831]}
            scale={2.175}
          />
        </group>
        <group
          position={[4426.613, 529.929, -1678.539]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
          />
          <group position={[1.922, 1.944, 1.598]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.finestra_frontale_sx_porta_e_serramenti_0.geometry
              }
              material={materials.porta_e_serramenti}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.finestra_frontale_sx_vetri004_0.geometry}
              material={materials["vetri.004"]}
            />
          </group>
          <group position={[4.836, -4.151, 1.598]} rotation={[0, 0, 1.571]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.finestra_facciata_dx_porta_e_serramenti_0.geometry
              }
              material={materials.porta_e_serramenti}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.finestra_facciata_dx_vetri004_0.geometry}
              material={materials["vetri.004"]}
            />
          </group>
          <group position={[4.356, 0.118, -0.327]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.finestra_dx001_vetri004_0.geometry}
              material={materials["vetri.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.finestra_dx001_porta_e_serramenti_0.geometry}
              material={materials.porta_e_serramenti}
            />
          </group>
          <group position={[4.261, 0.118, -0.353]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.finestra_sx001_vetri004_0.geometry}
              material={materials["vetri.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.finestra_sx001_porta_e_serramenti_0.geometry}
              material={materials.porta_e_serramenti}
            />
          </group>
          <group position={[2.715, -0.065, 1.593]} rotation={[0, 0, 0.536]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.porta005_TEXTURE_FINALE_0.geometry}
              material={materials.TEXTURE_FINALE}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.porta005_vetri004_0.geometry}
              material={materials["vetri.004"]}
            />
          </group>
          <group position={[1.941, 2.626, 0.106]} rotation={[0, 0, 1.572]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_sx_3001_VASI003_0.geometry}
              material={materials["VASI.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_sx_3001_TERRA003_0.geometry}
              material={materials["TERRA.003"]}
            />
          </group>
          <group position={[1.941, 1.36, 0.106]} rotation={[0, 0, 1.572]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_sx_3002_VASI002_0.geometry}
              material={materials["VASI.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vaso_rettangolare_sx_3002_TERRA002_0.geometry}
              material={materials["TERRA.002"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base004_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[4.261, 0.033, 0.067]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tetto003_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[4.261, 0.118, 1.513]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.casa_base002_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[4.261, 0.118, -0.024]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cassetta_nero_0.geometry}
            material={materials.nero}
            position={[5.083, 2.092, 3.7]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base003__0.geometry}
            material={materials["Cube.002__0"]}
            position={[5.083, 2.092, 3.551]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tubo_tubo_0.geometry}
            material={materials.tubo}
            position={[5.211, 2.737, 3.804]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base_tubo_tubo_0.geometry}
            material={materials.tubo}
            position={[5.211, 2.751, 3.527]}
            rotation={[0, 0, -0.394]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034_nero_0.geometry}
            material={materials.nero}
            position={[5.098, 1.953, 3.898]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere067_CESPUGLI003_0.geometry}
            material={materials["CESPUGLI.003"]}
            position={[1.941, 2.773, 0.193]}
            rotation={[0, 0, 1.572]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere066_CESPUGLI003_0.geometry}
            material={materials["CESPUGLI.003"]}
            position={[1.942, 2.729, 0.187]}
            rotation={[0, 0, 1.572]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere065_CESPUGLI001_0.geometry}
            material={materials["CESPUGLI.001"]}
            position={[1.941, 1.485, 0.172]}
            rotation={[0, 0, 1.572]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere064_CESPUGLI001_0.geometry}
            material={materials["CESPUGLI.001"]}
            position={[1.942, 1.453, 0.165]}
            rotation={[0, 0, 1.572]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tenda_frontale_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[1.619, 1.195, 2.723]}
            rotation={[0, 0, 0.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tenda_frontale004_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[3.423, 4.518, 2.723]}
            rotation={[0, 0, -1.57]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tenda_frontale_piccola001_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[2.612, -3.264, 2.723]}
            rotation={[0, 0, 0.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.tenda_frontale_facciata_dx_TEXTURE_FINALE_0.geometry
            }
            material={materials.TEXTURE_FINALE}
            position={[5.639, -4.537, 2.77]}
            rotation={[0, 0, 1.57]}
          />
        </group>
        <group
          position={[2028.51, 529.929, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-1589.772, 1589.772, 1589.772]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TERRENO_SOTTO_PARCO_BASI_EDIFICI_0.geometry}
            material={materials.BASI_EDIFICI}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.abete_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.761, 0.964, -0.026]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere033_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.401, 0.989, -0.056]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere032_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.367, 0.926, -0.038]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere031_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.48, 0.936, -0.056]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere030_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.351, 0.864, -0.014]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere029_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.43, 0.862, -0.04]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere028_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.356, 0.388, -0.056]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere027_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.453, 0.366, -0.035]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere026_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.412, 0.475, -0.073]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere025_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.505, 0.356, -0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.491, 0.796, -0.182]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.697, 0.008, -0.17]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.427, 0.996, -0.124]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere024_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.427, 0.996, -0.226]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.364, -0.663, -0.097]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere023_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.364, -0.663, -0.18]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.055, 0.055, 0.069]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere022_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.804, -0.037, -0.062]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere021_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.722, -0.087, -0.061]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere020_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.801, -0.647, -0.053]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere019_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.804, -0.482, -0.076]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere015_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.736, -0.418, -0.071]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere016_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.48, -0.337, -0.073]}
            rotation={[-3.113, -0.073, 1.441]}
            scale={[-0.051, 0.041, 0.059]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere017_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.254, -0.643, -0.071]}
            rotation={[-2.96, 0.556, -0.171]}
            scale={[-0.047, 0.038, 0.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere018_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.254, -0.587, -0.054]}
            rotation={[-2.96, 0.556, -0.171]}
            scale={[-0.028, 0.023, 0.033]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Panca_picnic_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.117, 0.911, -0.036]}
            rotation={[-3.1, 0.086, -1.538]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Panca_picnic001_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.659, -0.244, -0.059]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BOTTINO_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[0.28, -0.606, -0.031]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BOTTINO001_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[0.03, 0.996, -0.021]}
            rotation={[-Math.PI, 0, Math.PI]}
            scale={[-0.042, 0.042, 0.042]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BOTTINO002_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[-0.205, 0.067, -0.019]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={[-0.042, 0.042, 0.042]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BOTTINO003_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[0.747, 0.067, -0.02]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={[-0.042, 0.042, 0.042]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0.158, 0.183, -0.038]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.acqua_acqua001_0.geometry}
            material={materials["acqua.001"]}
            position={[0.163, 0.184, -0.038]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fontana_base_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0.158, 0.183, -0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fontana_base_parte_superiore_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0.158, 0.183, -0.029]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE005_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.04, 0.397, -0.068]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.031, 0.031, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE028_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.04, 1.112, -0.063]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.031, 0.031, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE029_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.036, 0.295, -0.068]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.031, 0.031, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE030_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.506, 0.088, -0.064]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.031, 0.031, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE002_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.506, 0.294, -0.064]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.031, 0.031, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE003_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.836, 0.294, -0.064]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.031, 0.031, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE006_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.836, 0.072, -0.066]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.031, 0.031, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE007_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.278, -0.689, -0.064]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE001_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.036, -0.689, -0.064]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE009_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.04, 1.045, -0.067]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.031, 0.031, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE010_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.281, 1.045, -0.064]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.031, 0.031, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE011_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.34, 0.088, -0.068]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.031, 0.031, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE004_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.273, -0.013, -0.067]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.031, 0.031, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.037, -0.51, -0.003]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube063_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.037, 0.5, -0.002]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.473, 0.071, -0.003]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.405, 0.068, 0]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.146, 0.302, -0.002]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.699, 0.302, -0.001]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.283, -0.163, -0.002]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.283, 0.854, -0.001]}
            rotation={[-Math.PI, 0, Math.PI]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MURO_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.159, 0.179, -0.013]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.028, 0.028, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.terriccio_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.159, 0.179, -0.01]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.terriccio001_terriccio_0.geometry}
            material={materials.terriccio}
            position={[0.159, 0.179, -0.014]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.prova_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.868, -0.735, -0.09]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.028, 0.028, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.prova002_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.554, 1.091, -0.09]}
            rotation={[-Math.PI, 0, Math.PI]}
            scale={[-0.028, 0.028, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.prova003_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.869, 1.091, -0.088]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.028, 0.028, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.prova004_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.018, -0.734, -0.09]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.028, 0.028, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.prova2_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.878, -0.727, -0.09]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={[-0.028, 0.028, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.prova2002_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.561, 1.082, -0.09]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.028, 0.028, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.prova2003_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.559, -0.727, -0.09]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={[-0.028, 0.028, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.prova2004_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.878, 0.307, -0.09]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={[-0.028, 0.028, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.volpe_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0.156, 0.176, -0.088]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.063, 0.063, 0.063]}
          />
        </group>
        <group
          position={[4863.755, 529.929, 1419.026]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={873.927}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube059_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.057, -0.242, 0.267]}
            rotation={[0, 0, -Math.PI]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube058_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.442, -0.242, 0.815]}
            rotation={[0, 0, -Math.PI]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube057_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.574, -0.242, 1.047]}
            rotation={[0, 0, -Math.PI]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.VETRI002_VETRI002_0.geometry}
            material={materials["VETRI.002"]}
            position={[-0.057, -0.242, 0.267]}
            rotation={[0, 0, -Math.PI]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SERRAMENTI001_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.057, -0.242, 0.267]}
            rotation={[0, 0, -Math.PI]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TETTO003_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.057, -0.242, 0.267]}
            rotation={[0, 0, -Math.PI]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BASE_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.057, -0.242, 0.267]}
            rotation={[0, 0, -Math.PI]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube056_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.669, 0.021, 0.429]}
            rotation={[0, 0, -Math.PI]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BANDIERA_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.825, 0.769, 1.023]}
            rotation={[Math.PI, -Math.PI / 2, 0]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.poggiolo004_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
            position={[-0.559, -0.237, 0.568]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube055_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.669, -0.503, 0.429]}
            rotation={[0, 0, -Math.PI]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.847, -0.242, 1.091]}
            rotation={[Math.PI, -Math.PI / 2, 0]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text003__0.geometry}
            material={materials["Cube.002__0"]}
            position={[-0.867, -0.028, 0.988]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PRATO_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.203, -1.459, 0.022]}
            rotation={[0, 0, -Math.PI]}
            scale={0.114}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PRATO001_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
            position={[-0.388, 0.948, 0.024]}
            rotation={[0, 0, -Math.PI]}
            scale={0.114}
          />
        </group>
        <group
          position={[3867.165, 600.935, -3117.039]}
          rotation={[-Math.PI / 2, 0, -1.569]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-4.388, -5.879, 2.65]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-3.471, -2.703, 2.402]}
            rotation={[0, 0, 0.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[4.411, -5.276, 2.035]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere076_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[4.411, -5.276, 3.671]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[1.025, -3.588, 1.62]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere077_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[1.025, -3.588, 3.256]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-1.376, -1.254, 1.62]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere078_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-1.376, -1.254, 3.256]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder031_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[6.187, -1.161, 3.287]}
            rotation={[0, 0, 0.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder032_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[4.127, 1.693, 3.306]}
            rotation={[0, 0, -0.231]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder033_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[3.042, -1.003, 1.62]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere079_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[3.042, -1.003, 3.256]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder034_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[5.969, 5.163, 3.196]}
            rotation={[0, 0, 0.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder035_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-4.399, 6.212, 3.219]}
            rotation={[0, 0, 0.127]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[1.995, 6.244, 1.606]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere080_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[1.995, 6.244, 3.242]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder037_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-5.467, 6.244, 1.587]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere081_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-5.467, 6.244, 3.224]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[5.862, 3.511, 3.201]}
            rotation={[0, 0, 1.071]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder039_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[1.043, -5.316, 3.198]}
            rotation={[0, 0, 0.127]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder040_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-2.985, 1.293, 1.642]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere082_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-2.985, 1.293, 3.279]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder041_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.796, 3.79, 4.475]}
            rotation={[0, 0, 0.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder042_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-5.575, -0.738, 1.62]}
            rotation={[0, 0, -1.059]}
            scale={1.086}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere083_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-5.575, -0.738, 3.256]}
            rotation={[0, 0, -1.059]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder043_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[3.052, 5.152, 1.62]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere084_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[3.052, 5.152, 3.256]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder044_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.425, 5.158, 1.62]}
            rotation={[0, 0, 0.502]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere085_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-0.425, 5.158, 3.256]}
            rotation={[0, 0, 0.502]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder045_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[5.868, 7.224, 3.201]}
            rotation={[0, 0, 1.11]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder046_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[2.757, -0.468, 2.91]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere086_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[2.757, -0.468, 4.546]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[10.36, 13.156, 4.102]}
            rotation={[0, 0, 0.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder070_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[7.487, 17.005, 4.102]}
            rotation={[0, 0, 0.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder071_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-3.801, 23.504, 1.587]}
            rotation={[0, 0, 0.354]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere123_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-3.801, 23.504, 3.224]}
            rotation={[0, 0, 0.354]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder072_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-7.166, 3.203, 1.6]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere124_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-7.166, 3.203, 3.237]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder073_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-7.166, 3.203, 1.6]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere125_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-7.166, 3.203, 3.237]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder074_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-4.491, 3.198, 1.6]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere126_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-4.491, 3.198, 3.237]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder075_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-6.563, 8.851, 2.326]}
            rotation={[0, 0, 1.75]}
          />
        </group>
        <group
          position={[-1485.561, 529.929, 3521.55]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder051_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-4.388, -5.879, 2.34]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder052_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-3.471, -2.703, 2.113]}
            rotation={[0, 0, 0.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder053_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[4.411, -5.276, 1.278]}
            scale={1.086}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere107_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[4.411, -5.326, 2.961]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder054_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[1.025, -3.638, 1.252]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere108_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[1.025, -3.638, 2.888]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder055_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-1.376, -1.254, 1.329]}
            scale={1.086}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere109_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-1.376, -1.304, 3.012]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder056_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[6.187, -1.211, 3.274]}
            rotation={[0, 0, 0.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder057_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[4.127, 1.693, 2.987]}
            rotation={[0, 0, -0.231]}
            scale={0.568}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder058_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[3.042, -1.053, 1.213]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere110_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[3.042, -1.053, 2.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder059_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[5.432, 7.344, 3.136]}
            rotation={[0, 0, 0.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder060_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-1.957, 5.163, 2.831]}
            rotation={[0, 0, 0.127]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder061_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[1.318, 4.139, 1.311]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere111_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[1.318, 4.138, 2.947]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder062_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-5.467, 6.244, 1.293]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere112_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-5.467, 6.244, 2.929]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.392, 8.648, 2.861]}
            rotation={[0, 0, 1.071]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder064_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[1.043, -5.316, 2.847]}
            rotation={[0, 0, 0.127]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder065_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-2.985, 1.243, 1.31]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere113_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-2.985, 1.243, 2.947]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder066_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[0.796, 3.79, 3.767]}
            rotation={[0, 0, 0.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder067_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-5.575, -0.788, 1.316]}
            rotation={[0, 0, -1.059]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere114_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-5.575, -0.788, 2.953]}
            rotation={[0, 0, -1.059]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder081_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[4.351, 3.77, 1.307]}
            rotation={[0, 0, 2.865]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere127_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[4.351, 3.72, 2.99]}
            rotation={[0, 0, 2.865]}
          />
        </group>
        <group
          position={[4853.188, 529.929, 3527.392]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane015_texture001_0.geometry}
            material={materials["texture.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LAMPIONE033_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[3.69, -6.421, 1.005]}
            scale={[0.493, 0.493, 0.448]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder076_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
            position={[3.223, 0.011, 1.098]}
            rotation={[0, -0.167, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane016_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
            position={[0.791, 0.389, 0.002]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder077_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
            position={[0.716, -3.914, -0.028]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder078_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
            position={[0.716, -3.914, 2.093]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.seduta_altalena_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
            position={[0.716, -3.914, 2.093]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder079_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
            position={[-4.581, -3.914, -0.004]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder080_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
            position={[-4.581, -3.914, 2.116]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.seduta_altalena001_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
            position={[-4.581, -3.914, 2.116]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sabbia_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
            position={[-5.14, 3.424, 0.183]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sabbiera_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
            position={[-5.14, 3.424, 0.183]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.prova2009_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[-8.34, -6.588, 0.578]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube062_lowpolytex_0.geometry}
            material={materials.lowpolytex}
            position={[3.078, 6.981, -0.006]}
          />
        </group>
        <group
          position={[3127.092, 529.637, -1382.259]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_texture_FINALE001_0.geometry}
            material={materials["texture_FINALE.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_strada2_0.geometry}
            material={materials.strada2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
          />
        </group>
        <group
          position={[1800.487, 552.771, 3528.68]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_TEXTURE_0.geometry}
            material={materials.TEXTURE}
          />
          <group position={[5.71, 1.752, 1.335]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante006_vasi003_0.geometry}
              material={materials["vasi.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante006_terra003_0.geometry}
              material={materials["terra.003"]}
            />
          </group>
          <group position={[-5.544, 1.752, 1.335]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante005_vasi003_0.geometry}
              material={materials["vasi.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante005_terra003_0.geometry}
              material={materials["terra.003"]}
            />
          </group>
          <group position={[3.377, 8.614, 0.052]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante004_vasi003_0.geometry}
              material={materials["vasi.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante004_terra003_0.geometry}
              material={materials["terra.003"]}
            />
          </group>
          <group position={[-3.123, 8.614, 0.052]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante003_vasi003_0.geometry}
              material={materials["vasi.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.piante003_terra003_0.geometry}
              material={materials["terra.003"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.colonna_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[2.053, 1.087, 2.955]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.colonna001_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[-1.898, 1.087, 2.9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.colonna002_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[4.531, 1.087, 2.955]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.colonna003_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[-4.668, 1.087, 2.955]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.VETRI_FINESTRE_VETRI001_0.geometry}
            material={materials["VETRI.001"]}
            position={[0.089, -3.631, 2.946]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.VETRI_PORTA_VETRI001_0.geometry}
            material={materials["VETRI.001"]}
            position={[0.089, -3.631, 2.946]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube048_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[-0.021, 0.535, 6.38]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text002_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[2.09, 1.813, 6.542]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text001_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[0.506, -0.742, 9.725]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[0, 4.186, -1.605]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cespugli006_foglie003_0.geometry}
            material={materials["foglie.003"]}
            position={[5.719, 1.734, 1.847]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cespugli005_foglie003_0.geometry}
            material={materials["foglie.003"]}
            position={[-5.535, 1.734, 1.847]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube047_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[3.237, 5.937, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube046_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[-2.971, 5.952, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube045_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[7.912, 5.461, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube044_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[7.912, 0.147, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube043_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[7.919, -5.094, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube042_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[-7.931, 5.566, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[-7.931, 0.259, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[5.469, -7.919, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[-0.005, -7.919, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[-5.465, -7.919, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[5.488, 8.021, 0.192]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[-5.58, 8.021, 0.192]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube035_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[-7.931, -5.037, 0.113]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cespugli004_foglie003_0.geometry}
            material={materials["foglie.003"]}
            position={[3.386, 8.596, 0.537]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cespugli003_foglie003_0.geometry}
            material={materials["foglie.003"]}
            position={[-3.113, 8.596, 0.537]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GRADINI_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[0.089, -3.631, 3.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SERRAMENTI_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[0.089, -3.631, 3.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.struttura_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[0.089, -3.631, 3.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TETTOIA_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[-0.18, 0.774, 6.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TETTU_TEXTURE_0.geometry}
            material={materials.TEXTURE}
            position={[0.089, -3.631, 3]}
          />
        </group>
        <group
          position={[195.252, 529.929, 3486.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube051_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[-1.637, -4.586, 5.697]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TETTO002_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[-1.637, -4.586, 5.697]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.VETRI_VETRI_FINALE001_0.geometry}
            material={materials["VETRI_FINALE.001"]}
            position={[-1.637, -4.586, 5.697]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cassetta_tetto001_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[-3.689, -5.432, 11.464]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[3.701, 3.551, 5.754]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TETTO001_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[3.701, 3.551, 5.754]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.VETRI001_VETRI_FINALE001_0.geometry}
            material={materials["VETRI_FINALE.001"]}
            position={[3.701, 3.551, 5.754]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cassetta_tetto002_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[5.854, 4.196, 11.513]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[-6.319, 3.976, 3.597]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetri__VETRI_FINALE001_0.geometry}
            material={materials["VETRI_FINALE.001"]}
            position={[-6.319, 3.976, 3.597]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tetto004_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[-6.328, 3.967, 3.597]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.serramenti_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[-6.319, 3.976, 3.597]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.poggiolo_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[-6.351, 0.417, 4.141]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.poggiolo001_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[-6.351, 7.61, 4.146]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.poggiolo002_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[-2.785, 3.968, 4.174]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.poggiolo003_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[-9.945, 3.968, 4.174]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cassetta_tetto_texture_FINALE002_0.geometry}
            material={materials["texture_FINALE.002"]}
            position={[-4.806, 5.783, 7.112]}
          />
        </group>
        <group
          position={[3882.794, 689.881, 876.516]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stop_TEXTURE_FINALE_0.geometry}
            material={materials.TEXTURE_FINALE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stop_texture003_0.geometry}
            material={materials["texture.003"]}
          />
        </group>
        <group
          position={[4468.331, 551.397, -616.705]}
          rotation={[-Math.PI / 2, 0, 0.745]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.gelatii_camion_0.geometry}
            material={materials.camion}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.gelatii_rosa_gelato_0.geometry}
            material={materials.rosa_gelato}
          />
        </group>
        <group
          position={[4584.371, 741.616, -720.563]}
          rotation={[-1.572, 0.001, 0.745]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tenda_frontale005_viola_0.geometry}
            material={materials.viola}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tenda_frontale005_camion_0.geometry}
            material={materials.camion}
          />
        </group>
        <group
          position={[3904.545, 733.238, 527.601]}
          rotation={[-Math.PI / 2, 0, -0.649]}
          scale={[-100, 100, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.parcheggio_TEXTURE_FINALE001_0.geometry}
            material={materials["TEXTURE_FINALE.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.parcheggio_SEGNALE_PARCHEGGIO_0.geometry}
            material={materials.SEGNALE_PARCHEGGIO}
          />
        </group>
        <group
          position={[395.459, 767.185, -1371.496]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-100, 100, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stop001_TEXTURE_FINALE001_0.geometry}
            material={materials["TEXTURE_FINALE.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stop001_texture005_0.geometry}
            material={materials["texture.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stop001_grigio_scuro001_0.geometry}
            material={materials["grigio_scuro.001"]}
          />
        </group>
        <group
          position={[-322.452, 768.578, 1843.533]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stop002_TEXTURE_FINALE001_0.geometry}
            material={materials["TEXTURE_FINALE.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stop002_texture005_0.geometry}
            material={materials["texture.005"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_TEXTURE_FINALE_0.geometry}
          material={materials.TEXTURE_FINALE}
          position={[-896.033, 455.983, 1405.382]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[120.071, 120.284, 120.284]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.casa_TEXTURE_FINALE_0.geometry}
          material={materials.TEXTURE_FINALE}
          position={[-898.507, 537.814, 1405.382]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.finestre_laterali002_LEGNO_0.geometry}
          material={materials.LEGNO}
          position={[-901.837, 697.94, 1734.218]}
          rotation={[-Math.PI / 2, 0, -3.141]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.porta_LEGNO_0.geometry}
          material={materials.LEGNO}
          position={[-771.162, 595.668, 1350.12]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tetto001_TEXTURE_FINALE_0.geometry}
          material={materials.TEXTURE_FINALE}
          position={[-898.507, 537.814, 1405.382]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_GIALLO_0.geometry}
          material={materials.GIALLO}
          position={[-943.328, 893.236, 1121.496]}
          rotation={[-Math.PI / 2, 0, 1.569]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cespuglio_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-679.562, 581.431, 1517.327]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cespuglio001_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-678.82, 581.749, 1178.872]}
          rotation={[-1.602, 0.023, 0.57]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-1047.953, 580.866, 1828.831]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-928.289, 580.866, 1828.831]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-996.699, 580.866, 1828.831]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-878.181, 580.866, 1828.831]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere005_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-809.289, 580.866, 1828.831]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere006_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-756.567, 580.866, 1828.831]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere007_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-1047.953, 580.866, 985.542]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere008_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-994.635, 580.866, 985.542]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-927.935, 580.866, 985.542]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere010_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-874.963, 580.866, 985.542]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere011_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-808.288, 580.866, 985.542]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere012_CESPUGLI002_0.geometry}
          material={materials["CESPUGLI.002"]}
          position={[-754.855, 580.866, 985.542]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_TEXTURE_FINALE_0.geometry}
          material={materials.TEXTURE_FINALE}
          position={[-672.52, 690.585, 1698.803]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002__0.geometry}
          material={materials["Cube.002__0"]}
          position={[-713.692, 857.32, 1409.385]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[60.142, 125.577, 120.284]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.casa002_VETRI_FINALE001_0.geometry}
          material={materials["VETRI_FINALE.001"]}
          position={[-898.507, 537.814, 1405.382]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.finestre_laterali006_VETRI_FINALE001_0.geometry}
          material={materials["VETRI_FINALE.001"]}
          position={[-901.837, 697.94, 1734.218]}
          rotation={[-Math.PI / 2, 0, -3.141]}
          scale={120.284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.porta002_VETRI_FINALE001_0.geometry}
          material={materials["VETRI_FINALE.001"]}
          position={[-771.162, 595.668, 1350.12]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_texture001_0.geometry}
          material={materials["texture.001"]}
          position={[-537.905, 545.982, 1161.283]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={73.297}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere013_texture001_0.geometry}
          material={materials["texture.001"]}
          position={[-554.575, 568.444, 1112.785]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={73.297}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere014_texture001_0.geometry}
          material={materials["texture.001"]}
          position={[-499.931, 556.524, 1085.986]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={73.297}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sassi_piastrelle_texture001_0.geometry}
          material={materials["texture.001"]}
          position={[-435.425, 531.598, 1393.998]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={73.297}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCELLO_GROSSO_lowpolytex001_0.geometry}
          material={materials["lowpolytex.001"]}
          position={[633.68, 527.91, 282.841]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCELLO_GROSSO001_lowpolytex001_0.geometry}
          material={materials["lowpolytex.001"]}
          position={[2921.225, 527.91, 282.841]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CANCELLO_GROSSO002_lowpolytex001_0.geometry}
          material={materials["lowpolytex.001"]}
          position={[1776.994, 528.061, -1163.218]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube061__0.geometry}
          material={materials["Cube.002__0"]}
          position={[708.553, 5307.602, 1637.339]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube070__0.geometry}
          material={materials["Cube.002__0"]}
          position={[2144.434, 3735.226, -1018.537]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={51.325}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TERRENO_BASI_EDIFICI_0.geometry}
          material={materials.BASI_EDIFICI}
          position={[-863.658, 529.929, 1399.417]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_parcheggio_gelati_0.geometry}
          material={materials.parcheggio_gelati}
          position={[4860.693, 529.929, -362.932]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_texture_FINALE002_0.geometry}
          material={materials["texture_FINALE.002"]}
          position={[3290.164, 529.929, 3531.274]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[2849.983, 698.918, 4109.437]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={44.776}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[2943.1, 728.119, 3791.9]}
          rotation={[-Math.PI / 2, 0, 0.519]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3731.313, 646.858, 4049.155]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={108.592}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere068_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3731.313, 810.489, 4049.155]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[108.592, 108.592, 136.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3392.628, 658.411, 3880.326]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={108.592}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere069_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3392.628, 822.042, 3880.326]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[108.592, 108.592, 136.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3152.603, 658.411, 3646.988]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={108.592}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere070_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3152.603, 822.042, 3646.988]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[108.592, 108.592, 136.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3908.892, 809.821, 3637.628]}
          rotation={[-Math.PI / 2, 0, 0.519]}
          scale={56.83}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3702.818, 818.825, 3352.209]}
          rotation={[-Math.PI / 2, 0, -0.231]}
          scale={56.83}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3594.324, 658.411, 3621.828]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={108.592}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere071_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3594.324, 822.042, 3621.828]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[108.592, 108.592, 136.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3887.111, 810.401, 3005.295]}
          rotation={[-Math.PI / 2, 0, 0.519]}
          scale={137.102}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3094.504, 818.716, 3005.295]}
          rotation={[-Math.PI / 2, 0, 0.127]}
          scale={137.102}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3489.679, 658.411, 2897.153]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={108.592}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere072_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3489.679, 822.042, 2897.153]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[108.592, 108.592, 136.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[2742.074, 652.334, 2897.153]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[156.469, 156.469, 108.592]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere073_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[2743.46, 829.823, 2897.153]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[156.469, 156.469, 136.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3876.338, 806.963, 3170.493]}
          rotation={[-Math.PI / 2, 0, 1.071]}
          scale={137.102}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3394.472, 795.162, 4053.141]}
          rotation={[-Math.PI / 2, 0, 0.127]}
          scale={137.102}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[2991.67, 653.811, 3392.263]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={108.592}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere074_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[2991.67, 817.442, 3392.263]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[108.592, 108.592, 136.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3369.775, 894.72, 3142.501]}
          rotation={[-Math.PI / 2, 0, 0.519]}
          scale={179.492}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[2732.661, 658.411, 3595.302]}
          rotation={[-Math.PI / 2, 0, -1.059]}
          scale={108.592}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere075_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[2731.275, 808.183, 3595.302]}
          rotation={[-Math.PI / 2, 0, -1.059]}
          scale={[108.592, 108.592, 136.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_TEXTURE_0.geometry}
          material={materials.TEXTURE}
          position={[4021.394, 560.243, -2634.744]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[61.089, 62.015, 55.027]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube053_TEXTURE_0.geometry}
          material={materials.TEXTURE}
          position={[4021.394, 557.992, -2104.027]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[61.089, 62.015, 55.027]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_TEXTURE_0.geometry}
          material={materials.TEXTURE}
          position={[4021.394, 560.243, -1574.433]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[61.089, 62.015, 55.027]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder048_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[180.895, 829.667, -4007.123]}
          rotation={[-Math.PI / 2, 0, -1.569]}
          scale={44.776}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[278.716, 885.301, -3198.448]}
          rotation={[-Math.PI / 2, 0, -1.442]}
          scale={137.102}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[163.311, 800.644, -3191.405]}
          rotation={[-Math.PI / 2, 0, 0.372]}
          scale={137.102}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder068_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1159.678, 812.241, -1391.78]}
          rotation={[-Math.PI / 2, 0, 0.699]}
          scale={137.102}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere115_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1260.949, 584.124, -125.368]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[39.263, 39.27, 35.034]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere116_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1136.842, 551.723, -196.187]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[44.776, 44.776, 46.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere117_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1209.217, 579.941, 73.764]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[37.276, 37.283, 33.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere118_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1135.653, 555.906, -36.382]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[33.215, 33.215, 34.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.abete001_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1221.449, 632.264, 1660.803]}
          rotation={[-Math.PI / 2, 0, 0.623]}
          scale={85.785}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.prova2001_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1332.702, 575.19, 906.381]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[35.226, 35.623, 35.623]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.prova2005_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1325.666, 574.886, -265.528]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[34.971, 35.623, 35.623]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.prova2006_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1328.99, 576.145, 1898.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[34.46, 35.623, 35.623]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.prova2007_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1342.207, 573.129, 1893.035]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[35.327, 35.623, 35.623]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.prova2008_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1340.992, 572, 891.36]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[41.538, 35.623, 35.623]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060_TEXTURE_0.geometry}
          material={materials.TEXTURE}
          position={[5246.365, 573.767, -2193.32]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[61.089, 62.015, 55.027]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bus_bus_0.geometry}
          material={materials.material}
          position={[3593.868, 563.373, 978.048]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cubi_tetto001_bus_0.geometry}
          material={materials.material}
          position={[3708.193, 843.136, 1247.722]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.luci_posteriori_bus_0.geometry}
          material={materials.material}
          position={[3709.958, 561.744, 1126.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RUOTE_ANTERIORI_bus_0.geometry}
          material={materials.material}
          position={[3709.958, 561.744, 1126.826]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RUOTE_POSTERIORI_bus_0.geometry}
          material={materials.material}
          position={[3709.958, 561.744, 1126.826]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bicchieri_camion_0.geometry}
          material={materials.camion}
          position={[4488.74, 553.353, -626.96]}
          rotation={[-Math.PI / 2, 0, 0.745]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mensole_camion_0.geometry}
          material={materials.camion}
          position={[4344.171, 554.102, -527.724]}
          rotation={[-Math.PI / 2, 0, 0.745]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.piatti_camion_0.geometry}
          material={materials.camion}
          position={[4791.719, 683.124, -851.744]}
          rotation={[-Math.PI / 2, 0, 0.745]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sedili_camion_0.geometry}
          material={materials.camion}
          position={[4840.403, 651.905, -714.658]}
          rotation={[-Math.PI / 2, 0, 0.745]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.volante_camion_0.geometry}
          material={materials.camion}
          position={[4985.628, 546.761, -1041.174]}
          rotation={[-Math.PI / 2, 0, 0.745]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069_camion_0.geometry}
          material={materials.camion}
          position={[4705.801, 855.942, -863.281]}
          rotation={[-1.76, -0.171, -2.394]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere122_camion_0.geometry}
          material={materials.camion}
          position={[4743.991, 873.1, -772.869]}
          rotation={[-1.527, 0.04, 0.744]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere121_camion_0.geometry}
          material={materials.camion}
          position={[4769.285, 898.117, -806.028]}
          rotation={[-1.527, 0.04, 0.744]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere120_camion_0.geometry}
          material={materials.camion}
          position={[4792.021, 867.834, -809.563]}
          rotation={[-1.527, 0.04, 0.744]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere119_pallina_gelato_0.geometry}
          material={materials.pallina_gelato}
          position={[4796.043, 902.747, -765.043]}
          rotation={[-1.527, 0.04, 0.744]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camion_camion_0.geometry}
          material={materials.camion}
          position={[4746.301, 692.042, -817.464]}
          rotation={[-Math.PI / 2, 0, 0.745]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.finestrini_finestrini_0.geometry}
          material={materials.finestrini}
          position={[4744.778, 691.293, -819.115]}
          rotation={[-Math.PI / 2, 0, 0.745]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grata_muso_camion_0.geometry}
          material={materials.camion}
          position={[4966.172, 584.367, -579.706]}
          rotation={[-Math.PI / 2, 0, 0.745]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lato_camion_insegna001_0.geometry}
          material={materials["insegna.001"]}
          position={[4746.819, 692.042, -817.941]}
          rotation={[-Math.PI / 2, 0, 0.745]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ruote_anteriori_camion_0.geometry}
          material={materials.camion}
          position={[4746.301, 559.378, -817.464]}
          rotation={[-Math.PI, 0.826, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ruote_posteriori_camion_0.geometry}
          material={materials.camion}
          position={[4746.838, 559.378, -816.881]}
          rotation={[-Math.PI, 0.826, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sbarra_tenda_camion_0.geometry}
          material={materials.camion}
          position={[4666.983, 786.302, -747.389]}
          rotation={[-Math.PI / 2, 0, 0.745]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macchina_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[2981.184, 539.403, -2599.087]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ruote_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[3010.225, 557.498, -2599.02]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[3176.036, 592.311, -2663.92]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barre_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[2947.346, 705.223, -2599.295]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macchina001_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[2953.629, 560.539, -1949.821]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ruote001_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[2989.227, 560.539, -1949.739]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[3118.322, 591.525, -1920.51]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macchina002_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[-123.388, 553.255, 1370.87]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ruote002_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[-123.464, 553.255, 1403.439]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macchina003_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[2030.316, 553.724, 2509.656]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ruote003_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[2062.884, 553.724, 2509.732]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macchina004_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[-108.107, 562.535, -2811.261]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ruote004_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[-140.675, 562.535, -2811.336]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macchina005_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[4359.322, 562.789, 187.16]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ruote005_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[4359.403, 568.563, 151.562]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macchina006_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[-1575.154, 552.205, 1225.054]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ruote006_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[-1575.079, 552.205, 1192.485]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macchina007_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[-1851.448, 565.281, -3657.329]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ruote007_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[-1884.017, 565.281, -3657.404]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macchina008_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[-1869.63, 562.492, -3338.493]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ruote008_texture004_0.geometry}
          material={materials["texture.004"]}
          position={[-1902.199, 562.492, -3338.568]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE013_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[940.901, 602.36, 2687.481]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE020_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-1371.675, 600.475, -1198.808]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE024_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3194.347, 595.042, -3846.194]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE008_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[2709.691, 630.177, 2697.235]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE014_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[1578.207, 632.828, 2673.629]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE031_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3868.605, 632.018, 2697.235]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE015_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3967.353, 632.468, 1240.707]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE032_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[4243.023, 646.169, 2643.747]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE027_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3950.895, 633.15, -1326.733]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE021_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3864.49, 631.32, -2100.257]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE022_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[3202.058, 631.691, -2161.974]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE023_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[1592.471, 629.469, -2828.521]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE025_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[1004.922, 631.442, -2828.521]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE026_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-412.108, 632.886, -1139.935]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE019_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-412.108, 633.915, -310.455]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE018_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-356.207, 631.661, 854.768]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE017_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-418.848, 632.705, 1839.534]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE016_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-2076.006, 631.965, 2658.889]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE012_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-861.385, 632.809, 2686.212]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE034_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[886.425, 631.613, 4193.428]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE035_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[-2076.006, 627.802, -2058.289]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAMPIONE036_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[4084.808, 623.16, 4123.367]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[49.326, 49.326, 44.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[4100.231, 526.495, -2121.033]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={76.412}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube064_lowpolytex_0.geometry}
          material={materials.lowpolytex}
          position={[4570.121, 527.418, 1068.506]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={76.412}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_color_0.geometry}
          material={materials.color}
          position={[-1406.325, 778.976, 506.766]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube067_color_0.geometry}
          material={materials.color}
          position={[-1406.293, 803.229, 519.025]}
          rotation={[-Math.PI / 2, -1.004, -Math.PI / 2]}
          scale={143.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube066_color_0.geometry}
          material={materials.color}
          position={[-1406.293, 780.324, 519.025]}
          rotation={[-Math.PI / 2, -1.004, -Math.PI / 2]}
          scale={143.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube065_color_0.geometry}
          material={materials.color}
          position={[-1406.293, 757.601, 519.025]}
          rotation={[-Math.PI / 2, -1.004, -Math.PI / 2]}
          scale={143.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085_color_0.geometry}
          material={materials.color}
          position={[-1406.325, 676.166, 494.532]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084_color_0.geometry}
          material={materials.color}
          position={[-1406.313, 803.278, 515.972]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={143.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083_color_0.geometry}
          material={materials.color}
          position={[-1406.313, 780.569, 515.972]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={143.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082_color_0.geometry}
          material={materials.color}
          position={[-1406.313, 757.343, 515.972]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={143.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_color_0.geometry}
          material={materials.color}
          position={[-2104.895, 778.976, 129.925]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder086_color_0.geometry}
          material={materials.color}
          position={[-2118.416, 675.118, 142.159]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere128_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[5357.266, 146.256, 0]}
          rotation={[-1.322, -0.37, 0.133]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere129_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[5356.494, 410.867, -1056.219]}
          rotation={[-0.443, -0.418, 0.643]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere130_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[5356.494, 103.136, -1939.26]}
          rotation={[-1.939, -0.073, -0.133]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere131_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[5361.76, 329.68, -3180.289]}
          rotation={[-1.729, -0.198, -0.061]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere132_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[5361.76, 311.411, -3310.194]}
          rotation={[-0.4, -0.41, 0.668]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere133_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[5198.484, 148.675, -4069.532]}
          rotation={[-1.939, -0.073, -0.133]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere134_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[2625.134, 284.701, -3889.455]}
          rotation={[-1.892, 0.474, 0.123]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere135_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[801.95, 49.781, -3913.787]}
          rotation={[-1.91, 0.095, -0.053]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere136_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[-163.308, 153.041, -3897.826]}
          rotation={[-1.907, 0.624, 0.201]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere137_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[-2151.771, 88.507, -3969.667]}
          rotation={[0.134, 0.788, 0.013]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere138_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[-2192.819, 111.005, -3268.913]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere139_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere140_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere141_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[-2180.465, 392.812, -1604.555]}
          rotation={[-3.096, -0.001, -0.055]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere142_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[-2180.465, 142.107, -457.765]}
          rotation={[-2.317, 0.046, -0.041]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere143_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[-2180.465, 198.319, -378.877]}
          rotation={[-1.695, 0.082, -0.058]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere144_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[-2155.152, 112.982, 3322.764]}
          rotation={[-2.482, -0.095, -0.242]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere145_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[-1083.65, 186.812, 4279.099]}
          rotation={[-2.788, 0.577, 0.855]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere146_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[143.879, 340.828, 4279.099]}
          rotation={[-2.739, 0.191, -0.071]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere147_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[582.258, 93.659, 4279.099]}
          rotation={[-2.739, 0.191, -0.071]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere148_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[2561.355, 346.068, 4279.099]}
          rotation={[-2.93, -0.044, -0.748]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere149_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[3540.525, 104.112, 4279.099]}
          rotation={[-2.723, 0.245, 0.052]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere150_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[3828.069, 238.019, 4279.099]}
          rotation={[-2.723, 0.245, 0.052]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere151_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[3928.958, 159.97, 4279.099]}
          rotation={[-2.723, 0.245, 0.052]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere152_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[5357.266, 221.122, 1553.383]}
          rotation={[-1.322, -0.37, 0.133]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere153_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[5357.266, 106.196, 3673.028]}
          rotation={[-1.322, -0.37, 0.133]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere154_TEXTURE_FINALE001_0.geometry}
          material={materials["TEXTURE_FINALE.001"]}
          position={[5357.266, 229.5, 3814.45]}
          rotation={[-0.093, -0.236, 0.175]}
          scale={63.433}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere156_TEXTURE_FINALE002_0.geometry}
          material={materials["TEXTURE_FINALE.002"]}
          position={[4066.513, 5788.035, -185.676]}
          rotation={[-Math.PI / 2, 0, 0.107]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere159_TEXTURE_FINALE002_0.geometry}
          material={materials["TEXTURE_FINALE.002"]}
          position={[4446.812, 4309.633, 2442.948]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[116.925, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere160_TEXTURE_FINALE002_0.geometry}
          material={materials["TEXTURE_FINALE.002"]}
          position={[2795.562, 4441.102, 3696.203]}
          rotation={[-Math.PI / 2, 0, 0.107]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere158_TEXTURE_FINALE002_0.geometry}
          material={materials["TEXTURE_FINALE.002"]}
          position={[-671.446, 4310.998, -209.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere087_TEXTURE_FINALE002_0.geometry}
          material={materials["TEXTURE_FINALE.002"]}
          position={[4446.812, 4309.633, -2527.875]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[157.783, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere088_TEXTURE_FINALE002_0.geometry}
          material={materials["TEXTURE_FINALE.002"]}
          position={[44.919, 3333.422, -1581.85]}
          rotation={[-Math.PI / 2, 0, 0.107]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/low_poly_city.glb");
