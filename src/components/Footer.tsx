import { Link } from 'react-router-dom';
import QAMakersLogo from './QAMakersLogo';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-navy-light">
      <div className="container-content py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <a href="#" aria-label="QA Makers">
              <QAMakersLogo size="footer" variant="horizontal" />
            </a>
            <p className="mt-3 text-sm text-white/50">
              Quality Engineering &amp; SaaS Products
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wide font-semibold text-white/40">
              Servicios
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>QA Strategy</li>
              <li>Test Automation</li>
              <li>Performance</li>
              <li>QA Leadership</li>
              <li>Managed Teams</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wide font-semibold text-white/40">
              Productos
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <a
                  href="https://qmconnect.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  QM Connect
                </a>
              </li>
              <li>
                <a
                  href="https://qmstoreflow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  QM StoreFlow
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wide font-semibold text-white/40">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <Link to="/privacidad" className="hover:text-white">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="hover:text-white">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/40">
            © 2026 QA Makers. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
