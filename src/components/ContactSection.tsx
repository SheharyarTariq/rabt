"use client";

import { useState } from "react";
import { Reveal } from "./AnimatedText";
import clsx from "clsx";

const TYPES = [
  "Commercial",
  "Documentary",
  "Music Video",
  "Narrative",
  "Branded Series",
  "Other",
];

const BUDGETS = ["< 10k", "10–30k", "30–80k", "80–150k", "150k+"];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [type, setType] = useState<string>("Commercial");
  const [budget, setBudget] = useState<string>("30–80k");

  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-maroon-950/60 to-ink" />
      <div className="film-grain" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5 space-y-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-6">
              — Say hello
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-gradient-gold">
              Tell us about the film.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-cream/75 max-w-md leading-relaxed">
              A few lines is enough. Share the brief, the deadline and any
              references. We reply within two working days.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6">
              <Info label="Email" value="studio@rabtfilms.com" />
              <Info label="Instagram" value="@rabt.films" />
              <Info label="Studios" value="Lahore · Dubai" />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="glass border border-gold-500/15 rounded-sm p-8 md:p-10 space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field>
                  <Label>Your name</Label>
                  <input
                    required
                    className="w-full bg-transparent border-b border-gold-500/25 focus:border-gold-400 outline-none py-3 text-cream placeholder:text-cream/30"
                    placeholder="Ayesha Khan"
                  />
                </Field>
                <Field>
                  <Label>Email</Label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-gold-500/25 focus:border-gold-400 outline-none py-3 text-cream placeholder:text-cream/30"
                    placeholder="you@studio.com"
                  />
                </Field>
              </div>

              <Field>
                <Label>Project type</Label>
                <div className="flex flex-wrap gap-2">
                  {TYPES.map((t) => (
                    <Chip
                      key={t}
                      active={type === t}
                      onClick={() => setType(t)}
                    >
                      {t}
                    </Chip>
                  ))}
                </div>
              </Field>

              <Field>
                <Label>Budget (USD)</Label>
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((b) => (
                    <Chip
                      key={b}
                      active={budget === b}
                      onClick={() => setBudget(b)}
                    >
                      {b}
                    </Chip>
                  ))}
                </div>
              </Field>

              <Field>
                <Label>Tell us about the project</Label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-gold-500/25 focus:border-gold-400 outline-none py-3 text-cream placeholder:text-cream/30 resize-none"
                  placeholder="A short paragraph is plenty — timing, tone, references."
                />
              </Field>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-gold-500 text-maroon-900 px-7 py-3 text-[12px] tracking-[0.3em] uppercase hover:bg-gold-300 transition-colors"
              >
                {sent ? "Thanks — we'll be in touch" : "Send message →"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">
        {label}
      </p>
      <p className="font-display text-2xl text-cream">{value}</p>
    </div>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400">
      {children}
    </p>
  );
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "rounded-full border px-4 py-2 text-[11px] tracking-[0.2em] uppercase transition-all",
        active
          ? "bg-gold-500 text-maroon-900 border-gold-500"
          : "border-gold-500/30 text-cream/70 hover:border-gold-400 hover:text-gold-300"
      )}
    >
      {children}
    </button>
  );
}
