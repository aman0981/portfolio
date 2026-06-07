import { skills } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        kicker="Toolkit"
        title="Tech I build with"
        description="Depth across the backend-to-data stack — async services and APIs through to medallion ETL, search and the analytics layer on top."
      />

      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {skills.map((group, index) => (
          <li key={group.label}>
            <Reveal delay={index * 0.05} className="h-full">
              <div className="group h-full rounded-2xl border border-border-strong bg-surface p-5 transition-all duration-200 hover:border-accent/30 hover:-translate-y-0.5 sm:p-6">
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="tnum font-mono text-xs text-accent/80"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-accent/60 transition-colors duration-200 group-hover:bg-accent"
                  />
                  <h3 className="font-mono text-xs uppercase tracking-wide text-fg-4">
                    {group.label}
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
