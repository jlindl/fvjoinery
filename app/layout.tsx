import type { Metadata, Viewport } from "next";
import { Zilla_Slab, Work_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./smooth-scroll";
import ScrollProgress from "./scroll-progress";
import TapeRail from "./tape-rail";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-zilla",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
  display: "swap",
});

export const metadata: Metadata = {
  title: "F&V Handyman Services | Nottingham Handyman & Joinery — Open 24/7",
  description:
    "Honest handyman and joinery work in Nottingham and nationwide. Door fitting, carpentry, painting, flooring, tiling, kitchens, bathrooms, bespoke made-to-measure joinery and more. Open 24/7, free consultation, cash and cards accepted. No job too small.",
  keywords: [
    "handyman Nottingham",
    "carpenter Nottingham",
    "bespoke joinery Nottingham",
    "kitchen fitting",
    "bathroom fitting",
    "tiling",
    "flooring",
    "painting and decorating",
    "door fitting",
    "24/7 handyman",
  ],
  openGraph: {
    title: "F&V Handyman Services — Nottingham handyman & joinery, open 24/7",
    description:
      "Fix it, fit it or build it. Fair prices, real craftsmanship, and we keep you posted at every step. Free consultation. No job too small.",
    type: "website",
    locale: "en_GB",
    siteName: "F&V Handyman Services",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#8b5a2b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${zilla.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper font-body text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll />
        <ScrollProgress />
        <TapeRail />
        {children}
      </body>
    </html>
  );
}
