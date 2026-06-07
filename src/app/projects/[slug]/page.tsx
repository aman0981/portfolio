import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects, site } from "@/lib/content";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { LiveDemoFrame } from "@/components/projects/LiveDemoFrame";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — ${site.name}`,
      description: project.tagline,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const other = projects.find((p) => p.slug !== slug);

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <Section className="!pb-10 pt-16 md:!pb-12 md:pt-24">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-sm text-fg-3 transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All work
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="kicker mt-8">
              {project.role} · {project.year}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="tracking-display mt-3 text-4xl font-medium text-fg md:text-6xl">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-3 md:text-xl">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={project.demoUrl} variant="primary" external>
                Live demo
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href={project.repoUrl} variant="ghost" external>
                <GithubIcon className="h-4 w-4" />
                View code
              </Button>
            </div>
          </Reveal>

          {/* Metrics */}
          <Reveal delay={0.25}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border-strong bg-border-strong sm:grid-cols-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="bg-surface p-5">
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="tnum text-2xl font-medium text-accent md:text-3xl">{m.value}</dd>
                  <p className="mt-1 text-xs text-fg-4">{m.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </Section>

        {/* Cover / live demo */}
        <Section className="!py-0">
          <Reveal>
            <LiveDemoFrame url={project.demoUrl} poster={project.cover} title={project.name} />
          </Reveal>
        </Section>

        {/* Narrative */}
        <Section className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <span className="kicker">The problem</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="tracking-tightish mt-3 text-2xl font-medium text-fg">Why it exists</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-lg leading-relaxed text-fg-2">{project.problem}</p>
          </Reveal>
        </Section>

        {/* Approach */}
        <Section className="!pt-0">
          <Reveal>
            <span className="kicker">The approach</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="tracking-tightish mt-3 text-2xl font-medium text-fg md:text-3xl">
              How it&apos;s built
            </h2>
          </Reveal>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {project.approach.map((step, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <li className="flex h-full gap-4 rounded-2xl border border-border-strong bg-surface p-5">
                  <span className="tnum font-mono text-sm font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="leading-relaxed text-fg-2">{step}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* Differentiator */}
        <Section className="!pt-0">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-accent/[0.06] p-8 md:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="kicker">The differentiator</span>
              </div>
              <p className="mt-4 max-w-3xl text-xl font-medium leading-relaxed text-fg md:text-2xl">
                {project.differentiator}
              </p>
            </div>
          </Reveal>
        </Section>

        {/* Highlights + stack */}
        <Section className="!pt-0 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <span className="kicker">Engineering highlights</span>
            </Reveal>
            <ul className="mt-6 space-y-4">
              {project.highlights.map((h, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <li className="flex gap-3">
                    <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="leading-relaxed text-fg-2">{h}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal>
              <span className="kicker">Stack</span>
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        </Section>

        {/* Screenshot gallery */}
        <Section className="!pt-0">
          <Reveal>
            <span className="kicker">Screens</span>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {project.screenshots.map((shot, i) => (
              <Reveal key={shot.src} delay={(i % 2) * 0.06}>
                <figure className="overflow-hidden rounded-2xl border border-border-strong bg-surface">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <figcaption className="border-t border-border px-4 py-3 text-sm text-fg-4">
                    {shot.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Next project / back */}
        <Section className="!pt-0">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border-strong bg-surface p-8 sm:flex-row sm:items-center">
            <div>
              <p className="kicker">Keep exploring</p>
              {other ? (
                <Link
                  href={`/projects/${other.slug}`}
                  className="tracking-tightish mt-2 inline-flex items-center gap-2 text-2xl font-medium text-fg transition-colors hover:text-accent"
                >
                  {other.name}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              ) : (
                <p className="mt-2 text-2xl font-medium text-fg">Let&apos;s talk</p>
              )}
            </div>
            <Button href="/#contact">Get in touch</Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
