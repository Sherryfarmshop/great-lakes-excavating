import Image from 'next/image';

export default function HydroSeeding() {
  return (
    <section id="hydroseeding" className="bg-[#1F2A22] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Image + Header side by side */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/hydroseed-hero.jpg" alt="Hydro seeding a new lawn in Northern Michigan" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#D9651A] font-black uppercase tracking-wider mb-4">
              Hydro Seeding in Northern Michigan
            </h2>
            <p className="text-[#F2E8D8] text-lg sm:text-xl mb-6 leading-relaxed">
              Fast, affordable lawn seeding for new lawns, bare ground, slopes, and freshly disturbed soil.
            </p>
            <p className="text-[#D4C9B5] text-base mb-4 leading-relaxed">
              Northwoods Land Work offers hydro seeding for homeowners, builders, farms, and rural properties throughout Northern Michigan.
            </p>
            <p className="text-[#D4C9B5] text-base mb-8 leading-relaxed">
              Hydro seeding is a cost-effective way to establish grass using a sprayed mixture of seed, mulch, fertilizer, and water. It works well for large areas, new construction sites, septic field restoration, driveway edges, slopes, ditches, and ground disturbed by excavation or grading.
            </p>
            <a href="#contact" className="inline-block bg-[#D9651A] hover:bg-[#c05716] text-[#F2E8D8] px-8 py-4 rounded text-lg font-bold tracking-wide transition-colors shadow-lg">
              Request a Hydro Seeding Quote
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F2E8D8]/20 mb-14" />

        {/* Great For */}
        <h3 className="font-heading text-2xl text-[#F2E8D8] font-bold text-center mb-8">Great For</h3>
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {[
            'New lawns',
            'Freshly graded yards',
            'New construction sites',
            'Septic field restoration',
            'Driveway edges',
            'Slopes',
            'Ditches',
            'Excavation repair',
            'Farms',
            'Large bare areas',
          ].map((item) => (
            <span
              key={item}
              className="bg-[#F2E8D8]/10 text-[#D4C9B5] border border-[#F2E8D8]/20 rounded-full px-5 py-2 text-sm font-semibold"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#F2E8D8]/20 mb-14" />

        {/* Why Hydro Seeding */}
        <h3 className="font-heading text-2xl text-[#F2E8D8] font-bold text-center mb-6">Why Hydro Seeding?</h3>
        <p className="text-[#D4C9B5] text-base leading-relaxed max-w-2xl mx-auto text-center mb-14">
          Hydro seeding gives better coverage than hand seeding and is much more affordable than sod, especially for larger areas. The mulch helps hold moisture around the seed, protects the soil surface, and helps reduce washout on slopes or exposed ground.
        </p>

        {/* Divider */}
        <div className="border-t border-[#F2E8D8]/20 mb-14" />

        {/* Our Process */}
        <h3 className="font-heading text-2xl text-[#F2E8D8] font-bold text-center mb-10">Our Process</h3>
        <div className="space-y-10 max-w-2xl mx-auto mb-14">
          <div>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-[#D9651A] font-heading text-3xl font-black">1</span>
              <h4 className="text-[#F2E8D8] text-lg font-bold">Prep the area</h4>
            </div>
            <p className="text-[#D4C9B5] text-base leading-relaxed pl-10">
              The ground should be graded, cleared of large debris, and ready for seed. We can also help with grading, topsoil, and site preparation if needed.
            </p>
          </div>
          <div>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-[#D9651A] font-heading text-3xl font-black">2</span>
              <h4 className="text-[#F2E8D8] text-lg font-bold">Spray the hydro seed</h4>
            </div>
            <p className="text-[#D4C9B5] text-base leading-relaxed pl-10">
              We apply a blended mixture of seed, mulch, fertilizer, and water evenly over the prepared soil.
            </p>
          </div>
          <div>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-[#D9651A] font-heading text-3xl font-black">3</span>
              <h4 className="text-[#F2E8D8] text-lg font-bold">Water and let it grow</h4>
            </div>
            <p className="text-[#D4C9B5] text-base leading-relaxed pl-10">
              Consistent watering after application is the most important part. We will explain how to care for the area so the grass has the best chance to establish.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F2E8D8]/20 mb-14" />

        {/* Get a Quote */}
        <h3 className="font-heading text-2xl text-[#F2E8D8] font-bold text-center mb-4">Get a Quote</h3>
        <p className="text-[#D4C9B5] text-base text-center mb-8 max-w-xl mx-auto">
          Send us your location, photos of the area, and the approximate square footage if you have it.
        </p>
        <div className="text-center">
          <a href="#contact" className="inline-block bg-[#D9651A] hover:bg-[#c05716] text-[#F2E8D8] px-8 py-4 rounded text-lg font-bold tracking-wide transition-colors shadow-lg">
            Request a Hydro Seeding Quote
          </a>
        </div>

      </div>
    </section>
  );
}
