import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../lib/motion';

export default function Products() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="productos" className="bg-off-white section-padding">
      <div className="container-content">
        <h2 className="text-text-primary font-bold text-[clamp(1.75rem,3vw,2.5rem)] max-w-2xl">
          Productos que construimos y operamos
        </h2>
        <p className="mt-4 text-text-secondary max-w-2xl">
          Porque creemos que la mejor forma de validar una metodología es
          aplicarla en nuestros propios productos.
        </p>

        <motion.div
          initial={shouldReduceMotion ? undefined : 'initial'}
          whileInView={shouldReduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerItem}
            className="rounded-lg border border-border bg-surface p-8 shadow-sm flex flex-col"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-electric">
              Disponible
            </span>
            <h3 className="mt-4 text-xl font-bold text-text-primary">
              QM Connect
            </h3>
            <p className="mt-1 text-sm font-medium text-text-secondary">
              Gestión de operaciones para negocios de servicios
            </p>
            <p className="mt-4 text-text-secondary">
              Agenda citas, gestiona clientes, coordina tu equipo y controla
              la disponibilidad desde una sola plataforma. Diseñado para
              barberías, consultorios, centros de estética y negocios
              similares.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-sm text-text-secondary">
              {['Agenda', 'Clientes', 'Equipo', 'Disponibilidad', 'Operación desde móvil'].map(
                (item, i, arr) => (
                  <li key={item} className="flex items-center">
                    {item}
                    {i < arr.length - 1 && <span className="mx-2 text-text-muted">·</span>}
                  </li>
                )
              )}
            </ul>
            <a
              href="https://qmconnect.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center rounded bg-electric px-5 py-2.5 text-sm font-semibold text-white hover:bg-electric/90 transition-colors"
            >
              Conocer QM Connect
            </a>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : staggerItem}
            className="rounded-lg border border-border bg-surface p-8 shadow-sm flex flex-col"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan">
              Próximamente
            </span>
            <h3 className="mt-4 text-xl font-bold text-text-primary">
              QM StoreFlow
            </h3>
            <p className="mt-1 text-sm font-medium text-text-secondary">
              Gestión de catálogo y operación retail
            </p>
            <p className="mt-4 text-text-secondary">
              Inventario, catálogo de productos, clientes y operación
              comercial para negocios de retail y distribución.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-sm text-text-secondary">
              {['Catálogo', 'Inventario', 'Clientes', 'Ventas'].map((item, i, arr) => (
                <li key={item} className="flex items-center">
                  {item}
                  {i < arr.length - 1 && <span className="mx-2 text-text-muted">·</span>}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="mt-6 inline-flex w-fit items-center rounded border border-cyan px-5 py-2.5 text-sm font-semibold text-cyan hover:bg-cyan hover:text-white transition-colors"
            >
              Registrar interés
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
