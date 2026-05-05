import Image from 'next/image';

const images = [
  { src: '/images/gallery-2.jpg', alt: 'Excavation project' },
  { src: '/images/gallery-3.jpg', alt: 'Site work in progress' },
  { src: '/images/gallery-4.jpg', alt: 'Grading and earthwork' },
  { src: '/images/gallery-6.jpg', alt: 'Equipment at work' },
  { src: '/images/driveway.jpg', alt: 'Driveway grading work' },
];

const beforeAfter = [
  { src: '/images/gallery-before-after-driveway.jpg', label: 'Driveway Restoration' },
  { src: '/images/gallery-before-after-pond.jpg', label: 'Pond Construction' },
  { src: '/images/gallery-before-after-drainage.jpg', label: 'Drainage Work' },
  { src: '/images/gallery-before-after-culvert.jpg', label: 'Culvert Replacement' },
  { src: '/images/gallery-before-after-clearing.jpg', label: 'Land Clearing' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Before & After */}
        <h2 className="font-heading text-3xl md:text-4xl text-[#1F2A22] text-center mb-3 font-black uppercase tracking-wider">Before &amp; After</h2>
        <p className="text-center text-[#1F2A22]/70 text-lg font-medium mb-10 max-w-2xl mx-auto italic">
          The work speaks for itself.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {beforeAfter.map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg shadow-lg border border-[#C9B896]/60">
              <Image src={img.src} alt={img.label} width={800} height={600} className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1F2A22]/70 px-4 py-2">
                <p className="text-[#F2E8D8] text-sm font-bold uppercase tracking-wide">{img.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* In the Dirt */}
        <h2 className="font-heading text-3xl md:text-4xl text-[#1F2A22] text-center mb-3 font-black uppercase tracking-wider">In the Dirt</h2>
        <p className="text-center text-[#1F2A22]/70 text-lg font-medium mb-10 max-w-2xl mx-auto italic">
          A look at the work — done across Northern Michigan.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="relative aspect-square">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
