"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { nav, profile } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Aman Nikumb — home">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-mono text-sm font-semibold text-accent">
            AN
          </span>
          <span className="hidden text-sm font-medium text-fg-2 transition-colors group-hover:text-fg sm:block">
            Aman Nikumb
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-fg-3 transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <Button href={profile.resume} variant="ghost" size="sm" className="ml-2" external>
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Résumé
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border-strong bg-white/[0.02] text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-fg-2 transition-colors hover:bg-white/[0.04] hover:text-fg"
              >
                {item.label}
              </a>
            ))}
            <Button href={profile.resume} variant="ghost" size="sm" className="mt-2 self-start" external>
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Download résumé
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
