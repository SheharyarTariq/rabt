import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-6">
          404
        </p>
        <h1 className="font-display text-6xl md:text-8xl text-gradient-gold">
          Lost in the cut.
        </h1>
        <p className="mt-6 text-cream/70 max-w-md mx-auto">
          The page you&apos;re looking for isn&apos;t here — it may have been
          moved or never existed. Head back home and start again.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold-500/50 px-6 py-3 text-[12px] tracking-[0.3em] uppercase text-gold-300 hover:bg-gold-500 hover:text-maroon-900 transition-all"
        >
          Back to home →
        </Link>
      </div>
    </section>
  );
}
