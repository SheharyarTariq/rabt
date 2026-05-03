import type { Metadata } from "next";
import "./globals.css";
import { displayFont, scriptFont } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import StickyContactCTA from "@/components/StickyContactCTA";

export const metadata: Metadata = {
  title: {
    default: "Rabt Films — The Art of Rabt",
    template: "%s · Rabt Films",
  },
  description:
    "Rabt Films is a film production company crafting cinematic stories for brands, artists and culture.",
  metadataBase: new URL("https://rabtfilms.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${scriptFont.variable}`}>
      <body className="min-h-screen bg-ink text-cream antialiased">
        <SmoothScroll>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>
        <StickyContactCTA />
      </body>
    </html>
  );
}

