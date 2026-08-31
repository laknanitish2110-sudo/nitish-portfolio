import React from 'react';
import type { Project } from '../../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  Workflow, 
  Database, 
  Phone, 
  Cpu, 
  ArrowDown, 
  Server, 
  CheckCircle2, 
  FileText,
  Users,
  Terminal,
  AlertCircle
} from 'lucide-react';

interface AriaCaseStudyProps {
  project: Project;
  onClose: () => void;
}

export const AriaCaseStudy: React.FC<AriaCaseStudyProps> = ({ project, onClose }) => {
  const implementedComponents = [
    {
      title: "WhatsApp Business Cloud API Integration",
      icon: Phone,
      desc: "Direct webhook integration handling real-time candidate messaging, interactive button choices, and document payloads."
    },
    {
      title: "30-Node n8n Hiring Bot Workflow",
      icon: Workflow,
      desc: "Multi-branch workflow engine orchestrating candidate intake, qualification logic, automated follow-ups, and status updates."
    },
    {
      title: "Resume Intake & AI Screening",
      icon: FileText,
      desc: "Automated document parser receiving candidate resumes and evaluating qualifications against job requirements via Gemini AI."
    },
    {
      title: "Universal Sender Webhook",
      icon: Server,
      desc: "Centralized outbound messaging dispatcher routing notifications and interview links back to candidates over WhatsApp API."
    },
    {
      title: "Dealer & TSM Management",
      icon: Users,
      desc: "Hierarchy management interface for tracking field representatives, Dealers, and Territory Sales Managers (TSM)."
    },
    {
      title: "Supabase PostgreSQL Database",
      icon: Database,
      desc: "Persistent relational database storing applicant profiles, conversation states, screening evaluations, and audit logs."
    },
    {
      title: "Gemini AI Model Integration",
      icon: Cpu,
      desc: "Natural language processing engine for candidate response analysis, resume scoring, and automated qualification filtering."
    }
  ];

  const techStackItems = [
    { name: "n8n", role: "Workflow Orchestration", icon: Workflow },
    { name: "Supabase", role: "Backend & Database", icon: Database },
    { name: "PostgreSQL", role: "Relational Storage", icon: Server },
    { name: "WhatsApp Business Cloud API", role: "Messaging Gateway", icon: Phone },
    { name: "Gemini AI", role: "Resume & Language Screening", icon: Cpu }
  ];

  const engineeringNotes = [
    {
      title: "Workflow Orchestration",
      detail: "30-node n8n engine managing asynchronous message queues, conditional branch logic, and candidate session states."
    },
    {
      title: "API Integration",
      detail: "Bi-directional webhook connectivity with Meta WhatsApp Cloud API for automated messaging responses."
    },
    {
      title: "Database-Backed State",
      detail: "Conversation and candidate session state persisted in Supabase PostgreSQL to prevent data loss across user interactions."
    },
    {
      title: "AI Processing",
      detail: "Automated document intake and multi-criteria LLM screening using Gemini models to evaluate candidate responses."
    },
    {
      title: "Operational Automation",
      detail: "Deployed as the core operational automation backend powering candidate screening for VAG Agency."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300" role="dialog" aria-modal="true" aria-labelledby="aria-case-study-title">
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
                <span>ENGINEERING DOSSIER // SYSTEM BRIEF</span>
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center space-x-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE & DEPLOYED</span>
              </span>
            </div>
            <h2 id="aria-case-study-title" className="font-syne text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
              {project.title}
            </h2>
            <p className="font-space text-sm sm:text-base text-[#00F0FF]">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full border border-white/10 text-white/80 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-colors"
            aria-label="Close case study"
          >
            <X size={20} />
          </button>
        </div>

        {/* 1. PROJECT OVERVIEW METADATA GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs">
          <div>
            <div className="text-[#8E8EA8]">SYSTEM ID</div>
            <div className="text-white font-bold mt-1">ARIA-v2.1</div>
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
            <div className="text-[#8E8EA8]">DEPLOYMENT</div>
            <div className="text-[#00F0FF] font-bold mt-1">VAG Agency Backend</div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">1 // PROJECT OVERVIEW</h3>
          <p className="text-base text-[#8E8EA8] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* 2. PROBLEM STATEMENT */}
        <div className="p-6 rounded-xl border border-amber-500/20 bg-amber-500/[0.03] space-y-3">
          <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <AlertCircle size={16} />
            <span>2 // PROBLEM & ARCHITECTURAL NEED</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            Traditional candidate screening and client onboarding workflows rely on manual tracking, leading to delayed response times and scattered candidate data across disconnected platforms. ARIA was engineered to automate candidate intake, resume extraction, and applicant routing directly over WhatsApp Cloud API, persisting structured interaction state into a relational database without administrative delay.
          </p>
        </div>

        {/* 3. WHAT I BUILT */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">3 // IMPLEMENTED SYSTEM COMPONENTS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {implementedComponents.map((comp, idx) => {
              const IconComp = comp.icon;
              return (
                <div key={idx} className="p-5 rounded-xl border border-white/10 bg-white/[0.02] space-y-2 hover:border-[#00F0FF]/40 transition-colors">
                  <div className="flex items-center space-x-2 text-[#00F0FF]">
                    <IconComp size={18} />
                    <h4 className="font-syne text-sm font-bold text-white">{comp.title}</h4>
                  </div>
                  <p className="text-xs text-[#8E8EA8] leading-relaxed">{comp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. SYSTEM ARCHITECTURE */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">4 // SYSTEM ARCHITECTURE & DATA FLOW</h3>
            <span className="font-mono text-[10px] text-[#8E8EA8]">VERIFIED TECHNICAL SCHEMATIC</span>
          </div>

          <div className="p-6 rounded-xl border border-white/15 bg-[#07070b] font-mono space-y-6">
            {/* Visual Node Diagram */}
            <div className="flex flex-col items-center space-y-4">
              {/* Row 1: Candidate Input */}
              <div className="w-full max-w-md p-3 rounded-lg border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-center space-y-1">
                <div className="flex items-center justify-center space-x-2 text-[#00F0FF] text-xs font-bold">
                  <Phone size={14} />
                  <span>Candidate Message / Resume Intake (WhatsApp)</span>
                </div>
                <div className="text-[10px] text-[#8E8EA8]">Meta WhatsApp Business Cloud API</div>
              </div>

              <ArrowDown size={16} className="text-[#00F0FF] animate-pulse" />

              {/* Row 2: Gateway */}
              <div className="w-full max-w-md p-3 rounded-lg border border-white/15 bg-white/[0.03] text-center space-y-1">
                <div className="flex items-center justify-center space-x-2 text-white text-xs font-bold">
                  <Server size={14} className="text-[#00F0FF]" />
                  <span>Webhook / Universal Sender Gateway</span>
                </div>
                <div className="text-[10px] text-[#8E8EA8]">HTTP Webhook Dispatcher</div>
              </div>

              <ArrowDown size={16} className="text-[#00F0FF] animate-pulse" />

              {/* Row 3: n8n Engine */}
              <div className="w-full max-w-lg p-4 rounded-xl border border-[#00F0FF]/50 bg-[#00F0FF]/10 text-center space-y-2">
                <div className="flex items-center justify-center space-x-2 text-[#00F0FF] text-sm font-bold">
                  <Workflow size={16} />
                  <span>30-Node n8n Workflow Engine</span>
                </div>
                <div className="text-[10px] text-white/90">Multi-Branch Onboarding & Screening Orchestrator</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
                <div className="p-3 rounded-lg border border-purple-500/30 bg-purple-500/5 text-center space-y-1">
                  <div className="flex items-center justify-center space-x-1.5 text-purple-300 text-xs font-bold">
                    <Cpu size={14} />
                    <span>Gemini AI Screening</span>
                  </div>
                  <div className="text-[10px] text-[#8E8EA8]">Resume Evaluation & Scoring</div>
                </div>

                <div className="p-3 rounded-lg border border-blue-500/30 bg-blue-500/5 text-center space-y-1">
                  <div className="flex items-center justify-center space-x-1.5 text-blue-300 text-xs font-bold">
                    <Users size={14} />
                    <span>Dealer / TSM Management</span>
                  </div>
                  <div className="text-[10px] text-[#8E8EA8]">Territory Routing & Access</div>
                </div>
              </div>

              <ArrowDown size={16} className="text-[#00F0FF] animate-pulse" />

              {/* Row 4: Database Storage */}
              <div className="w-full max-w-md p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 text-center space-y-1">
                <div className="flex items-center justify-center space-x-2 text-emerald-400 text-xs font-bold">
                  <Database size={14} />
                  <span>Supabase PostgreSQL Database</span>
                </div>
                <div className="text-[10px] text-[#8E8EA8]">Candidate Records, Conversation State & Audit Logs</div>
              </div>

              <ArrowDown size={16} className="text-[#00F0FF]" />

              {/* Row 5: Operational Application */}
              <div className="w-full max-w-md p-3 rounded-lg border border-white/10 bg-white/[0.02] text-center space-y-1">
                <div className="text-white text-xs font-bold">VAG Agency Operations & Admin Interface</div>
                <div className="text-[10px] text-[#8E8EA8]">Live Automated Hiring & Communication Backend</div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. TECH STACK */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">5 // TECH STACK</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {techStackItems.map((tech, idx) => {
              const IconT = tech.icon;
              return (
                <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2 text-center">
                  <div className="p-2 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] w-fit mx-auto">
                    <IconT size={20} />
                  </div>
                  <div className="font-syne font-bold text-sm text-white">{tech.name}</div>
                  <div className="font-mono text-[10px] text-[#8E8EA8]">{tech.role}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. ENGINEERING NOTES */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">6 // ENGINEERING NOTES</h3>
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

        {/* 7. CURRENT STATUS */}
        <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase flex items-center space-x-2">
              <CheckCircle2 size={16} />
              <span>7 // CURRENT OPERATIONAL STATUS</span>
            </div>
            <div className="font-syne text-lg font-bold text-white">LIVE & DEPLOYED</div>
            <p className="font-space text-xs text-[#8E8EA8]">
              Deployed and operating as the backend engine powering VAG Agency candidate intake.
            </p>
          </div>

          <span className="font-mono text-xs px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold whitespace-nowrap">
            PRODUCTION SYSTEM
          </span>
        </div>

        {/* 8. LINKS & ACTIONS */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#8E8EA8]">
            VERIFIED LINK: <span className="text-[#00F0FF]">vagagency.netlify.app</span>
          </div>

          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <a
              href="https://vagagency.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#00F0FF] text-black font-syne font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
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
