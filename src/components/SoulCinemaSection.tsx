"use client";

/**
 * Soul + Cinema section.
 *
 * The reference design uses Squarespace's "jagged" section divider — applied
 * as an SVG clipPath on a section-border div. The path traces a single very
 * wide wave whose period (1 unit) equals the section width, so only ONE peak
 * is visible in the 0..1 range.
 *
 * Reference path (bottom divider on section ABOVE the video, amplitude 0.097):
 *   M-1.008, 0.903
 *   l0.75,0.097  l0.25,-0.097     -> first repeat (peak at x≈-0.258)
 *   l0.75,0.097  l0.25,-0.097     -> second repeat (peak at x≈0.742, VISIBLE)
 *   l0.75,0.097  l0.25,-0.097     -> third repeat (peak at x≈1.742)
 *   L2.008, -1   L-1.008, -1  z
 *
 * We replicate this on both top and bottom of the video container as a single
 * outer clip-path. The visible result is ONE broad peak on each edge.
 */

export default function SoulCinemaSection() {
  return (
    <section className="relative w-full bg-ink overflow-hidden">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="sc-shape" clipPathUnits="objectBoundingBox">
            {/*
              Top edge: mirror of the reference bottom-divider path, flipped to bite DOWN.
              Repeats the same l0.75,-0.097 / l0.25,0.097 pattern starting off-canvas left.
              In the visible 0..1 x range this produces ONE peak at x≈0.742.

              Bottom edge: same wave pattern flipped to bite UP. We use the second
              reference path's amplitude (0.064) for a slightly subtler bottom wave.
            */}
            <path d="
              M-1.008,0.097
              l0.75,-0.097 l0.25,0.097
              l0.75,-0.097 l0.25,0.097
              l0.75,-0.097 l0.25,0.097
              L2.008,0.097
              L2.008,0.936
              l-0.75,0.064 l-0.25,-0.064
              l-0.75,0.064 l-0.25,-0.064
              l-0.75,0.064 l-0.25,-0.064
              L-1.008,0.936
              Z
            " />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative w-full aspect-[21/9]"
        style={{ clipPath: "url(#sc-shape)" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/videos/wed.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/25" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="font-display text-4xl md:text-7xl lg:text-[5.5vw] tracking-[0.12em] text-cream uppercase">
            Soul<span className="mx-3 font-light">+</span>Cinema
          </h2>
          <p className="mt-6 md:mt-8 max-w-2xl text-cream/80 text-sm md:text-base leading-relaxed">
            Every wedding is unique and so are our films. For past 8 years Rabt
            has set new benchmarks of storytelling within wedding realm and
            beyond. We are fortunate to have experienced so unique cultures and
            traditions across 25 countries and to document stories that
            continuously overwhelm us.
          </p>
        </div>
      </div>
    </section>
  );
}
