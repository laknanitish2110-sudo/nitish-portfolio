import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { BookOpen, Compass, Code } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'education & projects':
        return BookOpen;
      case 'entrepreneurship':
        return Compass;
      default:
        return Code;
    }
  };

  return (
    <section id="achievements" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-4 mb-16">
        <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">
          04 // BUILDING / LEARNING / MILESTONES
        </span>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="mb-12">
        <h2 className="font-syne text-4xl sm:text-5xl font-bold text-[#F3F3F6] tracking-tight">
          CURRENT FOCUS & MILESTONES
        </h2>
        <p className="font-space text-base text-[#8E8EA8] mt-2">
          An evolving timeline of undergraduate studies, studio development, and software projects.
        </p>
      </div>

      {/* Clean Timeline List View */}
      <div className="border-l border-white/15 pl-6 sm:pl-10 space-y-12 relative">
        {PORTFOLIO_DATA.milestones.map((item, idx) => {
          const IconComponent = getCategoryIcon(item.category);
          return (
            <div key={idx} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#050507] bg-[#00F0FF] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(0,240,255,0.6)]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between space-y-1 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-sm font-bold text-[#00F0FF]">
                    {item.year}
                  </span>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-white/[0.04] text-[#8E8EA8] border border-white/5 flex items-center space-x-1.5">
                    <IconComponent size={12} className="text-[#00F0FF]" />
                    <span>{item.category}</span>
                  </span>
                </div>
                <span className="font-mono text-xs text-[#8E8EA8]">
                  {item.organization}
                </span>
              </div>

              <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#F3F3F6] mt-2 group-hover:text-[#00F0FF] transition-colors flex items-center space-x-2">
                <span>{item.title}</span>
              </h3>

              <p className="font-space text-sm text-[#8E8EA8] mt-2 max-w-3xl leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
