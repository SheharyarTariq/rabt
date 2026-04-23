import { SERVICES } from "@/lib/data";
import { Reveal } from "./AnimatedText";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 md:py-40 bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 items-end mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-6">
                — What we do
              </p>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-gradient-gold">
                Services.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.15}>
              <p className="text-cream/75 text-lg leading-relaxed">
                We take on a small number of projects each year — each one
                directed, produced and finished by the same team. From the
                first phone call to the final delivery, it&apos;s the same
                people making the work.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 border-t border-gold-500/10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative px-0 py-12 md:px-10 border-b border-gold-500/10 md:even:border-l md:even:border-gold-500/10 transition-colors hover:bg-maroon-900/30">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-4">
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl text-cream group-hover:text-gold-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-cream/70 max-w-md leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                  <span className="font-display text-3xl text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
