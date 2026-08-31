import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Terminal, Cpu, Layers, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "Exploring agentic frameworks, fine-tuned prompts, and AI algorithms to build intelligent systems."
    },
    {
      icon: Code2,
      title: "Software Engineering",
      description: "Developing full-stack web applications with clean code architecture and responsive user interfaces."
    },
    {
      icon: Layers,
      title: "Product Building",
      description: "Taking ideas from initial whiteboards into functional prototypes and working products."
    },
    {
      icon: Terminal,
      title: "VAG Agency Studio",
      description: "Founding a digital studio focused on AI automation services, custom software products, and WhatsApp business workflows."
    }
  ];

  return (
    <section id="about" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-4 mb-12">
        <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">01 // PROFILE & FOCUS</span>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      {/* Main Editorial Narrative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Large Statement */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F3F3F6] leading-snug">
            {PORTFOLIO_DATA.about.heading}
          </h2>

          <div className="space-y-6 text-[#8E8EA8] font-space text-base sm:text-lg leading-relaxed">
            {PORTFOLIO_DATA.about.narrative.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Highlight Tags */}
          <div className="pt-4 flex flex-wrap gap-3">
            {PORTFOLIO_DATA.about.highlights.map((tag, idx) => (
              <span
                key={idx}
                className="font-mono text-xs px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Capability & Focus Matrix */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden group border border-white/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/5 rounded-full blur-2xl group-hover:bg-[#00F0FF]/15 transition-all duration-500 pointer-events-none" />
            
            <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase mb-6">
              CAPABILITY & IDENTITY MATRIX
            </h3>

            <div className="flex flex-col space-y-4">
              {PORTFOLIO_DATA.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-[#00F0FF]/60 border-y border-r border-white/5 space-y-1.5 transition-all duration-300 hover:bg-white/[0.04] hover:border-l-[#00F0FF]"
                >
                  <div className="font-mono text-[11px] text-[#00F0FF] tracking-widest font-bold flex items-center justify-between">
                    <span>{cap.number} // {cap.title}</span>
                  </div>
                  <div className="font-syne text-base sm:text-lg font-extrabold text-[#F3F3F6] tracking-tight leading-snug">
                    {cap.value}
                  </div>
                  <div className="font-mono text-xs text-[#8E8EA8] leading-relaxed break-words overflow-hidden">
                    {cap.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Pillars Grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-xl border border-white/10 bg-white/[0.01] hover:border-[#00F0FF]/40 hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <div className="h-10 w-10 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF] mb-6 group-hover:scale-110 transition-transform">
                <IconComponent size={20} />
              </div>
              <h4 className="font-syne text-lg font-bold text-[#F3F3F6] mb-2">
                {pillar.title}
              </h4>
              <p className="font-space text-sm text-[#8E8EA8] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
