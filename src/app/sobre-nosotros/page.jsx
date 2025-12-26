// src/app/sobre-nosotros/page.jsx
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"; // TODO: set your real domain
const PAGE_URL = `${SITE_URL}/sobre-nosotros`;

export const metadata = {
  title: "Sobre nosotros | Ana Cabrera Asesoría",
  description:
    "Ana Cabrera Asesoría es la evolución de una asesoría fundada en 1990 (antes Fernández y Rodríguez). Desde el 1 de enero de 2026, Ana Cabrera asume la dirección manteniendo la experiencia y la confianza de siempre.",
  alternates: {
    canonical: "/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre nosotros | Ana Cabrera Asesoría",
    description:
      "Más de 30 años de trayectoria desde 1990. Nueva etapa desde el 1 de enero de 2026 bajo la dirección de Ana Cabrera.",
    url: "/sobre-nosotros",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sobre nosotros | Ana Cabrera Asesoría",
    description:
      "Asesoría con trayectoria desde 1990. Nueva etapa desde 2026 bajo la dirección de Ana Cabrera.",
  },
};

export default function SobreNosotrosPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Ana Cabrera Asesoría",
      url: SITE_URL,
      // If you have a logo later, add:
      // logo: `${SITE_URL}/logo.png`,
      // If you have contact info later, add:
      // telephone: "+34...",
      // email: "contacto@...",
      // address: { "@type": "PostalAddress", addressLocality: "...", addressRegion: "Canarias", addressCountry: "ES" },
      areaServed: ["Canarias", "España"],
      knowsAbout: [
        "Asesoría fiscal",
        "Gestión contable",
        "Impuestos",
        "Asesoramiento administrativo",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${PAGE_URL}#aboutpage`,
      url: PAGE_URL,
      name: "Sobre nosotros | Ana Cabrera Asesoría",
      description:
        "Historia y forma de trabajo de Ana Cabrera Asesoría: evolución de Fernández y Rodríguez (1990) y nueva etapa desde el 1 de enero de 2026.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#localbusiness`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Ana Cabrera Asesoría",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="mb-10">
        <p className="text-sm font-medium text-neutral-600">
          Ana Cabrera Asesoría
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          Sobre nosotros
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700">
          Una asesoría con trayectoria desde 1990, con una nueva etapa desde el{" "}
          <span className="font-medium text-neutral-900">
            1 de enero de 2026
          </span>
          , manteniendo la confianza y el rigor de siempre.
        </p>
      </header>

      {/* “Nueva etapa, misma confianza” */}
      <section className="mb-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-neutral-900">
          Nueva etapa, misma confianza
        </h2>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Tras décadas de trayectoria como{" "}
          <span className="font-medium text-neutral-900">
            Fernández y Rodríguez
          </span>
          , el despacho inicia una nueva etapa bajo el nombre{" "}
          <span className="font-medium text-neutral-900">
            Ana Cabrera Asesoría
          </span>
          . Conservamos la experiencia y la continuidad en la atención, con un
          enfoque aún más personalizado y claro.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contacto" // TODO: adjust if your contact route is different
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Pedir presupuesto
          </Link>
          <Link
            href="/contacto" // TODO: adjust if your contact route is different
            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Enviar consulta
          </Link>
        </div>
      </section>

      {/* Content grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        {/* Left column */}
        <div className="md:col-span-7">
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">
                Quiénes somos
              </h2>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                <span className="font-medium text-neutral-900">
                  Ana Cabrera Asesoría
                </span>{" "}
                es la evolución natural de una asesoría con una trayectoria
                iniciada en{" "}
                <span className="font-medium text-neutral-900">1990</span>, que
                durante décadas operó bajo el nombre de{" "}
                <span className="font-medium text-neutral-900">
                  Fernández y Rodríguez
                </span>
                .
              </p>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                Desde el{" "}
                <span className="font-medium text-neutral-900">
                  1 de enero de 2026
                </span>
                , la asesoría pasa a estar dirigida por{" "}
                <span className="font-medium text-neutral-900">
                  Ana Cabrera
                </span>
                , manteniendo la experiencia, los valores y la base de clientes
                construida a lo largo de más de 30 años, y dando inicio a una
                nueva etapa con identidad propia.
              </p>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                Atendemos a clientes en{" "}
                <span className="font-medium text-neutral-900">Canarias</span>,
                y también de forma{" "}
                <span className="font-medium text-neutral-900">
                  online en toda España
                </span>
                , ofreciendo servicios fiscales, contables y administrativos con
                un enfoque cercano, profesional y orientado a la tranquilidad
                del cliente.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-neutral-900">
                Nuestra historia
              </h2>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                La asesoría fue fundada en 1990 bajo la denominación{" "}
                <span className="font-medium text-neutral-900">
                  Fernández y Rodríguez
                </span>
                , consolidándose con el paso de los años como un despacho de
                referencia en la región por su seriedad y continuidad.
              </p>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                Durante{" "}
                <span className="font-medium text-neutral-900">10 años</span>,
                Ana Cabrera formó parte del equipo de Fernández y Rodríguez,
                adquiriendo un conocimiento profundo del funcionamiento interno,
                los procesos y la relación con los clientes.
              </p>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                El{" "}
                <span className="font-medium text-neutral-900">
                  1 de enero de 2026
                </span>
                , Ana Cabrera asume la dirección del despacho, iniciando una
                nueva etapa bajo el nombre{" "}
                <span className="font-medium text-neutral-900">
                  Ana Cabrera Asesoría
                </span>
                , que combina la experiencia acumulada con una visión renovada y
                una atención aún más personalizada.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-neutral-900">
                Qué problema resolvemos
              </h2>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                Acompañamos a autónomos y pequeñas empresas para que puedan{" "}
                <span className="font-medium text-neutral-900">
                  cumplir correctamente con sus obligaciones fiscales y
                  administrativas
                </span>
                , evitando errores, sanciones y preocupaciones innecesarias, con
                un asesoramiento claro y continuo.
              </p>
            </div>
          </section>
        </div>

        {/* Right column */}
        <aside className="md:col-span-5">
          <div className="sticky top-6 space-y-6">
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-neutral-900">
                Nuestra forma de trabajar
              </h2>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• Atención personalizada y trato cercano</li>
                <li>• Continuidad y conocimiento profundo del cliente</li>
                <li>• Rigor técnico y actualización constante</li>
                <li>• Comunicación clara, sin tecnicismos innecesarios</li>
                <li>• Cumplimiento estricto de plazos y normativa</li>
                <li>• Relación de confianza a largo plazo</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-neutral-900">
                Servicios principales
              </h2>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• Asesoría fiscal</li>
                <li>• Gestión contable</li>
                <li>• Presentación y seguimiento de impuestos</li>
                <li>• Asesoramiento administrativo</li>
                <li>• Atención continua y personalizada</li>
              </ul>

              <div className="mt-5">
                <Link
                  href="/servicios"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
                >
                  Ver todos los servicios
                </Link>
              </div>
            </section>

            <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="text-lg font-semibold text-neutral-900">
                ¿Hablamos?
              </h2>
              <p className="mt-2 text-neutral-700 leading-relaxed">
                Si buscás una asesoría con experiencia, cercanía y una gestión
                clara desde el primer día, estaremos encantados de ayudarte.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contacto" // TODO: adjust if needed
                  className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                >
                  Enviar consulta
                </Link>
                <p className="text-xs text-neutral-600">
                  Atención en español · Presencial en Canarias · Online en toda
                  España
                </p>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </main>
  );
}
