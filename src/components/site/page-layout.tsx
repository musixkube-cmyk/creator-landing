"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/landing/logo";
import { EmailSignup } from "@/components/landing/email-signup";

export type PageSection = {
  heading: string;
  body?: string;
  items?: { title: string; detail: string }[];
};

type PageLayoutProps = {
  eyebrow: string;
  title: string;
  lead: string;
  stats?: { v: string; l: string }[];
  sections: PageSection[];
  ctaHeading?: string;
  ctaBody?: string;
  /**
   * Function-specific call-to-action rendered as a button in the top header.
   * Use this to route visitors into the main application with a label that
   * matches the page's purpose (e.g. developers → "Request API access").
   */
  cta?: { label: string; href: string };
  children?: ReactNode;
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "-8% 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${shown ? "animate-fade-in-up" : "opacity-0"}`}
      style={shown ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function PageLayout({
  eyebrow,
  title,
  lead,
  stats,
  sections,
  ctaHeading = "Start on MusicOSY.",
  ctaBody = "Create your account and run your next release on the platform end to end.",
  cta,
  children,
}: PageLayoutProps) {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 hairline-grid opacity-[0.5]" />
        <div
          className="pointer-events-none absolute -right-32 -top-40 size-[34rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 26%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between border-b border-border py-5">
            <Link href="/" aria-label="MusicOSY home" className="transition-opacity hover:opacity-70">
              <Logo className="h-7" />
            </Link>
            {cta && (
              <Link
                href={cta.href}
                className="group inline-flex items-center gap-1.5 bg-primary px-4 py-2 text-sm font-semibold tracking-tight text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {cta.label}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>

          <div className="grid gap-10 py-16 lg:grid-cols-12 lg:py-20">
            <div className="animate-fade-in-up lg:col-span-8">
              <span className="block h-1 w-16 bg-primary" />
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {lead}
              </p>
            </div>

            {stats && stats.length > 0 && (
              <dl className="lg:col-span-4">
                <div className="divide-y divide-border border-y border-border">
                  {stats.map((s, i) => (
                    <Reveal key={s.l} delay={i * 90}>
                      <div className="group flex items-baseline justify-between py-4 transition-colors hover:bg-primary/5">
                        <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-primary">
                          {s.l}
                        </dt>
                        <dd className="text-lg font-semibold tracking-tight">{s.v}</dd>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </dl>
            )}
          </div>
        </div>
      </section>

      {children}

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {sections.map((section, i) => (
            <div
              key={section.heading}
              className={`grid gap-8 py-14 lg:grid-cols-12 ${i > 0 ? "border-t border-border" : ""}`}
            >
              <Reveal className="lg:col-span-4">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] text-primary">
                  <span className="h-px w-6 bg-primary" />
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                {section.body && (
                  <p className="mt-3 text-muted-foreground">{section.body}</p>
                )}
              </Reveal>

              {section.items && (
                <div className="grid border-t border-border sm:grid-cols-2 lg:col-span-8 lg:border-t-0">
                  {section.items.map((item, j) => (
                    <Reveal key={item.title} delay={j * 80}>
                      <div
                        className={`group relative h-full border-b border-border px-0 py-6 transition-colors sm:px-6 sm:hover:bg-primary/5 ${
                          j % 2 === 0 ? "sm:border-r" : ""
                        }`}
                      >
                        <span className="absolute inset-y-0 left-0 w-px scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-base font-medium tracking-tight">{item.title}</h3>
                          <ArrowUpRight className="size-4 shrink-0 text-border transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -bottom-40 left-1/4 size-[30rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl px-6 lg:grid-cols-12 lg:px-10">
          <div className="border-border py-16 lg:col-span-7 lg:border-r lg:py-20 lg:pr-14">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {ctaHeading}
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">{ctaBody}</p>
              <div className="mt-8 max-w-lg">
                <EmailSignup compact />
              </div>
            </Reveal>
          </div>
          <div className="flex items-end py-8 lg:col-span-5 lg:py-20 lg:pl-14">
            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary underline-offset-4 hover:underline"
            >
              Create your account
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
