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
      {/* dotted grid — spread evenly, subtle */}
      <div className="bg-grid absolute inset-0 opacity-45 [mask-image:radial-gradient(ellipse_92%_75%_at_50%_38%,black,transparent)]" />

      {/* WebGL particle field — fuller on the right (photo), softly fading to
          the left so it sits behind the copy without competing with it. */}
      {enabled && (
        <div className="absolute inset-0 opacity-65 [mask-image:radial-gradient(ellipse_78%_82%_at_64%_42%,black_42%,transparent_84%)]">
          <HeroParticles paused={paused} />
        </div>
      )}

      {/* Dimmed tech-word texture behind the left-hand copy */}
      <div className="absolute inset-0 hidden md:block" aria-hidden="true">
        <span className="absolute left-[2%] top-[15%] -rotate-3 select-none font-mono text-6xl font-bold tracking-tight text-fg/[0.05]">
          PYTHON
        </span>
        <span className="absolute left-[1%] top-[46%] select-none font-mono text-5xl font-bold tracking-tight text-accent/[0.06]">
          PYSPARK
        </span>
        <span className="absolute left-[4%] top-[72%] -rotate-2 select-none font-mono text-5xl font-bold tracking-tight text-fg/[0.045]">
          ETL · DATA
        </span>
      </div>

      {/* Soft legibility scrim — dims bubbles behind the left text so copy pops */}
      <div className="absolute inset-0 bg-[radial-gradient(64%_58%_at_20%_46%,rgba(8,9,10,0.66),transparent_74%)]" />

      {/* accent glow */}
      <div className="absolute right-[6%] top-[16%] h-[40rem] w-[40rem] rounded-full bg-accent/10 blur-[130px]" />
      <div className="absolute -left-[12%] bottom-[2%] h-[26rem] w-[26rem] rounded-full bg-accent-deep/[0.06] blur-[130px]" />
      {/* bottom fade into page bg */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
