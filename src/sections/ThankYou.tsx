"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.png"; // Beautiful monogram logo from assets

export function ThankYouSection() {
  return (
    <section className="relative bg-[#faf6f0] pt-16 pb-10 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Decorative radial blur for soft ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,179,106,0.12)_0%,transparent_65%)] pointer-events-none" />

      {/* SVG corner flourishes or top dividers */}
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6">
        
        {/* Monogram logo */}
        <motion.div
          className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full border border-[#d8b67c]/35 animate-spin-[spin_10s_linear_infinite]" />
          <Image
            src={logo}
            alt="A&H Monogram Logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain filter brightness-[0.9] sepia-[0.35]"
          />
        </motion.div>

        {/* Vintage typography divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d8b67c]/68 to-transparent" />

        {/* Heartfelt closing greeting */}
        <div className="flex flex-col gap-3">
          <motion.h3 
            className="font-[Cormorant_Garamond] text-2xl md:text-3xl text-[#7b1f2f] font-bold tracking-wide"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Trân trọng cảm ơn!
          </motion.h3>
          
          <motion.p 
            className="text-[14px] md:text-[15px] leading-relaxed text-[#705e5c] font-medium font-[Cormorant_Garamond] max-w-md px-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sự hiện diện và những lời chúc tốt đẹp nhất của quý vị khách quý là niềm vinh hạnh to lớn cho hai gia đình cũng như tình yêu của chúng tôi. Hẹn gặp lại mọi người vào ngày trọng đại!
          </motion.p>
        </div>

        {/* Script Signatures */}
        <motion.div 
          className="flex items-center justify-center gap-8 mt-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <span className="font-[Alex_Brush] text-5xl md:text-6xl text-[#7b1f2f] filter drop-shadow-sm select-none">
              Minh Hiếu
            </span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#d8b67c] font-bold font-[Cormorant_Garamond] mt-1">
              Chú rể
            </span>
          </div>

          {/* Golden Heart */}
          <span className="text-[#d8b67c] text-xl animate-pulse select-none">❤</span>

          <div className="flex flex-col items-center">
            <span className="font-[Alex_Brush] text-5xl md:text-6xl text-[#7b1f2f] filter drop-shadow-sm select-none">
              Tuyết Anh
            </span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#d8b67c] font-bold font-[Cormorant_Garamond] mt-1">
              Cô dâu
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
