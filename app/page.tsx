"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, MeshWobbleMaterial } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import * as THREE from "three";

type ButtonData = {
  label: string;
  link: string;
};

const buttons: ButtonData[] = [
  { label: "🧠 Logs", link: "/lab" },
  { label: "📚 Research", link: "/research" },
  { label: "🚀 Phoenix", link: "/canvas/phoenix" },
];

function FloatingButton({ label, link, position }: { label: string; link: string; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <MeshWobbleMaterial
        factor={hovered ? 1 : 0.2}
        speed={hovered ? 2 : 0.5}
        color={hovered ? "#66ccff" : "#ffffff"}
      />
      <Html center>
        <Link href={link}>
          <div className="px-4 py-2 bg-white text-black text-sm font-bold rounded shadow-md hover:bg-gray-200 transition">
            {label}
          </div>
        </Link>
      </Html>
    </mesh>
  );
}

export default function HomePage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={ref} className="relative min-h-[120vh] px-6 py-10 flex flex-col items-center bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 overflow-x-hidden">
      <div className="fixed top-4 left-6 z-50 text-lg font-semibold opacity-70">
        Laith Masri
      </div>

      <motion.div style={{ y: 0, scale: logoScale }} className="z-10 mt-32 mb-20">
        <img src="/favicon.png" alt="Laith Masri logo" className="w-32 h-32 drop-shadow-xl" />
      </motion.div>

      <motion.div style={{ opacity: textOpacity, y: 0 }} className="max-w-2xl text-xl text-center opacity-0">
        <p className="mb-4">
          Quant Research Intern @ Mt. Carmel Resources. Engineering student @ Aston (MEng EEE).
        </p>
        <p className="mb-4">
          Building intelligent systems – from signal models to scalable strategies.
        </p>
        <p className="mb-12">
          I blend hardware, software, and market dynamics to build high-performance tools.
        </p>
      </motion.div>

      <div className="relative w-full h-[500px]">
        <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          {/* Orbit controls if needed */}
          <OrbitControls enableZoom={false} />

          {/* 3D Buttons */}
          {buttons.map((btn, i) => {
            const angle = (i / buttons.length) * Math.PI * 2;
            const radius = 3.5;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            return (
              <FloatingButton key={btn.label} label={btn.label} link={btn.link} position={[x, 0, z]} />
            );
          })}
        </Canvas>
      </div>
    </main>
  );
}

