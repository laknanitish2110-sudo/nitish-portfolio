import React from 'react';
import type { Project } from '../data/portfolioData';
import { Cpu, Bot, Zap, Truck, Eye, Sun, Phone, ShieldCheck, Database } from 'lucide-react';

interface ProjectVisualProps {
  project: Project;
  className?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project, className = '' }) => {
  const renderVisualContent = () => {
    switch (project.id) {
      case 'aria':
        return (
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative font-mono select-none overflow-hidden">
            {/* Ambient Glow & Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Visual Top Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Bot size={18} className="text-[#00F0FF]" />
                <span className="text-xs text-[#F3F3F6] font-bold tracking-wider">ARIA ARCHITECTURE SCHEMATIC</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                TELECOM ENGINE LIVE
              </span>
            </div>

            {/* Architecture Node Flow */}
            <div className="relative z-10 grid grid-cols-3 gap-3 my-auto items-center">
              <div className="p-3 rounded-lg border border-white/10 bg-white/[0.03] space-y-1">
                <div className="flex items-center space-x-1.5 text-[#00F0FF] text-[11px] font-bold">
                  <Phone size={12} />
                  <span>WHATSAPP API</span>
                </div>
                <p className="text-[10px] text-[#8E8EA8]">Cloud Webhook Intake</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="w-full h-[1px] bg-gradient-to-r from-[#00F0FF]/40 via-[#00F0FF] to-[#00F0FF]/40" />
                <span className="text-[9px] text-[#00F0FF] bg-[#0a0a0f] px-1 py-0.5 -mt-2 rounded border border-[#00F0FF]/30">
                  30-NODE WORKFLOW
                </span>
              </div>

              <div className="p-3 rounded-lg border border-[#00F0FF]/30 bg-[#00F0FF]/5 space-y-1">
                <div className="flex items-center space-x-1.5 text-white text-[11px] font-bold">
                  <Database size={12} className="text-[#00F0FF]" />
                  <span>SUPABASE & RAG</span>
                </div>
                <p className="text-[10px] text-[#8E8EA8]">Candidate Screening</p>
              </div>
            </div>

            {/* Specs Bar */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-[#8E8EA8] pt-3 border-t border-white/10">
              <span>STACK: n8n + Supabase + Gemini</span>
              <span>DEPLOYED: Jun 2026</span>
            </div>
          </div>
        );

      case 'snapmark':
        return (
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative font-mono select-none overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Eye size={18} className="text-emerald-400" />
                <span className="text-xs text-[#F3F3F6] font-bold tracking-wider">SNAPMARK RECOGNITION PIPELINE</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                DEAN APPROVED
              </span>
            </div>

            {/* Main Visual Schema */}
            <div className="relative z-10 my-auto p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#8E8EA8]">INPUT: Classroom Group Photo</span>
                <span className="text-emerald-400 font-bold">InsightFace Engine</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[9px] text-[#8E8EA8]">PROCESSING</span>
                  <div className="text-[10px] text-white font-bold">Multi-Face Vector Embedding</div>
                </div>
                <div className="p-2.5 rounded bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[9px] text-[#8E8EA8]">OUTPUT</span>
                  <div className="text-[10px] text-emerald-400 font-bold">Auto Attendance Ledger</div>
                </div>
              </div>
            </div>

            {/* Specs Bar */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-[#8E8EA8] pt-3 border-t border-white/10">
              <span>TECH: InsightFace + Python + VPS</span>
              <span>APPROVAL: Jul 23, 2026</span>
            </div>
          </div>
        );

      case 'vag-agency':
        return (
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative font-mono select-none overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Zap size={18} className="text-[#00F0FF]" />
                <span className="text-xs text-[#F3F3F6] font-bold tracking-wider">VAG AGENCY DIGITAL STUDIO</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                LIVE AT VAGAGENCY.NETLIFY.APP
              </span>
            </div>

            {/* Center Studio Identity Card */}
            <div className="relative z-10 my-auto text-center space-y-2 p-5 rounded-xl border border-[#00F0FF]/30 bg-black/50">
              <h4 className="font-syne text-2xl font-black text-white tracking-wider">VAG AGENCY</h4>
              <p className="text-[11px] text-[#00F0FF]">AI Automation Services & Software Studio</p>
              <div className="pt-2 flex justify-center gap-2 flex-wrap text-[9px] text-[#8E8EA8]">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">WhatsApp Automation</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">AI Hiring Bots</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">SnapMark EdTech</span>
              </div>
            </div>

            {/* Specs Bar */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-[#8E8EA8] pt-3 border-t border-white/10">
              <span>HOST: Netlify CDN</span>
              <span>LAUNCH: Jul 2026</span>
            </div>
          </div>
        );

      case 'netra':
        return (
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative font-mono select-none overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <ShieldCheck size={18} className="text-[#00F0FF]" />
                <span className="text-xs text-[#F3F3F6] font-bold tracking-wider">NETRA AI VISUAL INSPECTOR</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                MSME 6.0 CLEARED
              </span>
            </div>

            {/* Flow */}
            <div className="relative z-10 my-auto p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
              <div className="text-[11px] text-[#00F0FF] font-bold">Zero-Hardware Software Inspection Flow</div>
              <div className="grid grid-cols-3 gap-2 text-[10px] text-center">
                <div className="p-2 rounded bg-black/40 border border-white/5">
                  <div className="text-white font-bold">1. Photo Upload</div>
                  <div className="text-[9px] text-[#8E8EA8] mt-0.5">WhatsApp API</div>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5">
                  <div className="text-[#00F0FF] font-bold">2. Gemini Vision</div>
                  <div className="text-[9px] text-[#8E8EA8] mt-0.5">Defect Analysis</div>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5">
                  <div className="text-emerald-400 font-bold">3. Quality Log</div>
                  <div className="text-[9px] text-[#8E8EA8] mt-0.5">Automated Report</div>
                </div>
              </div>
            </div>

            {/* Specs Bar */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-[#8E8EA8] pt-3 border-t border-white/10">
              <span>EVENT: MSME Hackathon 6.0</span>
              <span>FILTER: 1st Stage Cleared</span>
            </div>
          </div>
        );

      case 'solarswap':
        return (
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative font-mono select-none overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Sun size={18} className="text-amber-400" />
                <span className="text-xs text-[#F3F3F6] font-bold tracking-wider">SOLARSWAP EV MICRO-HUB</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                MSME 6.0 CLEARED
              </span>
            </div>

            {/* Energy Flow Diagram */}
            <div className="relative z-10 my-auto p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
              <div className="text-[11px] text-amber-400 font-bold">Solar Energy Exchange Architecture</div>
              <div className="grid grid-cols-3 gap-2 text-[10px]">
                <div className="p-2 rounded bg-black/40 border border-white/5 space-y-1">
                  <div className="text-white font-bold">5kW Solar Array</div>
                  <div className="text-[9px] text-[#8E8EA8]">Rooftop Generation</div>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 space-y-1">
                  <div className="text-amber-400 font-bold">12kWh LFP Storage</div>
                  <div className="text-[9px] text-[#8E8EA8]">Battery Energy System</div>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 space-y-1">
                  <div className="text-emerald-400 font-bold">6-Slot Cabinet</div>
                  <div className="text-[9px] text-[#8E8EA8]">EV Swap Station</div>
                </div>
              </div>
            </div>

            {/* Specs Bar */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-[#8E8EA8] pt-3 border-t border-white/10">
              <span>TARGET: Tier-2/3 EV Infrastructure</span>
              <span>FILTER: 1st Stage Cleared</span>
            </div>
          </div>
        );

      case 'cenzo':
        return (
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative font-mono select-none overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Truck size={18} className="text-cyan-400" />
                <span className="text-xs text-[#F3F3F6] font-bold tracking-wider">CENZO DISPATCH ENGINE</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                REAL-TIME LIVE
              </span>
            </div>

            {/* Tracking Flow */}
            <div className="relative z-10 my-auto p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#8E8EA8]">Order Dispatch Pipeline</span>
                <span className="text-cyan-400 font-bold">Supabase Real-Time DB</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2.5 rounded bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[9px] text-[#8E8EA8]">WORKFLOW</span>
                  <div className="text-white font-bold">n8n Notification Triggers</div>
                </div>
                <div className="p-2.5 rounded bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[9px] text-[#8E8EA8]">TELEMETRY</span>
                  <div className="text-cyan-400 font-bold">Rider Location & Status</div>
                </div>
              </div>
            </div>

            {/* Specs Bar */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-[#8E8EA8] pt-3 border-t border-white/10">
              <span>STACK: Supabase + n8n + Maps API</span>
              <span>DEPLOYMENT: Jul 2026</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between relative font-mono select-none">
            <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
              <Cpu size={18} className="text-[#00F0FF]" />
              <span className="text-xs text-white font-bold">{project.title}</span>
            </div>
            <div className="my-auto text-center text-xs text-[#8E8EA8]">
              {project.category}
            </div>
            <div className="text-[10px] text-[#8E8EA8] pt-3 border-t border-white/10">
              STATUS: {project.status}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`w-full h-full bg-[#07070b] relative overflow-hidden ${className}`}>
      {renderVisualContent()}
    </div>
  );
};
