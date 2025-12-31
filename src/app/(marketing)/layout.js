import localFont from "next/font/local";
import "../././globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/layout/StickyWhatsApp";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "CyB Gestión | Gestoría en La Laguna",
  description:
    "Asesoría fiscal, contable y laboral en La Laguna, Tenerife. IGIC, renta, autónomos y empresas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg)] text-[var(--text)]`}
      >
        <Header />
        {children}
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AccountingService",
      name: "CyB Gestión",
      image: "https://tudominio.com/og-image.jpg", // opcional
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle ________", // completar
        addressLocality: "San Cristóbal de La Laguna",
        addressRegion: "Santa Cruz de Tenerife",
        postalCode: "38201",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "28.4874", // opcional
        longitude: "-16.3159",
      },
      url: "https://tudominio.com",
      telephone: "+34 922 256 767",
      priceRange: "€€",
      openingHours: "Mo-Fr 08:00-14:00",
      areaServed: "Tenerife",
      sameAs: [
        "https://www.google.com/maps?cid=XXXXXXXX", // cuando lo tengáis
      ],
    }),
  }}
/>;
