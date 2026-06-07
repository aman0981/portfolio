import { experience } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        kicker="Experience"
        title="Where I have shipped"
        description="From associate to engineer on the data team — owning systems end to end, from ingestion to the analytics layer on top."
      />

      <ol className="relative mt-14 border-l border-border-strong pl-8 md:mt-16 md:pl-10">
        {experience.map((item, i) => (
          <li
            key={`${item.company}-${item.period}`}
            className={i === experience.length - 1 ? "" : "pb-12 md:pb-14"}
          >
            <Reveal delay={i * 0.06} y={24}>
              {/* Timeline node — sits on the left rule */}
              <span
                aria-hidden="true"
                className="absolute -left-[7px] mt-2 flex h-3.5 w-3.5 items-center justify-center"
              >
                {item.current ? (
                  <>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent shadow-[0_0_0_3px_rgba(45,212,191,0.18)]" />
                  </>
                ) : (
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg shadow-[0_0_0_3px_rgba(45,212,191,0.08)]" />
                )}
              </span>

              <article className="group rounded-2xl border border-border-strong bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 md:p-7">
                {/* Period + tags */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="tnum font-mono text-xs uppercase tracking-tight text-fg-4">
                    {item.period}
                  </span>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                      Current
                    </span>
                  )}
                  {item.promotion && (
                    <Chip accent className="px-2.5 py-0.5">
                      Promotion
                    </Chip>
                  )}
                </div>

                {/* Role + company */}
                <h3 className="tracking-tightish mt-3 text-xl font-medium text-fg">
                  {item.role}
                </h3>
                <p className="mt-1 text-base font-medium text-accent">{item.company}</p>

                {/* Bullets — custom accent dash marker, no default disc */}
                <ul className="mt-5 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative max-w-[68ch] pl-5 leading-relaxed text-fg-3"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.7em] h-px w-2.5 bg-accent/70"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
