"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Lazy-load the WebGL canvas (client-only) so it never blocks first paint / LCP.
const HeroParticles = dynamic(() => import("./HeroParticles"), { ssr: false });

/**
 * Hero backdrop. Always renders a lightweight CSS layer (grid + accent glow).
 * On capable, motion-OK, non-mobile devices it overlays a lazy R3F particle
 * field, paused when the hero scrolls out of view. Honors prefers-reduced-motion.
 */
export function Hero3DBackground() {
  const [enabled, setEnabled] = useState(false);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wideEnough = window.matchMedia("(min-width: 768px)").matches;
    const cores = navigator.hardwareConcurrency ?? 4;
    setEnabled(!reduce && wideEnough && cores >= 4);
  }, []);

  useEffect(() => {
    if (!enabled || !ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0.01 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [enabled]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* dotted grid */}
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_60%_35%,black,transparent)]" />

      {/* WebGL particle field (capable devices only) */}
      {enabled && (
        <div className="absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_80%_70%_at_62%_38%,black,transparent)]">
          <HeroParticles paused={paused} />
        </div>
      )}

      {/* accent glow */}
      <div className="absolute right-[8%] top-[18%] h-[42rem] w-[42rem] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute -left-[10%] bottom-[5%] h-[30rem] w-[30rem] rounded-full bg-accent-deep/10 blur-[120px]" />
      {/* bottom fade into page bg */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
