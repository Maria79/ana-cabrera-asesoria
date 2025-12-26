# Ana Cabrera Asesoría – Web corporativa & SaaS fiscal (en construcción)

Este repositorio contiene la **web corporativa oficial de Ana Cabrera Asesoría / Gestoría**, desarrollada con **Next.js**, y sirve como **base técnica y conceptual** para la evolución futura hacia un **SaaS fiscal inteligente** orientado a autónomos, pymes y profesionales en España (con especial foco en Canarias).

El proyecto se está construyendo en fases, priorizando primero **presencia online sólida, SEO local y captación de leads**, antes de avanzar hacia funcionalidades SaaS avanzadas.

---

## 🎯 Objetivos del proyecto

### Objetivos actuales (Web)
- Presencia profesional y confiable para la asesoría.
- Captación de clientes mediante formulario de contacto real.
- SEO local orientado a servicios fiscales y gestoría.
- Base técnica limpia y escalable.

### Objetivos futuros (SaaS)
- Plataforma SaaS fiscal para clientes:
  - Gestión de modelos fiscales.
  - Subida y análisis de documentos.
  - Asistente AI fiscal.
  - Automatización y seguimiento.
- Reutilizar la base web actual como landing y entrada al SaaS.

---

## 🧱 Stack tecnológico actual

El proyecto utiliza deliberadamente un stack **sencillo, estable y probado**, ideal para una primera fase profesional:

### Frontend
- **Next.js 14 (App Router)**
- **React 18**
- **TailwindCSS** – estilos rápidos, consistentes y escalables
- **clsx** – gestión limpia de clases condicionales
- **react-icons** – iconografía ligera
- **next-seo** – SEO técnico por página (meta tags, Open Graph, etc.)

### Formularios y contacto
- **react-hook-form** – validación y control de formularios
- **Nodemailer** – envío real de emails desde el backend (API Routes)

### Calidad y tooling
- **ESLint + eslint-config-next**
- Scripts estándar (`dev`, `build`, `start`, `lint`)

---

## 📁 Estructura general del proyecto

- `/app`  
  - Páginas principales (Home, Servicios, Contacto, etc.)
  - Rutas de API (`/api/contact`)
- `/components`  
  - Componentes reutilizables (Hero, formularios, secciones, layout)
- `/public`  
  - Recursos estáticos
- `/styles`  
  - Estilos globales (Tailwind)

---

## ✉️ Sistema de contacto implementado

Actualmente la web incluye:

- Formulario real de contacto.
- Envío de email a una cuenta Gmail mediante **Nodemailer**.
- Validación básica de campos.
- Protección anti-spam mediante **honeypot invisible**.
- Base preparada para:
  - Email de confirmación automática al cliente.
  - Logs o guardado futuro en base de datos.

---

## 🔍 SEO y visibilidad

Ya se está trabajando en:

- SEO técnico por página (`next-seo`).
- Enfoque en **SEO local**:
  - Servicios de asesoría fiscal.
  - Gestoría.
  - IGIC y fiscalidad canaria.
- Preparación para:
  - Rich snippets.
  - Schema.org (LocalBusiness).
  - Páginas de servicio específicas (`/servicios/...`).

---

## 🚀 Roadmap (próximos pasos)

### Fase 1 – Web corporativa (actual)
- [x] Next.js + Tailwind
- [x] Formulario real con email
- [x] SEO técnico básico
- [ ] Páginas de servicios individuales
- [ ] Copy optimizado para conversión
- [ ] Schema.org (LocalBusiness)

### Fase 2 – Preparación SaaS
- [ ] Autenticación de usuarios
- [ ] Área privada de clientes
- [ ] Base de datos
- [ ] Subida de documentos

### Fase 3 – SaaS fiscal con IA
- [ ] Análisis automático de modelos fiscales
- [ ] Asistente AI fiscal
- [ ] Alertas y recordatorios
- [ ] Monetización por suscripción

---

## 🧠 Filosofía del proyecto

Este proyecto no es solo una web, sino la **base de un producto digital a largo plazo**, construido con mentalidad de:

- Escalabilidad.
- Claridad técnica.
- Prioridad en negocio real (clientes, no solo código).
- Evolución progresiva sin rehacer desde cero.

---

📌 **Nota**  
Este README evolucionará junto con el proyecto a medida que se incorporen funcionalidades SaaS, IA y automatización fiscal.
