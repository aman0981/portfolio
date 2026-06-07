import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && (
        <Reveal>
          <span className="kicker">{kicker}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="tracking-display mt-3 text-3xl font-medium text-fg md:text-[2.75rem] md:leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-fg-3 md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
