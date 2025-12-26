const cases = [
  "Soy autónomo y necesito ayuda con IGIC y modelos trimestrales",
  "Quiero crear una empresa y no sé por dónde empezar",
  "Tengo alquileres y dudas con Hacienda",
  "Necesito hacer la declaración de la renta",
  "Busco una asesoría cercana en La Laguna",
];

export default function CasesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold text-[var(--text)]">
          Casos típicos que resolvemos
        </h2>
        <p className="mt-2 text-[var(--muted)]">
          Si te identificás con alguno, escribinos y lo vemos rápido.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {cases.map((c) => (
            <div
              key={c}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-sm text-[var(--text)]/90">{c}</p>
              <a
                href="/contacto"
                className="mt-4 inline-flex text-sm font-medium text-[var(--primary)] underline underline-offset-4 hover:text-[var(--primary-2)]"
              >
                Consultar mi caso
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
