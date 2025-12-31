import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const WHATSAPP_NUMBER = "346467401765";
const PHONE_NUMBER = "922256767";

export default function ContactSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola Ana, me gustaría pedir una cita. ¿Qué horarios tienen?"
  )}`;
  const phoneLink = `tel:${PHONE_NUMBER}`;

  return (
    <section className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Contacto</h2>
        <p className="mt-2 text-[var(--muted)]">
          Estamos en La Laguna. Escribinos por WhatsApp o llamanos.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <p className="flex items-center gap-2 text-sm font-medium text-[var(--text)]">
              <FaWhatsapp className="text-[var(--accent)]" /> WhatsApp
            </p>
            <a
              className="mt-3 inline-flex rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90"
              href={whatsappLink}
            >
              Abrir chat
            </a>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <p className="flex items-center gap-2 text-sm font-medium text-[var(--text)]">
              <FaPhoneAlt className="text-[var(--primary)]" /> Teléfono
            </p>
            <a
              className="mt-3 inline-flex rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] hover:bg-gray-50"
              href={phoneLink}
            >
              Llamar ahora
            </a>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <p className="flex items-center gap-2 text-sm font-medium text-[var(--text)]">
              <FaMapMarkerAlt className="text-[var(--primary)]" /> Ubicación
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              C/. El Juego-Pasaje, <br />
              Tunel de Aguere-Local 3º Derecha,
              <br />
              38201 San Cristobal de La Laguna, Tenerife
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
