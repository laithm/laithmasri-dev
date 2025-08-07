"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function RightSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const edgeRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const screenWidth = window.innerWidth;
      const proximity = 60;

      const isNearRightEdge = screenWidth - e.clientX < proximity;
      const isSidebarHovered = sidebarRef.current?.matches(":hover");

      if (isNearRightEdge) {
        setShowSidebar(true);
      } else if (!isSidebarHovered) {
        setShowSidebar(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Invisible right-edge trigger */}
      <div ref={edgeRef} className="fixed top-0 right-0 h-full w-[10px] z-40" />

      {/* Arrow hint (only when sidebar is hidden) */}
      {!showSidebar && (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-30">
          <div className="w-5 h-5 bg-neutral-800 text-white flex items-center justify-center rounded-l-md shadow-md">
            <span className="animate-pulse">➤</span>
          </div>
        </div>
      )}

      {/* Animated sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <motion.aside
            ref={sidebarRef}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-80 h-full bg-neutral-950 text-white shadow-lg p-6 z-50 flex flex-col gap-6"
          >
            <h2 className="text-xl font-bold mb-2">Navigation</h2>

            <Link href="/contact" className="hover:underline text-lg">
              Contact Me
            </Link>

            <Link href="/cv" className="hover:underline text-lg">
              Master CV
            </Link>

            <Link href="/canvas/cv" className="hover:underline text-lg">
              Interactive 3D CV
            </Link>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

