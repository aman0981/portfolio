"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, AdaptiveDpr, PerformanceMonitor } from "@react-three/drei";
import { inSphere } from "maath/random";
import * as THREE from "three";

/**
 * GPU-friendly particle field: a single drei <Points> (one draw call) of points
 * distributed in a sphere via maath. Drifts slowly and leans toward the pointer.
 * Research-backed lightweight approach — no heavy meshes. See deep-research §3.
 */
function ParticleField({ count = 5000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    inSphere(arr, { radius: 1.5 });
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    const p = ref.current;
    if (!p) return;
    // slow constant drift
    p.rotation.y += delta * 0.04;
    p.rotation.x -= delta * 0.015;
    // gentle parallax toward the pointer
    p.position.x = THREE.MathUtils.lerp(p.position.x, state.pointer.x * 0.12, 0.04);
    p.position.y = THREE.MathUtils.lerp(p.position.y, state.pointer.y * 0.12, 0.04);
  });

  return (
    <group rotation={[0, 0, Math.PI / 5]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#2dd4bf"
          size={0.0125}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
          toneMapped={false}
        />
      </Points>
    </group>
  );
}

export default function HeroParticles({ paused = false }: { paused?: boolean }) {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 1], fov: 60 }}
      dpr={[1, 1.5]}
      frameloop={paused ? "never" : "always"}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
    >
      <PerformanceMonitor>
        <AdaptiveDpr pixelated />
        <ParticleField />
      </PerformanceMonitor>
    </Canvas>
  );
}
