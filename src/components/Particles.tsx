"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const particleCount = 32;
const petalCount = 18;

export function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, index) => ({
        id: index,
        left: `${(index * 29) % 100}%`,
        size: 3 + (index % 5),
        delay: (index % 8) * 0.45,
        duration: 7 + (index % 6),
      })),
    [],
  );

  const petals = useMemo(
    () =>
      Array.from({ length: petalCount }, (_, index) => ({
        id: index,
        left: `${(index * 41) % 100}%`,
        delay: (index % 9) * 0.8,
        duration: 9 + (index % 7),
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={`snow-${particle.id}`}
          className="absolute top-[-2rem] rounded-full bg-white/80 shadow-[0_0_16px_rgba(255,255,255,0.85)]"
          style={{ left: particle.left, width: particle.size, height: particle.size }}
          animate={{ y: ["0vh", "110vh"], x: [0, particle.id % 2 ? 22 : -18], opacity: [0, 0.8, 0] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}

      {petals.map((petal) => (
        <motion.span
          key={`petal-${petal.id}`}
          className="absolute top-[-3rem] h-4 w-2 rounded-full bg-[#b64055]/35"
          style={{ left: petal.left }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, petal.id % 2 ? -34 : 36, petal.id % 3 ? 12 : -18],
            rotate: [0, 180, 360],
            opacity: [0, 0.65, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
