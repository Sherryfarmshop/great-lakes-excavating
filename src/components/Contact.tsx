'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-5xl text-forest text-center mb-4 font-black uppercase tracking-wider">Let&apos;s Get to Work</h2>
        <p className="text-center text-dark-text/80 text-xl font-bold max-w-2xl mx-auto italic">
          Call. Text. Let&apos;s get it done.
        </p>
        <p className="text-center text-dark-text/70 text-lg mb-4 max-w-2xl mx-auto">
          No runaround. Just straight answers.
        </p>
        <p className="text-center text-dark-text/60 text-base mb-8 max-w-2xl mx-auto">
          Call your local Northern Michigan excavation contractor today for a free estimate.
        </p>
        <p className="text-center text-dark-text/50 text-sm mb-12 max-w-xl mx-auto">
          <strong className="text-dark-text/70">Areas We Serve:</strong> We serve Northern Michigan, including Charlevoix, Petoskey, Boyne City, Traverse City, Gaylord, Cheboygan, and surrounding communities.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">

            {/* Phone — main focus */}
            <div>
              <h3 className="font-heading text-xl text-forest mb-2 uppercase tracking-wide">Call or Text</h3>
              <a href="tel:2313304745" className="text-5xl font-black text-[#D9651A] hover:text-[#c05716] transition-colors block leading-none mb-2">
                (231) 330-4745
              </a>
              <p className="text-dark-text/60 text-sm mb-3">Most calls returned same day.</p>
              <a href="tel:2313304745" className="inline-block bg-[#D9651A] hover:bg-[#c05716] text-[#F2E8D8] font-bold px-6 py-3 rounded text-base tracking-wide transition-colors shadow-md">
                Tap to Call
              </a>
            </div>

            {/* Service area + hours — grouped */}
            <div className="border-t border-[#1F2A22]/10 pt-5 space-y-4">
              <div>
                <h3 className="font-heading text-base text-forest uppercase tracking-wide font-bold mb-1">Where We Work</h3>
                <p className="text-dark-text/80 text-sm leading-relaxed">
                  We provide excavation, land clearing, drainage, and site work services across Northern Michigan, including Charlevoix, Petoskey, Boyne City, Traverse City, Gaylord, Cheboygan, and surrounding areas.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base text-forest uppercase tracking-wide font-bold mb-1">Hours</h3>
                <p className="text-dark-text/80 text-sm">Monday – Friday: 7:00 AM – 6:00 PM</p>
                <p className="text-dark-text/80 text-sm">Saturday: By appointment</p>
              </div>
            </div>

            {/* Flood box — secondary, smaller */}
            <div className="bg-[#1F2A22] rounded-lg p-4 text-cream">
              <p className="font-bold text-[#D9651A] text-sm mb-1">Flood &amp; Storm Damage?</p>
              <p className="text-cream/75 text-xs leading-relaxed">
                Call us. We prioritize cleanup and demolition for affected families across Northern Michigan. Available 7 days a week.
              </p>
            </div>

          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-forest">
            <h3 className="font-heading text-2xl text-forest mb-6">Request a Free Estimate</h3>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="font-heading text-2xl text-forest mb-2">Thanks!</h4>
                <p className="text-dark-text/70">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-text mb-1">Name</label>
                  <input type="text" id="name" name="name" required className="w-full border border-tan rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest text-dark-text" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark-text mb-1">Phone</label>
                  <input type="tel" id="phone" name="phone" required className="w-full border border-tan rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest text-dark-text" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-text mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full border border-tan rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest text-dark-text" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-dark-text mb-1">Service Needed</label>
                  <select id="service" name="service" required className="w-full border border-tan rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest text-dark-text bg-white">
                    <option value="">Select a service...</option>
                    <option>Septic System Installation &amp; Replacement</option>
                    <option>Site Preparation &amp; Foundation Excavation</option>
                    <option>Shoreline Protection &amp; Breakwall Installation</option>
                    <option>Driveway Installation &amp; Grading</option>
                    <option>Land Clearing</option>
                    <option>Demolition</option>
                    <option>Pond Digging &amp; Construction</option>
                    <option>Drainage &amp; Ditch Work</option>
                    <option>Culverts &amp; Water Control</option>
                    <option>Trenching</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-semibold text-dark-text mb-1">Project Details</label>
                  <textarea id="details" name="details" rows={4} className="w-full border border-tan rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest text-dark-text resize-none" placeholder="Tell us about your project — location, timeline, anything helpful..." />
                </div>
                <button type="submit" className="w-full bg-[#D9651A] hover:bg-[#c05716] text-[#F2E8D8] py-4 rounded text-lg font-bold tracking-wide transition-colors shadow-md">
                  Send Estimate Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
