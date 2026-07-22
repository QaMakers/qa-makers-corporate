import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  {
    step: '01',
    label: 'Entender',
    question: 'Donde esta el riesgo?',
    deliverable: 'Mapa de riesgos y cobertura',
  },
  {
    step: '02',
    label: 'Disenar',
    question: 'Como debe validarse?',
    deliverable: 'Estrategia de calidad',
  },
  {
    step: '03',
    label: 'Validar',
    question: 'El producto funciona?',
    deliverable: 'Evidencia y defectos priorizados',
  },
  {
    step: '04',
    label: 'Escalar',
    question: 'Como mantenemos calidad?',
    deliverable: 'Automatizacion y metricas',
  },
];

export default function Methodology() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-navy section-padding" ref={ref}>
      <div className="container-content">
        <p className="text-xs uppercase tracking-widest font-semibold text-white/30 mb-3">
          Metodologia
        </p>
        <h2 className="text-white font-bold text-[clamp(1.75rem,3vw,2.5rem)] mb-12">
          Como trabajamos
        </h2>

        {/* Progress line */}
        <div className="relative">
          <div className="absolute top-5 left-0 right-0 h-px bg-white/[0.08] hidden md:block" />
          <motion.div
            className="absolute top-5 left-0 h-px bg-electric hidden md:block"
            initial={{ width: '0%' }}
            animate={
              inView && !shouldReduceMotion
                ? { width: '100%' }
                : shouldReduceMotion
                ? { width: '100%' }
                : { width: '0%' }
            }
            transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
          />

          <div className="grid gap-8 md:grid-cols-4 relative">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                animate={
                  inView && !shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : shouldReduceMotion
                    ? undefined
                    : {}
                }
                transition={{ duration: 0.45, delay: i * 0.15 + 0.3 }}
              >
                {/* Circle */}
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-electric bg-navy mb-5">
                  <span className="text-xs font-bold text-electric">{step.step}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{step.label}</h3>
                <p className="text-sm text-white/40 italic mb-3">"{step.question}"</p>
                <div className="border-t border-white/[0.07] pt-3">
                  <p className="text-[11px] uppercase tracking-widest text-white/25 font-semibold mb-1">
                    Resultado
                  </p>
                  <p className="text-sm text-white/60">{step.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
