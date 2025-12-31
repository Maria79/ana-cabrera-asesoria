import Link from "next/link";

export const metadata = {
  title: "Servicios de asesoría en La Laguna | CyB Gestión",
  description:
    "Servicios de asesoría fiscal, contable y laboral en La Laguna, Tenerife. IGIC, renta, autónomos, empresas y gestión laboral.",
};

const services = [
  {
    title: "Asesoría fiscal en La Laguna",
    desc: "Impuestos, modelos, renta, sociedades y alquileres. Enfoque claro y cumplimiento de plazos.",
    href: "/servicios/asesoria-fiscal-la-laguna",
  },
  {
    title: "IGIC en Canarias",
    desc: "Gestión de IGIC y modelos habituales para autónomos y empresas en Tenerife.",
    href: "/servicios/igic-canarias",
  },
  {
    title: "Contabilidad para autónomos",
    desc: "Contabilidad, libros, cierres y control fiscal para autónomos y pequeñas empresas.",
    href: "/servicios/contabilidad-autonomos-tenerife",
  },
  {
    title: "Asesoría laboral en La Laguna",
    desc: "Contratos, nóminas, altas/bajas y gestión laboral con seguimiento.",
    href: "/servicios/asesoria-laboral-la-laguna",
  },
  {
    title: "Declaración de la renta en La Laguna",
    desc: "Preparación, revisión y presentación de la renta con atención personalizada.",
    href: "/servicios/declaracion-renta-la-laguna",
  },
];

export default function ServiciosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-semibold text-[var(--text)]">Servicios</h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Asesoría fiscal, contable y laboral en La Laguna (Tenerife). Elegí el
        servicio que necesitás y contanos tu caso.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.href}
            className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-[var(--text)]">
              {s.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {s.desc}
            </p>

            <Link
              href={s.href}
              className="mt-5 inline-flex text-sm font-medium text-[var(--primary)] underline underline-offset-4 hover:text-[var(--primary-2)]"
            >
              Ver detalle
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
        <h3 className="text-base font-semibold text-[var(--text)]">
          ¿No sabés cuál elegir?
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Escribinos por WhatsApp y te orientamos en 1 minuto.
        </p>
        <Link
          href="/contacto"
          className="mt-4 inline-flex rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] hover:bg-gray-50"
        >
          Ir a Contacto
        </Link>
      </div>
    </main>
  );
}
