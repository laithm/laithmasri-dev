"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Type-cast to avoid TS complaining about 'init'
  return (
    <Particles
      id="tsparticles"
      // @ts-expect-error -- init works, type defs are incomplete
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          color: { value: "#00ffff" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 },
          links: {
            enable: true,
            distance: 120,
            color: "#00ffff",
            opacity: 0.3,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: { enable: true },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
