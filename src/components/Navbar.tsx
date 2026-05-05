'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-forest/95 backdrop-blur shadow-lg' : 'bg-forest/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex-shrink-0 flex items-center gap-3">
            <Image src="/images/logo.jpg" alt="Northwoods Landwork" width={56} height={56} className="rounded" />
            <span className="hidden sm:block text-cream font-heading font-bold tracking-wide whitespace-nowrap text-base md:text-lg lg:text-xl">
              Northwoods Landwork
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase">
                {link.label}
              </a>
            ))}
            <a href="tel:2313304745" className="bg-accent-orange hover:bg-accent-orange/90 text-white px-5 py-2.5 rounded font-semibold text-sm tracking-wide transition-colors">
              Call Now
            </a>
          </div>
          <button className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-forest/95 backdrop-blur border-t border-cream/10 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase py-1">
              {link.label}
            </a>
          ))}
          <a href="tel:2313304745" className="block bg-accent-orange text-white text-center px-5 py-2.5 rounded font-semibold text-sm mt-2">
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
