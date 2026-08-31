import React from 'react';
import type { Project } from '../../data/portfolioData';
import { 
  X, 
  Eye, 
  Database, 
  Cpu, 
  ArrowDown, 
  Server, 
  CheckCircle2, 
  Users,
  Terminal,
  Camera,
  Award,
  AlertCircle
} from 'lucide-react';

interface SnapMarkCaseStudyProps {
  project: Project;
  onClose: () => void;
}

export const SnapMarkCaseStudy: React.FC<SnapMarkCaseStudyProps> = ({ project, onClose }) => {
  const implementedComponents = [
    {
      title: "Face Recognition Classroom Attendance",
      icon: Eye,
      desc: "Computer vision workflow evaluating group photos taken during class to automate attendance marking."
    },
    {
      title: "Single-Photo Group Attendance Workflow",
      icon: Camera,
      desc: "Streamlined roll-call mechanism enabling one classroom photograph to mark the entire class."
    },
    {
      title: "InsightFace Framework",
      icon: Cpu,
      desc: "Open-source deep face analysis library integrated for facial landmark detection and feature extraction."
    },
    {
      title: "Python Processing Engine",
      icon: Terminal,
      desc: "Core computational script execution pipeline managing image ingestion, face extraction, and database routing."
    },
    {
      title: "Supabase PostgreSQL Ledger",
      icon: Database,
      desc: "Relational database persistence storing verified student profile records and timestamped attendance entries."
    },
    {
      title: "KVM2 VPS Infrastructure",
      icon: Server,
      desc: "Virtual private server hosting environment utilized for executing computer vision and backend logic."
    }
  ];

  const techStackItems = [
    { name: "InsightFace", role: "Face Recognition Framework", icon: Eye },
    { name: "Python", role: "Processing Engine", icon: Terminal },
    { name: "Supabase", role: "Database & Ledger", icon: Database },
    { name: "KVM2 VPS", role: "Server Deployment", icon: Server }
  ];

  const engineeringNotes = [
    {
      title: "Computer Vision Pipeline",
      detail: "Multi-face extraction from single classroom group photographs to automate student presence verification."
    },
    {
      title: "Face Recognition Framework",
      detail: "InsightFace deep face analysis library integrated for facial landmarking and feature vector matching."
    },
    {
      title: "Python Backend Logic",
      detail: "Python execution pipeline orchestrating image ingestion, face location parsing, and database synchronization."
    },
    {
      title: "Database-Backed Ledger",
      detail: "Supabase PostgreSQL database storing student profile mappings and timestamped attendance records."
    },
    {
      title: "VPS Infrastructure",
      detail: "Deployed on KVM2 VPS host for server-side computational processing and data management."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300" role="dialog" aria-modal="true" aria-labelledby="snapmark-case-study-title">
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
                <CheckCircle2 size={12} />
                <span>DEAN APPROVED // APPROVED TO BUILD</span>
              </span>
            </div>
            <h2 id="snapmark-case-study-title" className="font-syne text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
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
            <div className="text-white font-bold mt-1">SNAPMARK-v1.0</div>
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
            <div className="text-[#8E8EA8]">CAMPUS APPROVAL</div>
            <div className="text-[#00F0FF] font-bold mt-1">Dean Approved (23 Jul 2026)</div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">1 // PROJECT OVERVIEW</h3>
          <p className="text-base text-[#8E8EA8] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* 2. THE PROBLEM */}
        <div className="p-6 rounded-xl border border-amber-500/20 bg-amber-500/[0.03] space-y-3">
          <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <AlertCircle size={16} />
            <span>2 // THE PROBLEM</span>
          </div>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            Traditional manual roll-call methods require calling individual student names sequentially during lectures, consuming instructional time. SnapMark was engineered around a single-photo classroom workflow: <strong className="text-white">"One photo marks the entire class."</strong>
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

        {/* 4. SYSTEM FLOW */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">4 // SYSTEM FLOW</h3>
            <span className="font-mono text-[10px] text-[#8E8EA8]">TECHNICAL DATA PIPELINE SCHEMATIC</span>
          </div>

          <div className="p-6 rounded-xl border border-white/15 bg-[#07070b] font-mono space-y-6">
            {/* Visual Node Diagram */}
            <div className="flex flex-col items-center space-y-4">
              {/* Node 1 */}
              <div className="w-full max-w-md p-3 rounded-lg border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-center space-y-1">
                <div className="flex items-center justify-center space-x-2 text-[#00F0FF] text-xs font-bold">
                  <Camera size={14} />
                  <span>Classroom Group Photo</span>
                </div>
                <div className="text-[10px] text-[#8E8EA8]">Single Image Capture Input</div>
              </div>

              <ArrowDown size={16} className="text-[#00F0FF] animate-pulse" />

              {/* Node 2 */}
              <div className="w-full max-w-md p-3 rounded-lg border border-purple-500/30 bg-purple-500/5 text-center space-y-1">
                <div className="flex items-center justify-center space-x-2 text-purple-300 text-xs font-bold">
                  <Eye size={14} />
                  <span>Face Detection / Recognition</span>
                </div>
                <div className="text-[10px] text-[#8E8EA8]">InsightFace Deep Analysis Framework</div>
              </div>

              <ArrowDown size={16} className="text-[#00F0FF] animate-pulse" />

              {/* Node 3 */}
              <div className="w-full max-w-md p-3 rounded-lg border border-blue-500/30 bg-blue-500/5 text-center space-y-1">
                <div className="flex items-center justify-center space-x-2 text-blue-300 text-xs font-bold">
                  <Users size={14} />
                  <span>Student Identification</span>
                </div>
                <div className="text-[10px] text-[#8E8EA8]">Python Matching & Feature Parsing</div>
              </div>

              <ArrowDown size={16} className="text-[#00F0FF] animate-pulse" />

              {/* Node 4 */}
              <div className="w-full max-w-md p-3 rounded-lg border border-amber-500/30 bg-amber-500/5 text-center space-y-1">
                <div className="flex items-center justify-center space-x-2 text-amber-300 text-xs font-bold">
                  <Terminal size={14} />
                  <span>Attendance Processing</span>
                </div>
                <div className="text-[10px] text-[#8E8EA8]">Conceptual Roll Call Logic</div>
              </div>

              <ArrowDown size={16} className="text-[#00F0FF] animate-pulse" />

              {/* Node 5 */}
              <div className="w-full max-w-md p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 text-center space-y-1">
                <div className="flex items-center justify-center space-x-2 text-emerald-400 text-xs font-bold">
                  <Database size={14} />
                  <span>Supabase PostgreSQL Database</span>
                </div>
                <div className="text-[10px] text-[#8E8EA8]">Attendance Records & Student Profiles</div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. COMPUTER VISION LAYER */}
        <div className="space-y-3 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">5 // COMPUTER VISION LAYER</h3>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            SnapMark leverages <strong className="text-white">InsightFace</strong>, an open-source deep face analysis library integrated within a Python computational pipeline. InsightFace performs facial landmarking and feature vector extraction from group classroom photographs, enabling multi-face parsing from a single image capture.
          </p>
        </div>

        {/* 6. DATA / BACKEND */}
        <div className="space-y-3 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
          <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">6 // DATA & BACKEND LAYER</h3>
          <p className="text-sm text-[#8E8EA8] leading-relaxed">
            The data layer is backed by <strong className="text-white">Supabase PostgreSQL</strong>. Supabase stores student identification mappings and timestamped attendance records, maintaining persistent ledger state for roll call entries.
          </p>
        </div>

        {/* 7. DEPLOYMENT & APPROVAL STATUS */}
        <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.04] space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
            <div className="font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase flex items-center space-x-2">
              <Award size={16} />
              <span>7 // DEPLOYMENT & APPROVAL STATUS</span>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
              DEAN APPROVED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1">
              <div className="text-[#8E8EA8]">CAMPUS APPROVAL</div>
              <div className="text-white font-bold text-sm">Dean Approved on 23 Jul 2026</div>
              <div className="text-[#8E8EA8] text-[11px] mt-1">Vaagdevi College / Campus — Green light to build</div>
            </div>

            <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1">
              <div className="text-[#8E8EA8]">HISTORICAL INFRASTRUCTURE</div>
              <div className="text-white font-bold text-sm">KVM2 VPS Host</div>
              <div className="text-[#8E8EA8] text-[11px] mt-1">Previously deployed on virtual private server</div>
            </div>
          </div>
        </div>

        {/* 8. TECH STACK & ENGINEERING NOTES */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">8 // TECH STACK</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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

          <div className="space-y-4">
            <h3 className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">ENGINEERING DIMENSIONS</h3>
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
        </div>

        {/* 9. VERIFIED LINKS & ACTIONS */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#8E8EA8]">
            PROJECT ANCHOR: <span className="text-[#00F0FF]">#snapmark-case-study</span>
          </div>

          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#00F0FF] text-black font-syne font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
            >
              CLOSE DOSSIER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

