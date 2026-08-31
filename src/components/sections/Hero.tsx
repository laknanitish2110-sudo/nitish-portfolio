import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { InteractiveHeroCanvas } from '../InteractiveHeroCanvas';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';
import { ArrowDownRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const viewWorkRef = useMagneticEffect<HTMLAnchorElement>(0.35);
  const contactRef = useMagneticEffect<HTMLAnchorElement>(0.35);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 sm:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Interactive Background Canvas */}
      <InteractiveHeroCanvas />

      {/* Status Ticker Badge */}
      <div className="relative z-10 flex items-center space-x-3 mb-8 sm:mb-12">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F0FF]"></span>
        </span>
        <span className="font-mono text-xs text-[#8E8EA8] tracking-wider uppercase">
          {PORTFOLIO_DATA.personal.status}
        </span>
      </div>

      {/* Main Oversized Editorial Headline */}
      <div className="relative z-10 my-auto">
        <div className="overflow-hidden">
          <h1 className="font-syne text-6xl sm:text-8xl md:text-[110px] lg:text-[135px] font-extrabold tracking-tight leading-[0.9] text-[#F3F3F6] uppercase">
            {PORTFOLIO_DATA.personal.name}
          </h1>
        </div>
        
        <div className="overflow-hidden mt-2 sm:mt-4 flex flex-col md:flex-row md:items-baseline md:justify-between">
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#00F0FF]/60 uppercase">
            {PORTFOLIO_DATA.personal.role}
          </h2>
          <span className="font-mono text-xs text-[#00F0FF] tracking-widest mt-2 md:mt-0 uppercase">
            [ {PORTFOLIO_DATA.personal.descriptor} ]
          </span>
        </div>

        {/* Supporting Tagline */}
        <p className="mt-8 sm:mt-12 text-lg sm:text-2xl md:text-3xl font-space font-light text-[#8E8EA8] max-w-3xl leading-relaxed">
          "{PORTFOLIO_DATA.personal.tagline}"
        </p>

        {/* Primary Magnetic Actions */}
        <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-6">
          <a
            ref={viewWorkRef}
            href="#work"
            className="group relative inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-[#00F0FF] text-black font-space font-bold text-sm tracking-wider uppercase transition-transform duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            data-cursor="action"
            data-cursor-text="GO"
          >
            <span>VIEW WORK</span>
            <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
          </a>

          <a
            ref={contactRef}
            href="#contact"
            className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full border border-white/20 bg-white/[0.03] text-[#F3F3F6] font-space font-medium text-sm tracking-wider uppercase hover:border-[#00F0FF]/50 hover:bg-[#00F0FF]/5 transition-all duration-300"
            data-cursor="contact"
          >
            <Sparkles size={16} className="text-[#00F0FF]" />
            <span>CONTACT</span>
          </a>
        </div>
      </div>

      {/* Footer Indicators */}
      <div className="relative z-10 pt-12 flex items-center justify-between border-t border-white/10 text-xs font-mono text-[#8E8EA8]">
        <div className="hidden sm:flex items-center space-x-4">
          <span>STUDIO: VAG AGENCY</span>
          <span>//</span>
          <span>LOCATION: GLOBAL</span>
        </div>
        <a
          href="#about"
          className="flex items-center space-x-2 text-[#8E8EA8] hover:text-[#00F0FF] transition-colors"
        >
          <span>SCROLL DOWN</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] animate-bounce" />
        </a>
      </div>
    </section>
  );
};
