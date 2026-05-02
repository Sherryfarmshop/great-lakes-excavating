import Image from 'next/image';

const images = [
  { src: '/images/gallery-1.jpg', alt: 'Excavation site work' },
  { src: '/images/gallery-2.jpg', alt: 'Land clearing project' },
  { src: '/images/gallery-3.jpg', alt: 'Septic system installation' },
  { src: '/images/gallery-4.jpg', alt: 'Driveway grading' },
  { src: '/images/gallery-5.jpg', alt: 'Demolition work' },
  { src: '/images/gallery-6.jpg', alt: 'Trenching and drainage' },
  { src: '/images/gallery-7.jpg', alt: 'Finished grading project' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-tan/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-4xl text-forest text-center mb-4">Our Work</h2>
        <p className="text-center text-dark-text/70 text-lg mb-12 max-w-2xl mx-auto">
          Every project tells a story. Here&apos;s a look at what we do across Northern Michigan.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <div className={`relative ${i === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
