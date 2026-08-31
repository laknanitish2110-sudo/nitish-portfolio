import React, { useState } from 'react';
import { PORTFOLIO_DATA, type Project } from '../../data/portfolioData';
import { ArrowUpRight, ExternalLink, X, CheckCircle2, Activity } from 'lucide-react';
import { ProjectVisual } from '../ProjectVisual';
import { AriaCaseStudy } from '../case-studies/AriaCaseStudy';
import { SnapMarkCaseStudy } from '../case-studies/SnapMarkCaseStudy';
import { VagAgencyCaseStudy } from '../case-studies/VagAgencyCaseStudy';
import { NetraCaseStudy } from '../case-studies/NetraCaseStudy';
import { SolarSwapCaseStudy } from '../case-studies/SolarSwapCaseStudy';
import { CenzoCaseStudy } from '../case-studies/CenzoCaseStudy';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Escape key closes any open case study modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'LIVE':
        return (
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center space-x-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LIVE & DEPLOYED</span>
          </span>
        );
      case 'CLEARED':
        return (
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 flex items-center space-x-1">
            <CheckCircle2 size={12} />
            <span>HACKATHON CLEARED</span>
          </span>
        );
      case 'BUILDING':
        return (
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center space-x-1">
            <Activity size={12} />
            <span>BUILDING</span>
          </span>
        );
      default:
        return (
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {status}
          </span>
        );
    }
  };

  return (
    <section id="work" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center space-x-4 flex-1">
          <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">02 // REAL PROJECTS & BUILDS</span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>
      </div>

      {/* Projects Editorial Case Study Showcase */}
      <div className="space-y-28">
        {PORTFOLIO_DATA.projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={project.id}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              data-cursor="view"
              data-cursor-text="EXPLORE"
            >
              {/* Visual Showcase Box */}
              <div
                onClick={() => setSelectedProject(project)}
                className={`lg:col-span-7 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] relative aspect-[16/10] transition-all duration-500 group-hover:border-[#00F0FF]/50 group-hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Neutral Project-Specific Visual Treatment */}
                <ProjectVisual project={project} className="transition-transform duration-700 ease-out group-hover:scale-[1.02]" />

                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                {/* Quick View Tag on Visual */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 pointer-events-none">
                  <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-[#050507]/80 backdrop-blur-md border border-white/10 text-white/90">
                    {project.year}
                  </span>
                  {getStatusBadge(project.status)}
                </div>

                <div className="absolute bottom-4 right-4 flex items-center space-x-2 font-mono text-xs px-4 py-2 rounded-full bg-[#00F0FF] text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span>READ PROJECT DETAILS</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Case Study Meta & Content */}
              <div
                className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs text-[#00F0FF]">
                  <span>{project.number} // {project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h3
                  onClick={() => setSelectedProject(project)}
                  className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F3F3F6] hover:text-[#00F0FF] transition-colors cursor-pointer leading-tight"
                >
                  {project.title}
                </h3>

                <p className="font-space text-sm text-[#00F0FF]/90 font-medium">
                  {project.tagline}
                </p>

                <p className="font-space text-base text-[#8E8EA8] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[11px] px-3 py-1 rounded-md bg-white/[0.04] text-[#8E8EA8] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Action */}
                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group inline-flex items-center space-x-2 text-sm font-space font-bold tracking-wider text-[#F3F3F6] hover:text-[#00F0FF] transition-colors"
                  >
                    <span>VIEW PROJECT DETAILS</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {project.id === 'vag-agency' && (
                    <a
                      href={PORTFOLIO_DATA.personal.socials.agency}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 font-mono text-xs text-[#00F0FF] hover:underline"
                    >
                      <span>vagagency.netlify.app</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Study Modal / Drawer */}
      {selectedProject && (
        selectedProject.id === 'aria' ? (
          <AriaCaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.id === 'snapmark' ? (
          <SnapMarkCaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.id === 'vag-agency' ? (
          <VagAgencyCaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.id === 'netra' ? (
          <NetraCaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.id === 'solarswap' ? (
          <SolarSwapCaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.id === 'cenzo' ? (
          <CenzoCaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
            onClick={() => setSelectedProject(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0f] border border-white/20 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="font-mono text-xs text-[#00F0FF] tracking-widest">
                      PROJECT // {selectedProject.number}
                    </span>
                    {getStatusBadge(selectedProject.status)}
                  </div>
                  <h3 className="font-syne text-3xl sm:text-4xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="font-space text-sm text-[#8E8EA8] mt-1">
                    {selectedProject.tagline}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full border border-white/10 text-white/80 hover:text-[#00F0FF] hover:border-[#00F0FF]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Visual */}
              <div className="rounded-xl overflow-hidden border border-white/10 aspect-[16/9]">
                <ProjectVisual project={selectedProject} />
              </div>

              {/* Detailed Case Study Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                <div className="md:col-span-2 space-y-4 font-space text-base text-[#8E8EA8] leading-relaxed">
                  <h4 className="font-syne text-lg font-bold text-white">Project Overview</h4>
                  <p>{selectedProject.description}</p>
                  
                  <h4 className="font-syne text-lg font-bold text-white pt-4">Architecture & Tech Stack</h4>
                  <p>
                    Built with modular software patterns, self-hosted n8n workflows, Supabase Postgres data structures, and Cloud API integrations.
                  </p>
                </div>

                <div className="space-y-6 bg-white/[0.02] p-6 rounded-xl border border-white/10 h-fit">
                  <div>
                    <div className="font-mono text-xs text-[#8E8EA8]">STATUS</div>
                    <div className="font-syne font-bold text-white mt-1 flex items-center space-x-2">
                      {getStatusBadge(selectedProject.status)}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-[#8E8EA8]">TIMELINE</div>
                    <div className="font-syne font-bold text-white mt-1">{selectedProject.year}</div>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-[#8E8EA8]">CATEGORY</div>
                    <div className="font-syne font-bold text-white mt-1">{selectedProject.category}</div>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-[#8E8EA8]">TECH STACK</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span key={idx} className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.id === 'vag-agency' && (
                    <a
                      href="https://vagagency.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-lg bg-[#00F0FF] text-black font-bold text-xs tracking-wider uppercase"
                    >
                      <span>VISIT VAG AGENCY</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};
