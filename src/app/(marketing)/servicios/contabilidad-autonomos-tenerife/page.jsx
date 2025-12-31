import Link from "next/link";

export const metadata = {
  title: "Contabilidad para autónomos en Tenerife | CyB Gestión",
  description:
    "Gestión contable para autónomos y pequeñas empresas en Tenerife. Libros, cierres y soporte contable con claridad.",
};

export default function ContabilidadAutonomosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <Link
        href="/servicios"
        className="text-sm text-[var(--muted)] hover:text-[var(--primary)]"
      >
        ← Volver a Servicios
      </Link>

      <h1 className="mt-4 text-3xl font-semibold text-[var(--text)]">
        Contabilidad para autónomos en Tenerife
      </h1>
      <p className="mt-3 max-w-3xl text-[var(--muted)]">
        Orden, control y seguimiento contable para que tengas visibilidad y
        cumplas con tus obligaciones sin estrés.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Qué incluye
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>Organización contable y soporte</li>
            <li>Libros y cierres (según corresponda)</li>
            <li>Control y revisión de documentación</li>
            <li>Coordinación con fiscalidad</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Casos típicos
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>“Quiero llevar mis cuentas al día”</li>
            <li>“Necesito ordenar gastos e ingresos”</li>
            <li>“Quiero evitar errores en presentaciones”</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
        <h3 className="text-base font-semibold text-[var(--text)]">
          ¿Hablamos de tu contabilidad?
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Escribinos y te orientamos según tu situación.
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
