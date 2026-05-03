"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyContactCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        // Show after scrolling past ~80vh (past the hero)
        setVisible(window.scrollY > window.innerHeight * 0.8);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Link
      href="/contact"
      aria-label="Start a project"
      className={[
        "fixed right-0 top-1/2 z-40 -translate-y-1/2",
        "flex items-center gap-3",
        "bg-gold-500 text-maroon-900",
        "px-3 py-5 rounded-l-sm",
        "text-[10px] tracking-[0.35em] uppercase font-medium",
        "transition-all duration-500 ease-out",
        "hover:bg-gold-300 hover:px-5",
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-full pointer-events-none",
      ].join(" ")}
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      Start a project
    </Link>
  );
}
