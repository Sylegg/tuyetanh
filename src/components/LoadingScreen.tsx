"use client";

import { AnimatePresence, motion } from "framer-motion";

type LoadingScreenProps = {
  visible: boolean;
  onEnter?: () => void;
  ready?: boolean; // true = show "tap to enter", false = still loading
};

export function LoadingScreen({ visible, onEnter, ready = false }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden"
          style={{ background: "#0e0608" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } }}
        >
          {/* curtain panels */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2"
            style={{ background: "#5a0b1a" }}
            exit={{ x: "-100%", transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] } }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2"
            style={{ background: "#5a0b1a" }}
            exit={{ x: "100%", transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] } }}
          />

          {/* gold shimmer line */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #d4af6e55, #d4af6e, #d4af6e55, transparent)" }}
          />

          {/* center content */}
          <motion.div
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 select-none"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* monogram */}
            <p
              className="font-script"
              style={{ fontSize: "clamp(4rem, 14vw, 7rem)", color: "#d4af6e", lineHeight: 1, textShadow: "0 0 40px rgba(212,175,110,0.35)" }}
            >
              A <span style={{ fontFamily: "serif", fontSize: "0.55em", color: "#c49a4e" }}>&</span> H
            </p>

            <p
              style={{ marginTop: "0.6rem", fontSize: "0.62rem", letterSpacing: "0.55em", color: "#c49a4e", textTransform: "uppercase" }}
            >
              02 · 07 · 2026
            </p>

            <div style={{ width: "1px", height: "3rem", background: "linear-gradient(to bottom, #d4af6e66, transparent)", margin: "1.75rem auto" }} />

            {/* Enter button — only shown when ready */}
            <AnimatePresence>
              {ready && onEnter && (
                <motion.button
                  key="enter-btn"
                  onClick={onEnter}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(212,175,110,0.5)",
                    borderRadius: "99px",
                    padding: "0.75rem 2.5rem",
                    color: "#d4af6e",
                    fontSize: "0.7rem",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(212,175,110,0.9)" }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span style={{ position: "relative", zIndex: 1 }}>♪ &nbsp;Chạm để vào</span>
                </motion.button>
              )}
            </AnimatePresence>

            {/* Loading indicator — shown while not ready */}
            <AnimatePresence>
              {!ready && (
                <motion.div
                  key="loader"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: "flex", gap: "6px" }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#d4af6e",
                        display: "inline-block",
                        animation: `loadingDot 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <style>{`
            @keyframes loadingDot {
              0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
              40% { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
