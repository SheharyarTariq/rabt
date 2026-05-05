import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import PageHeader from "@/components/PageHeader";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  return {
    title: project ? project.title : "Project",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      <PageHeader
        eyebrow={`${project.type} · ${project.year}`}
        title={project.title}
        intro={project.description}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-gold-500/15">
            {project.video ? (
              <iframe
                src={project.video}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="(min-width: 1400px) 1400px, 100vw"
                priority
                className="object-cover"
              />
            )}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4 space-y-8">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">
                  Client
                </p>
                <p className="font-display text-xl text-cream">
                  {project.client}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">
                  Type
                </p>
                <p className="font-display text-xl text-cream">
                  {project.type}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">
                  Year
                </p>
                <p className="font-display text-xl text-cream">
                  {project.year}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gold-500/30 px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-cream/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-8 text-cream/75 leading-relaxed space-y-6">
              <p>
                A longer case study lives here — treatment, references, a
                director&apos;s note and a handful of stills from the set.
                Ask us for the full deck and we&apos;ll send it over.
              </p>
              <p>
                Every project on this page is a collaboration with people we
                admire. We&apos;re grateful for the teams, casts and clients
                who make the work possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-gold-500/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">
              Next
            </p>
            <Link
              href={`/portfolio/${next.slug}`}
              className="font-display text-3xl md:text-5xl text-cream hover:text-gold-300 transition-colors"
            >
              {next.title} →
            </Link>
          </div>
          <Link
            href="/portfolio"
            className="link-underline text-[12px] tracking-[0.3em] uppercase text-gold-300"
          >
            All work
          </Link>
        </div>
      </section>
    </>
  );
}
