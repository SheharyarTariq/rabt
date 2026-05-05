"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { Reveal } from "../AnimatedText";
import BookingModal from "./BookingModal";
import type { PackageFeatureData } from "@/lib/packages";

type Variant = "default" | "alt";

export default function PackageFeature({
  data,
  variant,
}: {
  data: PackageFeatureData;
  variant: Variant;
}) {
  const isAlt = variant === "alt";
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section
      id={data.id}
      className={clsx(
        "relative overflow-hidden py-28 md:py-40",
        isAlt && "border-t border-gold-500/10"
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-b",
          isAlt
            ? "from-ink via-maroon-900/30 to-ink"
            : "from-ink via-maroon-950/40 to-ink"
        )}
      />
      <div className="film-grain" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-10">
          {/* Left image — drops below */}
          <Reveal
            className={clsx(
              "md:row-start-2 md:translate-y-24 lg:translate-y-32",
              isAlt
                ? "md:col-start-9 md:col-span-4"
                : "md:col-start-1 md:col-span-4"
            )}
          >
            <div
              className={clsx(
                "relative w-full overflow-hidden rounded-sm border border-gold-500/20",
                isAlt ? "aspect-[3/4]" : "aspect-[4/5]"
              )}
            >
              <Image
                src={data.imageLeft.src}
                alt={data.imageLeft.alt}
                fill
                sizes="(min-width: 768px) 50vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Right image — sits high, headline overlaps it */}
          <Reveal
            delay={0.15}
            className={clsx(
              "md:row-start-1 md:row-span-2 md:-translate-y-8 lg:-translate-y-12",
              isAlt
                ? "md:col-start-1 md:col-span-4"
                : "md:col-start-9 md:col-span-4"
            )}
          >
            <div
              className={clsx(
                "relative w-full overflow-hidden rounded-sm border border-gold-500/20",
                isAlt ? "aspect-[4/5]" : "aspect-[3/4]"
              )}
            >
              <Image
                src={data.imageRight.src}
                alt={data.imageRight.alt}
                fill
                sizes="(min-width: 768px) 50vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Headline — sits above the right image, overlapping it */}
          <Reveal
            className={clsx(
              "relative z-20 md:row-start-1 md:self-end",
              isAlt
                ? "md:col-start-5 md:col-span-8 md:text-left md:pl-2"
                : "md:col-start-1 md:col-span-7 md:text-left md:pr-10"
            )}
          >
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-6">
              {data.eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-gradient-gold">
              {data.titleLead}{" "}
              <span className="font-script italic text-gold-300/90 lowercase">
                {data.titleScript}
              </span>{" "}
              {data.titleTail}
            </h2>
          </Reveal>

          {/* Middle copy — tucks between the staggered images */}
          <Reveal
            delay={0.3}
            className={clsx(
              "relative z-10 md:row-start-2 md:self-center md:-mt-4",
              isAlt
                ? "md:col-start-5 md:col-span-4 md:pl-2"
                : "md:col-start-5 md:col-span-4 md:pr-2"
            )}
          >
            <div className="space-y-6">
              {data.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-cream/80 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4">
                <p className="text-[10px] tracking-[0.4em] uppercase text-gold-400 mb-4">
                  — Includes
                </p>
                <ul className="space-y-3">
                  {data.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 text-cream/80 text-sm"
                    >
                      <span className="h-px w-6 bg-gold-500/60" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gold-400 mb-1">
                    — Investment
                  </p>
                  <p className="font-display text-2xl md:text-3xl text-gradient-gold">
                    {data.price}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="inline-flex items-center gap-3 rounded-full bg-gold-500 text-maroon-900 px-6 py-2.5 text-[11px] tracking-[0.3em] uppercase hover:bg-gold-300 transition-colors"
                  >
                    Book this package →
                  </button>
                  <Link
                    href="/terms"
                    className="text-[10px] tracking-[0.3em] uppercase text-gold-400 hover:text-gold-300 transition-colors underline-offset-4 hover:underline"
                  >
                    Terms &amp; Conditions
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Highlights strip — overlaps the bottom of the dropped left image */}
        <Reveal delay={0.4}>
          <div
            className={clsx(
              "relative z-20 mt-32 md:mt-40 flex flex-wrap items-center justify-center gap-x-10 gap-y-4",
              isAlt ? "md:justify-start" : "md:justify-center"
            )}
          >
            {data.highlights.map((item, i) => (
              <span
                key={item}
                className="flex items-center gap-10 text-[10px] tracking-[0.3em] uppercase text-cream/70"
              >
                {item}
                {i < data.highlights.length - 1 && (
                  <span className="h-3 w-px bg-gold-500/40" />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        packageName={data.titleLead}
      />
    </section>
  );
}
