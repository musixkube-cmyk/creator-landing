import { Logo } from "./logo";
import { EmailSignup } from "./email-signup";

const partners = [
  "Spotify",
  "Apple Music",
  "Amazon Music",
  "YouTube Music",
  "TikTok",
  "Deezer",
  "Beatport",
  "Tidal",
];

const bars = [0.4, 0.7, 0.35, 0.9, 0.55, 0.8, 0.45, 0.65, 0.3, 0.75, 0.5, 0.85];

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between border-b border-border py-5">
          <Logo className="h-7" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Creator platform
          </span>
        </div>

        <div className="grid items-start gap-14 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="animate-fade-in-up lg:col-span-7">
            <span className="inline-flex items-center gap-2 border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Now onboarding creators
            </span>

            <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.03] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The infrastructure independent artists run their{" "}
              <span className="text-primary">whole business</span> on.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Distribution, fan marketing, monetization, rights and royalties, and a
              creative studio — one operating system instead of six subscriptions and
              a spreadsheet.
            </p>

            <div className="mt-9 max-w-lg">
              <EmailSignup />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                First release included · No card required · Keep your masters
              </p>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-border border-y border-border">
              {[
                { v: "180+", l: "Stores & DSPs" },
                { v: "100%", l: "Royalties to you" },
                { v: "48h", l: "Median delivery" },
              ].map((s) => (
                <div key={s.l} className="px-4 py-5 first:pl-0">
                  <dt className="text-2xl font-semibold tracking-tight text-foreground">
                    {s.v}
                  </dt>
                  <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Release console
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Live
                </span>
              </div>

              <div className="flex h-24 items-end gap-1 border-b border-border px-5 py-5">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="animate-bar flex-1 origin-bottom bg-primary/80"
                    style={{
                      height: `${h * 100}%`,
                      animationDelay: `${i * 0.09}s`,
                    }}
                  />
                ))}
              </div>

              <div className="divide-y divide-border">
                {[
                  { k: "Streams (28d)", v: "1,284,930" },
                  { k: "Net revenue", v: "$18,402.55" },
                  { k: "Territories active", v: "62" },
                  { k: "Splits auto-paid", v: "7 collaborators" },
                ].map((r) => (
                  <div key={r.k} className="flex items-baseline justify-between px-5 py-3.5">
                    <span className="text-sm text-muted-foreground">{r.k}</span>
                    <span className="font-mono text-sm text-foreground">{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border py-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Delivering to
          </span>
          {partners.map((p) => (
            <span key={p} className="text-sm font-medium text-foreground/70">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
