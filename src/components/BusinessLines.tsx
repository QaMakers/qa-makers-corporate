import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Shield, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

const QE_SERVICES = [
  'QA Strategy',
  'Functional Testing',
  'API Testing',
  'Test Automation',
  'Performance Engineering',
  'Quality in CI/CD',
];

const PRODUCT_LIST = [
  {
    name: 'QM Connect',
    desc: 'Gestion de operaciones para negocios de servicios',
    href: 'https://qmconnect.app',
  },
  {
    name: 'QM StoreFlow',
    desc: 'Gestion de catalogo y operacion retail',
    href: 'https://qmstoreflow.com',
  },
];

export default function BusinessLines() {
  const [active, setActive] = useState<'qe' | 'saas'>('qe');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="nosotros" className="bg-off-white section-padding">
      <div className="container-content">
        <p className="text-xs uppercase tracking-widest font-semibold text-text-muted mb-3">
          Lineas de negocio
        </p>
        <h2 className="text-text-primary font-bold text-[clamp(1.75rem,3vw,2.5rem)] max-w-2xl mb-10">
          Dos formas de crear impacto
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* QE Panel */}
          <button
            type="button"
            onClick={() => setActive('qe')}
            className={`text-left rounded-xl border p-7 transition-all duration-300 ${
              active === 'qe'
                ? 'border-electric bg-navy shadow-xl shadow-navy/20'
                : 'border-border bg-surface hover:border-electric/40 hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between">
              <Shield
                size={28}
                className={active === 'qe' ? 'text-electric' : 'text-text-muted'}
              />
              {active === 'qe' && (
                <span className="text-[10px] uppercase tracking-widest font-semibold text-electric border border-electric/30 rounded-full px-2 py-0.5">
                  Activo
                </span>
              )}
            </div>
            <h3
              className={`mt-4 text-xl font-bold ${
                active === 'qe' ? 'text-white' : 'text-text-primary'
              }`}
            >
              Quality Engineering
            </h3>
            <p
              className={`mt-2 text-sm ${
                active === 'qe' ? 'text-white/60' : 'text-text-secondary'
              }`}
            >
              Estrategia, pruebas y automatizacion para equipos que entregan software critico.
            </p>

            <AnimatePresence>
              {active === 'qe' && (
                <motion.div
                  initial={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, height: 'auto' }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-5 space-y-2">
                    {QE_SERVICES.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/75">
                        <CheckCircle2 size={13} className="text-electric shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#servicios"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-electric hover:text-electric/80 transition-colors"
                  >
                    Ver servicios <ChevronRight size={14} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* SaaS Panel */}
          <button
            type="button"
            onClick={() => setActive('saas')}
            className={`text-left rounded-xl border p-7 transition-all duration-300 ${
              active === 'saas'
                ? 'border-cyan bg-navy shadow-xl shadow-navy/20'
                : 'border-border bg-surface hover:border-cyan/40 hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between">
              <Layers
                size={28}
                className={active === 'saas' ? 'text-cyan' : 'text-text-muted'}
              />
              {active === 'saas' && (
                <span className="text-[10px] uppercase tracking-widest font-semibold text-cyan border border-cyan/30 rounded-full px-2 py-0.5">
                  Activo
                </span>
              )}
            </div>
            <h3
              className={`mt-4 text-xl font-bold ${
                active === 'saas' ? 'text-white' : 'text-text-primary'
              }`}
            >
              Productos SaaS
            </h3>
            <p
              className={`mt-2 text-sm ${
                active === 'saas' ? 'text-white/60' : 'text-text-secondary'
              }`}
            >
              Productos digitales propios que resuelven problemas operativos reales.
            </p>

            <AnimatePresence>
              {active === 'saas' && (
                <motion.div
                  initial={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, height: 'auto' }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 space-y-3">
                    {PRODUCT_LIST.map((product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="block rounded-lg border border-white/10 bg-white/[0.04] p-4 hover:border-cyan/40 transition-colors"
                      >
                        <p className="text-sm font-semibold text-white">{product.name}</p>
                        <p className="text-xs text-white/50 mt-0.5">{product.desc}</p>
                      </a>
                    ))}
                  </div>
                  <a
                    href="#productos"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cyan hover:text-cyan/80 transition-colors"
                  >
                    Ver productos <ChevronRight size={14} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </section>
  );
}
