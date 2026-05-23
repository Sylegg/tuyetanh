"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useCountdown } from "@/hooks/useCountdown";
import { wedding } from "@/data/wedding";
import bgPhoto from "@/assets/hinh7.jpg"; // The grand finale background wedding photo
import logoWhite from "@/assets/logo.png"; // White monogram logo

export function ParallaxCountdown() {
  const containerRef = useRef<HTMLElement>(null);
  const countdown = useCountdown(wedding.date);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax Scroll logic for the entire grand finale
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Slow smooth transition relative to scroll progress spanning the entire combined section
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const countdownLabels = [
    { key: "days", label: "Ngày" },
    { key: "hours", label: "Giờ" },
    { key: "minutes", label: "Phút" },
    { key: "seconds", label: "Giây" },
  ] as const;

  return (
    <footer
      ref={containerRef}
      className="parallax-countdown-section"
      id="parallax-countdown"
    >
      {/* Parallax Background spanning both parts */}
      <motion.div className="parallax-bg-wrapper" style={isMobile ? {} : { y }}>
        <Image
          src={bgPhoto}
          alt="Hình nền chung đôi"
          className="parallax-bg-image"
          placeholder="blur"
          priority={false}
          fill
          sizes="100vw"
        />
      </motion.div>

      {/* Dreamy Bright Silk Overlay covering the entire combined section */}
      <div className="parallax-silk-overlay" />

      {/* Thin Gold Inner Frame around the entire grand finale block */}
      <div className="parallax-inner-frame" />

      {/* Combined Grand Finale Content */}
      <div className="parallax-content">

        {/* ================= PART 1: THANK YOU ================= */}
        <div className="finale-thank-you-block">
          {/* Rotating Monogram logo */}
          <motion.div
            className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-full border border-[#d8b67c]/45 animate-spin-[spin_10s_linear_infinite]" />
            <Image
              src={logoWhite}
              alt="A&H Monogram Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.22)]"
            />
          </motion.div>

          <motion.h3
            className="font-[Cormorant_Garamond] text-2xl md:text-3xl text-[#fffaf1] font-bold tracking-wide mb-3 text-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Trân trọng cảm ơn!
          </motion.h3>

          <motion.p
            className="text-[14px] md:text-[15px] leading-relaxed text-[#fffaf1]/80 font-medium font-[Cormorant_Garamond] max-w-md mx-auto px-2 mb-6 text-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sự hiện diện và những lời chúc tốt đẹp nhất của quý vị khách quý là niềm vinh hạnh to lớn cho hai gia đình cũng như tình yêu của chúng tôi. Hẹn gặp lại mọi người vào ngày trọng đại!
          </motion.p>

          {/* Script Signatures */}
          <motion.div
            className="flex items-center justify-center gap-8 mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Cô dâu */}
            <div className="flex flex-col items-center">
              <div className="flex flex-col relative text-left min-w-[115px] md:min-w-[155px]">
                <span className="font-[Alex_Brush] text-5xl md:text-6xl text-[#ecd599] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] select-none leading-[0.9]">
                  Tuyết
                </span>
                <span className="font-[Alex_Brush] text-5xl md:text-6xl text-[#ecd599] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] select-none leading-[0.9] pl-7 md:pl-11 mt-1 md:mt-2">
                  Anh
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#fdf0cd] font-bold font-[Cormorant_Garamond] mt-3">
                Cô dâu
              </span>
            </div>

            <span className="text-[#ecd599] text-xl animate-pulse select-none mt-[-16px]">❤</span>

            {/* Chú rể */}
            <div className="flex flex-col items-center">
              <div className="flex flex-col relative text-left min-w-[115px] md:min-w-[155px]">
                <span className="font-[Alex_Brush] text-5xl md:text-6xl text-[#ecd599] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] select-none leading-[0.9]">
                  Minh
                </span>
                <span className="font-[Alex_Brush] text-5xl md:text-6xl text-[#ecd599] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] select-none leading-[0.9] pl-7 md:pl-11 mt-1 md:mt-2">
                  Hiếu
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#fdf0cd] font-bold font-[Cormorant_Garamond] mt-3">
                Chú rể
              </span>
            </div>
          </motion.div>
        </div>

        {/* Vintage gold typography divider */}
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-[#d8b67c] to-transparent my-8 opacity-50" />

        {/* ================= PART 2: COUNTDOWN ================= */}
        <div className="finale-countdown-block w-full">
          <motion.p
            className="parallax-countdown-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Trọng Đại • Ghi Dấu Kỷ Niệm
          </motion.p>

          <motion.h2
            className="parallax-countdown-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Đếm ngược ngày chung đôi
          </motion.h2>

          <motion.div
            className="parallax-countdown-grid"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {countdownLabels.map(({ key, label }) => {
              const val = countdown ? String(countdown[key]).padStart(2, "0") : "00";
              return (
                <div className="parallax-time-box" key={key}>
                  <strong>{val}</strong>
                  <span>{label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            className="parallax-countdown-footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <span className="tracking-[0.25em]">02/05.07.2026 •</span>
              <span className="font-bold text-[#fff5dc] tracking-[0.28em]">Tuyết Anh & Minh Hiếu</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
