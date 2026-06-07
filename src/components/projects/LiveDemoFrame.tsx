"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";

/**
 * Browser-chrome framed live-demo. Shows the cover screenshot as a poster with
 * a "Launch" overlay; clicking loads the URL in an iframe. Always offers
 * "Open in new tab". Note: demo URLs are currently localhost (see plan) — the
 * inline frame works on the developer's machine; visitors use the new-tab link.
 */
export function LiveDemoFrame({
  url,
  poster,
  title,
}: {
  url: string;
  poster: string;
  title: string;
}) {
  const [live, setLive] = useState(false);
  const isLocal = /localhost|127\.0\.0\.1/.test(url);

  return (
    <div className="overflow-hidden rounded-2xl border border-border-strong bg-surface">
      {/* chrome bar */}
      <div className="flex items-center gap-3 border-b border-border bg-elevated/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
        </div>
        <div className="flex-1 truncate rounded-md border border-border bg-bg px-3 py-1 text-center font-mono text-xs text-fg-4">
          {url}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-xs text-fg-3 transition-colors hover:text-accent"
        >
          Open <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      {/* viewport */}
      <div className="relative aspect-[16/10] bg-bg">
        {live ? (
          <iframe
            src={url}
            title={`${title} — live demo`}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        ) : (
          <>
            <Image
              src={poster}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-top opacity-70"
            />
            <div className="absolute inset-0 grid place-items-center bg-bg/40">
              <div className="flex flex-col items-center gap-3 text-center">
                <button
                  type="button"
                  onClick={() => setLive(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg shadow-[0_8px_30px_-8px_rgba(45,212,191,0.5)] transition-all hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  <Play className="h-4 w-4" aria-hidden="true" />
                  Launch live demo
                </button>
                {isLocal && (
                  <p className="max-w-xs font-mono text-xs text-fg-4">
                    Runs locally during development — opens at {url}
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
