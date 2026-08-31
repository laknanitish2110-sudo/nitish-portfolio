import React from 'react';
import type { Project } from '../../data/portfolioData';
import {
  X,
  Eye,
  Phone,
  Workflow,
  Terminal,
  Zap,
  Trophy,
  ScanSearch,
  Layers,
  AlertTriangle,
  ChevronDown
} from 'lucide-react';

interface NetraCaseStudyProps {
  project: Project;
  onClose: () => void;
}

export const NetraCaseStudy: React.FC<NetraCaseStudyProps> = ({ project, onClose }) => {
  const techStack = [
    {
      name: 'Gemini Vision',
      role: 'AI Vision Component',
      desc: 'Google Gemini Vision serves as the AI vision layer that analyses submitted product photos for potential defects.',
      icon: Eye,
      category: 'AI Layer'
    },
    {
      name: 'WhatsApp API',
      role: 'Photo Submission Interface',
      desc: 'WhatsApp Business Cloud API provides the user-facing channel through which photos are submitted for inspection.',
      icon: Phone,
      category: 'Interface Layer'
    },
    {
      name: 'n8n',
      role: 'Workflow Automation',
      desc: 'n8n orchestrates the automation pipeline connecting the WhatsApp interface to the AI vision processing.',
      icon: Workflow,
      category: 'Automation Layer'
    }
  ];

  const engineeringNotes = [
    {
      title: 'Computer Vision via AI API',
      detail: 'Leveraging Gemini Vision\'s image understanding capabilities without building or training a custom model from scratch.'
    },
    {
      title: 'WhatsApp as Inspection Interface',
      detail: 'Using the widely available WhatsApp Business Cloud API as the front-end submission channel removes the need for a dedicated app.'
    },
    {
      title: 'Workflow Orchestration with n8n',
      detail: 'Self-hosted n8n connects the message reception, image forwarding, AI analysis, and result delivery in a single automation pipeline.'
    },
    {
      title: 'Software-First Inspection',
      detail: 'The core design philosophy avoids dedicated inspection hardware by routing the inspection workflow through existing smartphones and cloud AI.'
    },
    {
      title: 'MSME-Oriented Product Design',
      detail: 'Designed for Micro, Small and Medium Enterprises that lack expensive quality inspection infrastructure, lowering the barrier to entry.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300" role="dialog" aria-modal="true" aria-labelledby="netra-case-study-title">
      <div
        className="relative w-full max-w-5xl my-auto bg-[#0a0a0f] border border-white/20 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-10 max-h-[92vh] overflow-y-auto font-space text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── HEADER ── */}
        <div className="flex items-start justify-between border-b border-white/10 pb-6 gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase font-bold flex items-center space-x-1.5">
                <Terminal size={13} />
                <span>AI VISION // HACKATHON DOSSIER</span>
              </span>
              {/* Deliberately NOT "LIVE" — hackathon cleared status */}
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/25 flex items-center space-x-1.5">
                <Trophy size={11} />
                <span>HACKATHON CLEARED</span>
              </span>
            </div>
            <h2 id="netra-case-study-title" className="font-syne text-3xl sm:text-5xl font-black text-white tracking-tight">
              {project.title}
            </h2>
            <p className="font-space text-sm sm:text-base text-[#00F0FF]">
              {project.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-2.5 rounded-full border border-white/10 text-white/80 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-colors"
            aria-label="Close case study"
          >
            <X size={20} />
          </button>
        </div>

        {/* ── 1. OVERVIEW METADATA GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs">
          <div>
            <div className="text-[#8E8EA8]">SYSTEM ID</div>
            <div className="text-white font-bold mt-1">NETRA-v0.1</div>
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
            <div className="text-[#8E8EA8]">CONTEXT</div>
            <div className="text-amber-400 font-bold mt-1">MSME Hackathon 6.0</div>
          </div>
        </div>

        {/* ── HACKATHON NOTICE BANNER ── */}
        <div className="flex items-start space-x-3 p-4 rounded-xl border border-amber-500/30 bg-amber-500/[0.05]">
          <AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" />
          <p className="font-mono text-xs text-amber-300/90 leading-relaxed">
            NETRA is a <span className="font-bold text-amber-400">hackathon proposal</span> that cleared the first filter of MSME Idea Hackathon 6.0. It is <span className="font-bold text-amber-400">not a deployed or production system</span>. All system flows below are labelled as <span className="font-bold">PROPOSED</span> where not fully implemented and verified.
          </p>
        </div>

        {/* ── 1. PROJECT OVERVIEW ── */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">1 // PROJECT OVERVIEW</h3>
          <p className="text-base text-[#8E8EA8] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* ── 2. THE PROBLEM ── */}
        <div className="p-6 rounded-xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.03] space-y-3">
          <div className="flex items-center space-x-2 text-[#00F0FF] font-mono text-xs font-bold uppercase tracking-wider">
            <ScanSearch size={16} />
            <span>2 // THE PROBLEM</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            Micro, Small and Medium Enterprises (MSMEs) often lack access to dedicated quality inspection infrastructure. Visual defect detection traditionally requires expensive hardware, specialists, or purpose-built equipment that places it out of reach for smaller operations. NETRA proposes a photo-based defect inspection workflow delivered entirely through WhatsApp — a platform already available on any smartphone.
          </p>
        </div>

        {/* ── 3. PROPOSED SOLUTION ── */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">3 // THE PROPOSED SOLUTION</h3>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            A user photographs a product and sends the image through WhatsApp. The backend workflow receives the image, forwards it to Gemini Vision for AI-based defect analysis, and returns a result. The approach avoids any dedicated inspection hardware.
          </p>
        </div>

        {/* ── 8. PROPOSED SYSTEM FLOW (placed here for visual flow) ── */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">PROPOSED SYSTEM FLOW</h3>
            <span className="font-mono text-[10px] text-amber-400 font-bold uppercase px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/5">CONCEPTUAL — NOT FULLY VERIFIED</span>
          </div>
          <div className="p-6 rounded-xl border border-white/15 bg-[#07070b] font-mono">
            <div className="flex flex-col items-center space-y-0 text-xs">
              {[
                { label: 'PRODUCT', sub: 'Physical item to inspect', color: 'text-white', border: 'border-white/20', bg: 'bg-white/[0.03]' },
                { label: 'PHOTO', sub: 'Captured via smartphone', color: 'text-white', border: 'border-white/20', bg: 'bg-white/[0.03]' },
                { label: 'WHATSAPP', sub: 'Submission interface (WhatsApp API)', color: 'text-[#00F0FF]', border: 'border-[#00F0FF]/30', bg: 'bg-[#00F0FF]/[0.05]' },
                { label: 'n8n WORKFLOW', sub: 'Automation orchestration', color: 'text-purple-300', border: 'border-purple-500/30', bg: 'bg-purple-500/[0.05]' },
                { label: 'GEMINI VISION', sub: 'AI visual analysis', color: 'text-blue-300', border: 'border-blue-500/30', bg: 'bg-blue-500/[0.05]' },
                { label: 'DEFECT ANALYSIS', sub: 'Image interpretation', color: 'text-blue-200', border: 'border-blue-400/25', bg: 'bg-blue-400/[0.04]' },
                { label: 'RESULT', sub: 'Returned via WhatsApp', color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/[0.05]' },
              ].map((node, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className={`w-full max-w-xs px-4 py-3 rounded-lg border ${node.border} ${node.bg} text-center`}>
                    <div className={`font-bold ${node.color}`}>{node.label}</div>
                    <div className="text-[10px] text-[#8E8EA8] mt-0.5">{node.sub}</div>
                  </div>
                  {idx < arr.length - 1 && (
                    <ChevronDown size={16} className="text-white/20 my-1" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4. AI VISION LAYER / TECH STACK ── */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">4 // TECHNOLOGY STACK</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {techStack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div key={idx} className="p-5 rounded-xl border border-white/10 bg-white/[0.02] space-y-2 hover:border-[#00F0FF]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[#8E8EA8]">
                      {tech.category}
                    </span>
                  </div>
                  <div className="font-syne font-bold text-sm text-white">{tech.name}</div>
                  <div className="font-mono text-[10px] text-[#00F0FF]">{tech.role}</div>
                  <p className="text-xs text-[#8E8EA8] leading-relaxed">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 6. ZERO-HARDWARE APPROACH ── */}
        <div className="p-6 rounded-xl border border-[#00F0FF]/25 bg-[#00F0FF]/[0.03] space-y-3">
          <div className="flex items-center space-x-2 text-[#00F0FF] font-mono text-xs font-bold uppercase tracking-wider">
            <Layers size={16} />
            <span>6 // ZERO-HARDWARE APPROACH</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            NETRA's documented positioning is a <span className="text-white font-medium">"zero-hardware pure software approach."</span> The inspection workflow is designed to run entirely over existing smartphone infrastructure and cloud AI APIs — removing any dependency on dedicated inspection cameras, conveyor sensors, or proprietary hardware modules. The phone camera and WhatsApp constitute the entire physical requirement on the user's side.
          </p>
        </div>

        {/* ── 7. HACKATHON MILESTONE ── */}
        <div className="p-6 rounded-xl border border-amber-500/40 bg-amber-500/[0.05] space-y-4">
          <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Trophy size={16} />
            <span>7 // HACKATHON MILESTONE</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/[0.07] space-y-1">
              <div className="text-amber-400 font-bold text-sm">MSME IDEA HACKATHON 6.0</div>
              <div className="text-white">FIRST FILTER CLEARED</div>
              <div className="text-[#8E8EA8] text-[11px] mt-1">NETRA was selected and cleared through the initial screening process of the MSME Idea Hackathon 6.0.</div>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02] space-y-1">
              <div className="text-[#8E8EA8] font-bold">CURRENT STANDING</div>
              <div className="text-amber-400">First filter cleared.</div>
              <div className="text-[#8E8EA8] text-[11px] mt-1">No final hackathon victory is claimed. This milestone reflects the first screening stage outcome only.</div>
            </div>
          </div>
        </div>

        {/* ── 9. ENGINEERING NOTES ── */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">9 // ENGINEERING NOTES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {engineeringNotes.map((note, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1.5 font-mono text-xs">
                <div className="text-[#00F0FF] font-bold flex items-center space-x-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF]" />
                  <span>{note.title}</span>
                </div>
                <p className="text-[#8E8EA8] leading-relaxed">{note.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 10. CURRENT STATUS ── */}
        <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-500/[0.04] space-y-2 font-mono text-xs">
          <div className="flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-wider">
            <Zap size={14} />
            <span>10 // CURRENT STATUS</span>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-sm">HACKATHON CLEARED</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#8E8EA8]">MSME Idea Hackathon 6.0</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#8E8EA8]">First Filter Cleared</span>
          </div>
          <p className="text-[#8E8EA8] pt-2 leading-relaxed">NETRA is not live, deployed, or production-ready. It is a software proposal that cleared the first screening stage of the MSME Idea Hackathon 6.0.</p>
        </div>

        {/* ── CLOSE ACTIONS ── */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#8E8EA8]">
            ANCHOR: <span className="text-[#00F0FF]">#netra</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 bg-white/[0.02] text-xs font-mono text-white hover:border-[#00F0FF]/40 transition-colors"
          >
            CLOSE DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
};
