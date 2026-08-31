import React, { useState, useEffect } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, GitBranch } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { isScrolled, activeSection } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EXPERIMENTS', href: '#experiments', id: 'experiments' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-[#050507]/80 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="group flex items-center space-x-2 text-lg font-bold tracking-widest font-syne text-[#F3F3F6] hover:text-[#00F0FF] transition-colors"
            data-cursor="brand"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#00F0FF] group-hover:scale-125 transition-transform duration-300" />
            <span>{PORTFOLIO_DATA.personal.name}</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative font-mono text-xs tracking-widest transition-colors duration-300 py-1 ${
                    isActive ? 'text-[#00F0FF] font-medium' : 'text-[#8E8EA8] hover:text-[#F3F3F6]'
                  }`}
                  data-cursor="nav"
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00F0FF] transition-all duration-300" />
                  )}
                </a>
              );
            })}

            {/* GitHub Link */}
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 font-mono text-[11px] tracking-wider text-white/70 hover:text-[#00F0FF] transition-colors"
              data-cursor="github"
            >
              <GitBranch size={12} className="text-[#00F0FF]" />
              <span>GITHUB</span>
            </a>

            {/* VAG Agency Sub-Brand Tag */}
            <a
              href={PORTFOLIO_DATA.personal.socials.agency}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 font-mono text-[11px] tracking-wider px-3 py-1.5 rounded-full border border-white/10 text-white/80 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 bg-white/[0.02] transition-all duration-300"
              data-cursor="agency"
            >
              <span>VAG AGENCY</span>
              <ArrowUpRight size={12} className="text-[#00F0FF]" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-[#F3F3F6] hover:text-[#00F0FF] transition-colors focus:outline-none focus:ring-1 focus:ring-[#00F0FF]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#050507] transition-all duration-500 flex flex-col justify-between p-8 sm:p-12 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        {/* Top bar inside drawer */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="font-syne font-bold text-xl text-[#F3F3F6] tracking-widest"
          >
            {PORTFOLIO_DATA.personal.name}
          </a>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            className="p-2 text-[#F3F3F6] hover:text-[#00F0FF]"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col space-y-6 my-auto">
          {navLinks.map((link, idx) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-baseline justify-between text-3xl sm:text-4xl font-syne font-bold text-white/90 hover:text-[#00F0FF] transition-colors"
            >
              <span>{link.label}</span>
              <span className="font-mono text-xs text-[#8E8EA8] group-hover:text-[#00F0FF]">
                0{idx + 1}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Footer Links */}
        <div className="border-t border-white/10 pt-6 flex flex-col space-y-4">
          <a
            href={PORTFOLIO_DATA.personal.socials.agency}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-sm font-mono text-[#00F0FF]"
          >
            <span>VAG AGENCY — CREATIVE STUDIO</span>
            <ArrowUpRight size={16} />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-xs font-mono text-white/80 hover:text-[#00F0FF]"
          >
            <span>GITHUB: @{PORTFOLIO_DATA.personal.socials.githubUser}</span>
            <GitBranch size={14} className="text-[#00F0FF]" />
          </a>
          <div className="flex items-center justify-between text-xs font-mono text-[#8E8EA8]">
            <span>{PORTFOLIO_DATA.personal.email}</span>
            <span>{PORTFOLIO_DATA.personal.status}</span>
          </div>
        </div>
      </div>
    </>
  );
};
