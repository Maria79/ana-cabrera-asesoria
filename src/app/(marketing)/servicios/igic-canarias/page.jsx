import Link from "next/link";

export const metadata = {
  title: "IGIC en Canarias | Asesoría en Tenerife (La Laguna)",
  description:
    "Gestión de IGIC en Canarias para autónomos y empresas. Modelos habituales, revisión y presentación en Tenerife (La Laguna).",
};

export default function IgicPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <Link
        href="/servicios"
        className="text-sm text-[var(--muted)] hover:text-[var(--primary)]"
      >
        ← Volver a Servicios
      </Link>

      <h1 className="mt-4 text-3xl font-semibold text-[var(--text)]">
        IGIC en Canarias
      </h1>
      <p className="mt-3 max-w-3xl text-[var(--muted)]">
        En Canarias se aplica IGIC. Te ayudamos con la preparación, revisión y
        presentación de modelos habituales, evitando errores y retrasos.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Qué incluye
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>Revisión de facturación y criterios básicos</li>
            <li>Preparación de modelos periódicos (según tu caso)</li>
            <li>Control de plazos y presentación</li>
            <li>Resolución de dudas frecuentes</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Casos típicos
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>“Estoy empezando como autónomo y no sé qué presentar”</li>
            <li>“Quiero asegurarme de que el IGIC está bien”</li>
            <li>“Tengo atrasos o dudas con trimestres”</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
        <h3 className="text-base font-semibold text-[var(--text)]">
          ¿Te ayudamos con IGIC?
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Contactanos y te decimos qué necesitamos para revisar tu caso.
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
