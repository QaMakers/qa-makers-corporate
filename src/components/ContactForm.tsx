import { type FormEvent, useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Contacto desde qamakers.com.mx — ${name || 'Sin nombre'}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nEmpresa: ${company}\n\nMensaje:\n${message}`
    );
    window.location.href = `mailto:contacto@qamakersapp.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/80">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-electric focus:outline-none"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-electric focus:outline-none"
          placeholder="tu@empresa.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-white/80">
          Empresa (opcional)
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-2 w-full rounded border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-electric focus:outline-none"
          placeholder="Nombre de tu empresa"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80">
          Cuéntanos sobre tu proyecto
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full rounded border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-electric focus:outline-none"
          placeholder="Describe el reto de calidad o proyecto que tienes en mente"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-fit items-center rounded bg-electric px-6 py-3 text-sm font-semibold text-white hover:bg-electric/90 transition-colors"
      >
        Enviar mensaje
      </button>

      <p className="text-sm text-white/50">
        O escríbenos directamente a{' '}
        <a href="mailto:contacto@qamakersapp.com" className="text-electric hover:underline">
          contacto@qamakersapp.com
        </a>
      </p>
    </form>
  );
}
