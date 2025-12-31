import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "CyB Gestión Laguna SL",
  description:
    "Asesoría fiscal, contable y laboral en La Laguna, Tenerife. IGIC, renta, autónomos y empresas.",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "CyB Gestión",
    image: "https://tudominio.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle El Juego-Pasaje Tunel de Aguere-Local 3º Derecha",
      addressLocality: "San Cristóbal de La Laguna",
      addressRegion: "Santa Cruz de Tenerife",
      postalCode: "38201",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4874",
      longitude: "-16.3159",
    },
    url: "https://tudominio.com",
    telephone: "+34 922 256 767",
    priceRange: "€€",
    openingHours: "Mo-Fr 08:00-14:00",
    areaServed: "Tenerife",
    sameAs: ["https://www.google.com/maps?cid=XXXXXXXX"],
  };

  return (
    <ClerkProvider>
      <html lang="es">
        <body>
          {/* JSON-LD (LocalBusiness/AccountingService) */}
          <Script
            id="localbusiness-jsonld"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
