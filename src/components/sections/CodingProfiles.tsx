import { Code2, SquareTerminal } from "lucide-react";
import { codingProfiles, socials } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const leetcode = socials.find((s) => s.icon === "code");
const hackerrank = socials.find((s) => s.icon === "terminal");

export function CodingProfiles() {
  return (
    <Section id="coding">
      <SectionHeading kicker={codingProfiles.kicker} title={codingProfiles.heading} />

      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {codingProfiles.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <li className="flex h-full flex-col items-center justify-center rounded-2xl border border-border-strong bg-elevated p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30">
              <span className="tnum text-3xl font-medium text-accent md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 text-fg">{stat.label}</span>
              <span className="mt-1 font-mono text-xs text-fg-4">{stat.detail}</span>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.18}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {leetcode && (
            <Button href={leetcode.href} variant="ghost" size="sm" external aria-label="LeetCode profile">
              <Code2 className="h-4 w-4" aria-hidden="true" />
              LeetCode
            </Button>
          )}
          {hackerrank && (
            <Button href={hackerrank.href} variant="ghost" size="sm" external aria-label="HackerRank profile">
              <SquareTerminal className="h-4 w-4" aria-hidden="true" />
              HackerRank
            </Button>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
