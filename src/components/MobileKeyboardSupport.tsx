"use client";

import { useEffect } from "react";

// Only the form's scroll area changes when a keyboard overlays the invitation.
// The underlying 440 × 956 document and its scale stay unchanged.
export function MobileKeyboardSupport() {
  useEffect(() => {
    if (window.parent === window) return;

    const visualViewport = window.parent.visualViewport;
    const iframe = window.frameElement;
    if (!visualViewport || !iframe) return;
    let animationFrame = 0;

    const updateVisibleHeight = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const bounds = iframe.getBoundingClientRect();
        const scale = bounds.width / window.innerWidth;
        const visibleHeight = Math.max(0, Math.min(
          window.innerHeight,
          (visualViewport.offsetTop + visualViewport.height - bounds.top) / scale,
        ));
        document.documentElement.style.setProperty("--invitation-visible-height", `${visibleHeight}px`);

        const active = document.activeElement;
        if (active instanceof HTMLElement && active.matches("input, textarea, select")) {
          active.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
      });
    };

    updateVisibleHeight();
    visualViewport.addEventListener("resize", updateVisibleHeight);
    visualViewport.addEventListener("scroll", updateVisibleHeight);
    window.parent.addEventListener("resize", updateVisibleHeight);
    document.addEventListener("focusin", updateVisibleHeight);
    return () => {
      cancelAnimationFrame(animationFrame);
      visualViewport.removeEventListener("resize", updateVisibleHeight);
      visualViewport.removeEventListener("scroll", updateVisibleHeight);
      window.parent.removeEventListener("resize", updateVisibleHeight);
      document.removeEventListener("focusin", updateVisibleHeight);
      document.documentElement.style.removeProperty("--invitation-visible-height");
    };
  }, []);

  return null;
}
