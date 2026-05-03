import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-forest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/about.jpg" alt="Kubota tractor at sunset on the farm" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-4xl text-cream mb-6">Built on Hard Work<br />and Handshakes</h2>
            <div className="space-y-4 text-cream/85 text-lg leading-relaxed font-semibold max-w-sm">
              <p>
                Great Lakes Excavating &amp; Brushwork is a Northern Michigan company built the old-fashioned way — hard work, fair prices, and doing what we say we&apos;ll do.
              </p>
              <p>
                We know this land because we live on it. From clay and sand to frost lines and water tables, we understand what it takes to get the job done right.
              </p>
              <p>
                When you hire us, you&apos;re not getting a crew learning on your job — you&apos;re getting experienced operators who&apos;ve worked this ground for years.
              </p>
              <p>
                From septic installs to full-scale land clearing, we show up on time, do it right, and leave your property better than we found it. No shortcuts. No excuses.
              </p>
              <p className="text-accent-orange font-semibold text-xl">
                Licensed. Insured. Locally Owned.<br />Ready to Work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
