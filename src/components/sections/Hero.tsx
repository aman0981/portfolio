import { ArrowRight, Mail } from "lucide-react";
import { profile, socials } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Hero3DBackground } from "@/components/hero/Hero3DBackground";
import { HeroPortrait } from "@/components/hero/HeroPortrait";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <Hero3DBackground />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:px-8">
        {/* Left — content */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-3 py-1 font-mono text-xs text-fg-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(45,212,191,0.85)]" />
              Open to Software / Data Engineer roles
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="tracking-display mt-6 text-5xl font-medium leading-[1.04] text-fg sm:text-6xl md:text-7xl md:leading-[1.02]">
              Aman Nikumb
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-4 text-xl font-medium text-accent md:text-2xl">
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-2 md:text-xl">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#work" variant="primary">
                View my work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#contact" variant="ghost">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get in touch
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border-strong bg-white/[0.02] text-fg-3 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                >
                  <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — dynamic 3D portrait (tilt + scroll drift + framing words) */}
        <HeroPortrait />
      </div>
    </section>
  );
}
