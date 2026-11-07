"use client";

import { useSyncExternalStore } from "react";

const MOBILE_WIDTH = 440;
const MOBILE_HEIGHT = 956;

function subscribeToViewport(onChange: () => void) {
  window.addEventListener("resize", onChange);
  window.addEventListener("hashchange", onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener("resize", onChange);
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("popstate", onChange);
  };
}

function getViewportSnapshot() {
  return JSON.stringify({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    suffix: window.location.search + window.location.hash,
  });
}

function getServerSnapshot() {
  return null;
}

export function MobileInvitationViewport() {
  const snapshot = useSyncExternalStore(subscribeToViewport, getViewportSnapshot, getServerSnapshot);
  const viewport = snapshot ? JSON.parse(snapshot) as { width: number; height: number; suffix: string } : null;
  const scale = viewport
    ? Math.min(1, viewport.width / MOBILE_WIDTH, viewport.height / MOBILE_HEIGHT)
    : 1;

  return (
    <main className="mobile-viewport-shell" aria-label="Thiệp cưới Tuyết Anh và Minh Hiếu">
      {viewport && (
        <div
          className="mobile-viewport-frame"
          style={{ width: MOBILE_WIDTH * scale, height: MOBILE_HEIGHT * scale }}
        >
          {/* A separate document gives media queries, vh units and fixed elements
              a real 440 × 956 viewport. Resizing the host does not reload it. */}
          <iframe
            className="mobile-viewport-content"
            title="Thiệp cưới Tuyết Anh và Minh Hiếu"
            src={`/mobile-invitation${viewport.suffix}`}
            width={MOBILE_WIDTH}
            height={MOBILE_HEIGHT}
            style={{ transform: `scale(${scale})` }}
            allow="autoplay"
          />
        </div>
      )}
    </main>
  );
}
