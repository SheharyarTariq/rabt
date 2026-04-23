import localFont from "next/font/local";

export const displayFont = localFont({
  src: "../../public/fonts/Benaya.ttf",
  variable: "--font-display",
  display: "swap",
});

export const scriptFont = localFont({
  src: "../../public/fonts/RestrainDemo.ttf",
  variable: "--font-script",
  display: "swap",
});
