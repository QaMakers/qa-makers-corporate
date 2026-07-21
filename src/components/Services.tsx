import { motion, useReducedMotion } from 'framer-motion';
import {
  Target,
  CheckSquare,
  Server,
  Zap,
  Activity,
  Lock,
  GitBranch,
  Users,
  Building,
  type LucideIcon,
} from 'lucide-react';
import { staggerContainer, staggerItem } from '../lib/motion';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: Target,
    title: 'QA Strategy',
    description:
      'Evaluación de madurez, estrategia de pruebas, cobertura de riesgos y modelo operativo de QA.',
  },
  {
    icon: CheckSquare,
    title: 'Functional & E2E Testing',
    description:
      'Pruebas funcionales, regresión, SIT, UAT y validación de procesos críticos.',
  },
  {
    icon: Server,
    title: 'API & Backend Testing',
    description:
      'REST, SOAP, contratos, validaciones de datos, integración y pruebas negativas.',
  },
  {
    icon: Zap,
    title: 'Test Automation',
    description:
      'Estrategia de automatización, automatización web, suites mantenibles e integración en CI/CD.',
  },
  {
    icon: Activity,
    title: 'Performance Engineering',
    description:
      'Estrategia de carga, estrés, análisis de cuellos de botella y recomendaciones de mejora.',
  },
  {
    icon: Lock,
    title: 'Security Testing',
    description:
      'Evaluación OWASP, revisión de riesgos y análisis de vulnerabilidades en coordinación con tu equipo.',
  },
  {
    icon: GitBranch,
    title: 'Quality in CI/CD',
    description:
      'Quality gates, regresión automatizada, trazabilidad y métricas de calidad integradas en pipelines.',
  },
  {
    icon: Users,
    title: 'QA Leadership',
    description:
      'QA Lead as a Service, definición de procesos, coordinación de equipos y acompañamiento a releases.',
  },
  {
    icon: Building,
    title: 'Managed QA Teams',
    description:
      'Células de QA, asignación de perfiles especializados y entrega por objetivos.',
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="servicios" className="bg-navy section-padding">
      <div className="container-content">
        <h2 className="text-white font-bold text-[clamp(1.75rem,3vw,2.5rem)] max-w-2xl">
          Cómo ayudamos a mejorar la calidad de tu software
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl">
          Servicios especializados en Quality Engineering para equipos que
          entregan software crítico.
        </p>

        <motion.div
          initial={shouldReduceMotion ? undefined : 'initial'}
          whileInView={shouldReduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-12 grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={shouldReduceMotion ? undefined : staggerItem}
                className="rounded-lg border border-white/[0.08] bg-navy-mid p-6"
              >
                <Icon className="text-electric" size={28} />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
