import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/nav";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-gold-500/10 bg-ink">
      <div className="absolute inset-0 bg-radial-maroon opacity-60 pointer-events-none" />
      <div className="film-grain" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6 space-y-6">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold-400">
              — Let&apos;s craft something cinematic
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-gradient-gold">
              Have a story in mind?
            </h2>
            <p className="text-cream/70 max-w-md">
              We read every brief. Send over a reference, a rough brief or just
              a note — we&apos;ll come back within two working days.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-gold-500/50 px-6 py-3 text-[12px] tracking-[0.3em] uppercase text-gold-300 hover:bg-gold-500 hover:text-maroon-900 transition-all"
            >
              Start a project →
            </Link>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold-400 mb-5">
              Studio
            </p>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li>Lahore · Dubai</li>
              <li>Est. 2024</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold-400 mb-5">
              Navigate
            </p>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-cream/70 hover:text-gold-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold-400 mb-5">
              Follow
            </p>
            <ul className="space-y-2 text-sm">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/70 hover:text-gold-300 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-t border-gold-500/10 pt-10">
          <p className="font-script text-4xl text-gold-300">the art of rabt</p>
          <p className="text-[11px] tracking-[0.3em] uppercase text-cream/50">
            © {year} Rabt Films — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
