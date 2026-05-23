"use client";


import { useEffect, useRef } from "react";
import { LuxuryButton } from "@/components/LuxuryButton";
import { RemoteImage } from "@/components/RemoteImage";
import { wedding } from "@/data/wedding";

interface HeroProps {
  onOpenInvitation: () => void;
}

export function Hero({ onOpenInvitation }: HeroProps) {
  const invitationNavigationTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (invitationNavigationTimerRef.current) {
        window.clearTimeout(invitationNavigationTimerRef.current);
      }
    };
  }, []);

  const jumpToCouple = () => {
    const target = document.getElementById("couple");
    if (!target) return;

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, target.offsetTop);
    window.setTimeout(() => {
      root.style.scrollBehavior = previousScrollBehavior;
    }, 0);
  };

  const openInvitation = () => {
    onOpenInvitation();
    if (invitationNavigationTimerRef.current) {
      window.clearTimeout(invitationNavigationTimerRef.current);
    }
    invitationNavigationTimerRef.current = window.setTimeout(jumpToCouple, 650);
  };

  return (
    <section className="hero-section">
      <div className="hero-photo-layer">
        <RemoteImage
          src={wedding.heroImage}
          alt="Ảnh cưới cô dâu chú rể"
          className="hero-image"
          priority
        />
      </div>
      <div className="hero-face-glow" />
      <div className="hero-bottom-gradient" />
      <div className="hero-vignette" />
      <div className="hero-overlay" />
      <div className="soft-light soft-light-one" />
      <div className="soft-light soft-light-two" />

      <div className="hero-content">
        <div className="hero-title">
          <h1>
            <span>{wedding.bride}</span>
            <em>&</em>
            <span>{wedding.groom}</span>
          </h1>
        </div>

        <div className="hero-details">
          <p className="hero-date">02/05.07.2026</p>
          <div className="hero-actions">
            <LuxuryButton className="hero-open-button" onClick={openInvitation}>
              <span className="cta-arrows cta-arrows-left" aria-hidden="true">
                <i />
                <i />
              </span>
              <span>Mở thiệp mời</span>
              <span className="cta-arrows cta-arrows-right" aria-hidden="true">
                <i />
                <i />
              </span>
            </LuxuryButton>
          </div>
        </div>
      </div>

    </section>
  );
}
