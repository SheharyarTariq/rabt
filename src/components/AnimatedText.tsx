"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

export function AnimatedHeadline({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <h1 className={clsx("font-display leading-[0.95] tracking-tight", className)}>
      {words.map((w, i) => (
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
      ))}
    </h1>
  );
}

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
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
