import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="bg-off-white section-padding pt-32">
        <div className="container-content max-w-3xl">
          <h1 className="text-text-primary font-bold text-[clamp(1.75rem,3vw,2.5rem)]">
            Términos de Servicio
          </h1>
          <p className="mt-6 text-text-secondary leading-relaxed">
            Los términos de servicio de QA Makers serán publicados
            próximamente. Para más información, contacta:{' '}
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
