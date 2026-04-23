import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import { TEAM } from "@/lib/data";
import { Reveal } from "@/components/AnimatedText";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A studio built on rabt."
        intro="Rabt — connection — is the starting point of every project we take on. A small team of directors, producers and editors building cinematic work for brands, artists and culture."
      />

      <AboutSection />

      <section className="relative py-28 bg-ink">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-6">
              — The team
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-gradient-gold">
              Small team. Big love for the craft.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="space-y-3">
                  <div className="aspect-[3/4] rounded-sm bg-gradient-to-b from-maroon-900/60 to-maroon-950 border border-gold-500/15" />
                  <p className="font-display text-2xl text-cream">{t.name}</p>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-gold-400">
                    {t.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
