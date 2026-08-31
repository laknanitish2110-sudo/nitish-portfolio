import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ArrowUpRight, Code2, Palette, Terminal, Zap } from 'lucide-react';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';

export const VagAgency: React.FC = () => {
  const ctaRef = useMagneticEffect<HTMLAnchorElement>(0.3);

  const agencyFeatures = [
    { icon: Code2, label: "Software Products", desc: "Building custom web applications and digital tools" },
    { icon: Palette, label: "Creative Technology", desc: "Designing digital experiences with high visual craft" },
    { icon: Terminal, label: "AI Integration", desc: "Integrating intelligent models into user workflows" },
    { icon: Zap, label: "Rapid Prototyping", desc: "Fast-track MVP engineering for ambitious ideas" },
  ];

  return (
    <section id="agency" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Visually Distinct Sub-Brand Container */}
      <div className="relative rounded-3xl overflow-hidden border border-[#00F0FF]/30 bg-gradient-to-b from-[#0c0c14] via-[#07070b] to-[#050507] p-8 sm:p-14 lg:p-20 shadow-[0_0_80px_rgba(0,240,255,0.08)]">
        {/* Decorative Ambient Lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Sub-Brand Header Tag */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-8 mb-12">
          <div className="flex items-center space-x-3">
            <span className="h-3 w-3 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">
              STUDIO // CREATIVE TECHNOLOGY & SOFTWARE PRODUCTS
            </span>
          </div>
          <span className="font-mono text-xs text-[#8E8EA8] uppercase tracking-wider hidden sm:block">
            VAG AGENCY
          </span>
        </div>

        {/* Main Content Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Title & Tagline */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-syne text-5xl sm:text-7xl font-black text-[#F3F3F6] tracking-tight uppercase leading-none">
              {PORTFOLIO_DATA.agency.title}
            </h2>

            <p className="font-syne text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#00F0FF]">
              {PORTFOLIO_DATA.agency.subtitle}
            </p>

            <p className="font-space text-base sm:text-lg text-[#8E8EA8] leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.agency.description}
            </p>

            {/* Direct Prominent CTA Link to vagagency.netlify.app */}
            <div className="pt-6">
              <a
                ref={ctaRef}
                href={PORTFOLIO_DATA.agency.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center space-x-4 px-9 py-4 rounded-full bg-[#00F0FF] text-black font-space font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] transition-all duration-300"
                data-cursor="agency"
                data-cursor-text="VISIT"
              >
                <span>EXPLORE VAG AGENCY</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <span className="block font-mono text-xs text-[#8E8EA8] mt-3">
                Direct link: <code className="text-[#00F0FF]">vagagency.netlify.app</code>
              </span>
            </div>
          </div>

          {/* Right Capabilities Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {agencyFeatures.map((feat, idx) => {
              const IconComponent = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#00F0FF]/40 hover:bg-white/[0.04] transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="p-2.5 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-sm text-[#F3F3F6]">
                      {feat.label}
                    </h4>
                    <p className="font-space text-xs text-[#8E8EA8] mt-1">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
