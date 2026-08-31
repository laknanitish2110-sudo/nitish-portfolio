import React from 'react';
import type { Project } from '../../data/portfolioData';
import {
  X,
  Zap,
  Terminal,
  Trophy,
  AlertTriangle,
  ChevronDown,
  SunMedium,
  BarChart3,
  MapPin,
  Layers,
  Cpu,
  FileText
} from 'lucide-react';

interface SolarSwapCaseStudyProps {
  project: Project;
  onClose: () => void;
}

export const SolarSwapCaseStudy: React.FC<SolarSwapCaseStudyProps> = ({ project, onClose }) => {
  const dimensions = [
    { title: 'Solar Energy Infrastructure', icon: SunMedium, desc: 'Harnessing solar as the primary energy source for the proposed charging hub.' },
    { title: 'EV Charging System', icon: Zap, desc: 'EV charging as a core service offered by the proposed micro-hub concept.' },
    { title: 'Energy Exchange Model', icon: Layers, desc: 'Two-way energy exchange mechanism proposed as part of the micro-hub design.' },
    { title: 'Physical System Design', icon: Cpu, desc: 'Submitted block diagrams document the physical layout of the proposed system.' },
    { title: 'Business Model & Financials', icon: BarChart3, desc: 'Revenue projections and breakeven analysis were included in the hackathon submission.' },
    { title: 'Tier-2/3 Town Context', icon: MapPin, desc: 'System concept designed specifically for the infrastructure constraints of Tier-2/3 towns.' },
  ];

  const systemNodes = [
    { label: 'SOLAR ENERGY', sub: 'Primary energy source', color: 'text-amber-400', border: 'border-amber-500/40', bg: 'bg-amber-500/[0.07]' },
    { label: 'ENERGY HUB', sub: 'Micro-hub storage & distribution', color: 'text-[#00F0FF]', border: 'border-[#00F0FF]/35', bg: 'bg-[#00F0FF]/[0.06]' },
    { label: 'EV CHARGING', sub: 'Vehicle charging interface', color: 'text-emerald-400', border: 'border-emerald-500/35', bg: 'bg-emerald-500/[0.06]' },
    { label: 'ENERGY EXCHANGE', sub: 'Two-way energy distribution', color: 'text-purple-300', border: 'border-purple-500/35', bg: 'bg-purple-500/[0.06]' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-5xl my-auto bg-[#0a0a0f] border border-white/20 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-10 max-h-[92vh] overflow-y-auto font-space text-left"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── HEADER ── */}
        <div className="flex items-start justify-between border-b border-white/10 pb-6 gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-amber-400 tracking-widest uppercase font-bold flex items-center space-x-1.5">
                <Terminal size={13} />
                <span>EV INFRASTRUCTURE // HACKATHON DOSSIER</span>
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/25 flex items-center space-x-1.5">
                <Trophy size={11} />
                <span>HACKATHON CLEARED</span>
              </span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-black text-white tracking-tight">
              SolarSwap
            </h2>
            <p className="font-space text-sm sm:text-base text-amber-400/90">
              {project.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-2.5 rounded-full border border-white/10 text-white/80 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
            aria-label="Close dossier"
          >
            <X size={20} />
          </button>
        </div>

        {/* ── 1. METADATA GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs">
          <div>
            <div className="text-[#8E8EA8]">STATUS</div>
            <div className="text-amber-400 font-bold mt-1">HACKATHON CLEARED</div>
          </div>
          <div>
            <div className="text-[#8E8EA8]">CONTEXT</div>
            <div className="text-white font-bold mt-1">MSME Idea Hackathon 6.0</div>
          </div>
          <div>
            <div className="text-[#8E8EA8]">TIMELINE</div>
            <div className="text-white font-bold mt-1">{project.year}</div>
          </div>
          <div>
            <div className="text-[#8E8EA8]">CATEGORY</div>
            <div className="text-white font-bold mt-1">EV / Solar / Energy Infrastructure</div>
          </div>
        </div>

        {/* ── HACKATHON NOTICE BANNER ── */}
        <div className="flex items-start space-x-3 p-4 rounded-xl border border-amber-500/30 bg-amber-500/[0.05]">
          <AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" />
          <p className="font-mono text-xs text-amber-300/90 leading-relaxed">
            SolarSwap is a <span className="font-bold text-amber-400">hackathon proposal</span> that cleared the first filter of MSME Idea Hackathon 6.0. It is a <span className="font-bold text-amber-400">proposed system — not a built, deployed, or installed infrastructure product.</span> All diagrams below are conceptual representations of the submitted proposal.
          </p>
        </div>

        {/* ── 1. PROJECT OVERVIEW ── */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs text-amber-400 tracking-widest uppercase">1 // PROJECT OVERVIEW</h3>
          <p className="text-base text-[#8E8EA8] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* ── 2. THE PROBLEM ── */}
        <div className="p-6 rounded-xl border border-amber-400/20 bg-amber-400/[0.03] space-y-3">
          <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <MapPin size={16} />
            <span>2 // THE PROBLEM — TIER-2/3 EV INFRASTRUCTURE GAP</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            Tier-2 and Tier-3 towns present a distinct challenge for EV adoption — reliable public charging infrastructure is sparse or absent in many such locations. SolarSwap was designed around this gap: a solar-powered micro-hub that could serve as a local energy source and EV charging point without dependence on large-scale grid infrastructure.
          </p>
        </div>

        {/* ── 3. THE PROPOSED SOLUTION ── */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs text-amber-400 tracking-widest uppercase">3 // THE PROPOSED SOLUTION</h3>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            The SolarSwap concept proposes a solar-powered EV charging and energy exchange micro-hub positioned for Tier-2/3 town contexts. The proposal centres on solar generation as the primary energy input, combined with a local storage and distribution mechanism for EV charging and a potential energy exchange component. The complete concept was submitted as an MSME Idea Hackathon 6.0 entry.
          </p>
        </div>

        {/* ── 4. CONCEPTUAL SYSTEM DIAGRAM ── */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-mono text-xs text-amber-400 tracking-widest uppercase">4 // SYSTEM CONCEPT</h3>
            <span className="font-mono text-[10px] text-amber-400 font-bold uppercase px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/5">
              CONCEPTUAL SYSTEM DIAGRAM
            </span>
          </div>

          <div className="p-6 rounded-xl border border-white/15 bg-[#07070b]">
            {/* Abstract solar linework visual */}
            <div className="flex justify-center mb-6">
              <div className="relative flex items-center justify-center">
                {/* Outer pulse ring */}
                <div className="absolute w-28 h-28 rounded-full border border-amber-500/10 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute w-20 h-20 rounded-full border border-amber-500/15" />
                {/* Sun icon centre */}
                <div className="relative p-4 rounded-full bg-amber-500/10 border border-amber-500/30">
                  <SunMedium size={32} className="text-amber-400" />
                </div>
                {/* Radiating lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-16 h-px bg-gradient-to-r from-amber-500/30 to-transparent origin-left"
                    style={{ transform: `rotate(${deg}deg) translateX(36px)` }}
                  />
                ))}
              </div>
            </div>

            {/* Flow nodes */}
            <div className="flex flex-col items-center space-y-0 font-mono text-xs">
              {systemNodes.map((node, idx, arr) => (
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

            <p className="mt-5 text-center font-mono text-[10px] text-[#8E8EA8]">
              Conceptual representation — not a detailed engineering diagram from the submitted proposal.
            </p>
          </div>
        </div>

        {/* ── 5. PHYSICAL SYSTEM DESIGN (PROPOSAL) ── */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] space-y-4">
          <div className="flex items-center space-x-2 text-[#00F0FF] font-mono text-xs font-bold uppercase tracking-wider">
            <FileText size={16} />
            <span>5 // PHYSICAL SYSTEM DESIGN — PROPOSAL</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            The submitted hackathon proposal included physical block diagrams documenting the proposed layout and system interconnections of the SolarSwap micro-hub. These diagrams were part of the complete submission package.
          </p>
          {/* Abstract proposal concept block */}
          <div className="grid grid-cols-3 gap-3 font-mono text-xs mt-2">
            {['SOLAR INPUT', 'STORAGE UNIT', 'CHARGING POINT', 'GRID TIE', 'ENERGY EXCHANGE', 'DISTRIBUTION'].map((label, i) => (
              <div key={i} className="p-3 rounded-lg border border-white/10 bg-white/[0.03] text-center">
                <div className="text-[#8E8EA8] font-bold text-[10px]">{label}</div>
              </div>
            ))}
          </div>
          <p className="font-mono text-[10px] text-amber-400/70 text-center pt-1">
            PROPOSAL CONCEPT — labels represent documented proposal elements, not a reproduced engineering drawing.
          </p>
        </div>

        {/* ── 6. BUSINESS MODEL ── */}
        <div className="p-6 rounded-xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.03] space-y-3">
          <div className="flex items-center space-x-2 text-[#00F0FF] font-mono text-xs font-bold uppercase tracking-wider">
            <BarChart3 size={16} />
            <span>6 // BUSINESS MODEL // PROPOSAL</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            The SolarSwap proposal included financial modelling as a core component of the hackathon submission. Revenue projections and a breakeven analysis were submitted as part of the complete proposal package.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs pt-1">
            <div className="p-4 rounded-xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.04] space-y-1">
              <div className="text-[#00F0FF] font-bold">REVENUE PROJECTIONS</div>
              <div className="text-[#8E8EA8] leading-relaxed">Revenue projections were included in the submitted proposal. No specific figures are disclosed here beyond what the project data documents.</div>
            </div>
            <div className="p-4 rounded-xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.04] space-y-1">
              <div className="text-[#00F0FF] font-bold">BREAKEVEN ANALYSIS</div>
              <div className="text-[#8E8EA8] leading-relaxed">A breakeven analysis was included in the submission as part of the business case for the proposed micro-hub.</div>
            </div>
          </div>
        </div>

        {/* ── 7. TIER-2/3 CONTEXT ── */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
          <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <MapPin size={16} />
            <span>7 // WHY TIER-2 / TIER-3 TOWNS</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            SolarSwap was specifically designed for the energy and infrastructure realities of Tier-2/3 towns. These contexts were the design reference point for the proposed micro-hub concept — shaping the solar-first energy approach and the scale at which the system was envisioned.
          </p>
        </div>

        {/* ── 8. HACKATHON MILESTONE ── */}
        <div className="p-6 rounded-xl border border-amber-500/40 bg-amber-500/[0.05] space-y-4">
          <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Trophy size={16} />
            <span>8 // HACKATHON MILESTONE</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/[0.07] space-y-1.5">
              <div className="text-amber-400 font-bold text-sm">MSME IDEA HACKATHON 6.0</div>
              <div className="text-white font-bold">FIRST FILTER CLEARED</div>
              <div className="text-[#8E8EA8] text-[11px] mt-1 leading-relaxed">
                SolarSwap cleared the initial screening of MSME Idea Hackathon 6.0. No victory, finalist position, or award is claimed.
              </div>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02] space-y-1.5">
              <div className="text-[#8E8EA8] font-bold">SUBMISSION PACKAGE</div>
              <ul className="text-[11px] text-[#8E8EA8] space-y-0.5 leading-relaxed list-none">
                <li className="flex items-start space-x-1.5"><span className="text-amber-400 mt-0.5">—</span><span>Physical / Block Diagrams</span></li>
                <li className="flex items-start space-x-1.5"><span className="text-amber-400 mt-0.5">—</span><span>Revenue Projections</span></li>
                <li className="flex items-start space-x-1.5"><span className="text-amber-400 mt-0.5">—</span><span>Breakeven Analysis</span></li>
                <li className="flex items-start space-x-1.5"><span className="text-amber-400 mt-0.5">—</span><span>Innovation Pitch</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── 9. ENGINEERING / DESIGN DIMENSIONS ── */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-amber-400 tracking-widest uppercase">9 // DESIGN DIMENSIONS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dimensions.map((dim, idx) => {
              const Icon = dim.icon;
              return (
                <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2 hover:border-amber-400/30 transition-colors">
                  <div className="flex items-center space-x-2 text-amber-400">
                    <Icon size={16} />
                    <span className="font-mono text-xs font-bold text-white">{dim.title}</span>
                  </div>
                  <p className="font-mono text-[11px] text-[#8E8EA8] leading-relaxed">{dim.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 10. CURRENT STATUS ── */}
        <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-500/[0.04] space-y-3 font-mono text-xs">
          <div className="flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-wider">
            <Zap size={14} />
            <span>10 // CURRENT STATUS</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-sm">HACKATHON CLEARED</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#8E8EA8]">MSME Idea Hackathon 6.0</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#8E8EA8]">First Filter Cleared</span>
          </div>
          <p className="text-[#8E8EA8] leading-relaxed">
            Proposed system developed as an MSME Idea Hackathon 6.0 submission. SolarSwap has not been built, installed, or deployed as physical infrastructure.
          </p>
        </div>

        {/* ── CLOSE ACTIONS ── */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#8E8EA8]">
            ANCHOR: <span className="text-amber-400">#solarswap</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 bg-white/[0.02] text-xs font-mono text-white hover:border-amber-400/40 transition-colors"
          >
            CLOSE DOSSIER
          </button>
        </div>

      </div>
    </div>
  );
};
