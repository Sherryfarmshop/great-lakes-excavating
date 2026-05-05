import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-cream/80 py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6">
          <Image src="/images/logo.jpg" alt="Northwoods Landwork" width={140} height={140} className="rounded mx-auto" />
        </div>
        <p className="font-heading text-xl text-cream mb-4">Northwoods Landwork</p>
        <p className="text-cream/50 text-sm mb-2">Serving Northern Michigan with pride</p>
        <p className="text-cream/50 text-sm mb-6">
          <a href="tel:2313304745" className="hover:text-accent-orange transition-colors font-bold text-lg">(231) 330-4745</a>
        </p>
        <div className="w-16 h-px bg-cream/20 mx-auto mb-6" />
        <p className="text-xs text-cream/35">&copy; 2026 Northwoods Landwork. All rights reserved.</p>
      </div>
    </footer>
  );
}
