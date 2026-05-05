"use client";

import { useId } from "react";

type SoulCinemaSectionProps = {
  videoSrc?: string;
  headline?: React.ReactNode;
  body?: React.ReactNode;
};

export default function SoulCinemaSection({
  videoSrc = "/videos/frame1.mp4",
  headline = (
    <>
      Soul<span className="mx-3 font-light">+</span>Cinema
    </>
  ),
  body = (
    <>
      Every wedding is unique and so are our films. For past 8 years Rabt has
      set new benchmarks of storytelling within wedding realm and beyond. We
      are fortunate to have experienced so unique cultures and traditions
      across 25 countries and to document stories that continuously overwhelm
      us.
    </>
  ),
}: SoulCinemaSectionProps) {
  const rawId = useId();
  const clipId = `sc-shape-${rawId.replace(/:/g, "")}`;

  return (
    <section className="relative w-full bg-ink overflow-hidden">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
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
        className="relative w-full aspect-[3/4] sm:aspect-[16/10] md:aspect-[21/9]"
        style={{ clipPath: `url(#${clipId})` }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/25" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 py-12 text-center">
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-[5.5vw] tracking-[0.12em] text-cream uppercase">
            {headline}
          </h2>
          <p className="mt-6 md:mt-8 max-w-2xl text-cream/80 text-xs sm:text-sm md:text-base leading-relaxed">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
