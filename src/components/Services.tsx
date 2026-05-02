const primaryServices = [
  {
    title: 'Septic System Installation & Replacement',
    desc: 'From new installs to full replacements, we handle every step — perc tests, permits, and proper installation. We know Northern Michigan soil and we do it right the first time.',
    icon: '🔧',
  },
  {
    title: 'Site Preparation & Foundation Excavation',
    desc: 'Building a home, pole barn, or garage? We clear the site, dig the foundation, and grade it level so your project starts on solid ground.',
    icon: '🏗️',
  },
  {
    title: 'Driveway Installation & Grading',
    desc: 'New gravel driveways, regrading existing ones, or fixing washouts from spring runoff. We build driveways that hold up through Michigan winters.',
    icon: '🛤️',
  },
  {
    title: 'Land Clearing',
    desc: 'Trees, brush, stumps, overgrown lots — we clear it all. Whether you\'re prepping for construction or just reclaiming your property, we\'ll open it up.',
    icon: '🌲',
  },
  {
    title: 'Trenching',
    desc: 'Water lines, electric, drainage — we trench clean and backfill right. Residential and commercial projects, done on schedule.',
    icon: '⚡',
  },
];

const secondaryServices = [
  {
    title: 'Demolition',
    desc: 'Houses, barns, garages, old structures — we tear them down safely and haul everything away. After the recent Cheboygan flooding, we\'ve been helping families clear damaged properties and rebuild. If you\'ve been affected, give us a call.',
    icon: '🏚️',
    featured: true,
  },
  {
    title: 'Drainage & Ditch Work',
    desc: 'Standing water on your property? We dig ditches, install drain tile, and redirect water flow to keep your land dry and usable.',
    icon: '💧',
  },
  {
    title: 'Culverts & Water Control',
    desc: 'We install and replace culverts to manage water crossings on your driveway or property. Properly sized, properly placed.',
    icon: '🌊',
  },
  {
    title: 'Gravel Delivery & Spreading',
    desc: 'Need gravel? We deliver and spread it — driveways, parking areas, job sites. Multiple grades available.',
    icon: '🪨',
  },
  {
    title: 'Final Grading & Yard Leveling',
    desc: 'After construction or just to clean up your yard, we grade it smooth and ready for seed, sod, or landscaping.',
    icon: '🏡',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {primaryServices.map((svc) => (
            <div key={svc.title} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border-t-4 border-forest">
              <div className="text-4xl mb-4">{svc.icon}</div>
              <h3 className="font-heading text-xl text-forest mb-3">{svc.title}</h3>
              <p className="text-dark-text/80 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Demolition Featured Banner */}
        <div className="bg-dark-brown rounded-lg p-10 mb-16 text-center shadow-xl">
          <div className="text-5xl mb-4">🏚️</div>
          <h3 className="font-heading text-3xl text-accent-orange mb-4">Demolition Services</h3>
          <p className="text-cream/90 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            After the devastating flooding in Cheboygan this year, we&apos;ve been on the ground helping families tear down damaged homes, barns, and structures. If your property was hit, we&apos;re here to help you clear the wreckage and start fresh. Safe, efficient demolition — houses, garages, barns, and more.
          </p>
          <a href="#contact" className="inline-block bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-3 rounded text-lg font-semibold transition-colors">
            Get Flood Damage Help →
          </a>
        </div>

        {/* Secondary Services */}
        <h3 className="font-heading text-2xl text-forest text-center mb-10">Additional Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryServices.filter(s => !s.featured).map((svc) => (
            <div key={svc.title} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-gold">
              <div className="text-3xl mb-3">{svc.icon}</div>
              <h4 className="font-heading text-lg text-forest mb-2">{svc.title}</h4>
              <p className="text-dark-text/75 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
