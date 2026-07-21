import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../lib/motion';

const VALUE_POINTS = [
  {
    number: '01',
    title: 'Cercanía real',
    description:
      'Acceso directo al equipo especialista, sin capas de intermediarios ni vendedores.',
  },
  {
    number: '02',
    title: 'Velocidad',
    description:
      'Procesos ágiles y entregables claros desde el primer sprint.',
  },
  {
    number: '03',
    title: 'Flexibilidad',
    description:
      'Modelos de trabajo adaptados a tu proyecto: por objetivo, por sprint o en modalidad de equipo.',
  },
  {
    number: '04',
    title: 'Calidad integrada',
    description:
      'No añadimos QA al final. Lo integramos desde el diseño, el desarrollo y la entrega.',
  },
];

export default function HowWeCreateValue() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-off-white section-padding">
      <div className="container-content">
        <h2 className="text-text-primary font-bold text-[clamp(1.75rem,3vw,2.5rem)] max-w-2xl">
          Estrategia senior sin la complejidad de una consultora tradicional.
        </h2>

        <motion.div
          initial={shouldReduceMotion ? undefined : 'initial'}
          whileInView={shouldReduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid gap-10"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
        >
          {VALUE_POINTS.map((point) => (
            <motion.div key={point.number} variants={shouldReduceMotion ? undefined : staggerItem}>
              <span className="text-4xl font-bold text-electric/30">
                {point.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-text-primary">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
