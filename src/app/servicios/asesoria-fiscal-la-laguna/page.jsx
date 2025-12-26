import Link from "next/link";

export const metadata = {
  title: "Asesoría fiscal en La Laguna (Tenerife) | Fernández & Rodríguez",
  description:
    "Asesoría fiscal en La Laguna, Tenerife. Impuestos, modelos, renta, sociedades y alquileres. Atención clara y personalizada.",
};

export default function AsesoriaFiscalPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <Link
        href="/servicios"
        className="text-sm text-[var(--muted)] hover:text-[var(--primary)]"
      >
        ← Volver a Servicios
      </Link>

      <h1 className="mt-4 text-3xl font-semibold text-[var(--text)]">
        Asesoría fiscal en La Laguna
      </h1>
      <p className="mt-3 max-w-3xl text-[var(--muted)]">
        Gestión fiscal para autónomos, empresas y particulares en Tenerife. Te
        ayudamos a presentar todo en fecha y con claridad.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Qué incluye
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>Modelos trimestrales y anuales</li>
            <li>Renta y declaraciones informativas</li>
            <li>Impuesto de sociedades (si aplica)</li>
            <li>Alquileres e impuestos asociados</li>
            <li>Revisión y planificación básica</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Casos típicos
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>“Soy autónomo y tengo modelos trimestrales”</li>
            <li>“Tengo dudas con impuestos por alquileres”</li>
            <li>“Quiero estar al día y evitar errores”</li>
            <li>“Necesito revisar una declaración”</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
        <h3 className="text-base font-semibold text-[var(--text)]">
          ¿Querés que revisemos tu caso?
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Escribinos por WhatsApp o dejá tu consulta y te respondemos.
        </p>
        <Link
          href="/contacto"
          className="mt-4 inline-flex rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[var(--primary-2)]"
        >
          Contactar
        </Link>
      </div>
    </main>
  );
}
