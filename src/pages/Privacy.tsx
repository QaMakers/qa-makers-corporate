import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="bg-off-white section-padding pt-32">
        <div className="container-content max-w-3xl">
          <h1 className="text-text-primary font-bold text-[clamp(1.75rem,3vw,2.5rem)]">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm text-text-muted">
            Última actualización: julio 2026
          </p>
          <p className="mt-6 text-text-secondary leading-relaxed">
            Esta política describe cómo QA Makers recopila, usa y protege la
            información que compartes con nosotros. Para consultas sobre
            privacidad, contacta:{' '}
            <a
              href="mailto:contacto@qamakersapp.com"
              className="text-electric hover:underline"
            >
              contacto@qamakersapp.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
