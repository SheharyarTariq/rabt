"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedHeadline } from "./AnimatedText";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-ink">
      {/* Cinematic background loop */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/HERO_COLOR.MOV" type="video/quicktime" />
        </video>
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
      <div className="vignette" />

      <div className="relative z-10 flex min-h-[100vh] items-center px-6 md:px-10 pt-28">
        <div className="mx-auto max-w-[1400px] w-full">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-8"
          >
            — Rabt Films · Est. 2024
          </motion.p>

          <AnimatedHeadline
            text={"The Art of\nRabt."}
            className="text-5xl md:text-[8rem] lg:text-[9.5rem] text-gradient-gold max-w-5xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-10 max-w-lg text-cream/75 text-lg leading-relaxed"
          >
            A film production studio crafting cinematic stories — for
            brands, artists and the quiet moments in between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 rounded-full bg-gold-500 text-maroon-900 px-7 py-3 text-[12px] tracking-[0.3em] uppercase hover:bg-gold-300 transition-colors"
            >
              See the work →
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
