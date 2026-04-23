import { AnimatedHeadline, Reveal } from "./AnimatedText";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-radial-maroon opacity-70" />
      <div className="film-grain" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-6">
            — {eyebrow}
          </p>
        </Reveal>
        <AnimatedHeadline
          text={title}
          className="text-5xl md:text-[7rem] text-gradient-gold"
        />
        {intro && (
          <Reveal delay={0.25}>
            <p className="mt-10 max-w-xl text-cream/75 text-lg leading-relaxed">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
