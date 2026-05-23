"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarPlus } from "lucide-react";
import { wedding } from "@/data/wedding";
import { createGoogleCalendarUrl } from "@/utils/calendar";

type EventType = "vu-quy" | "thanh-hon";

export function EventInfo() {
  const [activeTab, setActiveTab] = useState<EventType>("vu-quy");
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Event 1: Lễ Vu Quy (Nhà Gái)
  const vuQuyCalendar = createGoogleCalendarUrl({
    title: "Lễ Vu Quy Tuyết Anh & Minh Hiếu (Nhà Gái)",
    start: "2026-07-02T17:00:00+07:00",
    end: "2026-07-02T22:00:00+07:00",
    details: "Trân trọng kính mời quý khách tới dự buổi tiệc chung vui cùng gia đình chúng tôi tại Trung tâm tiệc cưới Royal Center.",
    location: "180/4 Song Hành, Xã Bà Điểm, TPHCM",
  });

  // Event 2: Lễ Thành Hôn (Nhà Trai)
  const thanhHonCalendar = createGoogleCalendarUrl({
    title: "Lễ Thành Hôn Minh Hiếu & Tuyết Anh (Nhà Trai)",
    start: "2026-07-05T11:30:00+07:00",
    end: "2026-07-05T15:30:00+07:00",
    details: "Trân trọng kính mời quý khách tới dự buổi tiệc chung vui cùng gia đình chúng tôi tại Tư Gia.",
    location: "Tổ 2, Khu Phố 1, Phường Tân Thành, TP. HCM",
  });

  const eventData = {
    "vu-quy": {
      title: "LỄ VU QUY NHÀ GÁI",
      day: "02",
      month: "Tháng 07",
      year: "Năm 2026",
      time: "17:00",
      dayOfWeek: "THỨ NĂM",
      lunar: "Nhằm ngày 18 tháng 05 năm Bính Ngọ",
      venue: "ROYAL CENTER",
      address: "180/4 Song Hành, Xã Bà Điểm, TPHCM",
      mapQueryUrl: "https://maps.google.com/?q=180%2F4%20Song%20Hanh%20Trung%20Chanh%20Ba%20Diem%20TP%20Ho%20Chi%20Minh",
      calendarUrl: vuQuyCalendar,
    },
    "thanh-hon": {
      title: "LỄ THÀNH HÔN NHÀ TRAI",
      day: "05",
      month: "Tháng 07",
      year: "Năm 2026",
      time: "11:30",
      dayOfWeek: "CHỦ NHẬT",
      lunar: "Nhằm ngày 21 tháng 05 năm Bính Ngọ",
      venue: "TƯ GIA (NHÀ TRAI)",
      address: "Tổ 2, Khu Phố 1, Phường Tân Thành, TP. HCM",
      mapQueryUrl: "https://www.google.com/maps?q=T%E1%BB%95+2,+Khu+Ph%E1%BB%91+1,+Ph%C6%B0%E1%BB%9Dng+T%C3%A2n+Th%C3%A0nh,+Th%E1%BB%8B+x%C3%A3+Ph%C3%BA+M%E1%BB%B9,+B%C3%A0+R%E1%BB%8Baa+-+V%C5%A9ng+T%C3%A0u",
      calendarUrl: thanhHonCalendar,
    },
  };

  const currentEvent = eventData[activeTab];

  // Fixed positions — avoid Math.random() in render to prevent SSR hydration mismatch
  const particles = [
    { left: "12%",  top: "18%" },
    { left: "78%",  top: "8%"  },
    { left: "55%",  top: "72%" },
    { left: "30%",  top: "55%" },
    { left: "88%",  top: "42%" },
    { left: "5%",   top: "85%" },
  ];

  return (
    <section
      id="event"
      className="relative min-h-[92vh] md:min-h-screen overflow-hidden bg-[#faf6f0] px-4 pt-6 pb-12 md:pt-10 md:pb-16 flex flex-col items-center justify-center text-center gap-6"
    >
      {/* Subtle Cinematic Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_70%)] pointer-events-none opacity-60" />

      {/* Floating Slow-Motion Petals — desktop only to avoid mobile lag */}
      {!isMobile && particles.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#d8b67c] opacity-20 pointer-events-none"
          style={{ left: pos.left, top: pos.top }}
          animate={{
            y: [-15, 15],
            x: [-8, 8],
            scale: [0.9, 1.1, 0.9],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 9 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Luxury Serif Tab Selector */}
      <div className="relative z-30 flex items-center justify-center w-full max-w-[450px] mx-auto border-b border-[#d8b67c]/25 pb-3">
        <div className="flex w-full">
          {/* Tab 1: Lễ Vu Quy (Nhà Gái) */}
          <button
            onClick={() => setActiveTab("vu-quy")}
            className={`flex-1 flex flex-col items-center justify-center text-center relative transition-all duration-500 pb-2 ${activeTab === "vu-quy" ? "text-[#7b1f2f]" : "text-[#705e5c]/50 hover:text-[#3a2c2a]"
              }`}
          >
            <span className="text-[17px] sm:text-[20px] md:text-[22px] uppercase tracking-[0.12em] font-[Cormorant_Garamond] font-bold">
              Lễ Vu Quy
            </span>
            <span className={`text-[13px] sm:text-[14px] md:text-[16px] font-[Cormorant_Garamond] tracking-[0.08em] mt-0.5 transition-colors duration-500 ${activeTab === "vu-quy" ? "text-[#7b1f2f]/80" : "text-[#705e5c]/40"
              }`}>
              (Nhà Gái)
            </span>
            {activeTab === "vu-quy" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#7b1f2f]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>

          {/* Tab 2: Lễ Thành Hôn (Nhà Trai) */}
          <button
            onClick={() => setActiveTab("thanh-hon")}
            className={`flex-1 flex flex-col items-center justify-center text-center relative transition-all duration-500 pb-2 ${activeTab === "thanh-hon" ? "text-[#7b1f2f]" : "text-[#705e5c]/50 hover:text-[#3a2c2a]"
              }`}
          >
            <span className="text-[17px] sm:text-[20px] md:text-[22px] uppercase tracking-[0.12em] font-[Cormorant_Garamond] font-bold">
              Lễ Thành Hôn
            </span>
            <span className={`text-[13px] sm:text-[14px] md:text-[16px] font-[Cormorant_Garamond] tracking-[0.08em] mt-0.5 transition-colors duration-500 ${activeTab === "thanh-hon" ? "text-[#7b1f2f]/80" : "text-[#705e5c]/40"
              }`}>
              (Nhà Trai)
            </span>
            {activeTab === "thanh-hon" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#7b1f2f]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Centered Luxury Card Panel (Korean Editorial Wedding Invitation Card) */}
      <div className="relative z-20 w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === "vu-quy" ? -15 : 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === "vu-quy" ? 15 : -15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full bg-white border border-[#d8b67c]/30 shadow-[0_15px_45px_rgba(97,18,38,0.06)] p-6 md:p-8 flex flex-col items-center gap-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.015'/%3E%3C/svg%3E")`
            }}
          >
            {/* Thin Gold Inner Double Border */}
            <div className="absolute inset-2 border border-[#e5d3b3] opacity-40 pointer-events-none" />
            <div className="absolute inset-2.5 border border-[#d8b67c]/50 pointer-events-none" />

            {/* Small Elegant Flourish */}
            <div className="text-[#d8b67c] text-sm tracking-[0.25em] mt-1 select-none pointer-events-none">
              ⟡ ✦ ⟡
            </div>

            {/* Title */}
            <div className="flex flex-col gap-0.5 z-10">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] font-[Cormorant_Garamond] text-[#d8b67c] font-bold">
                WEDDING INVITATION
              </span>
              <h2 className="text-lg md:text-xl uppercase tracking-[0.14em] font-[Cormorant_Garamond] text-[#3a2c2a] font-bold">
                {currentEvent.title}
              </h2>
            </div>

            {/* Compact Spaced Date Grid (THÁNG | DAY | NĂM) */}
            <div className="grid grid-cols-3 items-center w-full max-w-[280px] mx-auto py-0.5 z-10 select-none">
              {/* Left Column */}
              <div className="flex items-center justify-end pr-3 text-[#3a2c2a] border-r border-[#d8b67c]/25">
                <span className="uppercase tracking-[0.14em] font-[Cormorant_Garamond] text-xs font-semibold">
                  {currentEvent.month}
                </span>
              </div>

              {/* Center Column: Monogram & Large Number */}
              <div className="relative flex items-center justify-center">
                {/* Monogram backdrop - Changed to A&H */}
                <div className="absolute font-[Playfair_Display] text-[62px] md:text-[70px] font-bold text-[#f2e6d6] tracking-normal select-none pointer-events-none scale-y-110 opacity-80">
                  A&H
                </div>
                {/* Visual Focus: Large Burgundy Day Number */}
                <h1 className="text-[56px] md:text-[64px] leading-none font-[Bodoni_Moda] text-[#7b1f2f] relative z-10 font-normal select-none">
                  {currentEvent.day}
                </h1>
              </div>

              {/* Right Column */}
              <div className="flex items-center justify-start pl-3 text-[#3a2c2a] border-l border-[#d8b67c]/25">
                <span className="uppercase tracking-[0.14em] font-[Cormorant_Garamond] text-xs font-semibold">
                  {currentEvent.year}
                </span>
              </div>
            </div>

            {/* Details & Day Time */}
            <div className="flex flex-col gap-1 z-10">
              <p className="uppercase tracking-[0.1em] font-[Cormorant_Garamond] text-sm text-[#3a2c2a] font-semibold">
                VÀO LÚC <span className="text-[#7b1f2f] font-bold">{currentEvent.time}</span>
              </p>
              <p className="text-[10px] md:text-xs text-[#705e5c] italic tracking-wide">
                ({currentEvent.lunar})
              </p>
            </div>

            {/* Elegant divider */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d8b67c] to-transparent z-10" />

            {/* Venue Information */}
            <div className="flex flex-col gap-0.5 z-10">
              <h4 className="text-sm md:text-base font-[Cormorant_Garamond] text-[#3a2c2a] font-bold tracking-wider">
                {currentEvent.venue}
              </h4>
              <p className="text-[10px] md:text-xs text-[#705e5c] tracking-wide max-w-[280px] mx-auto leading-relaxed">
                {currentEvent.address}
              </p>
            </div>

            {/* Action Buttons (Minimalist Golden Outlines) */}
            <div className="flex items-center justify-center gap-4 w-full z-10">
              <a
                href={currentEvent.mapQueryUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 border border-[#c7a77b] text-[10px] uppercase tracking-[0.15em] font-[Cormorant_Garamond] text-[#3a2c2a] hover:bg-[#7b1f2f] hover:text-white hover:border-[#7b1f2f] transition-all duration-300 bg-transparent"
              >
                Xem bản đồ
              </a>
              <a
                href={currentEvent.calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 border border-[#c7a77b] text-[10px] uppercase tracking-[0.15em] font-[Cormorant_Garamond] text-[#3a2c2a] hover:bg-[#7b1f2f] hover:text-white hover:border-[#7b1f2f] transition-all duration-300 bg-transparent"
              >
                <CalendarPlus size={12} className="text-[#c7a77b]" />
                Thêm lịch
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
