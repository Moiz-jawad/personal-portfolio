import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, memo, useMemo, useRef } from "react";
import * as THREE from "three";

import { Cyberpunk } from "./Cyberpunk_laptop";

/* Flickering Light */
function FlickerLight() {
  const light = useRef();
  const { size } = useThree();
  const isMobile = size.width <= 768;
  const isTablet = size.width <= 1200;
  const baseIntensity = isMobile ? 1.4 : isTablet ? 1.5 : 1.8;

  useFrame(({ clock }) => {
    if (!light.current) return;
    light.current.intensity =
      baseIntensity + Math.sin(clock.elapsedTime * 8) * 0.25;
  });

  const position = isMobile
    ? [0, 60, 150]
    : isTablet
    ? [0, 90, 200]
    : [0, 120, 250];

  return (
    <pointLight
      ref={light}
      position={position}
      color="#7c3aed"
      intensity={baseIntensity}
      distance={isMobile ? 300 : isTablet ? 450 : 600}
    />
  );
}

/* Floating Particles */
function HologramParticles({ count = 220 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    // eslint-disable-next-line react-hooks/purity
    for (let i = 0; i < count * 3; i++) arr[i] = (Math.random() - 0.5) * 600;
    return arr;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          array={positions}
          attach="attributes-position"
          itemSize={3}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.6}
        color="#00ffff"
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

/* Responsive Camera and Model with Parallax */
function ResponsiveCameraAndModel() {
  const { size } = useThree();
  const modelRef = useRef();
  const isMobile = size.width <= 768;
  const isTablet = size.width <= 1200;
  const scale = isMobile ? 0.6 : isTablet ? 0.85 : 1;

  return (
    <group scale={scale} ref={modelRef}>
      <Suspense fallback={null}>
        <Cyberpunk castShadow rotation={[0, Math.PI * 0.05, 0]} />
      </Suspense>
    </group>
  );
}

/* Responsive OrbitControls */
function ResponsiveOrbitControls() {
  const { size } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    if (!controlsRef.current) return;
    const width = size.width;

    if (width <= 768) {
      // Mobile: keep the model fully visible
      controlsRef.current.minDistance = 380;
      controlsRef.current.maxDistance = 580;
      controlsRef.current.minPolarAngle = Math.PI / 2.76;
      controlsRef.current.maxPolarAngle = Math.PI / 2.15;
    } else if (width <= 1200) {
      // Tablet
      controlsRef.current.minDistance = 350;
      controlsRef.current.maxDistance = 580;
      controlsRef.current.minPolarAngle = Math.PI / 2.75;
      controlsRef.current.maxPolarAngle = Math.PI / 2.05;
    } else {
      // Desktop
      controlsRef.current.minDistance = 350;
      controlsRef.current.maxDistance = 550;
      controlsRef.current.minPolarAngle = Math.PI / 2.6;
      controlsRef.current.maxPolarAngle = Math.PI / 2;
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom
      enablePan={false}
      enableDamping
      dampingFactor={0.05}
      target={[0, 0, 0]}
    />
  );
}

/* Main Contact Experience */
const ContactExperience = memo(() => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 20, 450], fov: 30 }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
      frameloop="demand"
      gl={{ antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor("#020617");
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 0.85;
        gl.physicallyCorrectLights = true;
      }}
    >
      <fog attach="fog" args={["#020617", 350, 900]} />
      <ambientLight intensity={0.03} />
      <directionalLight
        position={[300, 100, 200]}
        intensity={2.2}
        color="#00ffff"
        castShadow
      />
      <directionalLight
        position={[-300, 80, -200]}
        intensity={2.4}
        color="#ff00ff"
      />
      <FlickerLight />
      <HologramParticles count={100} />
      <ResponsiveCameraAndModel />/
      <ResponsiveOrbitControls />
      <EffectComposer>
        <Bloom
          intensity={1.3}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.8}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
});

ContactExperience.displayName = "ContactExperience";
export default ContactExperience;
