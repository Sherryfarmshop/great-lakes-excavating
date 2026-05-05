import Image from 'next/image';

const images = [
  { src: '/images/gallery-before-after-driveway.jpg', alt: 'Driveway project' },
  { src: '/images/gallery-before-after-pond.jpg', alt: 'Pond construction' },
  { src: '/images/gallery-before-after-drainage.jpg', alt: 'Drainage work' },
  { src: '/images/gallery-before-after-culvert.jpg', alt: 'Culvert installation' },
  { src: '/images/gallery-before-after-clearing.jpg', alt: 'Land clearing' },
  { src: '/images/gallery-2.jpg', alt: 'Excavation project' },
  { src: '/images/gallery-3.jpg', alt: 'Site work in progress' },
  { src: '/images/gallery-5.jpg', alt: 'Drainage and ditch work' },
  { src: '/images/gallery-6.jpg', alt: 'Equipment at work' },
  { src: '/images/gallery-7.jpg', alt: 'Shoreline work' },
  { src: '/images/driveway-new.jpg', alt: 'Driveway grading' },
  { src: '/images/land-clearing.jpg', alt: 'Land clearing' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="font-heading text-3xl md:text-4xl text-[#1F2A22] text-center mb-3 font-black uppercase tracking-wider">
          In the Dirt
        </h2>
        <p className="text-center text-[#1F2A22]/70 text-lg font-medium mb-12 max-w-2xl mx-auto italic">
          A look at the work — done across Northern Michigan.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-square">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
