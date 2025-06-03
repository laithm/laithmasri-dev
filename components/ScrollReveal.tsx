"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollRevealSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section
      ref={ref}
      className="h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)]"
    >
      <motion.div style={{ scale, opacity }} className="text-5xl font-bold">
        Scroll Me Like Apple
      </motion.div>
    </section>
  );
}
