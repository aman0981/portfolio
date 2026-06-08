"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/content";

// Bold keywords that frame the portrait (static, dimmed).
const FRAME_WORDS = [
  { t: "BACKEND", className: "left-[-2.75rem] top-[1.5rem] -rotate-6 text-fg/[0.1]" },
  { t: "DATA", className: "right-[-1.25rem] top-[-1.75rem] rotate-3 text-accent/30" },
  { t: "PIPELINES", className: "left-[-3.25rem] bottom-[5rem] -rotate-3 text-fg/[0.1]" },
  { t: "ANALYTICS", className: "right-[-1.75rem] bottom-[1.5rem] rotate-6 text-fg/[0.1]" },
];

function Card({ floatZ = true }: { floatZ?: boolean }) {
  return (
    <div className="relative aspect-[4/5] w-[18rem] overflow-hidden rounded-[1.75rem] border border-border-strong bg-elevated shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)] sm:w-[21rem]">
      <Image
        src={profile.headshot}
        alt="Aman Nikumb"
        fill
        priority
        sizes="(max-width: 640px) 18rem, 21rem"
        className="object-cover object-top"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg/80 to-transparent" />
      <div
        className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-border-strong bg-bg/70 px-3 py-2 backdrop-blur-md"
        style={floatZ ? { transform: "translateZ(45px)" } : undefined}
      >
        <span className="font-mono text-xs text-fg-2">{profile.location}</span>
        <span className="font-mono text-xs text-accent">{profile.yearsExperience} yrs</span>
      </div>
    </div>
  );
}

export function HeroPortrait() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  // Mouse-driven 3D tilt — keeps the portrait alive while staying in place.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 18 });

  function onMove(e: MouseEvent) {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  const Words = (
    <>
      {FRAME_WORDS.map((w) => (
        <span
          key={w.t}
          aria-hidden="true"
          className={`pointer-events-none absolute z-0 hidden select-none font-mono text-2xl font-bold tracking-tight sm:block sm:text-3xl ${w.className}`}
        >
          {w.t}
        </span>
      ))}
    </>
  );

  // Reduced-motion: calm, static portrait (no tilt).
  if (reduce) {
    return (
      <div className="relative justify-self-center md:justify-self-end">
        {Words}
        <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent-deep/20 blur-2xl" />
        <div className="relative z-10">
          <Card floatZ={false} />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
      className="relative justify-self-center md:justify-self-end"
    >
      {Words}
      <div className="pointer-events-none absolute -inset-4 -z-0 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent-deep/20 blur-2xl" />
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="relative z-10 [transform-style:preserve-3d]"
      >
        <Card />
      </motion.div>
    </motion.div>
  );
}
