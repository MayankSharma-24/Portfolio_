import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA, type Project } from '../data/resumeData';

export const ProjectsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleCaseStudy = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="works" className="relative py-32 px-6 sm:px-12 bg-[#F7F1ED] border-b border-[#ACACAC]/40">
      <div className="max-w-[90%] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#242424] font-bold">
            02 // Curated Projects
          </span>
          <div className="h-px bg-[#ACACAC]/40 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-serif italic text-4xl sm:text-6xl text-[#242424] tracking-tight">
              Curated Projects & Engineering Works
            </h2>
            <p className="text-[#242424]/70 text-sm sm:text-base mt-3 max-w-xl font-sans font-light">
              Selection of systems across generative AI pipelines, backend API frameworks, and 3D web spaces — built with intention.
            </p>
          </div>
          <span className="text-xs font-mono px-4 py-2 rounded-full border border-[#ACACAC]/60 bg-white/60 text-[#242424]">
            {RESUME_DATA.projects.length} Documented Works
          </span>
        </div>

        {/* Monolithic Editorial Grid (Inspired directly by Nithin M Warrier's table layout) */}
        <div className="border-t border-l border-[#ACACAC]/60 grid grid-cols-1 md:grid-cols-2">
          {RESUME_DATA.projects.map((project: Project, index: number) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className="border-b border-r border-[#ACACAC]/60 p-8 sm:p-12 flex flex-col justify-between min-h-[360px] bg-white/40 hover:bg-[#FFE862]/20 transition-colors duration-300 group relative"
              >
                {/* Top Row: Year / Index & Category */}
                <div className="flex items-center justify-between text-xs font-mono text-[#636363] mb-8">
                  <span className="uppercase tracking-widest font-semibold text-[#242424]">
                    2026 // 0{index + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-[#ACACAC]/40 bg-white/80 text-[10px] uppercase font-bold text-[#242424]">
                    {project.category}
                  </span>
                </div>

                {/* Center: Title & Description */}
                <div className="my-auto">
                  <h3 className="font-serif italic text-2xl sm:text-4xl text-[#242424] mb-3 group-hover:text-black flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[#242424]" />
                  </h3>

                  <p className="text-[#242424]/80 text-sm sm:text-base font-sans font-light leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/80 text-[#242424] border border-[#ACACAC]/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Actions & Toggle */}
                <div className="pt-6 border-t border-[#ACACAC]/30 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-[#242424] hover:underline"
                      >
                        <span>Repository</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => toggleCaseStudy(project.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#242424] text-[#242424] hover:bg-[#242424] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Collapse' : 'Case Study'}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>

                {/* Collapsible Case Study */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden mt-6 pt-6 border-t border-[#ACACAC]/40 space-y-4 text-xs font-sans"
                    >
                      <div className="p-4 rounded-xl bg-white border border-[#ACACAC]/50">
                        <span className="font-mono text-[10px] uppercase font-bold text-[#242424] block mb-1">
                          Problem
                        </span>
                        <p className="text-[#242424]/80 leading-relaxed font-light">
                          {project.caseStudy.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-[#ACACAC]/50">
                        <span className="font-mono text-[10px] uppercase font-bold text-[#242424] block mb-1">
                          Architecture
                        </span>
                        <p className="text-[#242424]/80 leading-relaxed font-light">
                          {project.caseStudy.whatIBuilt}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FFE862]/30 border border-[#242424]/30">
                        <span className="font-mono text-[10px] uppercase font-bold text-[#242424] block mb-1">
                          Outcome
                        </span>
                        <p className="text-[#242424] font-medium leading-relaxed">
                          {project.caseStudy.outcome}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
