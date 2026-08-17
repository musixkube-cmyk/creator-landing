import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/landing/logo";
import { EmailSignup } from "@/components/landing/email-signup";
import { CreatorCard } from "@/components/network/CreatorCard";
import { Rail, RailTrack } from "@/components/network/Rail";
import { ShowCard } from "@/components/network/ShowCard";
import {
  categories,
  creators,
  liveEvents,
  recentlyWatched,
  trending,
  upcoming,
} from "@/components/network/data";

export const metadata: Metadata = {
  title: "Podcasts on MusicOSY — Creator-Owned Shows, Hosting and Monetization",
  description:
    "Browse creator-owned podcasts on MusicOSY: trending and upcoming shows, the hosts behind them, live tapings and categories — with hosting, cleared music and monetization built in.",
  openGraph: {
    title: "Podcasts on MusicOSY — Creator-Owned Shows, Hosting and Monetization",
    description:
      "Browse creator-owned podcasts on MusicOSY: trending and upcoming shows, the hosts behind them, live tapings and categories — with hosting, cleared music and monetization built in.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function PodcastPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 hairline-grid opacity-50" />
        <div
          className="pointer-events-none absolute -right-32 -top-40 size-[34rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 26%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-border py-5">
            <Link href="/" aria-label="MusicOSY home" className="transition-opacity hover:opacity-70">
              <Logo className="h-7" />
            </Link>
            <Link
              href="/signup"
              className="group inline-flex items-center gap-1.5 bg-primary px-4 py-2 text-sm font-semibold tracking-tight text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Launch your show
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid items-end gap-10 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
            <div className="animate-fade-in-up">
              <span className="block h-1 w-16 bg-primary" />
              <h1 className="mt-6 text-balance text-[3.2rem] font-semibold leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
                Loud ideas,
                <br />
                <span className="text-primary">quiet</span> rooms.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Crime, culture, sports, comedy and everything after midnight — recorded by creators
                who own their tape. Shows publish, license music and get paid on the same MusicOSY
                rails as releases.
              </p>
              <div className="mt-9 max-w-lg">
                <EmailSignup compact />
              </div>
            </div>
            <div className="relative overflow-hidden bg-secondary">
              <img
                src="/cover-1.jpg"
                alt="Studio microphone under a single spotlight"
                width={1024}
                height={768}
                className="mono-media aspect-4/3 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-primary-foreground">
                Live now · Night Desk
              </div>
            </div>
          </div>
        </div>
      </section>

      <Rail title="Recently played" kicker="Pick up where you left off">
        <RailTrack>
          {recentlyWatched.map((show, i) => (
            <ShowCard key={show.title} show={show} index={i} />
          ))}
        </RailTrack>
      </Rail>

      <Rail title="Upcoming podcasts" kicker="Premiering soon">
        <RailTrack>
          {upcoming.map((show, i) => (
            <ShowCard key={show.title} show={show} index={i} />
          ))}
        </RailTrack>
      </Rail>

      <Rail title="Trending podcasts" kicker="Most played this week">
        <RailTrack>
          {trending.map((show, i) => (
            <ShowCard key={show.title} show={show} index={i} />
          ))}
        </RailTrack>
      </Rail>

      <Rail title="Meet the creators" kicker="The people behind the mic">
        <RailTrack>
          {creators.map((creator) => (
            <CreatorCard key={creator.name} creator={creator} />
          ))}
        </RailTrack>
      </Rail>

      <Rail title="Upcoming live events" kicker="Tapings and tour dates">
        <RailTrack>
          {liveEvents.map((event) => (
            <article key={event.title} className="group w-[260px] shrink-0 snap-start md:w-[320px]">
              <div className="relative overflow-hidden bg-secondary">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="mono-media aspect-4/3 w-full object-cover"
                />
                <div className="absolute left-3 top-3 bg-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em]">
                  {event.date}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-medium tracking-tight md:text-2xl">{event.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {event.city} · {event.venue}
              </p>
              <Link
                href="/signup"
                className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-70"
              >
                Get tickets →
              </Link>
            </article>
          ))}
        </RailTrack>
      </Rail>

      <Rail title="Podcast categories" kicker="Browse by category">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, i) => (
            <div
              key={category}
              className="group relative flex min-h-[132px] flex-col justify-between border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:bg-primary/5 md:min-h-[160px]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-2xl font-semibold leading-[0.95] tracking-tight transition-colors duration-300 group-hover:text-primary">
                {category}
              </span>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </Rail>

      <section className="relative overflow-hidden border-t border-border">
        <div
          className="pointer-events-none absolute -bottom-40 left-1/4 size-[30rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Launch your show on MusicOSY. Keep the tape and the revenue.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Hosting, cleared music, memberships, ads and analytics in one account.
          </p>
          <div className="mt-8 max-w-lg">
            <EmailSignup compact />
          </div>
        </div>
      </section>
    </main>
  );
}
