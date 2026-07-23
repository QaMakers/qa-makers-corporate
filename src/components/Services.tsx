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
  deliverable: string;
}

interface ServiceGroup {
  groupTitle: string;
  accent: string;
  services: ServiceItem[];
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    groupTitle: 'Strategy',
    accent: '#2F6BFF',
    services: [
      {
        icon: Target,
        title: 'QA Strategy',
        description: 'Evaluacion de madurez, estrategia de pruebas y modelo operativo de QA.',
        deliverable: 'Plan de calidad',
      },
      {
        icon: Users,
        title: 'QA Leadership',
        description: 'QA Lead as a Service, definicion de procesos y coordinacion de releases.',
        deliverable: 'Procesos y metricas',
      },
      {
        icon: Building,
        title: 'Managed QA Teams',
        description: 'Celulas de QA, perfiles especializados y entrega por objetivos.',
        deliverable: 'Equipo operativo',
      },
    ],
  },
  {
    groupTitle: 'Engineering',
    accent: '#06B6D4',
    services: [
      {
        icon: CheckSquare,
        title: 'Functional & E2E Testing',
        description:
          'Pruebas funcionales, regresion, SIT, UAT y validacion de procesos criticos.',
        deliverable: 'Reportes de cobertura',
      },
      {
        icon: Server,
        title: 'API & Backend Testing',
        description: 'REST, SOAP, contratos, validaciones de datos y pruebas negativas.',
        deliverable: 'Suite de APIs',
      },
      {
        icon: Zap,
        title: 'Test Automation',
        description: 'Estrategia de automatizacion web, suites mantenibles y CI/CD.',
        deliverable: 'Framework automatizado',
      },
    ],
  },
  {
    groupTitle: 'Continuous Quality',
    accent: '#10b981',
    services: [
      {
        icon: Activity,
        title: 'Performance Engineering',
        description: 'Estrategia de carga, estres y analisis de cuellos de botella.',
        deliverable: 'Baseline de rendimiento',
      },
      {
        icon: Lock,
        title: 'Security Testing',
        description: 'Evaluacion OWASP, revision de riesgos y analisis de vulnerabilidades.',
        deliverable: 'Reporte de riesgo',
      },
      {
        icon: GitBranch,
        title: 'Quality in CI/CD',
        description:
          'Quality gates, regresion automatizada y metricas integradas en pipelines.',
        deliverable: 'Pipeline de calidad',
      },
    ],
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="servicios" className="bg-navy section-padding">
      <div className="container-content">
        <p className="text-xs uppercase tracking-widest font-semibold text-white/30 mb-3">
          Servicios
        </p>
        <h2 className="text-white font-bold text-[clamp(1.75rem,3vw,2.5rem)] max-w-2xl">
          Como ayudamos a mejorar la calidad de tu software
        </h2>
        <p className="mt-4 text-white/50 max-w-2xl">
          Servicios especializados en Quality Engineering para equipos que entregan software
          critico.
        </p>

        <div className="mt-12 space-y-12">
          {SERVICE_GROUPS.map((group) => (
            <div key={group.groupTitle}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="h-px flex-1 max-w-[40px] rounded"
                  style={{ backgroundColor: group.accent }}
                />
                <span
                  className="text-xs uppercase tracking-widest font-semibold"
                  style={{ color: group.accent }}
                >
                  {group.groupTitle}
                </span>
              </div>
              <motion.div
                initial={shouldReduceMotion ? undefined : 'initial'}
                whileInView={shouldReduceMotion ? undefined : 'animate'}
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="grid gap-3 sm:gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"
              >
                {group.services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      variants={shouldReduceMotion ? undefined : staggerItem}
                      className="group rounded-lg border border-white/[0.07] bg-navy-mid p-4 sm:p-6 hover:border-white/15 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/40 transition-all duration-200"
                    >
                      <Icon size={20} style={{ color: group.accent }} />
                      <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-white">{service.title}</h3>
                      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/55 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="hidden sm:block mt-4 pt-4 border-t border-white/[0.06]">
                        <span className="text-[11px] uppercase tracking-widest text-white/30 font-semibold">
                          Entregable
                        </span>
                        <p className="text-xs text-white/50 mt-1">{service.deliverable}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
