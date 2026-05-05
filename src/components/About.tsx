import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#1F2A22]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/about.jpg" alt="Kubota tractor at work" fill className="object-cover" />
          </div>

          {/* Text — left-aligned, max 650px, slightly offset */}
          <div className="md:pl-4">
            <div className="max-w-[650px]">

              <h2 className="font-heading text-3xl sm:text-4xl text-[#F2E8D8] font-black leading-tight tracking-tight mb-8">
                Built on Hard Work<br />and Handshakes
              </h2>

              <div className="space-y-6 text-[#D4C9B5] text-base leading-[1.9]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                <p>
                  Northwoods Landwork is a Northern Michigan company built the old-fashioned way — hard work, fair prices, and doing what we say we&apos;ll do.
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
                <p className="text-[#D9651A] font-semibold">
                  Licensed. Insured. Locally Owned.<br />Ready to Work.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-6 pt-5 border-t border-[#F2E8D8]/20">
                <p className="text-[#F2E8D8] text-lg italic" style={{ fontFamily: "Georgia, serif" }}>
                  — Scott Cleland
                </p>
                <p className="text-[#D4C9B5] text-base tracking-wide mt-1" style={{ fontFamily: "Georgia, serif" }}>
                  Owner-Operator, Northwoods Landwork
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
