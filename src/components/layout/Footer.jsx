import Link from "next/link";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "346467401765"; // TODO: replace
const PHONE_NUMBER = "922256767"; // TODO: replace

export default function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola Ana, me gustaría pedir una cita. ¿Podemos hablar?"
  )}`;
  const phoneLink = `tel:${PHONE_NUMBER}`;

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] text-sm font-semibold text-white shadow-sm">
                CyB
              </div>
              <div className="leading-tight">
                <p className="text-base font-semibold text-[var(--text)]">
                  CyB Gestión
                </p>
                <p className="text-sm text-[var(--muted)]">
                  Asesoría Fiscal · Contable · Laboral
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
              Asesoría en La Laguna, Tenerife. Atención clara y cercana para
              autónomos, empresas y particulares. Nueva dirección:{" "}
              <strong className="text-[var(--text)]">Ana Cabrera</strong>.
            </p>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <a
                href={whatsappLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 shadow-sm"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
              <a
                href={phoneLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] hover:bg-gray-50"
              >
                <FaPhoneAlt className="text-[var(--primary)]" />
                Llamar
              </a>
            </div>
          </div>

          {/* Contact / NAP */}
          <div>
            <p className="text-sm font-semibold text-[var(--text)]">Contacto</p>
            <ul className="mt-3 grid gap-3 text-sm text-[var(--muted)]">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-[var(--primary)]" />
                <span>
                  <span className="font-medium text-[var(--text)]">
                    Dirección:
                  </span>{" "}
                  C/. El Juego-Pasaje Tunel de Aguere-Local 3º Derecha. 38201
                  San Cristobal de La Laguna
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1 text-[var(--primary)]" />
                <span>
                  <span className="font-medium text-[var(--text)]">Tel:</span>{" "}
                  {PHONE_NUMBER}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaClock className="mt-1 text-[var(--primary)]" />
                <span>
                  <span className="font-medium text-[var(--text)]">
                    Horario:
                  </span>{" "}
                  Lun–Vie 08:00–14:00
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-[var(--text)]">Enlaces</p>
            <ul className="mt-3 grid gap-2 text-sm">
              <li>
                <Link
                  className="text-[var(--muted)] hover:text-[var(--primary)]"
                  href="/servicios"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  className="text-[var(--muted)] hover:text-[var(--primary)]"
                  href="/sobre-nosotros"
                >
                  Sobre nosotras
                </Link>
              </li>
              <li>
                <Link
                  className="text-[var(--muted)] hover:text-[var(--primary)]"
                  href="/contacto"
                >
                  Contacto
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  className="text-[var(--muted)] hover:text-[var(--primary)]"
                  href="/aviso-legal"
                >
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link
                  className="text-[var(--muted)] hover:text-[var(--primary)]"
                  href="/politica-privacidad"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  className="text-[var(--muted)] hover:text-[var(--primary)]"
                  href="/cookies"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CyB Gestión · La Laguna, Tenerife</p>
          <p>Servicios fiscales, contables y laborales · IGIC Canarias</p>
        </div>
      </div>
    </footer>
  );
}
