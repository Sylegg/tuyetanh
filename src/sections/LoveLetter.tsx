"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import polaroidPhoto from "@/assets/hinh12.jpg"; // Using a beautiful photo from the assets for the Polaroid

export function LoveLetter() {
  return (
    <section id="love-letter" className="love-letter-section">
      {/* Falling flower petals/leaves background decorations */}
      <div className="decorations-container">
        <span className="petal petal-1"></span>
        <span className="petal petal-2"></span>
        <span className="petal petal-3"></span>
        <span className="petal petal-4"></span>
        <span className="petal petal-5"></span>
      </div>

      {/* SVG filter for realistic torn/deckled paper edges */}
      <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}>
        <defs>
          <filter id="torn-paper-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="6" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="tape-torn-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Section Header */}
      <div className="section-heading love-letter-header" data-reveal>
        <p className="eyebrow love-letter-eyebrow">TÂM THƯ</p>
        <div className="title-divider-container">
          <svg className="vintage-divider" viewBox="0 0 100 10" width="120">
            <path
              d="M 10 5 Q 30 2, 50 5 T 90 5"
              fill="none"
              stroke="#75192b"
              strokeWidth="0.8"
            />
            <path
              d="M 50 5 C 47 1, 44 4, 50 8 C 56 4, 53 1, 50 5"
              fill="#75192b"
            />
          </svg>
        </div>
      </div>

      {/* Love Letter Desk Layout (Stacked Papers) */}
      <div className="love-letter-desk">
        
        {/* Back Paper (Slightly Rotated & Darker Shadow) */}
        <div className="love-letter-paper love-letter-paper-back deckled-paper" />

        {/* Front Paper (Torn Edges, Main Content) */}
        <motion.div 
          className="love-letter-paper love-letter-paper-front deckled-paper"
          initial={{ opacity: 0, y: 30, rotate: -0.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Wax Seal Stamp top-left */}
          <div className="wax-seal-container">
            {/* Baby's breath stems sticking out behind seal */}
            <svg className="babys-breath-stem" viewBox="0 0 60 100" width="50" height="80">
              <path d="M 40 90 Q 25 60, 30 30 Q 35 15, 20 5" fill="none" stroke="#7b6a66" strokeWidth="0.8" opacity="0.6" />
              <path d="M 33 50 Q 15 40, 10 25" fill="none" stroke="#7b6a66" strokeWidth="0.6" opacity="0.6" />
              <path d="M 31 35 Q 48 25, 45 10" fill="none" stroke="#7b6a66" strokeWidth="0.6" opacity="0.6" />
              {/* Little flowers */}
              <circle cx="20" cy="5" r="2.5" fill="#fff" stroke="#d8b36a" strokeWidth="0.4" />
              <circle cx="10" cy="25" r="2" fill="#fff" stroke="#d8b36a" strokeWidth="0.4" />
              <circle cx="45" cy="10" r="2.5" fill="#fff" stroke="#d8b36a" strokeWidth="0.4" />
              <circle cx="25" cy="15" r="1.8" fill="#fff" stroke="#d8b36a" strokeWidth="0.4" />
              <circle cx="38" cy="22" r="1.8" fill="#fff" stroke="#d8b36a" strokeWidth="0.4" />
            </svg>
            
            {/* The physical wax seal stamp */}
            <div className="wax-seal">
              <div className="wax-seal-inner">
                {/* Rose emblem in wax seal */}
                <svg className="wax-rose" viewBox="0 0 24 24" width="16" height="16">
                  <path 
                    d="M12 2C9.5 2 7 4.5 7 7.5C7 9.5 8 10.5 9 11.5C8 12.5 5 14 5 16.5C5 19 8.5 21.5 12 21.5C15.5 21.5 19 19 19 16.5C19 14 16 12.5 15 11.5C16 10.5 17 9.5 17 7.5C17 4.5 14.5 2 12 2ZM12 4C13.5 4 15 5.5 15 7.5C15 8.5 14.5 9 13.5 10C12.5 9 12 8 12 7.5C12 7 11.5 7 11.5 7.5C11.5 8 11 9 10 10C9 9 8.5 8.5 8.5 7.5C8.5 5.5 10 4 12 4ZM12 19.5C9.5 19.5 7 18 7 16.5C7 15.5 8.5 14.5 10.5 13.8C11.2 14.8 11.8 15 12 15C12.2 15 12.8 14.8 13.5 13.8C15.5 14.5 17 15.5 17 16.5C17 18 14.5 19.5 12 19.5Z" 
                    fill="#fff" 
                    opacity="0.82"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Letter Calligraphy Title */}
          <div className="letter-title-container">
            <h3 className="letter-title-gui">Gửi người</h3>
            <h3 className="letter-title-thuong">thương dấu</h3>
            <span className="letter-title-swash">
              <svg viewBox="0 0 100 20" width="80" height="20">
                <path d="M5 5 C 40 18, 70 2, 95 12" fill="none" stroke="#75192b" strokeWidth="1.2" />
                <path d="M85 8 C 87 6, 89 6, 91 8 C 93 10, 91 12, 89 10 C 87 8, 89 6, 91 8" fill="#75192b" />
              </svg>
            </span>
          </div>

          {/* Hand-drawn Envelope Sketch */}
          <div className="envelope-sketch-container">
            <svg className="envelope-sketch" viewBox="0 0 120 80" width="100" height="70">
              {/* Outer Envelope */}
              <rect x="10" y="15" width="100" height="60" rx="4" fill="none" stroke="#7b6a66" strokeWidth="1" strokeDasharray="1 1" />
              <rect x="10" y="15" width="100" height="60" rx="4" fill="none" stroke="#7b6a66" strokeWidth="0.8" />
              {/* Flap lines */}
              <path d="M 10 15 L 60 48 L 110 15" fill="none" stroke="#7b6a66" strokeWidth="0.8" />
              <path d="M 10 75 L 45 42" fill="none" stroke="#7b6a66" strokeWidth="0.8" />
              <path d="M 110 75 L 75 42" fill="none" stroke="#7b6a66" strokeWidth="0.8" />
              {/* Botanical leaves coming from behind */}
              <path d="M 60 15 Q 75 -15, 80 -18" fill="none" stroke="#7b6a66" strokeWidth="0.8" />
              <path d="M 68 3 Q 75 0, 78 -2" fill="none" stroke="#7b6a66" strokeWidth="0.8" />
              <path d="M 72 -7 Q 80 -10, 83 -12" fill="none" stroke="#7b6a66" strokeWidth="0.8" />
              <circle cx="80" cy="-18" r="1.5" fill="#7b6a66" />
              <circle cx="78" cy="-2" r="1.2" fill="#7b6a66" />
              <circle cx="83" cy="-12" r="1.2" fill="#7b6a66" />
              {/* Envelope Heart Seal */}
              <path d="M 60 48 C 58 45, 55 47, 60 51 C 65 47, 62 45, 60 48" fill="#75192b" />
            </svg>
          </div>

          {/* Simple Elegant Gold Divider */}
          <div className="letter-gold-divider">
            <span className="divider-line"></span>
            <span className="divider-heart">♥</span>
            <span className="divider-line"></span>
          </div>

          {/* Large Curly Quotation Marks around poem */}
          <div className="poem-container">
            <span className="quote-mark quote-left">“</span>
            
            <div className="poem-text">
              <p>Từ hôm nay nắng thôi lang thang</p>
              <p>Mây thôi trôi giữa muôn ngàn hướng gió</p>
              <p>Hai chúng ta sau bao lần duyên lỡ</p>
              <p>Cuối cùng rồi cũng gọi được tên nhau.</p>
            </div>
            
            <span className="quote-mark quote-right">”</span>
          </div>

          {/* Burgundy Heart Swash Divider at the bottom */}
          <div className="letter-bottom-swash">
            <svg viewBox="0 0 200 20" width="160" height="20">
              <path d="M10 10 Q 50 15, 90 10 Q 100 7, 110 10 Q 150 15, 190 10" fill="none" stroke="#75192b" strokeWidth="0.8" />
              {/* Calligraphy Heart */}
              <path d="M100 10 C 97 6, 94 9, 100 13 C 106 9, 103 6, 100 10" fill="#75192b" />
            </svg>
          </div>

          {/* Footer of the Paper */}
          <div className="paper-footer">
            {/* Bottom-left: "forever us" script */}
            <div className="forever-us-container">
              <span className="forever-text">forever</span>
              <div className="us-row">
                <span className="us-text">us</span>
                <svg className="us-heart" viewBox="0 0 30 15" width="25" height="15">
                  <path d="M 2 7 Q 15 13, 22 5" fill="none" stroke="#b9893c" strokeWidth="1" />
                  <path d="M 20 5 C 22 2, 25 2, 25 5 C 25 8, 22 10, 20 8 C 18 10, 15 8, 15 5 C 15 2, 18 2, 20 5" fill="none" stroke="#b9893c" strokeWidth="1" />
                </svg>
              </div>
            </div>

            {/* Bottom-right: Polaroid Photo frame */}
            <motion.div 
              className="polaroid-container"
              initial={{ opacity: 0, rotate: 6, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 3, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.75, ease: "easeOut" }}
            >
              {/* Semi-transparent tape at the top */}
              <div className="polaroid-tape" />
              
              <div className="polaroid-photo-wrapper">
                <Image
                  src={polaroidPhoto}
                  alt="Ảnh cưới Polaroid"
                  className="polaroid-photo"
                  placeholder="blur"
                />
              </div>
            </motion.div>
          </div>

          {/* Extra baby's breath at bottom right corner behind Polaroid */}
          <div className="babys-breath-bottom">
            <svg viewBox="0 0 100 60" width="80" height="50">
              <path d="M 10 50 Q 40 30, 80 40" fill="none" stroke="#7b6a66" strokeWidth="0.8" opacity="0.5" />
              <path d="M 35 38 Q 60 20, 75 22" fill="none" stroke="#7b6a66" strokeWidth="0.6" opacity="0.5" />
              <circle cx="80" cy="40" r="2" fill="#fff" stroke="#d8b36a" strokeWidth="0.4" />
              <circle cx="75" cy="22" r="1.5" fill="#fff" stroke="#d8b36a" strokeWidth="0.4" />
              <circle cx="62" cy="27" r="1.5" fill="#fff" stroke="#d8b36a" strokeWidth="0.4" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
