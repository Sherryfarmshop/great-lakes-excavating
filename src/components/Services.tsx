import Image from 'next/image';

const primaryServices = [
  {
    id: 'septic',
    title: 'Septic System Installation & Replacement',
    desc: 'We provide septic system installation and replacement for residential and rural properties across Northern Michigan. If you are looking for septic system installers near you, we can help with excavation, tank placement, drain field installation, backfilling, grading, and hydro seeding after the work is complete.',
    img: '/images/septic.jpg',
  },
  {
    id: 'site-prep',
    title: 'Site Preparation & Foundation Excavation',
    desc: 'Northwoods Land Work provides excavation, site prep, and dirt work services for residential, rural, and recreational properties across Northern Michigan. If you are looking for an excavation company near you, an excavating contractor, or a dirt work contractor for your property, we can help prepare the site from start to finish.',
    img: '/images/site-prep.jpg',
  },
  {
    id: 'shoreline',
    title: 'Shoreline Protection & Breakwall Installation',
    desc: 'Protect your waterfront property with durable shoreline solutions, including breakwalls, riprap, and erosion control. We work with Northern Michigan lakefront conditions to stabilize and protect your shoreline from long-term damage.',
    img: '/images/gallery-7.jpg',
  },
  {
    id: 'driveways',
    title: 'Driveway Installation & Grading',
    desc: 'We install gravel driveways for homes, farms, cabins, pole barns, new builds, and rural properties across Northern Michigan. If you are looking for a gravel driveway installer or driveway installation contractor, we can help with excavation, base prep, grading, drainage, culverts, and final surface work.',
    img: '/images/driveway-new.jpg',
  },
  {
    id: 'land-clearing',
    title: 'Land Clearing in Northern Michigan',
    desc: 'We provide land clearing services for homeowners, builders, farms, hunting properties, and rural landowners across Northern Michigan. Whether you need small land clearing, brush removal, lot clearing, or excavator land clearing for a larger project, we can open up the property and prepare it for the next step.',
    img: '/images/land-clearing.jpg',
  },
];

const secondaryServices = [
  {
    id: 'brush-hogging',
    title: 'Brush Hogging in Northern Michigan',
    desc: 'We provide brush hogging for overgrown fields, trails, fence lines, roadsides, vacant lots, farm lanes, and rural properties across Northern Michigan. If you are looking for brush hogging near you or a brush hog service nearby, we can help clean up and reclaim overgrown areas.',
    img: '/images/brush-hogging.jpg',
  },
  {
    id: 'drainage',
    title: 'Drainage & Culvert Work',
    desc: 'We install and replace residential driveway culverts, drainage culverts, underground drainage pipe, and culvert pipe for driveways. Proper culvert sizing, placement, slope, and backfill help prevent driveway washouts, standing water, erosion, and long-term drainage problems.',
    img: '/images/gallery-5.jpg',
  },
  {
    id: 'culverts',
    title: 'Culverts & Water Control',
    desc: 'Installation and replacement of culverts for proper water flow across driveways and properties in Northern Michigan. Correct sizing and placement prevent washouts and erosion.',
    img: '/images/culvert.jpg',
  },
  {
    id: 'trenching',
    title: 'Trenching Services in Northern Michigan',
    desc: 'We provide residential trenching services for water lines, electrical lines, drainage systems, culverts, and other underground utility or land improvement needs. We can also handle backfilling, grading, and hydro seeding after trenching.',
    img: '/images/gallery-1.jpg',
  },
  {
    id: 'retaining-walls',
    title: 'Retaining Walls',
    desc: 'We provide residential retaining wall work for properties that need soil support, slope control, driveway edge support, erosion control, or improved land use. We can help with excavation, base preparation, drainage, retaining wall blocks, backfill, and grading.',
    img: '/images/gallery-6.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-5xl text-forest text-center mb-4 font-black uppercase tracking-wider">The Work Starts Here</h2>
        <p className="text-center text-dark-text/80 text-xl font-bold mb-16 max-w-2xl mx-auto italic">
          Real excavation work. Done right the first time.
        </p>

        {/* Primary Services */}
        <div className="space-y-12 mb-16">
          {primaryServices.map((svc, i) => (
            <div key={svc.title} id={svc.id} className={`scroll-mt-32 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="relative w-full md:w-1/2 aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
                <Image src={svc.img} alt={svc.title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-5/12 max-w-xs">
                <h3 className="font-heading text-2xl text-forest mb-3 font-bold">{svc.title}</h3>
                <p className="text-dark-text/80 text-base leading-relaxed font-semibold text-left">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Demolition Featured Banner */}
        <div id="demolition" className="scroll-mt-32 bg-dark-brown rounded-lg overflow-hidden mb-16 shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/10] md:aspect-auto">
              <Image src="/images/demolition.jpg" alt="Demolition services" fill className="object-cover" />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h3 className="font-heading text-3xl text-accent-orange mb-4">Demolition Services &amp; Debris Removal</h3>
              <p className="text-cream/90 text-lg leading-relaxed mb-6 text-left">
                We provide home demolition, old home demolition, barn removal, garage demolition, shed removal, debris cleanup, and site preparation across Northern Michigan. From teardown to debris removal and site cleanup, we prepare your property for rebuilding.
              </p>
              <a href="#contact" className="inline-block bg-[#D9651A] hover:bg-[#c05716] text-[#F2E8D8] px-8 py-3 rounded text-lg font-bold transition-colors w-fit shadow-md">
                Get a Demolition Quote →
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Services */}
        <h3 className="font-heading text-xl text-center mt-16 mb-10 font-black uppercase tracking-widest text-[#1F2A22]">More Ways We Help You Get the Job Done</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {secondaryServices.map((svc) => (
            <div key={svc.title} id={svc.id} className="scroll-mt-32 bg-[#F2E8D8] rounded-lg overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-[#C9B896] hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image src={svc.img} alt={svc.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h4 className="font-heading text-base font-bold text-[#1F2A22] mb-2">{svc.title}</h4>
                <p className="text-[#1F2A22]/80 text-sm leading-relaxed text-left">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Link Section */}
        <div className="bg-[#1F2A22] rounded-lg p-10 text-center mt-16">
          <h3 className="font-heading text-2xl sm:text-3xl text-[#F2E8D8] font-bold mb-4">
            Questions About Excavation, Septic, Driveways, or Hydro Seeding?
          </h3>
          <p className="text-[#D4C9B5] text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Have questions about septic system installation, excavation services, driveway grading, land clearing, drainage culverts, trenching, brush hogging, demolition, retaining walls, or hydro seeding in Northern Michigan? Visit our FAQ page for answers to common questions about land work, pricing factors, site preparation, and property restoration.
          </p>
          <a href="/excavation-land-work-faqs" className="inline-block bg-[#D9651A] hover:bg-[#c05716] text-[#F2E8D8] px-8 py-4 rounded text-lg font-bold tracking-wide transition-colors shadow-lg">
            View FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
