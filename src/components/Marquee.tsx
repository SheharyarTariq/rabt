export default function Marquee() {
  const words = [
    "Film · Commercial",
    "Music Video",
    "Documentary",
    "Branded Content",
    "Direction",
    "Colour · Post",
  ];
  const row = [...words, ...words, ...words];
  return (
    <section className="relative border-y border-gold-500/10 py-10 overflow-hidden marquee-mask bg-ink">
      <div
        className="flex animate-marquee whitespace-nowrap"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        {row.map((w, i) => (
          <span
            key={i}
            className="mx-10 font-display text-3xl md:text-5xl text-cream/80"
          >
            {w}{" "}
            <span className="text-gold-400 mx-6">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
