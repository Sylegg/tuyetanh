"use client";

import { useCallback, useState } from "react";

interface MusicPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  initialPlaying?: boolean;
}

export function MusicPlayer({ audioRef, initialPlaying = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [audioRef, isPlaying]);

  return (
    <div
      className={`music-player-btn ${isPlaying ? "music-playing" : "music-paused"}`}
      onClick={toggle}
      role="button"
      aria-label={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
      title={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
    >
      {/* Vinyl disc */}
      <div className="music-vinyl">
        <div className="music-vinyl-center" />
      </div>

      {/* Sound waves */}
      <div className="music-waves">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Icon */}
      <div className="music-icon">
        {isPlaying ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        )}
      </div>

      {/* Tooltip */}
      <span className="music-tooltip">
        {isPlaying ? "Tạm dừng nhạc" : "Phát nhạc nền"}
      </span>
    </div>
  );
}
