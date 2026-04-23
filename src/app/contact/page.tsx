import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello."
        intro="We read every message. Tell us about the film, the brand or the brief — and whenever possible, attach a reference or two."
      />
      <ContactSection />
    </>
  );
}
