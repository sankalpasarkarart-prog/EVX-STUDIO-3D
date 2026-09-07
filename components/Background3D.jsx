"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function AbstractShapes() {
  const sphereRef1 = useRef(null);
  const sphereRef2 = useRef(null);
  const sphereRef3 = useRef(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    const scrollEffect = scrollY * 0.002;
    
    if (sphereRef1.current) {
      sphereRef1.current.rotation.y = state.clock.elapsedTime * 0.2 + scrollEffect;
      sphereRef1.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5 - scrollEffect * 0.5;
    }
    
    if (sphereRef2.current) {
      sphereRef2.current.rotation.x = state.clock.elapsedTime * 0.3 - scrollEffect;
      sphereRef2.current.position.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.5 + scrollEffect * 0.3;
    }

    if (sphereRef3.current) {
      sphereRef3.current.rotation.z = state.clock.elapsedTime * 0.1 + scrollEffect;
      sphereRef3.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5 - scrollEffect * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2} position={[-3, 1, -2]}>
        <mesh ref={sphereRef1}>
          <torusKnotGeometry args={[1, 0.4, 128, 64]} />
          <MeshDistortMaterial color="#3b82f6" envMapIntensity={1} clearcoat={1} clearcoatRoughness={0.1} metalness={0.8} roughness={0.2} distort={0.4} speed={2} transparent opacity={0.8} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1.5} position={[3, -1, -3]}>
        <mesh ref={sphereRef2}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial color="#8b5cf6" envMapIntensity={1} clearcoat={1} clearcoatRoughness={0.1} metalness={0.5} roughness={0.2} distort={0.5} speed={1.5} transparent opacity={0.8} />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={1.5} floatIntensity={2.5} position={[0, -3, -5]}>
        <mesh ref={sphereRef3}>
          <icosahedronGeometry args={[2, 1]} />
          <MeshDistortMaterial color="#0ea5e9" envMapIntensity={1} clearcoat={1} clearcoatRoughness={0.1} metalness={0.6} roughness={0.1} distort={0.3} speed={3} transparent opacity={0.7} />
        </mesh>
      </Float>

      <Environment preset="city" />
    </>
  );
}

export default function Background3D() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1, pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <AbstractShapes />
      </Canvas>
    </div>
  );
}