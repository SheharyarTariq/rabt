import PageHeader from "@/components/PageHeader";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

export const metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work."
        intro="A curated set of films, commercials and music videos. For the full reel, get in touch — we'll send it over."
      />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
