import { cn } from "@/lib/utils";

export function Chip({
  children,
  className,
  accent = false,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-tight",
        accent
          ? "border-accent/30 bg-accent/10 text-accent"
          : "border-border-strong bg-elevated/60 text-fg-2",
        className,
      )}
    >
      {children}
    </span>
  );
}
