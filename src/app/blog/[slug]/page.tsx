import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import PageHeader from "@/components/PageHeader";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  return { title: post ? post.title : "Article" };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`${post.category} · ${post.readTime}`}
        title={post.title}
        intro={post.excerpt}
      />

      <article className="relative py-20">
        <div className="mx-auto max-w-[820px] px-6 md:px-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-16">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              sizes="820px"
              priority
              className="object-cover"
            />
          </div>
          <div className="prose-cinema space-y-6 text-cream/80 leading-relaxed text-lg">
            <p>
              This is a placeholder post. Replace this content with your real
              writing — on set notes, essays about craft, interviews with
              collaborators, or a regular dispatch from the cutting room.
            </p>
            <p>
              The layout is designed to feel like a magazine column: generous
              line-height, a single readable column, and plenty of air. Long
              reads work. Short reads work. Essays with the occasional
              pull-quote work best.
            </p>
            <blockquote className="border-l-2 border-gold-500/60 pl-6 italic text-gold-200">
              Good writing about film is, eventually, writing about why the
              small decisions matter.
            </blockquote>
            <p>
              If you&apos;d like a CMS wired up (Sanity, Contentlayer, MDX,
              or Notion), we can swap this static list for a content source
              without changing the layout.
            </p>
          </div>

          <div className="mt-24 flex items-center justify-between border-t border-gold-500/10 pt-10">
            <Link
              href="/blog"
              className="link-underline text-[12px] tracking-[0.3em] uppercase text-gold-300"
            >
              ← All entries
            </Link>
            <p className="text-[10px] tracking-[0.3em] uppercase text-cream/50">
              {post.date}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
