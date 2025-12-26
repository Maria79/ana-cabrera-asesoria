import { FaCheckCircle } from "react-icons/fa";

const bullets = [
  "Asesoría local en La Laguna (Tenerife)",
  "Atención clara, sin tecnicismos innecesarios",
  "Cumplimiento de plazos y seguimiento",
  "Servicios para autónomos, PYMEs y particulares",
];

export default function TrustSection() {
  return (
    <section className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)]">
              Fernández & Rodríguez, una nueva etapa
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              La asesoría mantiene los mismos servicios de siempre, ahora bajo
              la dirección de{" "}
              <strong className="text-[var(--text)]">Ana Cabrera</strong>, con
              una atención más moderna, cercana y transparente.
            </p>

            <ul className="mt-6 grid gap-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-[var(--text)]/90"
                >
                  <FaCheckCircle className="mt-1 text-[var(--primary)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="/sobre-nosotros"
              className="mt-7 inline-flex rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] hover:bg-gray-50"
            >
              Conocer la asesoría
            </a>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm ring-1 ring-[var(--primary)]/10">
            <p className="text-sm font-semibold text-[var(--text)]">
              Ana Cabrera
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              “Mi prioridad es que entiendas qué se presenta, por qué y cuándo.
              Te acompañamos con claridad para que cumplas con Hacienda y tomes
              mejores decisiones.”
            </p>

            <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 text-xs text-[var(--muted)]">
              Tip: cuando tengas la foto real, acá ponemos el retrato y el cargo
              para reforzar confianza.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
