import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-cream/80 py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6">
          <Image src="/images/logo.webp" alt="Northwoods Land Work" width={140} height={140} className="rounded mx-auto" />
        </div>
        <p className="font-heading text-xl text-cream mb-4">Northwoods Land Work</p>
        <p className="text-cream/50 text-sm mb-2">Serving Northern Michigan with pride</p>
        <p className="text-cream/50 text-sm mb-6">
          <a href="tel:2313304745" className="hover:text-accent-orange transition-colors font-bold text-lg">(231) 330-4745</a>
        </p>
        <div className="flex justify-center gap-6 mb-6 text-sm">
          <a href="/#services" className="hover:text-accent-orange transition-colors">Services</a>
          <a href="/#hydroseeding" className="hover:text-accent-orange transition-colors">Hydro Seeding</a>
          <a href="/excavation-land-work-faqs" className="hover:text-accent-orange transition-colors">FAQs</a>
          <a href="/#contact" className="hover:text-accent-orange transition-colors">Contact</a>
        </div>
        <div className="w-16 h-px bg-cream/20 mx-auto mb-6" />
        <p className="text-xs text-cream/35">&copy; 2026 Northwoods Land Work. All rights reserved.</p>
      </div>
    </footer>
  );
}
