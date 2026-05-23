"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { initScrollAnimations } from "@/animations/scroll";
import { AutoScroll } from "@/components/AutoScroll";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Particles } from "@/components/Particles";
import { BrideGroom } from "@/sections/BrideGroom";
import { TraditionalInvitation } from "@/sections/TraditionalInvitation";
import { CountdownSection } from "@/sections/Countdown";
import { EventInfo } from "@/sections/EventInfo";
import { Hero } from "@/sections/Hero";
import { LoveStory } from "@/sections/LoveStory";
import { LoveLetter } from "@/sections/LoveLetter";
import { LoveDiary } from "@/sections/LoveDiary";
import { ParallaxCountdown } from "@/sections/ParallaxCountdown";
import { wedding } from "@/data/wedding";
import "@/styles/autoscroll.css";
import "@/styles/music-player.css";

export default function WeddingInvitation() {
  // Invitation animation states
  const [openingInvitation, setOpeningInvitation] = useState(false);
  const [invitationOpened, setInvitationOpened] = useState(false);
  const openingTimerRef = useRef<number | null>(null);

  // Shared audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio on mount
  useEffect(() => {
    const audio = new Audio("/motdoi.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Init scroll animations on mount
  useEffect(() => {
    const timer = window.setTimeout(initScrollAnimations, 200);
    return () => window.clearTimeout(timer);
  }, []);

  // Cleanup invitation timer
  useEffect(() => {
    return () => {
      if (openingTimerRef.current) {
        window.clearTimeout(openingTimerRef.current);
      }
    };
  }, []);

  // Lock scroll during invitation animation
  useEffect(() => {
    if (!openingInvitation) return;
    const prev = { body: document.body.style.overflow, html: document.documentElement.style.overflow };
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev.body;
      document.documentElement.style.overflow = prev.html;
    };
  }, [openingInvitation]);

  const handleOpenInvitation = () => {
    if (openingInvitation) return;
    setOpeningInvitation(true);
    openingTimerRef.current = window.setTimeout(() => setOpeningInvitation(false), 8200);

    // Play music & reveal buttons on first open
    if (!invitationOpened) {
      setInvitationOpened(true);
      const audio = audioRef.current;
      if (audio) {
        audio.play().catch(() => {});
      }
    }
  };

  return (
    <>
      <Particles />
      {invitationOpened && <AutoScroll />}
      {invitationOpened && <MusicPlayer audioRef={audioRef} initialPlaying={true} />}
      <main>
        <Hero onOpenInvitation={handleOpenInvitation} />
        {invitationOpened && (
          <>
            <TraditionalInvitation />
            <BrideGroom />
            <CountdownSection />
            <LoveLetter />
            <LoveStory />
            <LoveDiary />
            <EventInfo />
            <ParallaxCountdown />
          </>
        )}
      </main>

      {openingInvitation && (
        <motion.div
          className="invitation-opening"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8.2, times: [0, 0.07, 0.94, 1], ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="invitation-card-base"
            initial={{ scale: 0.82, y: 34, opacity: 0, rotateX: 4 }}
            animate={{
              scale: [0.82, 1, 1, 1.25],
              y: [34, 0, 0, 0],
              opacity: [0, 1, 1, 0],
              rotateX: [4, 0, 0, 0]
            }}
            transition={{
              duration: 8.2,
              times: [0, 0.07, 0.94, 1],
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.div
              className="invitation-light-spill"
              initial={{ opacity: 0, scaleX: 0.08 }}
              animate={{ opacity: [0, 0.9, 0.72, 0], scaleX: [0.08, 1, 1.18, 1.35] }}
              transition={{ duration: 3.2, delay: 0.62, times: [0, 0.34, 0.76, 1], ease: "easeOut" }}
            />
            <div className="invitation-card-inner">
              <span>Trân trọng kính mời</span>
              <strong className="invitation-names">
                <span>{wedding.bride}</span>
                <em>&</em>
                <span>{wedding.groom}</span>
              </strong>
              <small>02/05.07.2026</small>
            </div>
            <motion.div
              className="invitation-door invitation-door-left"
              initial={{ rotateY: 0, x: 0, z: 0, skewY: 0 }}
              animate={{ rotateY: [0, 8, 94, 112], x: ["0%", "0%", "-2.4%", "-6.5%"], z: [0, 10, 52, 76], skewY: [0, -0.3, -0.8, -1.1] }}
              transition={{ duration: 2.2, delay: 0.48, times: [0, 0.18, 0.74, 1], ease: [0.77, 0, 0.175, 1] }}
            >
              <i className="invitation-door-handle" aria-hidden="true" />
              <span className="invitation-door-mark">A</span>
            </motion.div>
            <motion.div
              className="invitation-door invitation-door-right"
              initial={{ rotateY: 0, x: 0, z: 0, skewY: 0 }}
              animate={{ rotateY: [0, -8, -94, -112], x: ["0%", "0%", "2.4%", "6.5%"], z: [0, 10, 52, 76], skewY: [0, 0.3, 0.8, 1.1] }}
              transition={{ duration: 2.2, delay: 0.48, times: [0, 0.18, 0.74, 1], ease: [0.77, 0, 0.175, 1] }}
            >
              <i className="invitation-door-handle" aria-hidden="true" />
              <span className="invitation-door-mark">H</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
