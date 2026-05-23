"use client";

import { useEffect, useMemo, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const clamp = (value: number) => Math.max(0, value);

function getDiff(targetDate: string): Countdown {
  const distance = clamp(new Date(targetDate).getTime() - Date.now());

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export function useCountdown(targetDate: string) {
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    const firstTick = window.setTimeout(() => setCountdown(getDiff(targetDate)), 0);
    const timer = window.setInterval(() => setCountdown(getDiff(targetDate)), 1000);
    return () => {
      window.clearTimeout(firstTick);
      window.clearInterval(timer);
    };
  }, [targetDate]);

  return useMemo(() => countdown, [countdown]);
}
