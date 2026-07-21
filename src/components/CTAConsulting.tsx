import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { fadeInUp } from '../lib/motion';
import ContactForm from './ContactForm';

export default function CTAConsulting() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contacto"
      className="relative bg-navy section-padding"
      style={{
        backgroundImage:
          'radial-gradient(circle at top right, rgba(47,107,255,0.12), transparent 60%)',
      }}
    >
      <div className="container-content grid md:grid-cols-2 gap-12">
        <motion.div
          initial={shouldReduceMotion ? undefined : 'initial'}
          whileInView={shouldReduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-white font-bold text-[clamp(1.75rem,3vw,2.5rem)]">
            Construyamos software con mayor confianza.
          </h2>
          <p className="mt-4 text-white/60 max-w-md">
            Cuéntanos sobre tu proyecto o el reto de calidad que enfrenta tu
            equipo.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-navy-mid p-4">
              <Mail className="text-electric" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">Email</p>
                <a
                  href="mailto:contacto@qamakersapp.com"
                  className="text-sm font-medium text-white hover:text-electric"
                >
                  contacto@qamakersapp.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-navy-mid p-4">
              <MessageCircle className="text-cyan" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">WhatsApp</p>
                <p className="text-sm font-medium text-white">+52 (pendiente)</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="rounded-lg border border-white/10 bg-navy-mid p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
