"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Pillar = {
  id: string;
  label: string;
  headline: string;
  body: string;
  items: { title: string; detail: string }[];
};

const pillars: Pillar[] = [
  {
    id: "distribution",
    label: "Distribution",
    headline: "Ship a release once. Reach every store on earth.",
    body: "DDEX-grade delivery, territory routing, pre-orders and physical pressing — with takedown and redelivery you control yourself.",
    items: [
      { title: "180+ stores & DSPs", detail: "Spotify, Apple, Amazon, YouTube, TikTok, Beatport, regional platforms." },
      { title: "Release scheduling", detail: "Timed drops, pre-save windows, staggered territory rollouts." },
      { title: "Metadata & assets", detail: "ISRC/UPC generation, artwork validation, credits and contributor roles." },
      { title: "Catalog operations", detail: "Bulk edits, redelivery, takedowns and transfers without a support ticket." },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Fans",
    headline: "Own the relationship, not just the stream count.",
    body: "Turn passive listeners into a first-party audience you can reach on release day without renting attention.",
    items: [
      { title: "Smart links & pre-saves", detail: "Branded landing pages with per-source conversion tracking." },
      { title: "Fan CRM", detail: "Emails, SMS and segments built from streaming and commerce behaviour." },
      { title: "Campaign automation", detail: "Release cycles, drip sequences and lapsed-fan win-backs." },
      { title: "Playlist & press pitching", detail: "Structured pitches with response tracking and editorial windows." },
    ],
  },
  {
    id: "monetization",
    label: "Monetization",
    headline: "Every revenue line in one ledger.",
    body: "Streaming, merch, memberships, tips, ticketing and sync — reported together so you can see what actually pays.",
    items: [
      { title: "Merch & print-on-demand", detail: "Storefront, inventory and fulfilment attached to your release pages." },
      { title: "Memberships & tipping", detail: "Recurring supporter tiers with gated drops and early access." },
      { title: "Sync licensing", detail: "Licence-ready catalog with stems, cue sheets and one-stop clearance." },
      { title: "Live & ticketing", detail: "Event pages, presales and bundles tied to fan segments." },
    ],
  },
  {
    id: "rights",
    label: "Rights & Royalties",
    headline: "Splits, statements and payouts that survive an audit.",
    body: "Accounting built for collaborators — automatic, transparent and exportable.",
    items: [
      { title: "Automated splits", detail: "Percentage or fixed shares paid straight to each collaborator." },
      { title: "Publishing administration", detail: "Works registration and global mechanical collection." },
      { title: "Statements & exports", detail: "Line-level reporting by store, territory, track and period." },
      { title: "Payouts", detail: "Multi-currency withdrawals with full transaction history." },
    ],
  },
  {
    id: "studio",
    label: "Studio & Creation",
    headline: "From idea to master without changing tools.",
    body: "Creation tooling that feeds directly into your release pipeline.",
    items: [
      { title: "AI mastering", detail: "Reference-matched masters with revision history per version." },
      { title: "Stem separation", detail: "Clean stems for remixes, sync and live performance." },
      { title: "Collaboration workspace", detail: "Versioned sessions, timestamped notes and approvals." },
      { title: "Songwriting tools", detail: "Lyric drafting, key/BPM tagging and demo organisation." },
    ],
  },
  {
    id: "insights",
    label: "Insights",
    headline: "The numbers your career decisions depend on.",
    body: "One analytics layer across streaming, commerce and audience — no exports required.",
    items: [
      { title: "Audience intelligence", detail: "Cities, ages, playlists and save rates per track." },
      { title: "Revenue analytics", detail: "Per-stream rates, margin by channel, cohort value." },
      { title: "Benchmarks", detail: "Compare release performance against your own catalog." },
      { title: "Reporting API", detail: "Push your data into the tools your team already uses." },
    ],
  },
];

export function Features() {
  const [active, setActive] = useState(pillars[0]!.id);
  const current = pillars.find((p) => p.id === active)!;

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl py-16 lg:py-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            The platform
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Six systems most artists stitch together. Here they are as one.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Select a layer to see what it replaces.
          </p>
        </div>

        <div className="grid border-t border-border lg:grid-cols-12">
          <div className="lg:col-span-4 lg:border-r lg:border-border">
            <div className="flex overflow-x-auto lg:flex-col lg:overflow-visible">
              {pillars.map((p, i) => {
                const isActive = p.id === active;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    className={`group flex min-w-[14rem] items-center justify-between gap-4 border-b border-border px-5 py-5 text-left transition-colors lg:min-w-0 ${
                      isActive
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-medium tracking-tight">{p.label}</span>
                    </span>
                    <span
                      className={`h-px w-6 transition-all ${
                        isActive ? "bg-primary" : "bg-border group-hover:bg-foreground/40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div key={current.id} className="animate-fade-in-up border-b border-border lg:col-span-8">
            <div className="border-b border-border px-6 py-8 lg:px-10">
              <h3 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-foreground">
                {current.headline}
              </h3>
              <p className="mt-3 max-w-2xl text-muted-foreground">{current.body}</p>
            </div>
            <div className="grid sm:grid-cols-2">
              {current.items.map((item, i) => (
                <div
                  key={item.title}
                  className={`group border-border px-6 py-6 transition-colors hover:bg-secondary/50 lg:px-10 ${
                    i % 2 === 0 ? "sm:border-r" : ""
                  } ${i < 2 ? "border-b" : "border-b sm:border-b-0"}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-base font-medium tracking-tight text-foreground">
                      {item.title}
                    </h4>
                    <ArrowUpRight className="size-4 shrink-0 text-border transition-colors group-hover:text-primary" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
