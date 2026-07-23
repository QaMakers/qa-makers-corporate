import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, MapPin } from 'lucide-react';

const WA_URL =
  'https://wa.me/524422691289?text=Hola.%20Vi%20la%20p%C3%A1gina%20de%20QA%20Makers%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.';

const SERVICES = [
  { label: 'QA Strategy', href: '#servicios' },
  { label: 'Test Automation', href: '#servicios' },
  { label: 'Functional & API Testing', href: '#servicios' },
  { label: 'Performance Engineering', href: '#servicios' },
  { label: 'QA Leadership', href: '#servicios' },
  { label: 'Managed QA Teams', href: '#servicios' },
];

const PRODUCTS = [
  {
    name: 'QM Connect',
    desc: 'Agenda, clientes y operación para negocios de servicios.',
    cta: 'Conocer QM Connect',
    href: 'https://qmconnect.app',
  },
  {
    name: 'QM StoreFlow',
    desc: 'Catálogo, inventario y operación comercial para retail.',
    cta: 'Conocer QM StoreFlow',
    href: 'https://qmstoreflow.com',
  },
];

/* ── Brand block (shared between mobile and desktop) ── */
function BrandBlock() {
  return (
    <div>
      <a href="#" aria-label="QA Makers — inicio">
        <img
          src="/brand/logo-qamakers.png"
          alt="QA Makers"
          className="brightness-0 invert object-contain"
          style={{ width: '130px', height: 'auto' }}
          draggable={false}
          loading="eager"
        />
      </a>
      <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-[210px]">
        Quality Engineering, consultoría tecnológica y productos SaaS.
      </p>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-white/35">
        <MapPin size={11} className="shrink-0" aria-hidden="true" />
        León, Guanajuato, México
      </p>
      <a
        href="#nosotros"
        className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-white/50 hover:text-white transition-colors duration-150 group"
      >
        Conoce QA Makers
        <ArrowUpRight
          size={11}
          aria-hidden="true"
          className="opacity-60 group-hover:opacity-100 group-hover:-translate-y-px group-hover:translate-x-px transition-all duration-150"
        />
      </a>
    </div>
  );
}

/* ── Accordion section for mobile ── */
function AccordionSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    /* Native details/summary — no JS state, fully accessible, keyboard-friendly */
    <details className="group border-b border-white/[0.07]">
      <summary className="flex items-center justify-between py-4 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:text-white">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-white/45">
          {title}
        </span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className="text-white/30 transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="pb-5">{children}</div>
    </details>
  );
}

/* ── Bottom bar (shared) ── */
function BottomBar() {
  return (
    <div className="mt-10 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <p className="text-xs text-white/35">
        © 2026 QA Makers. Todos los derechos reservados.
      </p>
      <p className="text-xs text-white/25">
        Quality Engineering · Software Consulting · SaaS Products
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Top separator */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.10) 25%, rgba(47,107,255,0.28) 50%, rgba(255,255,255,0.10) 75%, transparent 100%)',
        }}
      />

      <div className="container-content pt-12 pb-8">

        {/* ── MOBILE LAYOUT (< lg) ── */}
        <div className="lg:hidden space-y-0">
          <div className="pb-8">
            <BrandBlock />
          </div>

          <AccordionSection title="Servicios">
            <ul className="space-y-3">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection title="Productos">
            <div className="space-y-0">
              {PRODUCTS.map((product, i) => (
                <div
                  key={product.name}
                  className={i > 0 ? 'pt-4 mt-4 border-t border-white/[0.07]' : ''}
                >
                  <p className="text-sm font-medium text-white/80">{product.name}</p>
                  <p className="mt-1 text-xs text-white/40 leading-relaxed">{product.desc}</p>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/50 hover:text-white transition-colors duration-150 group"
                  >
                    {product.cta}
                    <ArrowUpRight
                      size={11}
                      aria-hidden="true"
                      className="opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </div>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection title="Contacto">
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contacto@qamakersapp.com"
                  className="text-sm text-white/55 hover:text-white transition-colors duration-150 break-all"
                >
                  contacto@qamakersapp.com
                </a>
              </li>
              <li>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#25D366]/80 hover:text-[#25D366] transition-colors duration-150"
                >
                  Habla por WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-sm font-medium text-electric/75 hover:text-electric transition-colors duration-150"
                >
                  Habla con un especialista
                </a>
              </li>
            </ul>
          </AccordionSection>

          <AccordionSection title="Legal">
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacidad"
                  className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                >
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/terminos"
                  className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                >
                  Términos de uso
                </Link>
              </li>
              <li>
                {/* Placeholder — página /cookies pendiente */}
                <span
                  className="text-sm text-white/28 select-none"
                  title="Próximamente"
                  aria-label="Política de cookies — próximamente"
                >
                  Política de cookies
                </span>
              </li>
            </ul>
          </AccordionSection>

          <BottomBar />
        </div>

        {/* ── DESKTOP LAYOUT (lg+) ── */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[1.4fr_1fr_1.2fr_1fr] gap-x-16">

            {/* Col 1 */}
            <BrandBlock />

            {/* Col 2 — Servicios */}
            <div>
              <h4 className="text-[11px] uppercase tracking-wider font-semibold text-white/40">
                Servicios
              </h4>
              <ul className="mt-4 space-y-2">
                {SERVICES.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Productos */}
            <div>
              <h4 className="text-[11px] uppercase tracking-wider font-semibold text-white/40">
                Productos
              </h4>
              <div className="mt-4">
                {PRODUCTS.map((product, i) => (
                  <div
                    key={product.name}
                    className={i > 0 ? 'pt-5 mt-5 border-t border-white/[0.07]' : ''}
                  >
                    <p className="text-sm font-medium text-white/80">{product.name}</p>
                    <p className="mt-1 text-xs text-white/40 leading-relaxed">{product.desc}</p>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/50 hover:text-white transition-colors duration-150 group"
                    >
                      {product.cta}
                      <ArrowUpRight
                        size={11}
                        aria-hidden="true"
                        className="opacity-60 group-hover:opacity-100 group-hover:-translate-y-px group-hover:translate-x-px transition-all duration-150"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4 — Contacto + Legal */}
            <div>
              <h4 className="text-[11px] uppercase tracking-wider font-semibold text-white/40">
                Contacto
              </h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="mailto:contacto@qamakersapp.com"
                    className="text-sm text-white/55 hover:text-white transition-colors duration-150 [word-break:break-word]"
                  >
                    contacto@qamakersapp.com
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-sm font-medium text-electric/75 hover:text-electric transition-colors duration-150"
                  >
                    Habla con un especialista
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                  >
                    Formulario de contacto
                  </a>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-white/[0.07]">
                <h4 className="text-[11px] uppercase tracking-wider font-semibold text-white/40">
                  Legal
                </h4>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      to="/privacidad"
                      className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                    >
                      Aviso de privacidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terminos"
                      className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                    >
                      Términos de uso
                    </Link>
                  </li>
                  <li>
                    <span
                      className="text-sm text-white/28 select-none"
                      title="Próximamente"
                      aria-label="Política de cookies — próximamente"
                    >
                      Política de cookies
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <BottomBar />
        </div>
      </div>
    </footer>
  );
}
