import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientStrip from "@/components/ClientStrip";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection limit={4} />
      <TestimonialsSection />
      <ClientStrip />
      <ContactSection />
    </>
  );
}

