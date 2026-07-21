import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Layers } from 'lucide-react';
import { fadeInUp } from '../lib/motion';

export default function BusinessLines() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="nosotros" className="bg-off-white section-padding">
      <div className="container-content">
        <motion.div
          initial={shouldReduceMotion ? undefined : 'initial'}
          whileInView={shouldReduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-12 md:gap-0 md:divide-x md:divide-border"
        >
          <div className="md:pr-12 pb-10 md:pb-0 border-b md:border-b-0 border-border">
            <Shield className="text-electric" size={32} />
            <h3 className="mt-4 text-xl font-semibold text-text-primary">
              Quality Engineering &amp; Consulting
            </h3>
            <p className="mt-3 text-text-secondary">
              Acompañamos a equipos de tecnología a mejorar la calidad de sus
              productos, reducir riesgos y acelerar entregas. Estrategia,
              ejecución y liderazgo de QA para proyectos críticos.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-sm text-text-secondary">
              {['Estrategia QA', 'Automatización', 'Testing funcional y de APIs', 'Equipos de QA administrados'].map(
                (item, i, arr) => (
                  <li key={item} className="flex items-center">
                    {item}
                    {i < arr.length - 1 && <span className="mx-2 text-text-muted">·</span>}
                  </li>
                )
              )}
            </ul>
            <a
              href="#servicios"
              className="mt-6 inline-block text-sm font-semibold text-electric hover:underline"
            >
              Ver servicios →
            </a>
          </div>

          <div className="md:pl-12">
            <Layers className="text-cyan" size={32} />
            <h3 className="mt-4 text-xl font-semibold text-text-primary">
              Productos SaaS Propios
            </h3>
            <p className="mt-3 text-text-secondary">
              Creamos productos digitales que resuelven problemas operativos
              reales de negocios y organizaciones. Desde la idea hasta la
              operación.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-sm text-text-secondary">
              {['QM Connect', 'QM StoreFlow', 'Diseño centrado en el usuario', 'Evolución continua'].map(
                (item, i, arr) => (
                  <li key={item} className="flex items-center">
                    {item}
                    {i < arr.length - 1 && <span className="mx-2 text-text-muted">·</span>}
                  </li>
                )
              )}
            </ul>
            <a
              href="#productos"
              className="mt-6 inline-block text-sm font-semibold text-cyan hover:underline"
            >
              Ver productos →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
