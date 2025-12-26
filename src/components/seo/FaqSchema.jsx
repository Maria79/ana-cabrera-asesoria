export default function FaqSchema() {
  const faqs = [
    {
      question: "¿Trabajan con IGIC en Canarias?",
      answer:
        "Sí. Gestionamos IGIC y modelos habituales para autónomos y empresas en Tenerife.",
    },
    {
      question: "¿Atienden autónomos, empresas y particulares?",
      answer:
        "Sí. Adaptamos el servicio según tu situación: autónomo, PYME o persona física.",
    },
    {
      question: "¿Puedo consultar mi caso por WhatsApp?",
      answer:
        "Sí. Podés escribirnos por WhatsApp y te indicamos los pasos a seguir.",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }),
      }}
    />
  );
}
