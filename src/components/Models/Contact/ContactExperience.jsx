import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { memo } from "react";

import Computer from "./Computer";

const ContactExperience = memo(() => {
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 3, 7], fov: 45 }}
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enableDamping
        dampingFactor={0.05}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
});

ContactExperience.displayName = "ContactExperience";

export default ContactExperience;
