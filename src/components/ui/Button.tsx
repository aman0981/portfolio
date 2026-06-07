import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "subtle";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-[var(--ease-out-quart)] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-hover shadow-[0_0_0_1px_rgba(45,212,191,0.35),0_8px_30px_-8px_rgba(45,212,191,0.45)] hover:shadow-[0_0_0_1px_rgba(94,234,212,0.5),0_10px_36px_-8px_rgba(45,212,191,0.6)]",
  ghost:
    "border border-border-strong bg-white/[0.02] text-fg hover:bg-white/[0.05] hover:border-white/20",
  subtle: "text-fg-2 hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  disabled,
  type,
  ...rest
}: CommonProps & {
  href?: string;
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = external ?? /^https?:|^mailto:/.test(href);
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noreferrer noopener" className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={classes}
      type={type ?? "button"}
      disabled={disabled}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

export { base as buttonBase, variants as buttonVariants, sizes as buttonSizes };
