import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';

const INDUSTRIES = ['Banca', 'Fintech', 'SaaS', 'Retail', 'Servicios', 'Operación interna'];

export default function Industries() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-navy section-padding">
      <div className="container-content">
        <motion.h2
          initial={shouldReduceMotion ? undefined : 'initial'}
          whileInView={shouldReduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          className="text-white font-bold text-[clamp(1.75rem,3vw,2.5rem)] max-w-2xl"
        >
          Experiencia en sectores donde los errores tienen consecuencias
          reales
        </motion.h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {INDUSTRIES.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
