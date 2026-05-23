"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { wedding } from "@/data/wedding";
import chuHyImg from "@/assets/CHU HY.webp";
import hoaImg from "@/assets/HOA.webp";
import phuongLeftImg from "@/assets/Phuong 2.webp";
import phuongRightImg from "@/assets/Phuong.webp";

export function TraditionalCard() {
  const brideName = wedding.bride;
  const groomName = wedding.groom;

  const phuongLeftRatio = phuongLeftImg.width / phuongLeftImg.height;
  const phuongRightRatio = phuongRightImg.width / phuongRightImg.height;
  const chuHyRatio = chuHyImg.width / chuHyImg.height;
  const hoaRatio = hoaImg.width / hoaImg.height;

  return (
    <div className="traditional-card-wrapper">
      <motion.div 
        className="traditional-card"
        initial={{ opacity: 0, y: 55, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top Section: Names */}
        <motion.div 
          className="traditional-card-names"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.85, ease: "easeOut" }}
        >
          <span>{brideName}</span>
          <span>{groomName}</span>
        </motion.div>

        {/* Middle Section: Banner, Chu Hy, and Phoenixes */}
        <div className="traditional-card-middle">
          {/* Burgundy horizontal banner */}
          <motion.div 
            className="traditional-card-banner"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Left Phoenix */}
          <motion.div
            className="traditional-card-phoenix-left"
            style={{ aspectRatio: phuongLeftRatio }}
            initial={{ opacity: 0, x: -45, y: 35 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image 
              src={phuongLeftImg} 
              alt="Chim phượng trái" 
              fill
              sizes="(max-width: 440px) 210px, 260px"
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>

          {/* Double Happiness (Chữ Hỷ) */}
          <motion.div
            className="traditional-card-chuhy"
            style={{ aspectRatio: chuHyRatio }}
            initial={{ opacity: 0, scale: 0.55 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.85, type: "spring", stiffness: 90 }}
          >
            <Image 
              src={chuHyImg} 
              alt="Chữ Hỷ" 
              fill
              sizes="(max-width: 440px) 92px, 115px"
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>

          {/* Right Phoenix */}
          <motion.div
            className="traditional-card-phoenix-right"
            style={{ aspectRatio: phuongRightRatio }}
            initial={{ opacity: 0, x: 45, y: -35 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image 
              src={phuongRightImg} 
              alt="Chim phượng phải" 
              fill
              sizes="(max-width: 440px) 190px, 240px"
              style={{ objectFit: "contain", transform: "scaleX(-1)" }}
              priority
            />
          </motion.div>
        </div>

        {/* Bottom Section: Flower illustration */}
        <div className="traditional-card-bottom">
          <motion.div
            className="traditional-card-flower"
            style={{ aspectRatio: hoaRatio }}
            initial={{ opacity: 0, scale: 0.92, rotate: 6 }}
            whileInView={{ opacity: 0.98, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1.25, ease: "easeOut" }}
          >
            <Image 
              src={hoaImg} 
              alt="Họa tiết hoa" 
              fill
              sizes="(max-width: 440px) 175px, 215px"
              style={{ objectFit: "contain", transform: "scaleX(-1)" }}
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
