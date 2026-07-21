import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';

export default function QualityPrinciple() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-off-white section-padding">
      <div className="container-content max-w-3xl">
        <motion.div
          initial={shouldReduceMotion ? undefined : 'initial'}
          whileInView={shouldReduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-text-primary font-bold text-[clamp(1.75rem,3vw,2.5rem)]">
            La calidad no es una fase. Es una práctica.
          </h2>
          <p className="mt-6 text-text-secondary text-lg leading-relaxed">
            En QA Makers creemos que el software de calidad no es el
            resultado de una etapa de QA al final del proceso. Es el producto
            de decisiones inteligentes tomadas en cada etapa: diseño,
            arquitectura, desarrollo, integración y operación.
          </p>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            Por eso combinamos consultoría especializada con el desarrollo de
            productos propios. No solo asesoramos — construimos. Y lo que
            construimos lo operamos con los mismos estándares que exigimos a
            nuestros clientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
