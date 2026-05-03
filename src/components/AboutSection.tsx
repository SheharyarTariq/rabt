import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./AnimatedText";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-maroon-950/60 to-ink" />
      <div className="film-grain" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-6">
                — About the studio
              </p>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-gradient-gold">
                A studio for films that slow you down.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 text-cream/75 text-lg leading-relaxed max-w-md">
                Rabt — <span className="font-script text-gold-300 text-xl">ربط</span> — is the
                Urdu word for connection. We build films around that idea: a
                restrained, crafted cinema that connects a brand, an artist or
                a story to the people it&apos;s made for.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 grid grid-cols-3 gap-10 max-w-md">
                <Stat value="120+" label="Films delivered" />
                <Stat value="28" label="Award nods" />
                <Stat value="14" label="Countries" />
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <Link
                href="/about"
                className="mt-14 inline-flex items-center gap-3 link-underline text-[12px] tracking-[0.3em] uppercase text-gold-300"
              >
                Our story →
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] max-w-[540px] mx-auto rounded-sm overflow-hidden border border-gold-500/20">
                <Image
                  src="https://images.unsplash.com/photo-1512070679279-8988d32161be?auto=format&fit=crop&w=1200&q=80"
                  alt="On set — Rabt Films"
                  fill
                  sizes="(min-width: 768px) 540px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-script text-3xl text-gold-300">
                    the art of rabt
                  </p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-cream/60 mt-2">
                    Lahore · Dubai
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl md:text-5xl text-gradient-gold">
        {value}
      </p>
      <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-cream/60">
        {label}
      </p>
    </div>
  );
}
