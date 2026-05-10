'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Hydro Seeding', href: '#hydroseeding' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const serviceDropdown = [
  { label: 'Septic Systems', href: '#septic' },
  { label: 'Site Prep & Excavation', href: '#site-prep' },
  { label: 'Shoreline & Breakwalls', href: '#shoreline' },
  { label: 'Driveways & Grading', href: '#driveways' },
  { label: 'Land Clearing', href: '#land-clearing' },
  { label: 'Demolition', href: '#demolition' },
  { label: 'Hydro Seeding', href: '#hydroseeding' },
  { label: 'Brush Hogging', href: '#brush-hogging' },
  { label: 'Drainage & Ditch Work', href: '#drainage' },
  { label: 'Culverts', href: '#culverts' },
  { label: 'Trenching', href: '#trenching' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1F2A22] shadow-xl' : 'bg-[#1F2A22]/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <a href="#home" className="flex-shrink-0 flex items-center gap-4">
            <Image src="/images/logo.jpg" alt="Northwoods Land Work" width={120} height={120} className="rounded" />
            <span className="hidden sm:flex flex-col leading-[1.1]">
              <span className="font-heading font-black uppercase tracking-tight text-2xl md:text-3xl text-[#D9651A] drop-shadow">
                Northwoods
              </span>
              <span className="font-heading font-bold uppercase tracking-tight text-lg md:text-xl text-[#F2E8D8] drop-shadow">
                Land Work
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase">
              Home
            </a>
            <a href="#hydroseeding" className="text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase">
              Hydro Seeding
            </a>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase flex items-center gap-1"
              >
                Services
                <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-[#1F2A22] border border-[#F2E8D8]/15 rounded-lg shadow-2xl py-2 min-w-[220px]">
                  {serviceDropdown.map((svc) => (
                    <a
                      key={svc.href}
                      href={svc.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-2.5 text-[#D4C9B5] hover:text-[#D9651A] hover:bg-[#F2E8D8]/5 text-sm font-semibold transition-colors"
                    >
                      {svc.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#about" className="text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase">
              About
            </a>
            <a href="#gallery" className="text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase">
              Gallery
            </a>
            <a href="#contact" className="text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase">
              Contact
            </a>
            <a href="tel:2313304745" className="bg-[#D9651A] hover:bg-[#c05716] text-[#F2E8D8] px-6 py-3 rounded font-bold text-base tracking-wide transition-colors shadow-md">
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
        <div className="bg-forest/95 backdrop-blur border-t border-cream/10 px-4 py-4 space-y-3">
          <a href="#home" onClick={() => setMenuOpen(false)} className="block text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase py-1">
            Home
          </a>

          {/* Mobile Services Dropdown */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between w-full text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase py-1"
          >
            Services
            <svg className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
            <div className="pl-4 space-y-2 pb-2">
              {serviceDropdown.map((svc) => (
                <a
                  key={svc.href}
                  href={svc.href}
                  onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                  className="block text-[#D4C9B5] hover:text-[#D9651A] text-sm font-medium py-1 transition-colors"
                >
                  {svc.label}
                </a>
              ))}
            </div>
          </div>

          <a href="#about" onClick={() => setMenuOpen(false)} className="block text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase py-1">
            About
          </a>
          <a href="#gallery" onClick={() => setMenuOpen(false)} className="block text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase py-1">
            Gallery
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-cream hover:text-accent-orange transition-colors text-sm font-semibold tracking-wider uppercase py-1">
            Contact
          </a>
          <a href="tel:2313304745" className="block bg-accent-orange text-white text-center px-5 py-2.5 rounded font-semibold text-sm mt-2">
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
