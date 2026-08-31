import React from 'react';
import type { Project } from '../../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  Zap, 
  Workflow, 
  Database, 
  Phone, 
  Users,
  Terminal,
  Globe,
  Code2,
  Palette
} from 'lucide-react';

interface VagAgencyCaseStudyProps {
  project: Project;
  onClose: () => void;
}

export const VagAgencyCaseStudy: React.FC<VagAgencyCaseStudyProps> = ({ project, onClose }) => {
  const studioOfferings = [
    {
      title: "WhatsApp Cloud API Automation",
      icon: Phone,
      desc: "Custom business automation workflows and automated messaging pipelines running over WhatsApp."
    },
    {
      title: "AI Hiring Bot & Candidate Screening",
      icon: Workflow,
      desc: "Automated applicant intake, qualification questions, and resume screening powered by ARIA backend workflows."
    },
    {
      title: "SnapMark AI Classroom Attendance",
      icon: Users,
      desc: "Face recognition classroom attendance solution enabling single-photo attendance marking."
    },
    {
      title: "Self-Hosted Workflow & Software Development",
      icon: Code2,
      desc: "Custom web applications, n8n workflow engineering, and rapid MVP product builds."
    }
  ];

  const studioStack = [
    { name: "Netlify", role: "Web Hosting & CDN Distribution", category: "Studio Stack", icon: Globe },
    { name: "HTML / CSS / JS", role: "Agency Frontend & Brand Presentation", category: "Studio Stack", icon: Palette },
    { name: "n8n", role: "Workflow Automation Engine", category: "Project Tech", icon: Workflow },
    { name: "WhatsApp Business API", role: "Communication Gateway", category: "Project Tech", icon: Phone },
    { name: "Supabase", role: "Database Backend", category: "Project Tech", icon: Database }
  ];

  const engineeringNotes = [
    {
      title: "AI Systems Integration",
      detail: "Connecting intelligent models and automated prompts directly into user communication channels."
    },
    {
      title: "Workflow Orchestration",
      detail: "Leveraging self-hosted n8n engines to orchestrate complex multi-step backend business logic."
    },
    {
      title: "Web & Software Development",
      detail: "Engineering clean, responsive user interfaces and hosting web properties on global Netlify CDN."
    },
    {
      title: "API Gateway Connectivity",
      detail: "Configuring robust webhook endpoints for Meta WhatsApp Business Cloud API integration."
    },
    {
      title: "Deployed Product Services",
      detail: "Packaging custom software platforms like ARIA and SnapMark into repeatable studio service offerings."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-5xl my-auto bg-[#0a0a0f] border border-white/20 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-10 max-h-[92vh] overflow-y-auto font-space text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dossier Header Tag */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase font-bold flex items-center space-x-1.5">
                <Terminal size={14} />
                <span>STUDIO BRIEF // CREATIVE TECHNOLOGY & SOFTWARE</span>
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center space-x-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE & OPERATIONAL</span>
              </span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
              {project.title}
            </h2>
            <p className="font-space text-sm sm:text-base text-[#00F0FF]">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full border border-white/10 text-white/80 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-colors"
            aria-label="Close dossier"
          >
            <X size={20} />
          </button>
        </div>

        {/* 1. STUDIO OVERVIEW METADATA GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs">
          <div>
            <div className="text-[#8E8EA8]">STUDIO ID</div>
            <div className="text-white font-bold mt-1">VAG-STUDIO-01</div>
          </div>
          <div>
            <div className="text-[#8E8EA8]">TIMELINE</div>
            <div className="text-white font-bold mt-1">{project.year}</div>
          </div>
          <div>
            <div className="text-[#8E8EA8]">CATEGORY</div>
            <div className="text-white font-bold mt-1">{project.category}</div>
          </div>
          <div>
            <div className="text-[#8E8EA8]">WEBSITE</div>
            <div className="text-[#00F0FF] font-bold mt-1">vagagency.netlify.app</div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">1 // STUDIO OVERVIEW</h3>
          <p className="text-base text-[#8E8EA8] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* 2. WHY VAG AGENCY EXISTS */}
        <div className="p-6 rounded-xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.03] space-y-3">
          <div className="flex items-center space-x-2 text-[#00F0FF] font-mono text-xs font-bold uppercase tracking-wider">
            <Zap size={16} />
            <span>2 // WHY VAG AGENCY EXISTS</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            VAG Agency is the studio and brand established to present AI automation services, full-stack software development, and digital tools. The studio offers WhatsApp Business Cloud API automation, candidate screening hiring bots, and SnapMark AI classroom attendance solutions.
          </p>
        </div>

        {/* 3. WHAT THE STUDIO OFFERS */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">3 // DOCUMENTED SERVICE OFFERINGS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {studioOfferings.map((offering, idx) => {
              const IconComp = offering.icon;
              return (
                <div key={idx} className="p-5 rounded-xl border border-white/10 bg-white/[0.02] space-y-2 hover:border-[#00F0FF]/40 transition-colors">
                  <div className="flex items-center space-x-2 text-[#00F0FF]">
                    <IconComp size={18} />
                    <h4 className="font-syne text-sm font-bold text-white">{offering.title}</h4>
                  </div>
                  <p className="text-xs text-[#8E8EA8] leading-relaxed">{offering.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. STUDIO + ENGINEERING STACK */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">4 // STUDIO & ENGINEERING STACK</h3>
            <span className="font-mono text-[10px] text-[#8E8EA8]">DISTINGUISHING STUDIO vs PROJECT TECH</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {studioStack.map((tech, idx) => {
              const IconT = tech.icon;
              const isStudio = tech.category === 'Studio Stack';
              return (
                <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
                      <IconT size={18} />
                    </div>
                    <span className={`font-mono text-[9px] px-2 py-0.5 rounded border ${
                      isStudio ? 'bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/30' : 'bg-white/5 text-[#8E8EA8] border-white/10'
                    }`}>
                      {tech.category}
                    </span>
                  </div>
                  <div className="font-syne font-bold text-sm text-white mt-1">{tech.name}</div>
                  <div className="font-mono text-[10px] text-[#8E8EA8]">{tech.role}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. HOW THE STUDIO BUILDS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">5 // HOW THE STUDIO BUILDS</h3>
            <span className="font-mono text-[10px] text-amber-400 font-bold uppercase">STUDIO BUILD MODEL (CONCEPTUAL WORKFLOW)</span>
          </div>

          <div className="p-6 rounded-xl border border-white/15 bg-[#07070b] font-mono space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
              <div className="p-3 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="text-white font-bold">1. IDEA</div>
                <div className="text-[9px] text-[#8E8EA8] mt-1">Concept Scope</div>
              </div>

              <div className="p-3 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="text-[#00F0FF] font-bold">2. DESIGN</div>
                <div className="text-[9px] text-[#8E8EA8] mt-1">Product UI/Flow</div>
              </div>

              <div className="p-3 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="text-purple-300 font-bold">3. WORKFLOWS</div>
                <div className="text-[9px] text-[#8E8EA8] mt-1">n8n Logic</div>
              </div>

              <div className="p-3 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="text-blue-300 font-bold">4. AI / BACKEND</div>
                <div className="text-[9px] text-[#8E8EA8] mt-1">Supabase DB</div>
              </div>

              <div className="p-3 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="text-amber-300 font-bold">5. DEPLOYMENT</div>
                <div className="text-[9px] text-[#8E8EA8] mt-1">Netlify CDN</div>
              </div>

              <div className="p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10">
                <div className="text-emerald-400 font-bold">6. LIVE SERVICE</div>
                <div className="text-[9px] text-white/80 mt-1">Active Offering</div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. SELECTED SYSTEMS */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">6 // SELECTED STUDIO SYSTEMS</h3>
          <div className="p-6 rounded-xl border border-white/15 bg-[#07070b] font-mono space-y-4">
            <div className="text-xs text-white font-bold">VAG AGENCY SYSTEM HIERARCHY</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-lg border border-[#00F0FF]/30 bg-[#00F0FF]/5 space-y-1">
                <div className="text-[#00F0FF] font-bold">ARIA AI Telecom Platform</div>
                <div className="text-[11px] text-white">Powers candidate screening backend</div>
                <div className="text-[10px] text-[#8E8EA8]">Status: LIVE</div>
              </div>

              <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5 space-y-1">
                <div className="text-purple-300 font-bold">SnapMark AI Attendance</div>
                <div className="text-[11px] text-white">Classroom face recognition service</div>
                <div className="text-[10px] text-[#8E8EA8]">Status: Dean Approved</div>
              </div>

              <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5 space-y-1">
                <div className="text-blue-300 font-bold">WhatsApp Cloud API Automations</div>
                <div className="text-[11px] text-white">Business messaging workflows</div>
                <div className="text-[10px] text-[#8E8EA8]">Status: Studio Offering</div>
              </div>
            </div>
          </div>
        </div>

        {/* 7. LIVE PRESENCE */}
        <div className="p-6 rounded-xl border border-[#00F0FF]/30 bg-[#00F0FF]/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-mono text-xs text-[#00F0FF] font-bold tracking-widest uppercase flex items-center space-x-2">
              <Globe size={16} />
              <span>7 // LIVE STUDIO PRESENCE</span>
            </div>
            <div className="font-syne text-lg font-bold text-white">vagagency.netlify.app</div>
            <p className="font-space text-xs text-[#8E8EA8]">
              Official studio website presenting AI automation services and software capabilities.
            </p>
          </div>

          <a
            href="https://vagagency.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#00F0FF] text-black font-syne font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all"
          >
            <span>VISIT VAG AGENCY</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* 8. ENGINEERING NOTES */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">8 // STUDIO ENGINEERING NOTES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {engineeringNotes.map((note, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1.5">
                <div className="text-[#00F0FF] font-bold flex items-center space-x-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF]" />
                  <span>{note.title}</span>
                </div>
                <p className="text-[#8E8EA8] leading-relaxed">{note.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 9. CURRENT STATUS & LINKS */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#8E8EA8]">
            DIRECT LINK: <span className="text-[#00F0FF]">https://vagagency.netlify.app</span>
          </div>

          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <a
              href="https://vagagency.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#00F0FF] text-black font-syne font-bold text-xs tracking-wider uppercase"
            >
              <span>VISIT VAG AGENCY</span>
              <ExternalLink size={14} />
            </a>

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-white/15 bg-white/[0.02] text-xs font-mono text-white hover:border-[#00F0FF]/40 transition-colors"
            >
              CLOSE DOSSIER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
