import Image from 'next/image';

const images = [
  { src: '/images/gallery-2.jpg', alt: 'Excavation project' },
  { src: '/images/gallery-3.jpg', alt: 'Site work in progress' },
  { src: '/images/gallery-4.jpg', alt: 'Grading and earthwork' },
  { src: '/images/gallery-6.jpg', alt: 'Equipment at work' },
  { src: '/images/driveway.jpg', alt: 'Driveway grading work' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-tan/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl text-forest text-center mb-4 font-black uppercase tracking-wider">In the Dirt</h2>
        <p className="text-center text-dark-text/80 text-xl font-bold mb-12 max-w-2xl mx-auto italic">
          &ldquo;A look at the work—done across Northern Michigan.&rdquo;
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
