import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import QAMakersLogo from './QAMakersLogo';

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-navy/30'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <nav className="container-content flex items-center justify-between py-4">
        <a href="#" aria-label="QA Makers — inicio">
          <QAMakersLogo size="navbar" variant="horizontal" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/75 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-electric transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded bg-electric px-5 py-2.5 text-sm font-semibold text-white hover:bg-electric/90 transition-all duration-200 shadow-md shadow-electric/25 hover:shadow-electric/40"
        >
          Habla con un especialista
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="container-content flex flex-col gap-5 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded bg-electric px-5 py-2.5 text-sm font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Habla con un especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
