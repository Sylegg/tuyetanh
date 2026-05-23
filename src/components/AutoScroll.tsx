"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function AutoScroll() {
  const [active, setActive] = useState(false);
  const rafRef = useRef<number | null>(null);
  const speedPx = 0.8; // pixels per frame (~48px/s at 60fps)

  const stopScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setActive(false);
  }, []);

  const startScroll = useCallback(() => {
    const step = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll) {
        stopScroll();
        return;
      }
      window.scrollBy(0, speedPx);
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }, [stopScroll]);

  const toggle = () => {
    if (active) {
      stopScroll();
    } else {
      setActive(true);
    }
  };

  // Start RAF when active flips to true
  useEffect(() => {
    if (active) {
      startScroll();
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, startScroll]);

  // Stop on manual scroll (wheel / touch outside the button)
  useEffect(() => {
    if (!active) return;
    const onWheel = () => stopScroll();
    const onTouchStart = (e: TouchEvent) => {
      // Don't stop if the user tapped the button itself
      const btn = document.querySelector(".autoscroll-btn");
      if (btn && e.target instanceof Node && btn.contains(e.target)) return;
      stopScroll();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, [active, stopScroll]);

  return (
    <div
      className={`autoscroll-btn ${active ? "autoscroll-active" : ""}`}
      onClick={toggle}
      role="button"
      tabIndex={0}
      aria-label={active ? "Dừng tự cuộn" : "Tự động cuộn trang"}
      title={active ? "Dừng tự cuộn" : "Tự động cuộn"}
      style={{ touchAction: "manipulation" }}
    >
      {/* arrows */}
      <div className="autoscroll-arrows">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* pause icon (shown when active) */}
      <div className="autoscroll-pause-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      </div>

      <span className="autoscroll-tooltip">
        {active ? "Dừng cuộn" : "Tự cuộn trang"}
      </span>
    </div>
  );
}
