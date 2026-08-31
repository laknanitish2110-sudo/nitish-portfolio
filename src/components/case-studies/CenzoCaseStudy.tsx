import React from 'react';
import type { Project } from '../../data/portfolioData';
import {
  X,
  Terminal,
  CheckCircle2,
  MapPin,
  Database,
  Workflow,
  Bell,
  ChevronDown,
  Navigation,
  Package
} from 'lucide-react';

interface CenzoCaseStudyProps {
  project: Project;
  onClose: () => void;
}

export const CenzoCaseStudy: React.FC<CenzoCaseStudyProps> = ({ project, onClose }) => {
  const components = [
    {
      title: 'Real-Time Rider Tracking',
      icon: Navigation,
      badge: 'REAL-TIME',
      desc: 'Live visibility into rider position as part of the delivery dispatch workflow.'
    },
    {
      title: 'Live Map Interface',
      icon: MapPin,
      badge: 'Maps API',
      desc: 'Map interface displaying live rider location using the documented Maps API integration.'
    },
    {
      title: 'Order Notifications via n8n',
      icon: Bell,
      badge: 'AUTOMATION',
      desc: 'Automated order notifications powered by n8n workflow automation pipelines.'
    },
    {
      title: 'n8n Workflow Engine',
      icon: Workflow,
      badge: 'SELF-HOSTED',
      desc: 'n8n orchestrates the workflow layer connecting order state to notification dispatch.'
    },
    {
      title: 'Supabase PostgreSQL Backend',
      icon: Database,
      badge: 'DATA LAYER',
      desc: 'Supabase powers the backend with PostgreSQL. The documented database table is `cenzo_orders`.'
    },
    {
      title: 'cenzo_orders Table',
      icon: Package,
      badge: 'DATABASE',
      desc: 'The `cenzo_orders` Supabase table stores and tracks order records for the delivery system.'
    }
  ];

  const dimensions = [
    { label: 'REAL-TIME STATE', sub: 'Live rider position tracking' },
    { label: 'MAP INTERFACE', sub: 'Maps API visual layer' },
    { label: 'ORDER WORKFLOWS', sub: 'n8n automation pipeline' },
    { label: 'BACKEND DATA', sub: 'Supabase PostgreSQL' },
    { label: 'NOTIFICATIONS', sub: 'Automated order alerts' },
    { label: 'DELIVERY SYSTEM', sub: 'End-to-end dispatch flow' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300" role="dialog" aria-modal="true" aria-labelledby="cenzo-case-study-title">
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
                <span>REAL-TIME SYSTEMS // ENGINEERING DOSSIER</span>
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center space-x-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE & DEPLOYED</span>
              </span>
            </div>
            <h2 id="cenzo-case-study-title" className="font-syne text-3xl sm:text-5xl font-black text-white tracking-tight">
              Cenzo
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

        {/* ── 1. METADATA GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs">
          <div>
            <div className="text-[#8E8EA8]">SYSTEM ID</div>
            <div className="text-white font-bold mt-1">CENZO-v1.0</div>
          </div>
          <div>
            <div className="text-[#8E8EA8]">STATUS</div>
            <div className="text-emerald-400 font-bold mt-1 flex items-center space-x-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE & DEPLOYED</span>
            </div>
          </div>
          <div>
            <div className="text-[#8E8EA8]">TIMELINE</div>
            <div className="text-white font-bold mt-1">{project.year}</div>
          </div>
          <div>
            <div className="text-[#8E8EA8]">CATEGORY</div>
            <div className="text-white font-bold mt-1">Real-Time / Logistics / Full-Stack</div>
          </div>
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
            <Package size={16} />
            <span>2 // THE PROBLEM</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            A delivery workflow requires real-time visibility into rider movement, a reliable mechanism for tracking order state, and automated notifications to keep the dispatch loop informed. Without a live tracking layer and workflow automation, coordination between order creation, rider dispatch, and status communication relies on manual intervention.
          </p>
        </div>

        {/* ── 3. WHAT I BUILT ── */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">3 // WHAT I BUILT — IMPLEMENTED COMPONENTS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {components.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div key={idx} className="p-5 rounded-xl border border-white/10 bg-white/[0.02] space-y-2 hover:border-[#00F0FF]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[#8E8EA8]">
                      {comp.badge}
                    </span>
                  </div>
                  <div className="font-syne font-bold text-sm text-white">{comp.title}</div>
                  <p className="text-xs text-[#8E8EA8] leading-relaxed">{comp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 4. SYSTEM FLOW ── */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">4 // SYSTEM FLOW</h3>
            <span className="font-mono text-[10px] text-[#8E8EA8] border border-white/10 px-2 py-0.5 rounded">
              SYSTEM FLOW // HIGH-LEVEL
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Order flow */}
            <div className="p-5 rounded-xl border border-white/10 bg-[#07070b] space-y-3 font-mono text-xs">
              <div className="text-[#00F0FF] font-bold text-[10px] tracking-widest uppercase mb-3">ORDER NOTIFICATION FLOW</div>
              {[
                { label: 'ORDER', sub: 'Delivery request created', color: 'text-white', border: 'border-white/20', bg: 'bg-white/[0.03]' },
                { label: 'CENZO BACKEND', sub: 'Supabase PostgreSQL / cenzo_orders', color: 'text-[#00F0FF]', border: 'border-[#00F0FF]/30', bg: 'bg-[#00F0FF]/[0.05]' },
                { label: 'ORDER STATE', sub: 'Persisted in cenzo_orders table', color: 'text-blue-300', border: 'border-blue-500/30', bg: 'bg-blue-500/[0.05]' },
                { label: 'n8n WORKFLOW', sub: 'Automation trigger', color: 'text-purple-300', border: 'border-purple-500/30', bg: 'bg-purple-500/[0.05]' },
                { label: 'ORDER NOTIFICATION', sub: 'Automated alert dispatched', color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/[0.06]' },
              ].map((node, i, arr) => (
                <React.Fragment key={i}>
                  <div className={`px-3 py-2.5 rounded-lg border ${node.border} ${node.bg} text-center`}>
                    <div className={`font-bold ${node.color}`}>{node.label}</div>
                    <div className="text-[9px] text-[#8E8EA8] mt-0.5">{node.sub}</div>
                  </div>
                  {i < arr.length - 1 && <ChevronDown size={14} className="text-white/20 mx-auto" />}
                </React.Fragment>
              ))}
            </div>

            {/* Tracking flow */}
            <div className="p-5 rounded-xl border border-white/10 bg-[#07070b] space-y-3 font-mono text-xs">
              <div className="text-[#00F0FF] font-bold text-[10px] tracking-widest uppercase mb-3">REAL-TIME TRACKING FLOW</div>
              {[
                { label: 'RIDER LOCATION', sub: 'Live position data', color: 'text-white', border: 'border-white/20', bg: 'bg-white/[0.03]' },
                { label: 'REAL-TIME TRACKING', sub: 'Continuous location state', color: 'text-[#00F0FF]', border: 'border-[#00F0FF]/30', bg: 'bg-[#00F0FF]/[0.05]' },
                { label: 'LIVE MAP INTERFACE', sub: 'Maps API visual display', color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/[0.06]' },
              ].map((node, i, arr) => (
                <React.Fragment key={i}>
                  <div className={`px-3 py-2.5 rounded-lg border ${node.border} ${node.bg} text-center`}>
                    <div className={`font-bold ${node.color}`}>{node.label}</div>
                    <div className="text-[9px] text-[#8E8EA8] mt-0.5">{node.sub}</div>
                  </div>
                  {i < arr.length - 1 && <ChevronDown size={14} className="text-white/20 mx-auto" />}
                </React.Fragment>
              ))}

              {/* Abstract map grid */}
              <div className="mt-4 p-4 rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden relative">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />
                <div className="relative flex items-center justify-center py-4 space-x-3">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="font-mono text-[9px] text-emerald-400">RIDER</span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/40 via-[#00F0FF]/30 to-transparent" />
                  <div className="flex flex-col items-center space-y-1">
                    <MapPin size={14} className="text-[#00F0FF]" />
                    <span className="font-mono text-[9px] text-[#00F0FF]">DESTINATION</span>
                  </div>
                </div>
                <p className="relative text-center font-mono text-[9px] text-[#8E8EA8]">ABSTRACT MAP VISUAL — CONCEPTUAL</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. REAL-TIME TRACKING ── */}
        <div className="p-6 rounded-xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.03] space-y-3">
          <div className="flex items-center space-x-2 text-[#00F0FF] font-mono text-xs font-bold uppercase tracking-wider">
            <Navigation size={16} />
            <span>5 // REAL-TIME RIDER TRACKING</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            Cenzo includes real-time rider tracking displayed through a live map interface. The Maps API integration provides the visual layer for rider position within the app. The exact real-time data mechanism is not further specified in the documented project data.
          </p>
        </div>

        {/* ── 6. ORDER AUTOMATION ── */}
        <div className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/[0.03] space-y-3">
          <div className="flex items-center space-x-2 text-purple-300 font-mono text-xs font-bold uppercase tracking-wider">
            <Workflow size={16} />
            <span>6 // ORDER NOTIFICATIONS // n8n</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            Automated order notifications are delivered through n8n workflow automation. n8n serves as the workflow orchestration layer connecting order state changes to notification dispatch. The exact notification channels and workflow topology are not further detailed in the documented project data.
          </p>
        </div>

        {/* ── 7. DATA / BACKEND ── */}
        <div className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/[0.03] space-y-4">
          <div className="flex items-center space-x-2 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider">
            <Database size={16} />
            <span>7 // SUPABASE // ORDER STATE</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            Supabase PostgreSQL serves as the backend data layer for Cenzo. The documented database table is <code className="font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-1.5 py-0.5 rounded text-xs">cenzo_orders</code>, which stores and tracks order records for the delivery system.
          </p>
          <div className="font-mono text-xs p-4 rounded-xl bg-[#07070b] border border-white/10 space-y-2">
            <div className="text-[#8E8EA8]">DOCUMENTED TABLE</div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF]" />
              <code className="text-[#00F0FF] font-bold">cenzo_orders</code>
              <span className="text-[#8E8EA8] text-[10px]">— Supabase PostgreSQL</span>
            </div>
            <p className="text-[10px] text-[#8E8EA8] pt-1">Only this table is explicitly documented. No schema or additional tables are inferred.</p>
          </div>
        </div>

        {/* ── 9. ENGINEERING DIMENSIONS ── */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">9 // ENGINEERING DIMENSIONS</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {dimensions.map((dim, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1 hover:border-[#00F0FF]/30 transition-colors">
                <div className="font-mono text-xs font-bold text-white">{dim.label}</div>
                <div className="font-mono text-[10px] text-[#8E8EA8]">{dim.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TECH STACK BADGES ── */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">TECH STACK</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="font-mono text-xs px-3 py-1.5 rounded-lg border border-[#00F0FF]/20 bg-[#00F0FF]/[0.05] text-[#00F0FF]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── 10. CURRENT STATUS ── */}
        <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.04] space-y-3 font-mono text-xs">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold uppercase tracking-wider">
            <CheckCircle2 size={14} />
            <span>10 // CURRENT STATUS</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-sm flex items-center space-x-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE & DEPLOYED</span>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#8E8EA8]">{project.year}</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#8E8EA8]">Logistics / Full-Stack</span>
          </div>
        </div>

        {/* ── CLOSE ACTIONS ── */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#8E8EA8]">
            ANCHOR: <span className="text-[#00F0FF]">#cenzo</span>
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
