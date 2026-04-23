import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/data";
import { Reveal } from "./AnimatedText";

export default function BlogSection({ limit }: { limit?: number }) {
  const items = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;
  return (
    <section id="blog" className="relative py-28 md:py-40 bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-10 mb-20 flex-wrap">
          <Reveal>
            <div>
              <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-6">
                — Journal
              </p>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-gradient-gold">
                Notes from the cutting room.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/blog"
              className="link-underline text-[12px] tracking-[0.3em] uppercase text-gold-300"
            >
              Read all →
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {items.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block space-y-6"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold-500/10">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="object-cover transform-gpu transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full glass border border-gold-500/30 px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-gold-300">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-3">
                    {post.date} · {post.readTime}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-cream group-hover:text-gold-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-cream/65 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
