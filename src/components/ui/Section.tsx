import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-24 md:py-32", className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
