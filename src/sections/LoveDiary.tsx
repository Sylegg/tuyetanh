"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionShell } from "@/components/SectionShell";

// Import photo assets
import img5 from "@/assets/hinh5.jpg";
import img6 from "@/assets/hinh6.jpg";
import img12 from "@/assets/hinh12.jpg";
import img1 from "@/assets/hinh1.jpg";
import img2 from "@/assets/hinh2.jpg";
import img3 from "@/assets/hinh3.jpg";
import nk1 from "@/assets/nk1.jpg";
import nk2 from "@/assets/nk2.jpg";
import nk3 from "@/assets/nk3.jpg";

export function LoveDiary() {
  // Polaroid Stack State
  const [polaroidStack, setPolaroidStack] = useState([
    { id: 0, image: img5, quote: "Tình yêu bắt đầu từ những điều nhỏ nhặt nhất." },
    { id: 1, image: img6, quote: "Mỗi ngày bên em đều là một ngày nắng đẹp." },
    { id: 2, image: img12, quote: "Gặp được nhau là duyên, bên nhau là hẹn ước cả đời." },
    { id: 3, image: img1, quote: "Hành trình bắt đầu từ cái chạm tay đầu tiên.", objectPosition: "top" },
    { id: 4, image: img2, quote: "Cùng nhau đi qua giông bão, đón nhận bình yên.", objectPosition: "top" },
    { id: 5, image: img3, quote: "Nụ cười của em là hạnh phúc lớn nhất của anh.", objectPosition: "top" },
    { id: 6, image: nk1, quote: "Hẹn ước mai sau, bạc đầu nghĩa phu thê." },
    { id: 7, image: nk2, quote: "Cùng anh đi qua muôn trùng mây khói, ta bên nhau đời đời." },
    { id: 8, image: nk3, quote: "Chỉ cần là em, muộn một chút cũng không sao." },
  ]);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handlePolaroidClick = () => {
    setPolaroidStack((prev) => {
      const nextStack = [...prev];
      const topCard = nextStack.shift();
      if (topCard) nextStack.push(topCard);
      return nextStack;
    });
  };

  return (
    <SectionShell id="love-diary" eyebrow="Góc Kỷ Niệm" title="Nhật Ký Tình Yêu">
      <div className="stack-explainer">Click vào bức ảnh trên cùng để lật sang trang mới!</div>
      <div className="polaroid-deck-container" onClick={handlePolaroidClick}>
        <div className="polaroid-deck">
          {/* On mobile only render top 3 cards to reduce Framer Motion work */}
          {polaroidStack.slice(0, isMobile ? 3 : polaroidStack.length).map((card, index) => {
            const rotation = index === 0 ? -2 : index === 1 ? 3 : index === 2 ? -4 : 1;
            const offset = index * 5; // vertical deck depth

            return (
              <motion.div
                key={card.id}
                className="polaroid-deck-card"
                style={{
                  zIndex: 100 - index,
                  transformOrigin: "bottom center",
                }}
                animate={{
                  rotate: rotation,
                  y: offset,
                  scale: 1 - index * 0.022,
                  opacity: index > 2 ? 0 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: isMobile ? 180 : 240,
                  damping: isMobile ? 30 : 24,
                }}
              >
                {/* Washi tape at top of top card */}
                {index === 0 && <div className="polaroid-deck-tape" />}
                
                {/* Floating click cue sticker */}
                {index === 0 && (
                  <div className="polaroid-deck-click-hint">
                    <span className="hint-icon">📸</span>
                    <span className="hint-text">Lật tớ đi 💖</span>
                  </div>
                )}
                
                <div className="polaroid-deck-photo-wrapper">
                  <Image 
                    src={card.image} 
                    alt="Scrapbook Memory" 
                    className="polaroid-deck-img" 
                    placeholder="blur" 
                    style={card.objectPosition ? { objectPosition: card.objectPosition } : undefined}
                  />
                </div>
                <div className="polaroid-deck-quote">
                  <p>{card.quote}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
