import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-forest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/gallery-2.jpg" alt="Great Lakes Excavating crew at work" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-4xl text-cream mb-6">Built on Hard Work and Handshakes</h2>
            <div className="space-y-4 text-cream/85 text-lg leading-relaxed">
              <p>
                Great Lakes Excavating &amp; Brushwork is a Northern Michigan company built the old-fashioned way — on hard work, fair prices, and doing what we say we&apos;re going to do.
              </p>
              <p>
                We know this land because we live on it. We understand the clay, the sand, the frost lines, and the water tables. When you hire us, you&apos;re not getting a crew from downstate reading a manual — you&apos;re getting experienced operators who&apos;ve worked these soils for years.
              </p>
              <p>
                From septic installs to full-scale land clearing, we show up on time, do the job right, and leave your property better than we found it. No shortcuts, no excuses.
              </p>
              <p className="text-accent-orange font-semibold text-xl">
                Licensed. Insured. Locally owned. Ready to work.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange">100+</div>
                <div className="text-cream/60 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange">5★</div>
                <div className="text-cream/60 text-sm">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange">Local</div>
                <div className="text-cream/60 text-sm">Owned & Operated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
