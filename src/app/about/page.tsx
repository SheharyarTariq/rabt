import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A studio built on rabt."
        intro="Rabt — connection — is the starting point of every project we take on. A small team of directors, producers and editors building cinematic work for brands, artists and culture."
      />

      <AboutSection />
    </>
  );
}
