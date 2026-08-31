import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';
import { ArrowUpRight, Copy, Check, Sparkles, GitBranch, Briefcase } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contactBtnRef = useMagneticEffect<HTMLAnchorElement>(0.4);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const opportunities = [
    "AI & Software Projects",
    "VAG Agency Client Work",
    "Internships & Engineering Roles",
    "Technical Collaborations"
  ];

  return (
    <section id="contact" className="py-32 px-6 sm:px-10 max-w-7xl mx-auto relative">
      {/* Section Header Tag */}
      <div className="flex items-center space-x-4 mb-16">
        <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">
          05 // INITIATE COLLABORATION
        </span>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      {/* Dramatic Minimal Headline */}
      <div className="space-y-8 text-center sm:text-left">
        <h2 className="font-syne text-5xl sm:text-7xl lg:text-[95px] font-extrabold text-[#F3F3F6] tracking-tight leading-[0.95] uppercase">
          LET'S BUILD <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#00F0FF]">
            SOMETHING.
          </span>
        </h2>

        <p className="font-space text-lg sm:text-2xl text-[#8E8EA8] max-w-2xl leading-relaxed">
          Open for AI & software projects, VAG Agency collaborations, internships, and engineering opportunities.
        </p>

        {/* Available Opportunities List */}
        <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
          {opportunities.map((opp, idx) => (
            <span
              key={idx}
              className="font-mono text-xs px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-white/80 flex items-center space-x-1.5"
            >
              <Briefcase size={12} className="text-[#00F0FF]" />
              <span>{opp}</span>
            </span>
          ))}
        </div>

        {/* Large Magnetic Interactive Contact CTA Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
          <a
            ref={contactBtnRef}
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="group relative inline-flex items-center space-x-4 px-10 py-6 rounded-full bg-[#00F0FF] text-black font-syne font-extrabold text-base tracking-wider uppercase shadow-[0_0_40px_rgba(0,240,255,0.4)] hover:shadow-[0_0_70px_rgba(0,240,255,0.7)] transition-all duration-300"
            data-cursor="contact"
            data-cursor-text="EMAIL"
          >
            <Sparkles size={20} />
            <span>START A CONVERSATION</span>
            <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center space-x-2 px-6 py-4 rounded-full border border-white/15 bg-white/[0.02] text-xs font-mono text-[#F3F3F6] hover:border-[#00F0FF]/40 hover:text-[#00F0FF] transition-all"
            data-cursor="copy"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span>COPIED TO CLIPBOARD</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>COPY: {PORTFOLIO_DATA.personal.email}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Social & Channel Links Footer Grid */}
      <div className="mt-28 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="font-mono text-xs text-[#8E8EA8] mb-2">PRIMARY EMAIL</div>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="font-space text-sm font-bold text-white hover:text-[#00F0FF] transition-colors"
          >
            {PORTFOLIO_DATA.personal.email}
          </a>
        </div>

        <div>
          <div className="font-mono text-xs text-[#8E8EA8] mb-2">CREATIVE STUDIO</div>
          <a
            href={PORTFOLIO_DATA.personal.socials.agency}
            target="_blank"
            rel="noopener noreferrer"
            className="font-space text-sm font-bold text-white hover:text-[#00F0FF] transition-colors flex items-center space-x-1"
          >
            <span>VAG AGENCY</span>
            <ArrowUpRight size={14} className="text-[#00F0FF]" />
          </a>
        </div>

        <div>
          <div className="font-mono text-xs text-[#8E8EA8] mb-2">GITHUB</div>
          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-space text-sm font-bold text-white hover:text-[#00F0FF] transition-colors flex items-center space-x-1"
            data-cursor="github"
          >
            <span>@{PORTFOLIO_DATA.personal.socials.githubUser}</span>
            <GitBranch size={14} className="text-[#00F0FF]" />
          </a>
        </div>

        <div>
          <div className="font-mono text-xs text-[#8E8EA8] mb-2">STATUS</div>
          <div className="font-space text-sm font-bold text-white">
            {PORTFOLIO_DATA.personal.status}
          </div>
        </div>
      </div>
    </section>
  );
};
