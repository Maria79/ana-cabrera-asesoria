"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const WHATSAPP_NUMBER = "34646740176"; // TODO: replace
const PHONE_NUMBER = "9222567676"; // TODO: replace

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre nosotras" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola Ana, me gustaría pedir una cita. ¿Podemos hablar?"
  )}`;
  const phoneLink = `tel:${PHONE_NUMBER}`;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary)] text-sm font-semibold text-white shadow-sm">
            CyB
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[var(--text)]">
              CyB Gestión
            </p>
            <p className="text-xs text-[var(--muted)]">Asesoría · La Laguna</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "rounded-xl px-3 py-2 text-sm font-medium transition",
                  active
                    ? "bg-[var(--bg)] text-[var(--primary)]"
                    : "text-[var(--muted)] hover:bg-white hover:text-[var(--text)]",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={phoneLink}
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] hover:bg-gray-50"
          >
            <FaPhoneAlt className="text-[var(--primary)]" />
            Llamar
          </a>
          <a
            href={whatsappLink}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 shadow-sm"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-white p-2 text-[var(--text)] hover:bg-gray-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="border-t border-[var(--border)] bg-white">
            <nav className="mx-auto max-w-6xl px-4 py-4">
              <div className="grid gap-2">
                {navLinks.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={[
                        "rounded-xl px-4 py-3 text-sm font-medium transition",
                        active
                          ? "bg-[var(--bg)] text-[var(--primary)]"
                          : "text-[var(--muted)] hover:bg-gray-50 hover:text-[var(--text)]",
                      ].join(" ")}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 grid gap-2">
                <a
                  href={phoneLink}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--text)] hover:bg-gray-50"
                >
                  <FaPhoneAlt className="text-[var(--primary)]" />
                  Llamar
                </a>
                <a
                  href={whatsappLink}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white hover:opacity-90 shadow-sm"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>

              <p className="mt-4 text-center text-xs text-[var(--muted)]">
                La Laguna, Tenerife · Nueva dirección: Ana Cabrera
              </p>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
