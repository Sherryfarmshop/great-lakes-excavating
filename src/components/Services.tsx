import Image from 'next/image';

const primaryServices = [
  {
    title: 'Septic System Installation & Replacement',
    desc: 'We install and replace septic systems across Northern Michigan, including perc test coordination, permits, excavation, and drain fields. Built for our soil—done right the first time.',
    img: '/images/septic.jpg',
  },
  {
    title: 'Site Preparation & Foundation Excavation',
    desc: 'We provide complete site preparation and foundation excavation for homes, pole barns, and garages. We handle land clearing, excavation, and precise grading—ensuring your project starts on solid ground.',
    img: '/images/site-prep.jpg',
  },
  {
    title: 'Driveway Installation & Grading',
    desc: 'We install gravel driveways, regrade existing ones, and repair washouts. Built for proper drainage and durability—so your driveway holds up through Michigan winters.',
    img: '/images/driveway.jpg',
  },
  {
    title: 'Land Clearing',
    desc: 'Professional land clearing services for trees, brush, stumps, and overgrown lots. We handle lot clearing, brush removal, stump removal, and site prep for construction—whether you\'re preparing to build or just reclaiming your property, we\'ll open it up.',
    img: '/images/gallery-2.jpg',
  },
  {
    title: 'Trenching',
    desc: 'Water lines, electric, drainage — we trench clean and backfill right. Residential and commercial projects, done on schedule.',
    img: '/images/gallery-6.jpg',
  },
];

const secondaryServices = [
  {
    title: 'Drainage & Ditch Work',
    desc: 'Standing water on your property? We dig ditches, install drain tile, and redirect water flow to keep your land dry and usable.',
    img: '/images/gallery-5.jpg',
  },
  {
    title: 'Culverts & Water Control',
    desc: 'We install and replace culverts to manage water crossings on your driveway or property. Properly sized, properly placed.',
    img: '/images/gallery-7.jpg',
  },
  {
    title: 'Gravel Delivery & Spreading',
    desc: 'Need gravel? We deliver and spread it — driveways, parking areas, job sites. Multiple grades available.',
    img: '/images/gallery-4.jpg',
  },
  {
    title: 'Final Grading & Yard Leveling',
    desc: 'After construction or just to clean up your yard, we grade it smooth and ready for seed, sod, or landscaping.',
    img: '/images/gallery-1.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-4xl text-forest text-center mb-4">What We Do</h2>
        <p className="text-center text-dark-text/70 text-lg mb-16 max-w-2xl mx-auto">
          From breaking ground to finishing grade, we handle the heavy work so you don&apos;t have to.
        </p>

        {/* Primary Services */}
        <div className="space-y-12 mb-16">
          {primaryServices.map((svc, i) => (
            <div key={svc.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="relative w-full md:w-1/2 aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
                <Image src={svc.img} alt={svc.title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-5/12 max-w-xs">
                <h3 className="font-heading text-2xl text-forest mb-3 font-bold">{svc.title}</h3>
                <p className="text-dark-text/80 text-base leading-relaxed font-semibold">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Demolition Featured Banner */}
        <div className="bg-dark-brown rounded-lg overflow-hidden mb-16 shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/10] md:aspect-auto">
              <Image src="/images/gallery-5.jpg" alt="Demolition services" fill className="object-cover" />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h3 className="font-heading text-3xl text-accent-orange mb-4">Demolition Services</h3>
              <p className="text-cream/90 text-lg leading-relaxed mb-6">
                After the devastating flooding in Cheboygan this year, we&apos;ve been on the ground helping families tear down damaged homes, barns, and structures. If your property was hit, we&apos;re here to help you clear the wreckage and start fresh. Safe, efficient demolition — houses, garages, barns, and more.
              </p>
              <a href="#contact" className="inline-block bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-3 rounded text-lg font-semibold transition-colors w-fit">
                Get Flood Damage Help →
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Services */}
        <h3 className="font-heading text-2xl text-forest text-center mb-10">Additional Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryServices.map((svc) => (
            <div key={svc.title} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image src={svc.img} alt={svc.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h4 className="font-heading text-lg text-forest mb-2">{svc.title}</h4>
                <p className="text-dark-text/75 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
