import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-cream/80 py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6">
          <Image src="/images/logo.jpg" alt="Great Lakes Excavating" width={120} height={120} className="rounded mx-auto" />
        </div>
        <p className="font-heading text-xl text-cream mb-4">Great Lakes Excavating &amp; Brushwork</p>
        <p className="text-cream/50 text-sm mb-2">Serving Northern Michigan with pride</p>
        <p className="text-cream/50 text-sm mb-6">
          <a href="tel:2317771234" className="hover:text-accent-orange transition-colors">(231) 777-1234</a>
        </p>
        <div className="w-16 h-px bg-cream/20 mx-auto mb-6" />
        <p className="text-xs text-cream/35">&copy; 2026 Great Lakes Excavating &amp; Brushwork. All rights reserved.</p>
      </div>
    </footer>
  );
}
