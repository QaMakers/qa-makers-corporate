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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-all duration-200 ${
        scrolled
          ? 'border-gray-100 shadow-[0_1px_12px_rgba(0,0,0,0.07)] py-0'
          : 'border-gray-100 py-0'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <nav className="container-content flex items-center justify-between h-16">
        <a href="#" aria-label="QA Makers — inicio" className="flex items-center shrink-0">
          <QAMakersLogo size="navbar" variant="horizontal" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-electric transition-all duration-250 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-electric px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d5ce6] active:bg-[#1a53d0] transition-colors duration-150 shadow-sm shadow-electric/20"
        >
          Habla con un especialista
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden text-gray-700 p-1.5 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div
              className="container-content flex flex-col pt-5"
              style={{
                paddingBottom: 'max(2.5rem, calc(env(safe-area-inset-bottom, 0px) + 1.25rem))',
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-3.5 text-base font-medium text-gray-700 hover:text-gray-900 border-b border-gray-100 last:border-0"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-electric px-5 py-3.5 text-sm font-semibold text-white active:bg-[#1a53d0]"
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
