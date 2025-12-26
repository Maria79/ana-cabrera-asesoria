import { FaBalanceScale, FaCalculator, FaUsersCog } from "react-icons/fa";

const services = [
  {
    title: "Asesoría Fiscal",
    desc: "IGIC, modelos, renta, patrimonio, sociedades, alquileres y trámites con Hacienda.",
    icon: FaBalanceScale,
  },
  {
    title: "Contabilidad",
    desc: "Gestión contable, libros, cierres, control fiscal y soporte para autónomos y empresas.",
    icon: FaCalculator,
  },
  {
    title: "Laboral",
    desc: "Altas/bajas, contratos, nóminas, seguros sociales y asesoramiento laboral.",
    icon: FaUsersCog,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)]">
              Servicios principales
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Todo lo que necesitás en un solo lugar, con trato claro y cercano.
            </p>
          </div>
          <a
            href="/servicios"
            className="hidden rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] hover:bg-gray-50 md:inline-flex"
          >
            Ver todos
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg)]">
                    <Icon className="text-[var(--primary)]" />
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {s.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {s.desc}
                </p>

                <a
                  href="/contacto"
                  className="mt-5 inline-flex text-sm font-medium text-[var(--primary)] underline underline-offset-4 hover:text-[var(--primary-2)]"
                >
                  Consultar
                </a>
              </article>
            );
          })}
        </div>

        <a
          href="/servicios"
          className="mt-8 inline-flex rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] hover:bg-gray-50 md:hidden"
        >
          Ver todos los servicios
        </a>
      </div>
    </section>
  );
}
