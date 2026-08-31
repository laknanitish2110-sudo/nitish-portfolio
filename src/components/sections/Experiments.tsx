import React, { useState } from 'react';
import { PORTFOLIO_DATA, type Experiment } from '../../data/portfolioData';
import { Terminal, Code, Play, Beaker } from 'lucide-react';

export const Experiments: React.FC = () => {
  const [activeExp, setActiveExp] = useState<Experiment>(PORTFOLIO_DATA.experiments[0]);

  const getExperimentStatusBadge = (status: Experiment['status']) => {
    switch (status) {
      case 'BUILDING':
        return (
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold tracking-wider flex items-center space-x-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>BUILDING</span>
          </span>
        );
      case 'RESEARCH':
        return (
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 font-bold tracking-wider flex items-center space-x-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>RESEARCH</span>
          </span>
        );
      case 'CONCEPT':
        return (
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 font-bold tracking-wider flex items-center space-x-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span>CONCEPT</span>
          </span>
        );
      default:
        return (
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-slate-500/10 text-slate-400 border border-slate-500/30 font-bold tracking-wider">
            {status}
          </span>
        );
    }
  };

  return (
    <section id="experiments" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-4 mb-16">
        <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">
          03 // EXPERIMENTAL LAB & PROTOTYPES
        </span>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="mb-12">
        <div className="flex items-center space-x-3 text-xs font-mono text-amber-400 mb-2">
          <Beaker size={14} />
          <span className="tracking-widest uppercase font-bold">UNRELEASED LAB PROTOTYPES & PROOFS OF CONCEPT</span>
        </div>
        <h2 className="font-syne text-4xl sm:text-6xl font-bold text-[#F3F3F6] tracking-tight">
          EXPERIMENTAL SANDBOX
        </h2>
        <p className="font-space text-base sm:text-lg text-[#8E8EA8] mt-3 max-w-2xl">
          A collection of unreleased AI algorithms, audio-visual shaders, small applications, and technical proofs of concept.
        </p>
      </div>

      {/* Interactive Terminal Sandbox Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - List of Experiments */}
        <div className="lg:col-span-5 space-y-4">
          {PORTFOLIO_DATA.experiments.map((exp) => {
            const isSelected = activeExp.id === exp.id;
            return (
              <div
                key={exp.id}
                onClick={() => setActiveExp(exp)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'border-[#00F0FF] bg-[#00F0FF]/5 shadow-[0_0_25px_rgba(0,240,255,0.15)]'
                    : 'border-white/10 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.03]'
                }`}
                data-cursor="inspect"
              >
                <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
                  <span className="font-mono text-xs text-[#00F0FF] px-2.5 py-0.5 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/20">
                    {exp.category}
                  </span>
                  {getExperimentStatusBadge(exp.status)}
                </div>

                <h3 className="font-syne text-xl font-bold text-[#F3F3F6]">
                  {exp.title}
                </h3>

                <p className="font-space text-sm text-[#8E8EA8] mt-2 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-4 flex items-center justify-between font-mono text-xs text-[#8E8EA8]">
                  <span>TECH: {exp.tech}</span>
                  <span className="text-[#00F0FF] flex items-center space-x-1">
                    <span>INSPECT</span>
                    <Play size={10} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column - Terminal / Code Inspector Box */}
        <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-[#08080d] p-6 sm:p-8 font-mono relative overflow-hidden shadow-2xl">
          {/* Terminal Window Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-[#8E8EA8]">{activeExp.title.toLowerCase().replace(/\s+/g, '-')}.ts</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-[#00F0FF]">
              <Terminal size={14} />
              <span>LIVE INSPECTOR</span>
            </div>
          </div>

          {/* Active Experiment Details */}
          <div className="space-y-6">
            <div>
              <span className="text-xs text-[#8E8EA8]">// EXPERIMENT METADATA</span>
              <div className="text-sm font-bold text-white mt-1">{activeExp.title}</div>
              <div className="text-xs text-[#8E8EA8] mt-0.5">{activeExp.description}</div>
            </div>

            {/* Code Snippet Box */}
            {activeExp.codeSnippet && (
              <div>
                <div className="flex items-center justify-between text-xs text-[#8E8EA8] mb-2">
                  <span>// EXECUTABLE LOGIC</span>
                  <Code size={12} />
                </div>
                <pre className="p-4 rounded-lg bg-black/60 border border-white/10 text-xs text-[#00F0FF] overflow-x-auto leading-relaxed">
                  <code>{activeExp.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Simulated Live Output Console */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 text-xs space-y-2">
              <div className="text-[#8E8EA8]">// EXPERIMENT TELEMETRY</div>
              <div className="flex items-center space-x-2">
                <span className="text-[#8E8EA8]">Status:</span>
                {getExperimentStatusBadge(activeExp.status)}
              </div>
              <div className="text-white/80">Stack: {activeExp.tech}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
