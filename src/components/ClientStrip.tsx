import { CLIENTS } from "@/lib/data";
import { Reveal } from "./AnimatedText";

export default function ClientStrip() {
  return (
    <section className="relative border-y border-gold-500/10 py-16 bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="text-center text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-10">
            — Partial list of friends &amp; clients
          </p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {CLIENTS.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <span className="font-display text-2xl md:text-3xl text-cream/55 hover:text-gold-300 transition-colors">
                {c}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
