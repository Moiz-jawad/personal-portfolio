import React from "react";
import { useGLTF } from "@react-three/drei";

export function Cyberpunk(props) {
  const { nodes, materials } = useGLTF(
    "/models/cyberpunk_laptop_concept_design.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 50.454, -8.888]}
        rotation={[-1.943, 0, -Math.PI / 2]}
        scale={100}
      >
        <mesh
          geometry={nodes.Cube_Auto_04_0.geometry}
          material={materials.Auto_04}
        />
        <mesh
          geometry={nodes.Cube_Screen_0.geometry}
          material={materials.Screen}
        />
      </group>
      <mesh
        geometry={nodes.Cube004_Auto_01_0.geometry}
        material={materials.Auto_01}
        position={[0, -25.593, 7.313]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube007_Auto_01_0.geometry}
        material={materials.Auto_01}
        position={[0, -40.159, 75.441]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Keys_Auto_02_0.geometry}
        material={materials.Auto_02}
        position={[-72.227, -27.683, 35.45]}
        rotation={[-Math.PI / 2, 0, 0.002]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube012_Auto_02_0.geometry}
        material={materials.Auto_02}
        position={[-91.067, -25.462, 22.757]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube018_Auto_02_0.geometry}
        material={materials.Auto_02}
        position={[-60.215, -21.794, -5.752]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube019_Auto_02_0.geometry}
        material={materials.Auto_02}
        position={[-24.726, -21.794, -5.752]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube013_Auto_02_0.geometry}
        material={materials.Auto_02}
        position={[-91.352, -28.7, 4.165]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube006_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[17.369, -25.593, 7.313]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube005_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[0, -25.593, 7.313]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube017_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[100.654, -28.853, 25.184]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube001_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[0, 50.454, -8.888]}
        rotation={[-1.943, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.BezierCurve001_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[-74.932, -17.338, -70.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.BezierCurve_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[-74.932, -19.174, -70.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.BezierCurve002_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[-74.932, -20.537, -70.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube015_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[-182.229, -22.98, 7.313]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube014_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[-182.229, -22.98, 7.313]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[7.52, 0.851, 2.928]}
        rotation={[-2.049, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder002_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[-3.494, 0.851, 2.928]}
        rotation={[-2.049, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube016_Auto_03_0.geometry}
        material={materials.Auto_03}
        position={[-0.605, -11.893, -52.539]}
        rotation={[2.55, 0.005, -1.581]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube002_Auto_04_0.geometry}
        material={materials.Auto_04}
        position={[0, 50.454, -8.888]}
        rotation={[-1.943, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube003_Auto_04_0.geometry}
        material={materials.Auto_04}
        position={[0, 50.454, -8.888]}
        rotation={[-1.943, 0, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube020_Auto_04_0.geometry}
        material={materials.Auto_04}
        position={[0, 50.454, -8.888]}
        rotation={[-1.943, 0, -Math.PI / 2]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/models/cyberpunk_laptop_concept_design.glb");
