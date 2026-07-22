import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../lib/motion';
import {
  ExternalLink,
  Calendar,
  Users,
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
} from 'lucide-react';

// Screenshot paths — replace with real assets when available:
// /public/products/qm-connect.webp
// /public/products/qm-storeflow.webp

function ProductPlaceholder({ product }: { product: 'connect' | 'storeflow' }) {
  if (product === 'connect') {
    return (
      <div className="rounded-lg bg-[#0a1628] border border-white/[0.08] p-4 aspect-[16/10] flex flex-col gap-3 overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-electric/70 uppercase tracking-wider">
            QM Connect Dashboard
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: Calendar, label: 'Hoy', value: '8 citas' },
            { icon: Users, label: 'Clientes', value: '124' },
            { icon: LayoutDashboard, label: 'Disponible', value: '3 hrs' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded bg-white/[0.04] border border-white/[0.06] p-2">
              <Icon size={12} className="text-electric mb-1" />
              <p className="text-[10px] text-white/40">{label}</p>
              <p className="text-xs font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded bg-white/[0.03] border border-white/[0.05] p-2">
          <p className="text-[10px] text-white/30 mb-2">Proximas citas</p>
          {['10:00 — Juan Garcia', '11:30 — Maria Lopez', '13:00 — Carlos Ruiz'].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 py-1 border-b border-white/[0.04] last:border-0"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-electric/60" />
              <span className="text-[10px] text-white/50 font-mono">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-[#0a1628] border border-white/[0.08] p-4 aspect-[16/10] flex flex-col gap-3 overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-cyan/70 uppercase tracking-wider">
          QM StoreFlow Panel
        </span>
        <span className="text-[10px] text-white/30 font-mono">Proximamente</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: Package, label: 'Productos', value: '248' },
          { icon: ShoppingCart, label: 'Ventas hoy', value: '32' },
          { icon: BarChart3, label: 'Ingreso', value: '$14,200' },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded bg-white/[0.04] border border-white/[0.06] p-2">
            <Icon size={12} className="text-cyan mb-1" />
            <p className="text-[10px] text-white/40">{label}</p>
            <p className="text-xs font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded bg-white/[0.03] border border-white/[0.05] p-2">
        <p className="text-[10px] text-white/30 mb-2">Catalogo reciente</p>
        {['Producto A — $320', 'Producto B — $185', 'Producto C — $540'].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 py-1 border-b border-white/[0.04] last:border-0"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-cyan/60" />
            <span className="text-[10px] text-white/50 font-mono">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="productos" className="bg-off-white section-padding">
      <div className="container-content">
        <p className="text-xs uppercase tracking-widest font-semibold text-text-muted mb-3">
          Productos propios
        </p>
        <h2 className="text-text-primary font-bold text-[clamp(1.75rem,3vw,2.5rem)] max-w-2xl">
          Software que construimos y operamos
        </h2>
        <p className="mt-4 text-text-secondary max-w-2xl">
          La mejor forma de validar una metodologia es aplicarla en nuestros propios productos.
        </p>

        <motion.div
          initial={shouldReduceMotion ? undefined : 'initial'}
          whileInView={shouldReduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          {/* QM Connect */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerItem}
            className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden flex flex-col"
          >
            <div className="p-7 flex-1">
              <span className="inline-flex w-fit items-center rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-electric">
                Disponible
              </span>
              <h3 className="mt-4 text-xl font-bold text-text-primary">QM Connect</h3>
              <p className="mt-1 text-sm font-medium text-text-secondary">
                Gestion de operaciones para negocios de servicios
              </p>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                Agenda citas, gestiona clientes, coordina tu equipo y controla la disponibilidad
                desde una sola plataforma.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 text-sm text-text-secondary">
                {['Agenda', 'Clientes', 'Equipo', 'Disponibilidad', 'Movil'].map((item, i, arr) => (
                  <li key={item} className="flex items-center">
                    {item}
                    {i < arr.length - 1 && <span className="mx-2 text-text-muted">·</span>}
                  </li>
                ))}
              </ul>
              <a
                href="https://qmconnect.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded bg-electric px-5 py-2.5 text-sm font-semibold text-white hover:bg-electric/90 transition-colors"
              >
                Conocer QM Connect <ExternalLink size={14} />
              </a>
            </div>
            <div className="px-7 pb-7">
              <ProductPlaceholder product="connect" />
            </div>
          </motion.div>

          {/* QM StoreFlow */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerItem}
            className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden flex flex-col"
          >
            <div className="p-7 flex-1">
              <span className="inline-flex w-fit items-center rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan">
                Proximamente
              </span>
              <h3 className="mt-4 text-xl font-bold text-text-primary">QM StoreFlow</h3>
              <p className="mt-1 text-sm font-medium text-text-secondary">
                Gestion de catalogo y operacion retail
              </p>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                Inventario, catalogo de productos, clientes y operacion comercial para negocios
                de retail y distribucion.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 text-sm text-text-secondary">
                {['Catalogo', 'Inventario', 'Clientes', 'Ventas'].map((item, i, arr) => (
                  <li key={item} className="flex items-center">
                    {item}
                    {i < arr.length - 1 && <span className="mx-2 text-text-muted">·</span>}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-5 inline-flex items-center gap-2 rounded border border-cyan px-5 py-2.5 text-sm font-semibold text-cyan hover:bg-cyan hover:text-white transition-colors"
              >
                Registrar interes
              </a>
            </div>
            <div className="px-7 pb-7">
              <ProductPlaceholder product="storeflow" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
