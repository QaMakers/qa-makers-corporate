import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-navy-light'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-content flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 font-bold text-white text-lg">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-electric" />
          QA Makers
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded border border-electric px-4 py-2 text-sm font-semibold text-electric hover:bg-electric hover:text-white transition-colors"
        >
          Habla con un especialista
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          className="md:hidden text-white"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-navy-light">
          <div className="container-content flex flex-col gap-4 py-6">
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
              className="inline-flex items-center justify-center rounded border border-electric px-4 py-2 text-sm font-semibold text-electric"
              onClick={() => setMenuOpen(false)}
            >
              Habla con un especialista
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
