import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceArea from '@/components/ServiceArea';
import Services from '@/components/Services';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceArea />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
