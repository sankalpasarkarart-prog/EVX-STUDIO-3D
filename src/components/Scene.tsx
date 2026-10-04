import { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// A single delicate petal/leaf falling
function DelicateLeaf({ position, color, speed, rotationSpeed }: { position: [number, number, number], color: string, speed: number, rotationSpeed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();
  
  const leafGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.quadraticCurveTo(0.15, 0.3, 0, 0.6);
    shape.quadraticCurveTo(-0.15, 0.3, 0, 0);
    const geo = new THREE.ShapeGeometry(shape);
    geo.center();
    return geo;
  }, []);

  const initialY = position[1];
  const initialX = position[0];

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    meshRef.current.position.y -= speed * delta * 0.5;
    meshRef.current.position.x = initialX + Math.sin(state.clock.elapsedTime * rotationSpeed * 0.5) * 1.5;

    if (meshRef.current.position.y < -viewport.height / 2 - 2) {
      meshRef.current.position.y = viewport.height / 2 + 2;
      meshRef.current.position.x = initialX;
    }

    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    
    const distanceX = mouseX - meshRef.current.position.x;
    const distanceY = mouseY - meshRef.current.position.y;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < 2.5) {
      meshRef.current.position.x -= distanceX * 0.03;
      meshRef.current.position.y -= distanceY * 0.03;
      meshRef.current.rotation.z += 0.02;
    }

    meshRef.current.rotation.x += rotationSpeed * 0.3 * delta;
    meshRef.current.rotation.y += rotationSpeed * 0.2 * delta;
    meshRef.current.rotation.z += Math.sin(state.clock.elapsedTime * 0.5) * 0.01;
  });

  return (
    <mesh ref={meshRef} position={position} geometry={leafGeometry}>
      <meshPhysicalMaterial 
        color={color} 
        roughness={0.2}
        transmission={0.4}
        thickness={0.1}
        clearcoat={1}
        emissive={color}
        emissiveIntensity={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Magical glowing butterfly
function Butterfly({ initialPosition, color }: { initialPosition: [number, number, number], color: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const leftWing = useRef<THREE.Mesh>(null);
  const rightWing = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  const [basePos] = useState(() => new THREE.Vector3(...initialPosition));
  const [velocity] = useState(() => new THREE.Vector3(0, 0, 0));
  const [randomOffset] = useState(() => Math.random() * 100);

  const wingGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0); // body attachment point
    shape.quadraticCurveTo(0.4, 0.6, 1.0, 0.5); // top edge
    shape.quadraticCurveTo(0.8, -0.2, 0.9, -0.6); // outer edge
    shape.quadraticCurveTo(0.4, -0.4, 0, 0); // bottom edge
    return new THREE.ShapeGeometry(shape);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || !leftWing.current || !rightWing.current) return;
    
    const t = state.clock.elapsedTime + randomOffset;
    
    // Flapping wings
    // Very fast flap, looks like a real butterfly
    const flap = Math.sin(t * 15) * 0.8;
    leftWing.current.rotation.y = flap + 0.2;
    rightWing.current.rotation.y = -flap - 0.2;

    // Gentle wandering
    const wanderX = Math.sin(t * 0.5) * 0.01;
    const wanderY = Math.cos(t * 0.7) * 0.01;
    
    velocity.x += wanderX;
    velocity.y += wanderY;
    
    // Friction
    velocity.multiplyScalar(0.95);

    // Mouse interaction (flee)
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    
    const dx = groupRef.current.position.x - mouseX;
    const dy = groupRef.current.position.y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 3) {
      // Dart away fast
      velocity.x += (dx / dist) * 0.1;
      velocity.y += (dy / dist) * 0.1;
      // Flap insanely fast when fleeing
      const panicFlap = Math.sin(t * 30) * 1.0;
      leftWing.current.rotation.y = panicFlap + 0.2;
      rightWing.current.rotation.y = -panicFlap - 0.2;
    } else {
      // Softly pull back to base position to avoid flying off screen permanently
      const pullX = (basePos.x - groupRef.current.position.x) * 0.005;
      const pullY = (basePos.y - groupRef.current.position.y) * 0.005;
      velocity.x += pullX;
      velocity.y += pullY;
    }

    // Apply velocity
    groupRef.current.position.add(velocity);

    // Rotate body to face velocity direction
    if (velocity.lengthSq() > 0.0001) {
      const targetRotation = Math.atan2(velocity.y, velocity.x);
      // Smooth look-at (Z axis rotation since it's 2D screen space basically)
      groupRef.current.rotation.z += (targetRotation - Math.PI/2 - groupRef.current.rotation.z) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={initialPosition} scale={[0.15, 0.15, 0.15]}>
      <mesh ref={leftWing} geometry={wingGeometry}>
        <meshPhysicalMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.6}
          transmission={0.6}
          roughness={0.1}
          clearcoat={1}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={rightWing} geometry={wingGeometry}>
        <meshPhysicalMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          transmission={0.6}
          roughness={0.1}
          clearcoat={1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default function Scene() {
  const leaves = useMemo(() => {
    // Increased quantity from 7 to 14
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 15, 
        (Math.random() - 0.5) * 10, 
        (Math.random() - 0.5) * 5 - 2
      ] as [number, number, number],
      color: ['#fbbf24', '#f59e0b', '#fde047', '#ffed4a', '#f87171'][Math.floor(Math.random() * 5)], 
      speed: Math.random() * 1.0 + 0.3,
      rotationSpeed: Math.random() * 1.5 + 0.5,
      scale: Math.random() * 0.4 + 0.4
    }));
  }, []);

  const butterflies = useMemo(() => {
    // Very few aesthetic butterflies
    return Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 10, 
        (Math.random() - 0.5) * 6, 
        Math.random() * 2 // slightly in front
      ] as [number, number, number],
      color: ['#fb7185', '#f472b6', '#818cf8', '#60a5fa', '#fcd34d'][Math.floor(Math.random() * 5)], // Soft pinks, blues, golds
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 5, 5]} intensity={2.5} color="#ffd8a8" />
      <directionalLight position={[-10, -5, -5]} intensity={1.0} color="#ffb8de" />
      
      {leaves.map(leaf => (
        <group key={leaf.id} scale={[leaf.scale, leaf.scale, leaf.scale]}>
          <DelicateLeaf 
            position={leaf.position} 
            color={leaf.color} 
            speed={leaf.speed} 
            rotationSpeed={leaf.rotationSpeed}
          />
        </group>
      ))}

      {butterflies.map(b => (
        <Butterfly key={b.id} initialPosition={b.position} color={b.color} />
      ))}
    </>
  );
}
