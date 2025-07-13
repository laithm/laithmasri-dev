"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

function RotatingButtons() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  const radius = 3;
  const buttons = [
    { label: "🧠 Lab Logs", link: "/lab" },
    { label: "📚 Research", link: "/research" },
    { label: "🔥 Phoenix", link: "/canvas/phoenix" },
  ];

  return (
    <group ref={groupRef}>
      {buttons.map((btn, idx) => {
        const angle = (idx / buttons.length) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        return (
          <Html
            key={btn.label}
            position={[x, 0, z]}
            transform
            occlude
            className="transition-transform hover:scale-110"
          >
            <a
              href={btn.link}
              className="px-4 py-2 rounded-md bg-white text-black font-semibold shadow-md backdrop-blur-sm hover:bg-gray-200"
            >
              {btn.label}
            </a>
          </Html>
        );
      })}
    </group>
  );
}

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.12], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.05, 0.12], [30, 0]);

  return (
    <main
      ref={ref}
      className="relative min-h-[120vh] px-6 py-10 flex flex-col items-center bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 overflow-x-hidden"
    >
      <ParticleBackground />

      <div className="fixed top-4 left-6 z-50 text-lg font-semibold opacity-70">
        Laith Masri
      </div>

      <motion.div
        style={{ y: logoY, scale: logoScale }}
        className="z-10 mt-32 mb-20"
      >
        <img
          src="/favicon.png"
          alt="Laith Masri logo"
          className="w-32 h-32 drop-shadow-xl"
        />
      </motion.div>

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="max-w-2xl text-xl text-center opacity-0"
      >
        <p className="mb-4">
          Quant Research Intern @ Mt. Carmel Resources. Engineering student @ Aston (MEng EEE).
        </p>
        <p className="mb-4">
          Building intelligent systems — from signal models to scalable strategies.
        </p>
        <p className="mb-12">
          I blend hardware, software, and market dynamics to build high-performance tools.
        </p>
      </motion.div>

      <div className="relative w-full h-[500px]">
        <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingButtons />
        </Canvas>
      </div>
    </main>
  );
}

