"use client";

import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Rail({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border py-14 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-7 flex items-end justify-between gap-6">
          <div>
            {kicker && (
              <p className="mb-3 text-[11px] font-bold tracking-[0.28em] text-muted-foreground uppercase">
                {kicker}
              </p>
            )}
            <h2 className="text-[2.1rem] leading-[0.9] sm:text-5xl md:text-6xl">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export function RailTrack({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="rail-scroll -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:-mx-10 md:gap-6 md:px-10"
      >
        {children}
      </div>
      <div className="mt-5 flex items-center gap-2">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
          className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
          className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <span className="ml-2 text-[10px] font-bold tracking-[0.22em] text-muted-foreground uppercase">
          Drag or scroll
        </span>
      </div>
    </div>
  );
}
