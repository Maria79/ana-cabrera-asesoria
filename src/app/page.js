import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CasesSection from "@/components/sections/CasesSection";
import TrustSection from "@/components/sections/TrustSection";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata = {
  title:
    "Asesoría fiscal, contable y laboral en La Laguna | Fernández & Rodríguez",
  description:
    "Asesoría fiscal, contable y laboral en La Laguna, Tenerife. Especialistas en IGIC, renta, autónomos y empresas. Nueva dirección: Ana Cabrera.",
  keywords: [
    "asesoría La Laguna",
    "asesoría fiscal Tenerife",
    "IGIC Canarias",
    "asesoría contable La Laguna",
    "asesoría laboral Tenerife",
  ],
  openGraph: {
    title: "Fernández & Rodríguez | Asesoría en La Laguna",
    description:
      "IGIC, renta, autónomos y empresas en La Laguna, Tenerife. Atención clara y cercana.",
    locale: "es_ES",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <FaqSchema />
      <HeroSection />
      <ServicesSection />
      <CasesSection />
      <TrustSection />
      <ContactSection />
      <FaqSection />
    </main>
  );
}
