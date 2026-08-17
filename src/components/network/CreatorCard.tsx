"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Creator } from "./data";

export function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <article
          role="button"
          tabIndex={0}
          className="group w-[280px] shrink-0 cursor-pointer snap-start border border-border bg-card p-5 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-primary md:w-[320px]"
        >
          <div className="overflow-hidden bg-secondary">
            <img
              src={creator.image}
              alt={creator.name}
              loading="lazy"
              width={640}
              height={640}
              className="mono-media aspect-square w-full object-cover"
            />
          </div>
          <h3 className="mt-5 text-2xl leading-none">{creator.name}</h3>
          <p className="mt-2 text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
            {creator.role}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{creator.bio}</p>
          <p className="mt-4 border-t border-border pt-3 text-[11px] tracking-[0.18em] text-foreground uppercase">
            {creator.shows}
          </p>
          <p className="mt-3 text-[11px] font-bold tracking-[0.2em] text-primary uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View show preview →
          </p>
        </article>
      </DialogTrigger>

      <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto rounded-none border-border p-0">
        <div className="relative bg-secondary">
          <img
            src={creator.showImage}
            alt={creator.showTitle}
            className="aspect-video w-full object-cover grayscale"
          />
          <span className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-[10px] font-bold tracking-[0.24em] text-primary-foreground uppercase">
            Show preview
          </span>
        </div>

        <div className="p-6 md:p-8">
          <DialogTitle className="text-3xl leading-[0.9] md:text-5xl">
            {creator.showTitle}
          </DialogTitle>
          <p className="mt-3 text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
            Hosted by {creator.name} · {creator.shows}
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            {creator.showBlurb}
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.24em] text-muted-foreground uppercase">
                Talent on the podcast
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {creator.talent.map((person) => (
                  <li key={person} className="border-b border-border pb-2">
                    {person}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.24em] text-muted-foreground uppercase">
                Upcoming episodes
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {creator.upcomingEpisodes.map((ep) => (
                  <li
                    key={ep.title}
                    className="flex items-baseline justify-between gap-4 border-b border-border pb-2"
                  >
                    <span className="font-medium">{ep.title}</span>
                    <span className="shrink-0 text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                      {ep.date} · {ep.length}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button className="mt-8 w-full bg-primary px-8 py-4 text-xs font-bold tracking-[0.22em] text-primary-foreground uppercase transition-colors duration-300 hover:bg-primary/90 sm:w-auto">
            Join now
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
