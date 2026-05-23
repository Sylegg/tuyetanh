"use client";

import { useMemo, useState, useEffect } from "react";

export function Particles() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const particles = useMemo(() => {
    const count = isMobile ? 4 : 20;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 29) % 100}%`,
      size: 3 + (i % 5),
      delay: (i % 8) * 0.45,
      duration: 7 + (i % 6),
    }));
  }, [isMobile]);

  const petals = useMemo(() => {
    const count = isMobile ? 4 : 14;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 41) % 100}%`,
      delay: (i % 9) * 0.8,
      duration: 9 + (i % 7),
    }));
  }, [isMobile]);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={`snow-${p.id}`}
          className="particle-snow"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {petals.map((p) => (
        <span
          key={`petal-${p.id}`}
          className="particle-petal"
          style={{
            left: p.left,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
