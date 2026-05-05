"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingModal({
  open,
  onClose,
  packageName,
}: {
  open: boolean;
  onClose: () => void;
  packageName: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setErrorMsg(null);
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, packageName }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send booking");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10"
          aria-modal="true"
          role="dialog"
          aria-labelledby="booking-title"
        >
          <button
            type="button"
            aria-label="Close booking form"
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-lg rounded-sm border border-gold-500/30 bg-gradient-to-b from-maroon-950/90 to-ink/95 p-8 md:p-10 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-cream/60 hover:text-gold-300 transition-colors text-xl leading-none"
            >
              ×
            </button>

            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-3">
              — Book this package
            </p>
            <h3
              id="booking-title"
              className="font-display text-2xl md:text-3xl text-gradient-gold leading-tight"
            >
              {packageName}
            </h3>

            {status === "success" ? (
              <div className="mt-8 text-cream/85">
                <p className="text-base leading-relaxed">
                  Thank you. Your booking enquiry has been sent — our team
                  will be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-gold-500 text-maroon-900 px-6 py-2.5 text-[11px] tracking-[0.3em] uppercase hover:bg-gold-300 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <Field
                  label="Name"
                  type="text"
                  value={name}
                  onChange={setName}
                  required
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  required
                  autoComplete="email"
                />
                <Field
                  label="Phone"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  required
                  autoComplete="tel"
                />

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">
                    Package
                  </label>
                  <input
                    type="text"
                    value={packageName}
                    readOnly
                    aria-readonly="true"
                    className="w-full bg-ink/60 border border-gold-500/20 rounded-sm px-4 py-3 text-cream/70 cursor-not-allowed"
                  />
                </div>

                {status === "error" && errorMsg && (
                  <p className="text-sm text-red-300/90">{errorMsg}</p>
                )}

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center gap-3 rounded-full bg-gold-500 text-maroon-900 px-7 py-3 text-[12px] tracking-[0.3em] uppercase hover:bg-gold-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Submit booking"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-[11px] tracking-[0.3em] uppercase text-cream/60 hover:text-gold-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  required,
  autoComplete,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        className="w-full bg-ink/60 border border-gold-500/30 rounded-sm px-4 py-3 text-cream placeholder-cream/40 focus:border-gold-400 focus:outline-none transition-colors"
      />
    </div>
  );
}
