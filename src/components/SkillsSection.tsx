import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data/resumeData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 sm:px-12 bg-[#F7F1ED] border-b border-[#ACACAC]/40">
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#242424] font-bold">
            04 // Technical Ecosystem
          </span>
          <div className="h-px bg-[#ACACAC]/40 flex-1" />
        </div>

        <div className="mb-16">
          <h2 className="font-serif italic text-4xl sm:text-6xl text-[#242424] tracking-tight">
            Tooling, Stacks & Core Competencies
          </h2>
          <p className="text-[#242424]/70 text-sm sm:text-base mt-3 max-w-xl font-sans font-light">
            Technologies applied across machine learning, asynchronous pipelines, responsive frontend layouts, and cloud environments.
          </p>
        </div>

        {/* Minimal Editorial Grid */}
        <div className="border-t border-l border-[#ACACAC]/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(RESUME_DATA.skills).map(([category, list], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-b border-r border-[#ACACAC]/60 p-8 flex flex-col justify-between bg-white/40 hover:bg-[#FFE862]/15 transition-colors"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#636363] mb-2">
                  0{index + 1}
                </div>
                <h3 className="font-serif italic text-2xl text-[#242424] mb-6">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {list.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1.5 rounded-full text-xs font-mono bg-white text-[#242424] border border-[#ACACAC]/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#ACACAC]/30 text-[11px] font-mono text-[#636363] flex justify-between">
                <span>Verified Stack</span>
                <span>{list.length} Items</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
