import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "./AnimatedText";

export default function PortfolioSection({ limit }: { limit?: number }) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <section id="portfolio" className="relative py-28 md:py-40 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-maroon-950/40 to-ink" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-10 mb-20 flex-wrap">
          <Reveal>
            <div>
              <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-6">
                — Recent work
              </p>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-gradient-gold">
                Selected films.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/portfolio"
              className="link-underline text-[12px] tracking-[0.3em] uppercase text-gold-300"
            >
              All projects →
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-10 md:gap-16 md:grid-cols-2">
          {items.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 2) * 0.1}
              className={clsx(i % 2 === 1 && "md:mt-24")}
            >
              <Link
                href={`/portfolio/${p.slug}`}
                className="block group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-gold-500/10">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 600px, 100vw"
                    className="object-cover transform-gpu transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  {/* Base gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                  {/* Type badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full glass border border-gold-500/30 px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-gold-300">
                      {p.type}
                    </span>
                  </div>
                  {/* Slide-up hover overlay */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-0 bg-gradient-to-t from-ink/95 via-ink/70 to-transparent p-8 pt-20 transition-all duration-500">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">
                      {p.client} · {p.year}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl text-cream group-hover:text-gold-300 transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-cream/60 text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                      {p.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      View project →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
