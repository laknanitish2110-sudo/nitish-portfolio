import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10 px-6 sm:px-10 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[#8E8EA8] space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-2">
        <span className="h-2 w-2 rounded-full bg-[#00F0FF]" />
        <span>© {currentYear} {PORTFOLIO_DATA.personal.name} — DIGITAL BUILDER</span>
      </div>

      <div className="flex items-center space-x-6">
        <a href="#hero" className="hover:text-[#00F0FF] transition-colors">
          BACK TO TOP ↑
        </a>
        <span>//</span>
        <a
          href={PORTFOLIO_DATA.personal.socials.agency}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00F0FF] transition-colors"
        >
          VAG AGENCY STUDIO
        </a>
      </div>
    </footer>
  );
};
