import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, Loader2, ShieldCheck, ArrowRight } from 'lucide-react';
import { fadeInUp } from '../lib/motion';

const VALUE_PILLARS = [
  {
    icon: 'engineering',
    title: 'Quality Engineering',
    copy: 'Estrategia, pruebas y automatización.',
  },
  {
    icon: 'consulting',
    title: 'Consultoría especializada',
    copy: 'Experiencia senior integrada al equipo.',
  },
  {
    icon: 'products',
    title: 'Productos propios',
    copy: 'Software para resolver operaciones reales.',
  },
];

type TestStatus = 'idle' | 'running' | 'passed';

interface TestRow {
  label: string;
  total: number;
  status: TestStatus;
  current: number;
}

const INITIAL_ROWS: TestRow[] = [
  { label: 'Functional tests', total: 128, status: 'idle', current: 0 },
  { label: 'API validations', total: 46, status: 'idle', current: 0 },
  { label: 'Regression suite', total: 247, status: 'idle', current: 0 },
];

function StatusIcon({ status }: { status: TestStatus }) {
  if (status === 'passed') return <CheckCircle2 size={14} className="text-emerald-400" />;
  if (status === 'running') return <Loader2 size={14} className="text-electric animate-spin" />;
  return <Circle size={14} className="text-white/20" />;
}

