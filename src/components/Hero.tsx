import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <Image src="/images/gallery-1.jpg" alt="Excavation work in Northern Michigan" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-dark-brown/60" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-cream leading-tight mb-6 drop-shadow-lg">
          Excavation Contractor in Northern Michigan
        </h1>
        <p className="text-xl sm:text-2xl text-cream/90 mb-4 drop-shadow font-body">
          Excavating &bull; Land Clearing &bull; Demolition &bull; Site Work
        </p>
        <p className="text-lg text-tan mb-8 drop-shadow">
          Serving Cheboygan, Charlevoix, Petoskey &amp; Surrounding Areas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-4 rounded text-lg font-semibold tracking-wide transition-colors shadow-lg">
            Get a Free Estimate
          </a>
          <a href="tel:2313304745" className="border-2 border-cream text-cream hover:bg-cream hover:text-dark-brown px-8 py-4 rounded text-lg font-semibold tracking-wide transition-colors">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
