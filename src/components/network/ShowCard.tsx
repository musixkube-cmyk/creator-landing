import type { Show } from "./data";

export function ShowCard({ show, index }: { show: Show; index: number }) {
  return (
    <article
      className="group w-[260px] shrink-0 snap-start md:w-[320px]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={show.image}
          alt={show.title}
          loading="lazy"
          width={1024}
          height={768}
          className="mono-media aspect-4/3 w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
        <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
        {typeof show.progress === "number" && (
          <span className="absolute top-0 left-0 h-1 bg-primary" style={{ width: `${show.progress}%` }} />
        )}
      </div>
      <h3 className="mt-4 text-xl leading-none md:text-2xl">{show.title}</h3>
      <p className="mt-2 text-sm font-medium text-foreground">{show.host}</p>
      <p className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">{show.meta}</p>
    </article>
  );
}