function ProgressBar({ value, max, status }: { value: number; max: number; status: TestStatus }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-300 ${
          status === 'passed' ? 'bg-emerald-400' : 'bg-electric'
        }`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function QualityControlCenter({ reduced }: { reduced: boolean }) {
  const [rows, setRows] = useState<TestRow[]>(INITIAL_ROWS.map((r) => ({ ...r })));
  const [confidence, setConfidence] = useState(0);
  const [phase, setPhase] = useState<'testing' | 'confidence' | 'ready'>('testing');
  const [tick, setTick] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduced) {
      setRows(INITIAL_ROWS.map((r) => ({ ...r, status: 'passed', current: r.total })));
      setConfidence(96);
      setPhase('ready');
      return;
    }

    let cancelled = false;
    let confInterval: ReturnType<typeof setInterval> | null = null;

    // reset state first
    setRows(INITIAL_ROWS.map((r) => ({ ...r })));
    setConfidence(0);
    setPhase('testing');

    async function runSequence() {
      for (let i = 0; i < INITIAL_ROWS.length; i++) {
        if (cancelled) return;
        setRows((prev) =>
          prev.map((r, idx) => (idx === i ? { ...r, status: 'running', current: 0 } : r))
        );
        const total = INITIAL_ROWS[i].total;
        const steps = 20;
        const stepSize = total / steps;
        for (let s = 1; s <= steps; s++) {
          if (cancelled) return;
          await new Promise<void>((res) => {
            timerRef.current = setTimeout(res, 90);
          });
          setRows((prev) =>
            prev.map((r, idx) =>
              idx === i ? { ...r, current: Math.min(Math.round(stepSize * s), total) } : r
            )
          );
        }
        if (cancelled) return;
        setRows((prev) =>
          prev.map((r, idx) => (idx === i ? { ...r, status: 'passed', current: total } : r))
        );
        await new Promise<void>((res) => {
          timerRef.current = setTimeout(res, 200);
        });
      }

      if (cancelled) return;
      setPhase('confidence');
      let conf = 0;
      await new Promise<void>((res) => {
        confInterval = setInterval(() => {
          if (cancelled) {
            clearInterval(confInterval!);
            res();
            return;
          }
          conf += 4;
          setConfidence(Math.min(conf, 96));
          if (conf >= 96) {
            clearInterval(confInterval!);
            confInterval = null;
            res();
          }
        }, 55);
      });

      if (cancelled) return;
      setPhase('ready');
      await new Promise<void>((res) => {
        timerRef.current = setTimeout(res, 2800);
      });

      if (cancelled) return;
      setTick((t) => t + 1);
    }

    runSequence();

    return () => {
      cancelled = true;
      if (timerRef.current) clearTimeout(timerRef.current);
      if (confInterval) clearInterval(confInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick, reduced]);

  const showReady = phase === 'ready';

  return (
    <div className="relative rounded-xl border border-white/[0.12] bg-[#08121f] overflow-hidden shadow-2xl shadow-navy/60">
      {/* Header bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="ml-2 text-xs font-mono text-white/40">quality-pipeline.run</span>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-white/30">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          live
        </span>
      </div>

      <div className="p-5 space-y-5">
        {/* Title */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-mono">
            Quality Pipeline
          </p>
          <p className="mt-0.5 text-sm font-semibold text-white">Execution Report</p>
        </div>

        {/* Test rows */}
        <div className="space-y-4">
          {rows.map((row) => (
            <div key={row.label}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <StatusIcon status={row.status} />
                  <span className="text-xs font-mono text-white/70">{row.label}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className={row.status === 'passed' ? 'text-emerald-400' : 'text-white/40'}>
                    {row.current}/{row.total}
                  </span>
                  {row.status === 'passed' && (
                    <span className="text-[10px] uppercase tracking-wide text-emerald-400 font-semibold">
                      Passed
                    </span>
                  )}
                  {row.status === 'running' && (
                    <span className="text-[10px] uppercase tracking-wide text-electric font-semibold">
                      Running
                    </span>
                  )}
                </div>
              </div>
              <ProgressBar value={row.current} max={row.total} status={row.status} />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06]" />

        {/* Metrics row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3">
            <p className="text-[10px] uppercase tracking-widest text-white/30 font-mono">
              Critical defects
            </p>
            <p className="mt-1 text-xl font-bold text-emerald-400">0</p>
            <p className="text-[10px] text-emerald-400/70 font-mono mt-0.5">Clear</p>
          </div>
          <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3">
            <p className="text-[10px] uppercase tracking-widest text-white/30 font-mono">
              Release confidence
            </p>
            <p className="mt-1 text-xl font-bold text-electric">
              {confidence}
              <span className="text-sm">%</span>
            </p>
            <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-electric transition-all duration-300"
                style={{ width: `${confidence}%` }}
              />
            </div>
          </div>
        </div>

        {/* Ready banner */}
        <AnimatePresence>
          {showReady && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-3 rounded-lg bg-emerald-500/10 border border-emerald-500/25 px-4 py-3"
            >
              <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-emerald-400">Ready for release</p>
                <p className="text-[11px] text-emerald-400/60 font-mono mt-0.5">
                  All checks passed · 0 blockers
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Disclaimer */}
        <p className="text-[10px] text-white/20 font-mono leading-relaxed">
          * Demostracion ilustrativa del flujo de calidad.
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative bg-navy pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background depth */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(47,107,255,0.10) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(6,182,212,0.06) 0%, transparent 60%)',
        }}
      />
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-content relative grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <motion.div
          initial={shouldReduceMotion ? undefined : 'initial'}
          animate={shouldReduceMotion ? undefined : 'animate'}
          variants={fadeInUp}
        >
          <h1 className="text-white font-bold tracking-tight text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.1]">
            Software confiable.
            <br />
            <span className="text-electric">Negocios preparados</span>
            <br />
            para crecer.
          </h1>
          <p className="mt-6 text-white/65 text-base md:text-lg max-w-xl leading-relaxed">
            Diseñamos estrategias de Quality Engineering, fortalecemos equipos de software y
            construimos productos digitales para resolver problemas reales.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded bg-electric px-6 py-3 text-sm font-semibold text-white hover:bg-electric/90 transition-all duration-200 shadow-lg shadow-electric/30 hover:shadow-electric/50"
            >
              Habla con un especialista
              <ArrowRight size={16} />
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center rounded border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              Conoce nuestros productos
            </a>
          </div>

          {/* Friction reducers */}
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
            {['Respuesta directa', 'Evaluacion inicial sin costo', 'Sin compromiso'].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs text-white/40">
                <CheckCircle2 size={11} className="text-emerald-400" />
                {item}
              </span>
            ))}
          </div>

          {/* Value pillars */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VALUE_PILLARS.map((pillar) => (
              <motion.div
                key={pillar.title}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-4"
              >
                <p className="text-sm font-semibold text-white">{pillar.title}</p>
                <p className="mt-1 text-xs text-white/50 leading-relaxed">{pillar.copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Quality Control Center */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden md:block"
        >
          {/* Glow behind panel */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(47,107,255,0.12) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <QualityControlCenter reduced={shouldReduceMotion} />
        </motion.div>
      </div>
    </section>
  );
}
