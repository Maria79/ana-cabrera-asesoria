// src/app/contacto/page.jsx
import ContactSection from "@/components/sections/ContactSection";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contacto | Ana Cabrera Asesoría",
  description:
    "Contacta con Ana Cabrera Asesoría en La Laguna, Tenerife. WhatsApp, teléfono y formulario de consulta. Atención presencial en Canarias y online en toda España.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | Ana Cabrera Asesoría",
    description:
      "Escribinos por WhatsApp, llamanos o enviá tu consulta por el formulario.",
    url: "/contacto",
    type: "website",
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* Sección existente: WhatsApp / Teléfono / Ubicación */}
      <ContactSection />

      {/* Formulario reutilizable */}
      <section className="bg-[var(--bg)]">
        <div className="mx-auto max-w-6xl px-4 pb-14">
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-[var(--text)]">
                Enviá tu consulta
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Te respondemos lo antes posible.
              </p>

              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-[var(--text)]">
                Atención y alcance
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Atención presencial en Canarias y también online en toda España.
              </p>

              <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <p>
                  Si tu consulta es urgente, WhatsApp suele ser lo más rápido.
                </p>
                <p>
                  Si es una gestión compleja, contanos el contexto en el mensaje
                  y te respondemos con los próximos pasos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
