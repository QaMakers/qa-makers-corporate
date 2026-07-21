import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BusinessLines from '../components/BusinessLines';
import Services from '../components/Services';
import HowWeCreateValue from '../components/HowWeCreateValue';
import Industries from '../components/Industries';
import Products from '../components/Products';
import Methodology from '../components/Methodology';
import QualityPrinciple from '../components/QualityPrinciple';
import CTAConsulting from '../components/CTAConsulting';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BusinessLines />
        <Services />
        <HowWeCreateValue />
        <Industries />
        <Products />
        <Methodology />
        <QualityPrinciple />
        <CTAConsulting />
      </main>
      <Footer />
    </>
  );
}
