"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { NAV_LINKS } from "@/lib/nav";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,border-color] duration-500",
        scrolled
          ? "bg-ink/85 border-b border-gold-500/10 py-3"
          : "bg-transparent border-b border-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/brand/rabt-mark.png"
            alt="Rabt Films"
            width={40}
            height={40}
            className="transition-transform duration-500 group-hover:rotate-[8deg]"
            priority
          />
          <div className="leading-none">
            <p className="font-display text-lg tracking-wide text-cream">
              Rabt <span className="text-gold-400">Films</span>
            </p>
            <p className="font-script text-[11px] text-gold-300/80 mt-0.5">
              the art of rabt
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "text-[12px] tracking-[0.3em] uppercase transition-colors",
                  active ? "text-gold-300" : "text-cream/70 hover:text-gold-300"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-5 py-2 text-[12px] tracking-[0.3em] uppercase text-gold-300 hover:bg-gold-500 hover:text-maroon-900 transition-all"
        >
          Start a project
        </Link>

        <button
          className="md:hidden text-cream p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-ink/95 border-t border-gold-500/10"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-display text-3xl text-cream hover:text-gold-300"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/40 px-5 py-2 text-[12px] tracking-[0.3em] uppercase text-gold-300"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
