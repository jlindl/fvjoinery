import type { Metadata, Viewport } from "next";
import { Archivo, Work_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./smooth-scroll";
import ScrollProgress from "./scroll-progress";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import CallBar from "./call-bar";
import { ALL_SERVICES, AREAS, BUSINESS } from "./site";

/* Archivo replaces the previous slab serif: the logo wordmark is a close-set
   geometric sans, and a slab fought it. Variable weight so headings can run to
   800 without loading extra files. */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | Joiners & Builders in ${BUSINESS.base}`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description:
    "Fitted joinery and building work across Leicestershire and the Midlands. Alcove units, wall panelling, kitchens, bathrooms, renovations and finishes. Free itemised quotes. Free itemised quotes.",
  keywords: [
    "joiner Leicestershire",
    "carpenter Leicester",
    "bespoke joinery Leicestershire",
    "building solutions Midlands",
    "kitchen fitting Leicester",
    "bathroom installation Leicestershire",
    "fitted wardrobes Leicester",
    "wall panelling Leicestershire",
    "renovation Midlands",
    "FV Joinery",
  ],
  openGraph: {
    title: `${BUSINESS.name} | Joinery and building, ${BUSINESS.base}`,
    description:
      "Fitted joinery, building and renovation across Leicestershire and the Midlands. Free itemised quotes, and a team that finishes the last ten per cent.",
    type: "website",
    locale: "en_GB",
    siteName: BUSINESS.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1f1f1e",
};

/* Structured data: one business record for the whole site. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS.name,
  description:
    "Fitted joinery and building work covering Leicestershire and the East and West Midlands. Alcove units, panelling, kitchens, bathrooms, renovations, flooring and finishes.",
  telephone: BUSINESS.phoneRaw,
  email: BUSINESS.email,
  areaServed: AREAS.map((a) => ({ "@type": "City", name: a })),
  address: {
    "@type": "PostalAddress",
    addressRegion: BUSINESS.base,
    addressCountry: "GB",
  },
  sameAs: [BUSINESS.instagram, BUSINESS.tiktok, BUSINESS.google],
  paymentAccepted: "Cash, Debit Card, Credit Card",
  priceRange: "££",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Joinery and building services",
    itemListElement: ALL_SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${archivo.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper font-body text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll />
        <ScrollProgress />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CallBar />
      </body>
    </html>
  );
}
