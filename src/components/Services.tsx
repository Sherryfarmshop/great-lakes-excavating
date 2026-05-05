import Image from 'next/image';

const primaryServices = [
  {
    title: 'Septic System Installation & Replacement',
    desc: 'We install and replace septic systems across Northern Michigan, including Charlevoix, Petoskey, and Cheboygan. From perc test coordination and permits to excavation and drain field installation, we handle the entire process so you don\'t have to figure it out. Built for Northern Michigan soil and conditions—done right the first time.',
    img: '/images/septic.jpg',
  },
  {
    title: 'Site Preparation & Foundation Excavation',
    desc: 'We provide complete site preparation and foundation excavation for homes, pole barns, garages, and outbuildings. From land clearing to precise grading, we make sure your project starts on solid ground and is ready to build.',
    img: '/images/site-prep.jpg',
  },
  {
    title: 'Shoreline Protection & Breakwall Installation',
    desc: 'Protect your waterfront property with durable shoreline solutions, including breakwalls, riprap, and erosion control. We work with Northern Michigan lakefront conditions to stabilize and protect your shoreline from long-term damage.',
    img: '/images/gallery-7.jpg',
  },
  {
    title: 'Driveway Installation & Grading',
    desc: 'We install new gravel driveways, regrade existing ones, and repair washouts. Proper grading and drainage ensure your driveway holds up through Northern Michigan weather and seasonal changes.',
    img: '/images/driveway-new.jpg',
  },
  {
    title: 'Land Clearing',
    desc: 'We clear trees, brush, stumps, and overgrown lots to prepare your land for building or use. Whether you\'re starting a new project or reclaiming your property, we open it up and get it ready for the next step.',
    img: '/images/land-clearing.jpg',
  },
];

const secondaryServices = [
  {
    title: 'Pond Digging, Pond Construction & Excavation',
    desc: 'We provide pond digging and excavation for homes, farms, and recreational properties. From new pond construction to enlarging or reshaping existing ponds, we ensure proper depth, grading, and drainage for long-lasting results.',
    img: '/images/pond.jpg',
  },
  {
    title: 'Drainage & Ditch Work',
    desc: 'Dealing with standing water or poor drainage? We handle ditch digging, drain tile installation, yard drainage, and water control across Northern Michigan. From wet yards to large properties, we redirect water properly to keep your land dry and usable.',
    img: '/images/gallery-5.jpg',
  },
  {
    title: 'Culverts & Water Control',
    desc: 'We install and replace culverts for proper water flow across driveways and properties in Northern Michigan. Correct sizing and placement prevent washouts, erosion, and drainage issues.',
    img: '/images/culvert.jpg',
  },
  {
    title: 'Trenching',
    desc: 'We handle trenching for water lines, electric, and drainage systems. Clean cuts, proper backfilling, and dependable work for residential and commercial projects—done on schedule.',
    img: '/images/gallery-1.jpg',
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
            <div key={svc.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="relative w-full md:w-1/2 aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
                <Image src={svc.img} alt={svc.title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-5/12 max-w-xs">
                <h3 className="font-heading text-2xl text-forest mb-3 font-bold">{svc.title}</h3>
                <p className="text-dark-text/80 text-base leading-relaxed font-semibold text-justify">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Demolition Featured Banner */}
        <div className="bg-dark-brown rounded-lg overflow-hidden mb-16 shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/10] md:aspect-auto">
              <Image src="/images/demolition.jpg" alt="Demolition services" fill className="object-cover" />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h3 className="font-heading text-3xl text-accent-orange mb-4">Demolition Services</h3>
              <p className="text-cream/90 text-lg leading-relaxed mb-6 text-justify">
                We handle safe, efficient demolition of homes, barns, garages, and damaged structures across Northern Michigan. From teardown to debris removal and site cleanup, we prepare your property for rebuilding.
              </p>
              <a href="#contact" className="inline-block bg-[#D9651A] hover:bg-[#c05716] text-[#F2E8D8] px-8 py-3 rounded text-lg font-bold transition-colors w-fit shadow-md">
                Get a Demolition Quote →
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Services */}
        <h3 className="font-heading text-2xl text-center mb-10 font-bold uppercase tracking-wider text-[#1F2A22]">More Ways We Help You Get the Job Done</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryServices.map((svc) => (
            <div key={svc.title} className="bg-[#EFE8DC] rounded-lg overflow-hidden shadow-md border border-[#C9B896]/60 hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image src={svc.img} alt={svc.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h4 className="font-heading text-lg font-bold text-[#1F2A22] mb-2">{svc.title}</h4>
                <p className="text-[#1F2A22]/75 text-sm leading-relaxed text-justify">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
