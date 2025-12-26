const faqs = [
  {
    q: "¿Trabajan con IGIC en Canarias?",
    a: "Sí. Gestionamos IGIC y modelos habituales para autónomos y empresas en Tenerife.",
  },
  {
    q: "¿Atienden autónomos, empresas y particulares?",
    a: "Sí. Adaptamos el servicio según tu situación (autónomo, PYME o persona física).",
  },
  {
    q: "¿Puedo consultar mi caso por WhatsApp?",
    a: "Sí. Podés escribirnos y te indicamos la documentación necesaria y próximos pasos.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold text-[var(--text)]">
          Preguntas frecuentes
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-sm font-semibold text-[var(--text)]">{f.q}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
