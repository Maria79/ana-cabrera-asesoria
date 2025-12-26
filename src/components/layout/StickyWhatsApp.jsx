"use client";

import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "34646740176"; // TODO: confirmar número

export default function StickyWhatsApp() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola Ana, me gustaría pedir una cita. ¿Podemos hablar?"
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg transition hover:scale-105 hover:shadow-xl md:h-16 md:w-16"
    >
      <FaWhatsapp className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
