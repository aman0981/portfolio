import { profile, socials } from "@/lib/content";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-mono text-sm font-semibold text-accent">
              AN
            </span>
            <span className="text-sm font-medium text-fg">{profile.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-4">
            {profile.role} · {profile.location}. Built with Next.js, React Three Fiber & Tailwind.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer noopener"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-border-strong bg-white/[0.02] text-fg-3 transition-all hover:border-accent/40 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
          <p className="font-mono text-xs text-fg-4">© {year} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
