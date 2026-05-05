import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <Image src="/images/gallery-1.jpg" alt="Excavation work in Northern Michigan" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-dark-brown/65" />
      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* H1 */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-cream leading-tight mb-4 drop-shadow-lg">
          Excavation &amp; Septic Contractor<br className="hidden sm:block" /> in Northern Michigan
        </h1>

        {/* H2 */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-cream/85 font-body font-normal mb-4 drop-shadow max-w-3xl mx-auto leading-snug">
          From Raw Land to Ready-to-Build — Site Prep, Septic Installation &amp; Land Clearing in Northern Michigan
        </h2>

        {/* Service line */}
        <p className="text-sm sm:text-base text-tan tracking-wide mb-3 drop-shadow">
          Septic Installation &bull; Site Preparation &bull; Land Clearing &bull; Driveways &bull; Drainage &bull; Demolition
        </p>

        {/* Location */}
        <p className="text-sm text-tan/80 mb-8 drop-shadow">
          Serving Charlevoix, Petoskey, Cheboygan &amp; surrounding Northern Michigan areas
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#contact" className="bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-4 rounded text-lg font-semibold tracking-wide transition-colors shadow-lg">
            Get a Quote in 24 Hours
          </a>
          <a href="tel:2313304745" className="border-2 border-cream text-cream hover:bg-cream hover:text-dark-brown px-8 py-4 rounded text-lg font-semibold tracking-wide transition-colors">
            Call or Text Now
          </a>
        </div>

        {/* Short description */}
        <p className="text-cream/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed drop-shadow">
          We provide professional excavation, septic installation, and site preparation services for residential and rural properties across Northern Michigan. From clearing land to final grading, we handle your project from start to finish.
        </p>

      </div>
    </section>
  );
}
