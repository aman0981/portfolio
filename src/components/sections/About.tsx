import { GraduationCap, BadgeCheck, ArrowDown } from "lucide-react";
import { about } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        {/* LEFT — narrative, education, certifications */}
        <div>
          <SectionHeading kicker={about.kicker} title={about.heading} />

          <div className="mt-6 max-w-[65ch] space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 + i * 0.06}>
                <p className="text-base leading-relaxed text-fg-2 md:text-[1.05rem]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Education */}
          <Reveal delay={0.24} className="mt-10">
            <div className="flex items-start gap-4 rounded-2xl border border-border-strong bg-surface p-5 transition-all duration-200 hover:border-accent/30">
              <span
                className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border-strong bg-elevated text-accent"
                aria-hidden="true"
              >
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <span className="kicker">Education</span>
                <p className="mt-1.5 text-base font-medium text-fg">
                  {about.education.degree}
                </p>
                <p className="text-sm text-fg-3">{about.education.school}</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-fg-4">
                  <span className="tnum">{about.education.years}</span>
                  <span aria-hidden="true" className="text-border-strong">
                    /
                  </span>
                  <span className="tnum text-accent/80">{about.education.detail}</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={0.3} className="mt-5">
            <div className="rounded-2xl border border-border-strong bg-surface p-5">
              <span className="kicker">Certifications</span>
              <ul className="mt-3 space-y-3">
                {about.certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-3">
                    <BadgeCheck
                      className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-snug text-fg-2">
                        {cert.name}
                      </p>
                      <p className="font-mono text-xs text-fg-4">{cert.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — aspiration pipeline */}
        <Reveal delay={0.16}>
          <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-elevated p-6 md:p-8">
            {/* subtle background texture */}
            <div
              className="bg-grid pointer-events-none absolute inset-0 opacity-[0.4]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <span className="kicker">Where I am headed</span>
              <h3 className="tracking-tightish mt-3 text-2xl font-medium text-fg">
                {about.aspiration.title}
              </h3>

              {/* Pipeline flow */}
              <ol className="relative mt-8 space-y-0">
                {about.aspiration.steps.map((step, i) => {
                  const isLast = i === about.aspiration.steps.length - 1;
                  const num = String(i + 1).padStart(2, "0");
                  return (
                    <Reveal key={step} delay={0.24 + i * 0.06}>
                      <li className="relative flex gap-4 pb-7 last:pb-0">
                        {/* connecting accent line */}
                        {!isLast && (
                          <span
                            className="absolute left-[1.0625rem] top-9 bottom-1 w-px bg-gradient-to-b from-accent/50 to-accent/10"
                            aria-hidden="true"
                          />
                        )}

                        {/* node — mono accent step number */}
                        <span
                          className="relative z-10 grid h-[2.125rem] w-[2.125rem] shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-xs font-medium text-accent"
                          aria-hidden="true"
                        >
                          <span className="tnum">{num}</span>
                        </span>

                        {/* step text */}
                        <div className="min-w-0 pt-1.5">
                          <p className="text-[0.95rem] leading-snug text-fg-2">
                            {step}
                          </p>
                          {!isLast && (
                            <ArrowDown
                              className="mt-2 h-3.5 w-3.5 text-accent/40"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                      </li>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
