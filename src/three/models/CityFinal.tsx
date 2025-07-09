import { useCursor, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState } from "react";
import type { GLTF } from "three-stdlib";
import { useModalStore } from "@/stores/modalStore";
import About from "@/components/Modals/About";
import Skills from "@/components/Modals/Skills";
import Projects from "@/components/Modals/Projects";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

export default function CityFinal({
  currentProgress,
}: {
  currentProgress: number;
}) {
  const { nodes, materials } = useGLTF(
    "/gltf/city_final.glb"
  ) as unknown as GLTFResult;

  const { openModal } = useModalStore();
  const [githubHovered, setGithubHovered] = useState(false);
  const [googleHovered, setGoogleHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [globalHovered, setGlobalHovered] = useState(false);
  const busRef = useRef(null);

  const githubRef = useRef<any>(null);
  const googleRef = useRef<any>(null);
  const linkedinRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);

  const targetScale = useRef(28.364); // Start with normal scale
  const currentScale = useRef(28.364);

  const targetTextScale = useRef(1.4);
  const currentTextScale = useRef(1.3);

  const googleTargetScale = useRef(0.843);
  const googleCurrentScale = useRef(0.843);

  const linkedinTargetScale = useRef(0.843);
  const linkedinCurrentScale = useRef(0.843);
  let panelColor = "#D2AC9F";
  let panelSkills = "#100709";
  let panelWorks = "#BEC7DA";

  useCursor(githubHovered);
  useCursor(googleHovered);
  useCursor(linkedinHovered);
  useCursor(globalHovered);

  // colors panels

  // about
  if (currentProgress >= 0.117 && currentProgress < 0.13) {
    panelColor = "#06923E";
  }

  // skills
  if (currentProgress >= 0.69 && currentProgress < 0.75) {
    panelSkills = "#1A7304";
  }

  if (currentProgress >= 0.86 && currentProgress < 0.9) {
    panelWorks = "#1A7304";
  }

  // Update target scale when hover state changes
  if (githubHovered && targetScale.current !== 30) {
    targetScale.current = 30; // Hover scale
  } else if (!githubHovered && targetScale.current !== 28.364) {
    targetScale.current = 28.364; // Normal scale
  }

  if (googleHovered && googleTargetScale.current !== 0.883) {
    googleTargetScale.current = 0.883;
  } else if (!googleHovered && googleTargetScale.current !== 0.843) {
    googleTargetScale.current = 0.843;
  }

  if (linkedinHovered && linkedinTargetScale.current !== 0.883) {
    linkedinTargetScale.current = 0.883;
  } else if (!linkedinHovered && linkedinTargetScale.current !== 0.843) {
    linkedinTargetScale.current = 0.843;
  }

  useFrame(() => {
    if (currentProgress >= 0.117 && currentProgress < 0.13) {
      currentTextScale.current = THREE.MathUtils.lerp(
        currentTextScale.current,
        targetTextScale.current,
        0.08 // Slightly slower for smoother animation
      );
      aboutRef.current.scale.setScalar(currentTextScale.current);
    } else {
      currentTextScale.current = THREE.MathUtils.lerp(
        currentTextScale.current,
        1.3,
        0.08 // Slightly slower for smoother animation
      );
      aboutRef.current.scale.setScalar(currentTextScale.current);
    }

    if (githubRef.current) {
      // Always animate, regardless of hover state
      currentScale.current = THREE.MathUtils.lerp(
        currentScale.current,
        targetScale.current,
        0.08 // Slightly slower for smoother animation
      );
      githubRef.current.scale.setScalar(currentScale.current);
    }
    if (googleRef.current) {
      googleCurrentScale.current = THREE.MathUtils.lerp(
        googleCurrentScale.current,
        googleTargetScale.current,
        0.08
      );
      googleRef.current.scale.setScalar(googleCurrentScale.current);
    }
    if (linkedinRef.current) {
      linkedinCurrentScale.current = THREE.MathUtils.lerp(
        linkedinCurrentScale.current,
        linkedinTargetScale.current,
        0.08
      );
      linkedinRef.current.scale.setScalar(linkedinCurrentScale.current);
    }

    if (currentProgress >= 0.29 && currentProgress < 0.45) {
      busRef.current.position.z -= 10;
    }
  });
  const handleClick = (elementId: string) => {
    if (elementId === "about") {
      openModal("À propos de moi", <About />);
    } else if (elementId === "skills") {
      openModal("Domaine d'expertises", <Skills />);
    } else {
      openModal("Projets", <Projects />);
    }
  };

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  // Logo positions and rotations (fixed values)
  const githubControls = {
    position: { x: 6.49, y: 13.3, z: 28.65 },
    rotation: { x: -4.8, y: 0, z: 3.081 },
    innerPosition: { x: -2.06, y: 0.94, z: -2.66 },
  };

  const linkedinControls = {
    position: { x: 3.63, y: 19.03, z: 29.5 },
    rotation: { x: -4.8, y: 0, z: 3.08 },
    innerPosition: { x: 0, y: 3, z: 6 },
  };

  const googleControls = {
    position: { x: 5.7, y: 14.9, z: 30.17 },
    rotation: { x: -4.67, y: 0.02, z: 3.081 },
    innerPosition: { x: 0, y: 3, z: 6 },
  };

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texte001.geometry}
        material={materials.Matériau}
        position={[10.2, 10.408, -30.74]}
        rotation={[1.606, 0, 0]}
        scale={1.3}
        ref={aboutRef}
      />

      <mesh
        position={[13.5, 10.9, -31.6]}
        onClick={() => handleClick("about")}
        onPointerEnter={() => setGlobalHovered(true)}
        onPointerLeave={() => setGlobalHovered(false)}
      >
        <boxGeometry args={[7.6, 2, 1]} />
        <meshStandardMaterial color={panelColor} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texte002.geometry}
        material={materials.Matériau}
        position={[41.192, 14.015, 13.906]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.684}
      />
      <mesh
        position={[41.75, 14.2, 16.2]}
        onClick={() => handleClick("skills")}
        onPointerEnter={() => setGlobalHovered(true)}
        onPointerLeave={() => setGlobalHovered(false)}
      >
        <boxGeometry args={[1, 1, 5.5]} />
        <meshStandardMaterial color={panelSkills} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texte003.geometry}
        material={materials.Matériau}
        position={[19.345, 12.171, 33.273]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.767}
      />
      <mesh
        position={[18, 12.5, 33.3]}
        onClick={() => handleClick("projects")}
        onPointerEnter={() => setGlobalHovered(true)}
        onPointerLeave={() => setGlobalHovered(false)}
      >
        <boxGeometry args={[3.7, 1, 0.1]} />
        <meshStandardMaterial color={panelWorks} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texte004.geometry}
        material={materials["Matériau.001"]}
        position={[7.986, 8.909, 27.878]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.545}
      />
      <group
        position={[
          githubControls.position.x,
          githubControls.position.y,
          githubControls.position.z,
        ]}
        rotation={[
          githubControls.rotation.x,
          githubControls.rotation.y,
          githubControls.rotation.z,
        ]}
        scale={0.652}
      >
        {/* Github logo */}
        <group
          ref={githubRef}
          position={[
            githubControls.innerPosition.x,
            githubControls.innerPosition.y,
            githubControls.innerPosition.z,
          ]}
          scale={28.364}
          onClick={() => openLink("https://github.com/Neudo")}
          onPointerOver={() => setGithubHovered(true)}
          onPointerOut={() => setGithubHovered(false)}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.glossy_putih}
          ></mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.github}
          ></mesh>
        </group>
      </group>
      {/* Google logo */}
      <group
        position={[
          linkedinControls.position.x,
          linkedinControls.position.y,
          linkedinControls.position.z,
        ]}
        rotation={[
          linkedinControls.rotation.x,
          linkedinControls.rotation.y,
          linkedinControls.rotation.z,
        ]}
        scale={0.652}
      >
        <group
          position={[
            linkedinControls.innerPosition.x,
            linkedinControls.innerPosition.y,
            linkedinControls.innerPosition.z,
          ]}
          scale={0.843}
          ref={googleRef}
          onClick={() => openLink("mailto:quentin.bassalair@gmail.com")}
          onPointerOver={() => setGoogleHovered(true)}
          onPointerLeave={() => setGoogleHovered(false)}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4001.geometry}
            material={materials["glossy_putih.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5001.geometry}
            material={materials.google_3_GLOS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.google_4_GLOS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.google2_GLOS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.google_1_GLOS}
          />
        </group>
      </group>
      {/* Linkedin logo */}
      <group
        position={[
          googleControls.position.x,
          googleControls.position.y,
          googleControls.position.z,
        ]}
        rotation={[
          googleControls.rotation.x,
          googleControls.rotation.y,
          googleControls.rotation.z,
        ]}
        scale={0.652}
        onClick={() =>
          openLink("https://www.linkedin.com/in/quentin-bassalair-05556b190/")
        }
      >
        <group
          position={[
            googleControls.innerPosition.x,
            googleControls.innerPosition.y,
            googleControls.innerPosition.z,
          ]}
          scale={0.843}
          ref={linkedinRef}
          onPointerOver={() => setLinkedinHovered(true)}
          onPointerLeave={() => setLinkedinHovered(false)}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4002.geometry}
            material={materials.glossy_linkedin}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5002.geometry}
            material={materials["glossy_putih.001"]}
          />
        </group>
      </group>
      <group scale={0.01}>
        <group
          position={[2953.629, 560.539, -1949.821]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.macchina001_texture004_0.geometry}
            material={materials["texture.004"]}
            position={[3.49, -47.42, 0]}
          />
        </group>
        <group
          position={[-866.19, 529.804, 402.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <group position={[-0.185, -0.171, 2.007]} rotation={[0, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_1.geometry}
              material={materials.TEXTURE_FINALE}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_2.geometry}
              material={materials.palette}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_3.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_4.geometry}
              material={materials.texture}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_5.geometry}
              material={materials.BASI_EDIFICI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_6.geometry}
              material={materials.LEGNO}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_7.geometry}
              material={materials.BIANCO}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_8.geometry}
              material={materials.NERO}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_9.geometry}
              material={materials.GIALLO}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_10.geometry}
              material={materials["CESPUGLI.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_11.geometry}
              material={materials["VASI.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_12.geometry}
              material={materials["TERRA.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_13.geometry}
              material={materials["Cube.002__0"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_14.geometry}
              material={materials["VETRI_FINALE.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_15.geometry}
              material={materials["texture.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_16.geometry}
              material={materials["lowpolytex.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_17.geometry}
              material={materials["CARTELLO.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_18.geometry}
              material={materials["vetri.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_19.geometry}
              material={materials.foglie}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_20.geometry}
              material={materials.vasi}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_21.geometry}
              material={materials.terra}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_22.geometry}
              material={materials.cocktail}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_23.geometry}
              material={materials.pavimentop_terrazza}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_24.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_25.geometry}
              material={materials.poster}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_26.geometry}
              material={materials.vetri}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_27.geometry}
              material={materials["TEXTURE_FINALE.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_28.geometry}
              material={materials.postermuro}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_29.geometry}
              material={materials.CESPUGLI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_30.geometry}
              material={materials.VASI}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_31.geometry}
              material={materials.TERRA}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_32.geometry}
              material={materials["foglie.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_33.geometry}
              material={materials["vasi.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_34.geometry}
              material={materials["terra.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_35.geometry}
              material={materials["vetri.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_36.geometry}
              material={materials["vasi.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_37.geometry}
              material={materials["tubo.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_38.geometry}
              material={materials["nero.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_39.geometry}
              material={materials["terra.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_40.geometry}
              material={materials["foglie.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_41.geometry}
              material={materials["texture.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_42.geometry}
              material={materials.benzinaio}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_43.geometry}
              material={materials["nero.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_44.geometry}
              material={materials["nero.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_45.geometry}
              material={materials.insegna}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_46.geometry}
              material={materials["vetri.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_47.geometry}
              material={materials.nero}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_48.geometry}
              material={materials.tubo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_49.geometry}
              material={materials.porta_e_serramenti}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_50.geometry}
              material={materials["vetri.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_51.geometry}
              material={materials["CESPUGLI.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_52.geometry}
              material={materials["VASI.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_53.geometry}
              material={materials["TERRA.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_54.geometry}
              material={materials["CESPUGLI.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_55.geometry}
              material={materials["VASI.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_56.geometry}
              material={materials["TERRA.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_57.geometry}
              material={materials.lowpolytex}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_58.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_59.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_60.geometry}
              material={materials["acqua.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_61.geometry}
              material={materials.terriccio}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_62.geometry}
              material={materials.parcheggio_gelati}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_63.geometry}
              material={materials["texture_FINALE.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_64.geometry}
              material={materials["VETRI.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_65.geometry}
              material={materials["texture_FINALE.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_66.geometry}
              material={materials.strada2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_67.geometry}
              material={materials.TEXTURE}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_68.geometry}
              material={materials["VETRI.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_69.geometry}
              material={materials["foglie.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_70.geometry}
              material={materials["vasi.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_71.geometry}
              material={materials["terra.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_72.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_73.geometry}
              material={materials["texture.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_74.geometry}
              material={materials.camion}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_75.geometry}
              material={materials.rosa_gelato}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_76.geometry}
              material={materials.pallina_gelato}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_77.geometry}
              material={materials.finestrini}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_78.geometry}
              material={materials["insegna.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_79.geometry}
              material={materials.viola}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_80.geometry}
              material={materials["texture.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_81.geometry}
              material={materials.SEGNALE_PARCHEGGIO}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_82.geometry}
              material={materials["texture.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_83.geometry}
              material={materials["grigio_scuro.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_84.geometry}
              material={materials.color}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tetto002_TEXTURE_FINALE_0_85.geometry}
              material={materials["TEXTURE_FINALE.002"]}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bus_bus_0.geometry}
          material={materials.material}
          ref={busRef}
          position={[3593.868, 563.373, 1308.048]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
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
      </group>
    </group>
  );
}

useGLTF.preload("/gltf/city_final.glb");
