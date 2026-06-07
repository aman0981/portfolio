import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";

export function Projects() {
  return (
    <Section id="work">
      <SectionHeading
        kicker="Selected work"
        title="Two platforms, built end to end"
        description="Two production-grade systems designed, built and shipped solo — from ingestion and data modeling to the UI on top."
      />

      <div className="mt-14 flex flex-col gap-8 md:mt-20 md:gap-10">
        {projects.map((project, i) => {
          const caseStudyHref = `/projects/${project.slug}`;
          const reverse = i % 2 === 1;

          return (
            <Reveal key={project.slug} delay={i * 0.08} y={28}>
              <article className="group relative grid grid-cols-1 overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface transition-all duration-300 hover:border-accent/40 hover:shadow-[0_30px_80px_-40px_rgba(45,212,191,0.25)] md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                {/* Cover — framed product shot */}
                <Link
                  href={caseStudyHref}
                  aria-label={`${project.name} — view case study`}
                  className={`relative block ${reverse ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-elevated md:h-full">
                    <Image
                      src={project.cover}
                      alt={`${project.name} — product screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    />
                    {/* depth + framing */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-bg/55 via-bg/5 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 rounded-none ring-1 ring-inset ring-white/[0.06]" />
                    <div
                      className={`pointer-events-none absolute inset-y-0 hidden w-16 md:block ${
                        reverse
                          ? "left-0 bg-gradient-to-r from-surface/70 to-transparent"
                          : "right-0 bg-gradient-to-l from-surface/70 to-transparent"
                      }`}
                    />
                  </div>
                </Link>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center gap-6 p-7 md:p-10 ${
                    reverse ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-4">
                      <span className="text-accent/80">{project.role}</span>
                      <span className="mx-2 text-fg-4/60">/</span>
                      <span className="tnum">{project.year}</span>
                    </p>

                    <h3 className="tracking-tightish mt-3 text-2xl font-medium md:text-3xl">
                      <Link
                        href={caseStudyHref}
                        className="inline-flex items-start gap-2 text-fg transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
                      >
                        {project.name}
                        <ArrowUpRight
                          className="mt-1.5 h-5 w-5 shrink-0 text-fg-4 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                          aria-hidden="true"
                        />
                      </Link>
                    </h3>

                    <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-fg-3">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Metrics */}
                  <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex flex-col gap-1 bg-elevated/80 px-4 py-3"
                      >
                        <dt className="sr-only">{metric.label}</dt>
                        <dd className="tnum text-lg font-medium leading-none text-accent md:text-xl">
                          {metric.value}
                        </dd>
                        <span className="text-[0.7rem] leading-tight text-fg-4">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </dl>

                  {/* Stack */}
                  <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                    {project.stack.slice(0, 5).map((tech) => (
                      <li key={tech}>
                        <Chip>{tech}</Chip>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Button href={caseStudyHref} variant="primary" size="sm">
                      Case study
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button
                      href={project.demoUrl}
                      external
                      variant="ghost"
                      size="sm"
                      aria-label={`${project.name} — live demo (opens in a new tab)`}
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live demo
                    </Button>
                    <Button
                      href={project.repoUrl}
                      external
                      variant="ghost"
                      size="sm"
                      aria-label={`${project.name} — source code on GitHub (opens in a new tab)`}
                    >
                      <GithubIcon className="h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
