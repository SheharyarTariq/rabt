"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimatedHeadline } from "../AnimatedText";

export default function PackagesHero({ region = "Pakistan" }: { region?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mql.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        >
          <source src="/videos/wed.mp4" type="video/mp4" />
          <source src="/videos/WED_COLOR.MOV" type="video/quicktime" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-ink/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      <div className="vignette" />

      <div className="relative z-10 flex min-h-[100vh] items-center px-6 md:px-10 pt-28">
        <div className="mx-auto max-w-[1400px] w-full">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-8"
          >
            — Rabt Films · Wedding Films Pakistan
          </motion.p>

          <AnimatedHeadline
            text={`Packages ·\n${region}`}
            className="text-5xl md:text-7xl lg:text-[8rem] text-gradient-gold max-w-5xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-10 max-w-lg text-cream/75 text-lg leading-relaxed"
          >
            Two packages, one craft. Cinema for weddings across Lahore,
            Karachi, Islamabad and beyond — restrained, story-led, made to
            be watched a decade from now.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#package-one"
              className="inline-flex items-center gap-3 rounded-full bg-gold-500 text-maroon-900 px-7 py-3 text-[12px] tracking-[0.3em] uppercase hover:bg-gold-300 transition-colors"
            >
              View packages →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-gold-500/40 px-7 py-3 text-[12px] tracking-[0.3em] uppercase text-gold-300 hover:bg-gold-500 hover:text-maroon-900 transition-all"
            >
              Start a project
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-cream/50">
          scroll
        </p>
        <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent" />
      </motion.div>
    </section>
  );
}
