import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, MapPin } from 'lucide-react';
import QAMakersLogo from './QAMakersLogo';

const SERVICES = [
  { label: 'QA Strategy', href: '#servicios' },
  { label: 'Test Automation', href: '#servicios' },
  { label: 'Performance Testing', href: '#servicios' },
  { label: 'QA Leadership', href: '#servicios' },
  { label: 'Managed Teams', href: '#servicios' },
  { label: 'Nearshore QA', href: '#servicios' },
];

const PRODUCTS = [
  { label: 'QM Connect', href: 'https://qmconnect.app', external: true },
  { label: 'QM StoreFlow', href: 'https://qmstoreflow.com', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Elegant top separator */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.12) 30%, rgba(47,107,255,0.35) 50%, rgba(255,255,255,0.12) 70%, transparent 100%)',
        }}
      />

      <div className="container-content pt-16 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr_1fr]">

          {/* Column 1 — Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="#" aria-label="QA Makers — inicio">
              {/* brightness-0 invert makes the blue logo fully white on dark bg */}
              <QAMakersLogo
                size="footer"
                variant="horizontal"
                className="brightness-0 invert"
              />
            </a>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-[220px]">
              Quality Engineering &amp; SaaS Products
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-white/35">
              <MapPin size={12} className="shrink-0" />
              León, Guanajuato, México
            </p>
          </div>

          {/* Column 2 — Servicios */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-semibold text-white/35">
              Servicios
            </h4>
            <ul className="mt-5 space-y-3">
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

          {/* Column 3 — Productos */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-semibold text-white/35">
              Productos
            </h4>
            <ul className="mt-5 space-y-3">
              {PRODUCTS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-white/55 hover:text-white transition-colors duration-150 group"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-px translate-x-px group-hover:opacity-100 transition-all duration-150"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-white/[0.07]">
              <p className="text-[11px] uppercase tracking-widest font-semibold text-white/35">
                Ecosistema
              </p>
              <div className="mt-3 space-y-1.5 text-xs text-white/35 font-mono">
                <p>QA Makers</p>
                <p className="pl-3">→ QM Connect</p>
                <p className="pl-3">→ QM StoreFlow</p>
              </div>
            </div>
          </div>

          {/* Column 4 — Contacto */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-semibold text-white/35">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:contacto@qamakersapp.com"
                  className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors duration-150"
                >
                  <Mail size={13} className="shrink-0 text-white/30" />
                  contacto@qamakersapp.com
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-sm text-white/55 hover:text-white transition-colors duration-150"
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
          </div>

          {/* Column 5 — Legal */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-semibold text-white/35">
              Legal
            </h4>
            <ul className="mt-5 space-y-3">
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
                <a
                  href="#"
                  className="text-sm text-white/35 cursor-default select-none"
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-white/35">
            © 2026 QA Makers. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/25 tracking-wide">
            Quality Engineering · Software Consulting · SaaS Products
          </p>
        </div>
      </div>
    </footer>
  );
}
