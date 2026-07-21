import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';

const METRICS = [
  '9 tipos de servicio',
  '2 productos propios',
  'Equipos en múltiples industrias',
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-navy pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container-content grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={shouldReduceMotion ? undefined : 'initial'}
          animate={shouldReduceMotion ? undefined : 'animate'}
          variants={fadeInUp}
        >
          <h1 className="text-white font-bold tracking-tight text-[clamp(2.5rem,5vw,4rem)] leading-[1.1]">
            Software confiable.
            <br />
            Negocios preparados para crecer.
          </h1>
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-xl">
            Diseñamos estrategias de Quality Engineering, fortalecemos equipos
            de software y construimos productos digitales para resolver
            problemas reales.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded bg-electric px-6 py-3 text-sm font-semibold text-white hover:bg-electric/90 transition-colors"
            >
              Habla con un especialista
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center rounded border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white transition-colors"
            >
              Conoce nuestros productos
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
            {METRICS.map((metric) => (
              <span
                key={metric}
                className="text-xs uppercase tracking-wide font-semibold text-white/50"
              >
                {metric}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden md:block"
        >
          <div className="rounded-lg border border-white/10 bg-[#0D1117] p-6 font-mono text-[13px] leading-relaxed shadow-lg">
            <p>
              <span className="text-[#C678DD]">describe</span>
              <span className="text-white/70">(</span>
              <span className="text-[#98C379]">&apos;checkout flow&apos;</span>
              <span className="text-white/70">, () =&gt; {'{'}</span>
            </p>
            <p className="pl-4">
              <span className="text-[#C678DD]">it</span>
              <span className="text-white/70">(</span>
              <span className="text-[#98C379]">&apos;completes successfully&apos;</span>
              <span className="text-white/70">, </span>
              <span className="text-[#61AFEF]">async</span>
              <span className="text-white/70"> () =&gt; {'{'}</span>
            </p>
            <p className="pl-8 text-white/70">
              <span className="text-[#61AFEF]">await</span> page.goto(
              <span className="text-[#98C379]">&apos;/checkout&apos;</span>);
            </p>
            <p className="pl-8 text-white/70">
              <span className="text-[#61AFEF]">await</span> expect(page.locator(
              <span className="text-[#98C379]">&apos;[data-test=&quot;order-total&quot;]&apos;</span>
              ))
            </p>
            <p className="pl-12 text-white/70">.toBeVisible();</p>
            <p className="pl-8 text-white/40">// ... 12 more assertions</p>
            <p className="pl-4 text-white/70">{'}'});</p>
            <p className="text-white/70">{'}'});</p>
            <p className="mt-4 text-[#98C379]">✓ All 247 tests passed (4.2s)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
