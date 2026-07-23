import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
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
  ChevronDown,
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
        description: 'Evaluación de madurez, estrategia de pruebas y modelo operativo de QA.',
        deliverable: 'Plan de calidad',
      },
      {
        icon: Users,
        title: 'QA Leadership',
        description: 'QA Lead as a Service, definición de procesos y coordinación de releases.',
        deliverable: 'Procesos y métricas',
      },
      {
        icon: Building,
        title: 'Managed QA Teams',
        description: 'Células de QA, perfiles especializados y entrega por objetivos.',
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
          'Pruebas funcionales, regresión, SIT, UAT y validación de procesos críticos.',
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
        description: 'Estrategia de automatización web, suites mantenibles y CI/CD.',
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
        description: 'Estrategia de carga, estrés y análisis de cuellos de botella.',
        deliverable: 'Baseline de rendimiento',
      },
      {
        icon: Lock,
        title: 'Security Testing',
        description: 'Evaluación OWASP, revisión de riesgos y análisis de vulnerabilidades.',
        deliverable: 'Reporte de riesgo',
      },
      {
        icon: GitBranch,
        title: 'Quality in CI/CD',
        description:
          'Quality gates, regresión automatizada y métricas integradas en pipelines.',
        deliverable: 'Pipeline de calidad',
      },
    ],
  },
];

function ServiceCategoryAccordion({ group }: { group: ServiceGroup }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.07]">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-4 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-sm"
      >
        <div className="flex items-center gap-2.5">
          <span
            className="h-1.5 w-1.5 rounded-full shrink-0"
            style={{ backgroundColor: group.accent }}
            aria-hidden="true"
          />
          <span
            className="text-sm font-semibold"
            style={{ color: group.accent }}
          >
            {group.groupTitle}
          </span>
          <span className="text-xs text-white/30 font-normal ml-0.5">
            ({group.services.length})
          </span>
        </div>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`text-white/30 transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <ul className="pb-4 space-y-3.5">
              {group.services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.title} className="flex items-start gap-3 pl-1">
                    <Icon
                      size={15}
                      style={{ color: group.accent }}
                      className="shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-medium text-white/85 leading-tight">
                        {service.title}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="servicios" className="bg-navy section-padding">
      <div className="container-content">
        <p className="text-xs uppercase tracking-widest font-semibold text-white/30 mb-3">
          Servicios
        </p>
        <h2 className="text-white font-bold text-[clamp(1.75rem,3vw,2.5rem)] max-w-2xl">
          Cómo ayudamos a mejorar la calidad de tu software
        </h2>
        <p className="mt-4 text-white/50 max-w-2xl">
          Servicios especializados en Quality Engineering para equipos que entregan software
          crítico.
        </p>

        {/* ── MOBILE: Category accordions ── */}
        <div className="md:hidden mt-8 border-t border-white/[0.07]">
          {SERVICE_GROUPS.map((group) => (
            <ServiceCategoryAccordion key={group.groupTitle} group={group} />
          ))}
        </div>

        {/* ── DESKTOP: Full grid with descriptions ── */}
        <div className="hidden md:block mt-12 space-y-12">
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
                className="grid gap-5 grid-cols-2 lg:grid-cols-3"
              >
                {group.services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      variants={shouldReduceMotion ? undefined : staggerItem}
                      className="group rounded-lg border border-white/[0.07] bg-navy-mid p-6 hover:border-white/15 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/40 transition-all duration-200"
                    >
                      <Icon size={20} style={{ color: group.accent }} />
                      <h3 className="mt-4 text-base font-semibold text-white">{service.title}</h3>
                      <p className="mt-2 text-sm text-white/55 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/[0.06]">
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
