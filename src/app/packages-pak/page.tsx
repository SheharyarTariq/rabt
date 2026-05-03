import PackagesHero from "@/components/packages/PackagesHero";
import PackageFeature from "@/components/packages/PackageFeature";
import SoulCinemaSection from "@/components/SoulCinemaSection";
import { PAK_PACKAGES } from "@/lib/packages";

export const metadata = {
  title: "Packages Pakistan — Rabt Films",
  description:
    "Cinematic wedding film packages crafted in Pakistan — Signature and Heritage.",
};

export default function PackagesPakPage() {
  return (
    <>
      <PackagesHero />
      <PackageFeature data={PAK_PACKAGES[0]} variant="default" />
      <PackageFeature data={PAK_PACKAGES[1]} variant="alt" />
      <SoulCinemaSection />
    </>
  );
}
