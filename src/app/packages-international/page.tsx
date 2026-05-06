import PackagesHero from "@/components/packages/PackagesHero";
import PackageFeature from "@/components/packages/PackageFeature";
import SoulCinemaSection from "@/components/SoulCinemaSection";
import { INTERNATIONAL_PACKAGES } from "@/lib/packages";

export const metadata = {
  title: "Packages Pakistan — Rabt Films",
  description:
    "Cinematic wedding film packages crafted in Pakistan — Signature and Heritage.",
};

export default function PackagesPakPage() {
  return (
    <>
      <PackagesHero region="International" />
      <PackageFeature data={INTERNATIONAL_PACKAGES[0]} variant="default" />
      <SoulCinemaSection />
      <PackageFeature data={INTERNATIONAL_PACKAGES[1]} variant="alt" />
      <SoulCinemaSection
        videoSrc="/videos/frame2.mp4"
        headline={
          <>
            Crafted<span className="mx-3 font-light">·</span>With Care
          </>
        }
        body={
          <>
            From first light to the final frame, every film is built by hand —
            graded, scored and shaped to feel like a memory rather than a
            recording. No templates, no shortcuts, just cinema for the day you
            won&apos;t forget.
          </>
        }
      />
      <PackageFeature data={INTERNATIONAL_PACKAGES[2]} variant="default" />
    </>
  );
}
