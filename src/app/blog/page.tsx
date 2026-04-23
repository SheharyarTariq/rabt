import PageHeader from "@/components/PageHeader";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Notes from the cutting room."
        intro="Short essays on craft, process and the films that shaped us. Written by the team, updated when we actually have something to say."
      />
      <BlogSection />
      <ContactSection />
    </>
  );
}
