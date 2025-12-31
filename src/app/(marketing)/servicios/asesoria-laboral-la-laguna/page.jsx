import Link from "next/link";

export const metadata = {
  title: "Asesoría laboral en La Laguna | Nóminas y contratos",
  description:
    "Asesoría laboral en La Laguna, Tenerife. Contratos, nóminas, altas/bajas y gestión laboral para autónomos y empresas.",
};

export default function LaboralPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <Link
        href="/servicios"
        className="text-sm text-[var(--muted)] hover:text-[var(--primary)]"
      >
        ← Volver a Servicios
      </Link>

      <h1 className="mt-4 text-3xl font-semibold text-[var(--text)]">
        Asesoría laboral en La Laguna
      </h1>
      <p className="mt-3 max-w-3xl text-[var(--muted)]">
        Gestión laboral con seguimiento: contratos, nóminas y trámites
        habituales.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Qué incluye
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>Altas y bajas</li>
            <li>Contratos y documentación</li>
            <li>Nóminas y seguros sociales</li>
            <li>Asistencia en gestiones laborales habituales</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Casos típicos
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>“Voy a contratar y necesito hacerlo bien”</li>
            <li>“Necesito llevar nóminas al día”</li>
            <li>“Tengo dudas con un trámite laboral”</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
        <h3 className="text-base font-semibold text-[var(--text)]">
          ¿Lo gestionamos juntos?
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Contactanos y te indicamos los próximos pasos.
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
