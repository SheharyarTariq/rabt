import { TESTIMONIALS } from "@/lib/data";
import { Reveal } from "./AnimatedText";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-28 md:py-40 overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-maroon-950/50 to-ink" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-6">
            — What clients say
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-gradient-gold mb-20">
            Kind words.
          </h2>
        </Reveal>

        <div className="grid gap-px md:grid-cols-3 border border-gold-500/10 rounded-sm overflow-hidden">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group relative bg-ink/60 p-10 md:p-12 hover:bg-maroon-950/60 transition-colors duration-500 h-full flex flex-col justify-between gap-10">
                {/* Decorative quote mark */}
                <span
                  className="absolute top-6 right-8 font-display text-[7rem] leading-none text-gold-500/10 select-none pointer-events-none"
                  aria-hidden
                >
                  &ldquo;
                </span>

                <blockquote className="relative text-cream/80 text-lg leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>


                <div className="border-t border-gold-500/15 pt-6">
                  <p className="font-display text-xl text-cream">{t.name}</p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mt-1">
                    {t.role} · {t.project}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
