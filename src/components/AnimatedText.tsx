"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import clsx from "clsx";

export function AnimatedHeadline({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const lines = text.split("\n");
  let wordIndex = 0;
  return (
    <h1 className={clsx("font-display leading-[0.95] tracking-tight", className)}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {line.split(" ").map((w) => {
            const i = wordIndex++;
            return (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.08 * i,
                  }}
                  className="inline-block"
                >
                  {w}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

/**
 * Lightweight scroll-reveal that toggles a CSS class instead of running
 * a Framer Motion animation on every element. This avoids creating 20+
 * motion.div subscriptions per page, which was the main scroll-jank cause.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small timeout respects the stagger delay without blocking the thread
          const t = delay > 0 ? setTimeout(() => el.classList.add("revealed"), delay * 1000) : null;
          if (!t) el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={clsx("reveal-on-scroll", className)}>
      {children}
    </div>
  );
}
