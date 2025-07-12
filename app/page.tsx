"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";

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

      {/* Top-left name */}
      <div className="fixed top-4 left-6 z-50 text-lg font-semibold opacity-70">
        Laith Masri
      </div>

      {/* Flying Logo */}
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

      {/* Scroll-Revealed Text */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="max-w-2xl text-xl text-center opacity-0"
      >
        <p className="mb-4">
          Engineering student @ Aston (MEng EEE). Exploring AI, circuits, and
          financial systems.
        </p>
        <p className="mb-4">
          Passionate about building tangible systems — from silicon to strategy.
        </p>
        <p className="mb-12">
          Roblox freelancer: game design, scripting, monetisation. Now stepping
          into quant world.
        </p>
      </motion.div>

      {/* Static Nav at bottom */}
      <nav className="flex z-10 flex-col gap-6 mt-24 text-lg text-center sm:flex-row">
        <a href="/lab" className="hover:underline">
          🧠 Lab Logs
        </a>
        <a href="/research" className="hover:underline">
          📚 Research
        </a>
        <a href="/canvas/phoenix" className="hover:underline">
            See Phoenix Demo!
        </a>
      </nav>
    </main>
  );
}
