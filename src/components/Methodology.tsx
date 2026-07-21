import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';

const CONSULTING_STEPS = [
  'Entendemos el riesgo',
  'Diseñamos la estrategia',
  'Implementamos calidad',
  'Medimos y mejoramos',
];

const PRODUCT_STEPS = [
  'Entendemos la operación',
  'Simplificamos el problema',
  'Construimos e iteramos',
  'Validamos con usuarios',
  'Evolucionamos',
];

function StepList({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ol className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <li key={step} className="flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-electric">
              {index + 1}
            </span>
            <span className="pt-1 text-white/70">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Methodology() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-navy section-padding">
      <div className="container-content">
        <motion.h2
          initial={shouldReduceMotion ? undefined : 'initial'}
          whileInView={shouldReduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          className="text-white font-bold text-[clamp(1.75rem,3vw,2.5rem)]"
        >
          Cómo trabajamos
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <StepList title="Para consultoría" steps={CONSULTING_STEPS} />
          <StepList title="Para productos" steps={PRODUCT_STEPS} />
        </div>
      </div>
    </section>
  );
}
