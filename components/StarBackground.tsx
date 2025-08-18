"use client";

import { useState, useRef, Suspense, useEffect } from 'react';
import { MathUtils, Points as PointsType, Vector2 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const Stars = () => {
  const ref = useRef<PointsType>(null);
  const [sphere] = useState(() => {
    const numPoints = 5000;
    const positions = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
      const r = 1.2 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const i3 = i * 3;
      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);
    }
    return positions;
  });
  const mouse = useRef(new Vector2());

  // Effect untuk mendengarkan gerakan mouse secara global
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalisasi koordinat mouse ke rentang -1 hingga 1
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function untuk menghapus event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = MathUtils.lerp(ref.current.rotation.y, mouse.current.x * 0.1, 0.025);
      ref.current.rotation.x = MathUtils.lerp(ref.current.rotation.x, mouse.current.y * 0.1, 0.025);
      ref.current.rotation.z -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarBackground = () => (
  <div className="w-full h-auto fixed inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
    </Canvas>
  </div>
);

export default StarBackground;
