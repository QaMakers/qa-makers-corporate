import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { fadeInUp } from '../lib/motion';
import ContactForm from './ContactForm';
import { WA_URL } from './WhatsAppButton';

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

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
      <div className="container-content grid md:grid-cols-2 gap-10 md:gap-12">
        {/* Left — heading + contact info */}
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

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-navy-mid p-4">
              <Mail className="text-electric shrink-0" size={18} />
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wide text-white/40">Email</p>
                <a
                  href="mailto:contacto@qamakersapp.com"
                  className="text-sm font-medium text-white hover:text-electric break-all"
                >
                  contacto@qamakersapp.com
                </a>
              </div>
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-navy-mid p-4 hover:border-[#25D366]/40 transition-colors duration-150"
            >
              <span className="text-[#25D366] shrink-0">
                <WhatsAppIcon />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">WhatsApp</p>
                <p className="text-sm font-medium text-white">+52 442 269 1289</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right — pre-form CTA (mobile) + form */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Pre-form CTA block — mobile only */}
          <div className="md:hidden mb-6 space-y-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full rounded-lg bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white active:opacity-90 transition-opacity"
            >
              <WhatsAppIcon />
              Habla por WhatsApp
            </a>
            <a
              href="mailto:contacto@qamakersapp.com?subject=Solicitud%20de%20llamada"
              className="flex items-center justify-center gap-2.5 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-medium text-white active:bg-white/10 transition-colors"
            >
              <Phone size={16} className="text-white/60" />
              Agenda una llamada
            </a>
            <div className="flex items-center gap-3 pt-1">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs text-white/40 font-medium whitespace-nowrap">
                o llena el formulario
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </div>

          {/* Form panel */}
          <div className="rounded-lg border border-white/10 bg-navy-mid p-6 sm:p-8">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
