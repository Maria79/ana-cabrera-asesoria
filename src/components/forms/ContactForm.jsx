// src/components/forms/ContactForm.jsx
"use client";

import { useState } from "react";

export default function ContactForm({ compact = false }) {
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
      topic: form.topic?.value?.trim(),
      message: form.message.value?.trim(),
      website: form.website.value?.trim(), // honeypot
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
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMsg(
          data?.error || "No se pudo enviar el mensaje. Intentalo más tarde."
        );
        return;
      }

      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
      setErrorMsg("Error de conexión. Intentalo más tarde.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="grid gap-3" onSubmit={handleSubmit}>
      {/* Honeypot */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <input
        className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm"
        placeholder="Nombre y apellidos"
        name="name"
        required
      />

      <input
        className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm"
        placeholder="Teléfono o email"
        name="contact"
        required
      />

      {!compact && (
        <select
          className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm"
          name="topic"
          defaultValue=""
        >
          <option value="" disabled>
            Tipo de servicio
          </option>
          <option>Asesoría fiscal (IGIC / impuestos)</option>
          <option>Contabilidad</option>
          <option>Laboral</option>
          <option>Renta y patrimonio</option>
        </select>
      )}

      <textarea
        className="min-h-[110px] w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm"
        placeholder="Cuéntanos tu caso (breve)"
        name="message"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Enviar consulta"}
      </button>

      {status === "ok" && (
        <p className="text-sm text-green-700">
          Mensaje enviado. Te responderemos pronto.
        </p>
      )}

      {(status === "invalid" || status === "error") && (
        <p className="text-sm text-red-700">
          {errorMsg || "Revisá los campos e intentá de nuevo."}
        </p>
      )}

      <p className="text-xs text-[var(--muted)]">
        Al enviar, aceptás que usemos tus datos solo para responder tu consulta.
      </p>
    </form>
  );
}
