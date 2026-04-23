import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we make."
        intro="From a 30-second commercial to a long-form documentary — we take on a small number of projects each year, and we do them end-to-end."
      />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
