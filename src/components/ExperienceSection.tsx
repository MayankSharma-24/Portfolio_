import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 sm:px-12 bg-[#F7F1ED] border-b border-[#ACACAC]/40">
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#242424] font-bold">
            03 // Professional Trajectory
          </span>
          <div className="h-px bg-[#ACACAC]/40 flex-1" />
        </div>

        <div className="mb-16">
          <h2 className="font-serif italic text-4xl sm:text-6xl text-[#242424] tracking-tight">
            Production Engineering & Impact
          </h2>
          <p className="text-[#242424]/70 text-sm sm:text-base mt-3 max-w-xl font-sans font-light">
            Working directly on live AI integrations, plugin infrastructure, and high-performance backend systems.
          </p>
        </div>

        <div className="space-y-12">
          {RESUME_DATA.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-12 rounded-3xl border border-[#ACACAC]/60 bg-white/70 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-8 border-b border-[#ACACAC]/40">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#FFE862] text-[#242424] mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#242424] animate-pulse" />
                    Active Production Role
                  </div>
                  <h3 className="font-serif italic text-3xl sm:text-4xl text-[#242424]">
                    {exp.role}
                  </h3>
                  <div className="text-base sm:text-lg font-mono text-[#242424]/80 mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-mono text-[#636363]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#ACACAC]/50">
                    <Calendar className="w-3.5 h-3.5 text-[#242424]" />
                    {exp.dates}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#ACACAC]/50">
                    <MapPin className="w-3.5 h-3.5 text-[#242424]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-4 mb-8">
                {exp.bullets.map((bullet, bIndex) => (
                  <div
                    key={bIndex}
                    className="flex items-start gap-3.5 text-sm sm:text-base text-[#242424]/85 font-sans font-light leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#242424] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Prior internships */}
              <div className="pt-6 border-t border-[#ACACAC]/40">
                <span className="text-xs font-mono uppercase tracking-wider text-[#636363] block mb-3 font-semibold">
                  Prior Internship Engagements:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {RESUME_DATA.additionalInternships.map((internship, iIndex) => (
                    <span
                      key={iIndex}
                      className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white text-[#242424] border border-[#ACACAC]/50"
                    >
                      {internship.role} @ {internship.company} ({internship.dates})
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
