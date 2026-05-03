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
        <p className="text-center text-dark-text/70 text-lg mb-12 max-w-2xl mx-auto">
          No runaround. Just straight answers.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl text-forest mb-2">Call or Text</h3>
              <a href="tel:2313304745" className="text-3xl font-bold text-accent-orange hover:text-accent-orange/80 transition-colors">
                (231) 330-4745
              </a>
            </div>

            <div>
              <h3 className="font-heading text-2xl text-forest mb-4">Where We Work</h3>
              <p className="text-dark-text font-bold text-lg mb-1">Northern Michigan</p>
              <p className="text-dark-text/80 leading-relaxed">
                Charlevoix &bull; Petoskey &bull; Boyne City &bull; Traverse City &bull; Gaylord &bull; Cheboygan
              </p>
              <p className="text-dark-text/60 text-sm mt-1">and surrounding areas</p>
            </div>

            <div>
              <h3 className="font-heading text-2xl text-forest mb-4">Hours</h3>
              <p className="text-dark-text/80">Monday – Friday: 7:00 AM – 6:00 PM</p>
              <p className="text-dark-text/80">Saturday: By appointment</p>
              <p className="text-dark-text/60 text-sm mt-2">Emergency demolition and flood work available 7 days a week.</p>
            </div>

            <div className="bg-dark-brown rounded-lg p-6 text-cream">
              <p className="font-semibold text-accent-orange mb-2">⚠️ Cheboygan Flood Damage?</p>
              <p className="text-cream/85 text-sm leading-relaxed">
                If your property was damaged in the recent flooding, call us. We&apos;re prioritizing demolition and cleanup for affected families.
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
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    <option>Septic System</option>
                    <option>Site Preparation</option>
                    <option>Driveway Installation</option>
                    <option>Land Clearing</option>
                    <option>Trenching</option>
                    <option>Demolition</option>
                    <option>Drainage / Ditch Work</option>
                    <option>Culverts</option>
                    <option>Gravel Delivery</option>
                    <option>Final Grading</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-semibold text-dark-text mb-1">Project Details</label>
                  <textarea id="details" name="details" rows={4} className="w-full border border-tan rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest text-dark-text resize-none" placeholder="Tell us about your project — location, timeline, anything helpful..." />
                </div>
                <button type="submit" className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white py-4 rounded text-lg font-semibold tracking-wide transition-colors shadow-md">
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
