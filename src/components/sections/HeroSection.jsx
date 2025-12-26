"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../forms/ContactForm";

const WHATSAPP_NUMBER = "34646740176";
const PHONE_NUMBER = "922256767";

export default function HeroSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola Ana, necesito ayuda con (IGIC / renta / autónomo / empresa). ¿Podemos hablar?"
  )}`;
  const phoneLink = `tel:${PHONE_NUMBER}`;

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | ok | error | invalid
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    setStatus("idle");
    setErrorMsg("");

    const form = e.currentTarget;
    const payload = {
      name: form.name.value?.trim(),
      contact: form.contact.value?.trim(),
      topic: form.topic.value?.trim(),
      message: form.message.value?.trim(),
      website: form.website.value?.trim(), // ✅ honeypot
    };

    if (!payload.name || !payload.contact || !payload.message) {
      setStatus("invalid");
      setErrorMsg("Por favor completa nombre, contacto y mensaje.");
      return;
    }

    if (payload.message.length < 10) {
      setStatus("invalid");
      setErrorMsg("Contanos un poco más (mínimo 10 caracteres).");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let apiError = "";
        try {
          const data = await res.json();
          apiError = data?.error || "";
        } catch {}
        setStatus("error");
        setErrorMsg(
          apiError || "No se pudo enviar el mensaje. Intentalo más tarde."
        );
        return;
      }

      form.reset();
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Error de conexión. Intentalo más tarde.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="border-b border-[var(--border)] bg-gradient-to-b from-white to-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
              Asesoría fiscal, contable y laboral en La Laguna
            </h1>

            <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">
              IGIC, impuestos, contabilidad y gestión laboral para{" "}
              <strong className="text-[var(--text)]">
                autónomos, PYMEs y particulares
              </strong>
              . Trato claro, sin tecnicismos innecesarios, y enfoque en cumplir
              plazos y pagar lo justo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90"
              >
                <FaWhatsapp />
                Hablar por WhatsApp
              </a>

              <a
                href={phoneLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-white px-5 py-3 text-sm font-medium text-[var(--text)] hover:bg-gray-50"
              >
                <FaPhoneAlt className="text-[var(--primary)]" />
                Llamar ahora
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-[var(--muted)] sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--border)] bg-white p-3 shadow-sm">
                <p className="font-medium text-[var(--text)]">IGIC & Modelos</p>
                <p className="mt-1">Trimestrales y anuales</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-white p-3 shadow-sm">
                <p className="font-medium text-[var(--text)]">Renta</p>
                <p className="mt-1">Declaración y revisión</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-white p-3 shadow-sm">
                <p className="font-medium text-[var(--text)]">Laboral</p>
                <p className="mt-1">Nóminas y contratos</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-lg font-semibold text-[var(--text)]">
              Pide una consulta
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Envíanos tu consulta y te respondemos lo antes posible.
            </p>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
