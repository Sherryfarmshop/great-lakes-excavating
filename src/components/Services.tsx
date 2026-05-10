import Image from 'next/image';

const primaryServices = [
  {
    id: 'septic',
    title: 'Septic System Installation & Replacement',
    desc: 'We install and replace septic systems across Northern Michigan, including Charlevoix, Petoskey, and Cheboygan. From perc test coordination and permits to excavation and drain field installation, we handle the entire process so you don\'t have to figure it out. Built for Northern Michigan soil and conditions—done right the first time.',
    img: '/images/septic.jpg',
  },
  {
    id: 'site-prep',
    title: 'Site Preparation & Foundation Excavation',
    desc: 'We provide complete site preparation and foundation excavation for homes, pole barns, garages, and outbuildings. From land clearing to precise grading, we make sure your project starts on solid ground and is ready to build.',
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
    desc: 'We install new gravel driveways, regrade existing ones, and repair washouts. Proper grading and drainage ensure your driveway holds up through Northern Michigan weather and seasonal changes.',
    img: '/images/driveway-new.jpg',
  },
  {
    id: 'land-clearing',
    title: 'Land Clearing in Northern Michigan',
    desc: 'We clear trees, brush, stumps, and overgrown lots across Northern Michigan. Whether you\'re starting a new project in Charlevoix, Petoskey, or Gaylord — or reclaiming your property — we open it up and get it ready for the next step.',
    img: '/images/land-clearing.jpg',
  },
];

const secondaryServices = [
  {
    id: 'brush-hogging',
    title: 'Brush Hogging in Northern Michigan',
    desc: 'We mow down overgrown fields, roadsides, fence lines, and rural lots across Charlevoix, Petoskey, Boyne City, and surrounding areas. Brush hogging keeps your property clean, accessible, and looking sharp — whether it\'s a seasonal cleanup or regular maintenance.',
    img: '/images/brush-hogging.jpg',
  },
  {
    id: 'drainage',
    title: 'Drainage & Ditch Work in Northern Michigan',
    desc: 'Solve standing water and drainage issues with expert ditching, drain tile installation, and grading. Serving properties across Charlevoix, Petoskey, Boyne City, and Northern Michigan.',
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
    desc: 'Precision trenching for water lines, electrical, and drainage systems across Charlevoix, Petoskey, Traverse City, and surrounding areas. Clean cuts, proper backfilling, dependable work.',
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
            <div key={svc.title} id={svc.id} className={`scroll-mt-32 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
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
        <div id="demolition" className="scroll-mt-32 bg-dark-brown rounded-lg overflow-hidden mb-16 shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/10] md:aspect-auto">
              <Image src="/images/demolition.jpg" alt="Demolition services" fill className="object-cover" />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h3 className="font-heading text-3xl text-accent-orange mb-4">Demolition Services & Debris Removal</h3>
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
        <h3 className="font-heading text-xl text-center mt-16 mb-10 font-black uppercase tracking-widest text-[#1F2A22]">More Ways We Help You Get the Job Done</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryServices.map((svc) => (
            <div key={svc.title} id={svc.id} className="scroll-mt-32 bg-[#F2E8D8] rounded-lg overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-[#C9B896] hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image src={svc.img} alt={svc.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h4 className="font-heading text-base font-bold text-[#1F2A22] mb-2">{svc.title}</h4>
                <p className="text-[#1F2A22]/80 text-sm leading-relaxed text-justify">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

