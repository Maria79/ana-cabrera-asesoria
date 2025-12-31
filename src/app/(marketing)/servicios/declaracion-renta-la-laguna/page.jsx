import Link from "next/link";

export const metadata = {
  title: "Declaración de la renta en La Laguna | CyB Gestión",
  description:
    "Declaración de la renta en La Laguna, Tenerife. Preparación, revisión y presentación con atención clara y personalizada.",
};

export default function RentaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <Link
        href="/servicios"
        className="text-sm text-[var(--muted)] hover:text-[var(--primary)]"
      >
        ← Volver a Servicios
      </Link>

      <h1 className="mt-4 text-3xl font-semibold text-[var(--text)]">
        Declaración de la renta en La Laguna
      </h1>
      <p className="mt-3 max-w-3xl text-[var(--muted)]">
        Te ayudamos a preparar y revisar la renta, con foco en claridad y evitar
        errores.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Qué incluye
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>Revisión de documentación</li>
            <li>Preparación y comprobación</li>
            <li>Presentación y seguimiento básico</li>
            <li>Resolución de dudas comunes</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Casos típicos
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>“Quiero revisar la renta antes de presentarla”</li>
            <li>“Tengo cambios este año y no estoy seguro”</li>
            <li>“Quiero evitar errores y sanciones”</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
        <h3 className="text-base font-semibold text-[var(--text)]">
          ¿Querés que la revisemos?
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Contactanos y te indicamos qué documentación necesitamos.
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
