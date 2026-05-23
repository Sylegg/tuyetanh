"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function initScrollAnimations() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;

  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
    gsap.fromTo(
      element,
      { autoAlpha: 0, y: 48, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 82%",
          once: true,
        },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
    gsap.to(element, {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });
  });
}
