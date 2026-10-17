import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, GraduationCap, Cpu } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-32 px-6 sm:px-12 bg-[#F7F1ED] border-b border-[#ACACAC]/40 relative overflow-hidden"
    >
      <div className="max-w-[90%] mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#242424] font-bold">
            01 // Engineering Philosophy
          </span>
          <div className="h-px bg-[#ACACAC]/40 flex-1" />
        </div>

        {/* Big Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif italic text-4xl sm:text-6xl text-[#242424] leading-[1.1] tracking-tight">
              Designing intelligence that helps systems scale with intention.
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ACACAC]/60 bg-white/60 text-[#242424] font-mono text-xs uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-[#242424]" />
              {RESUME_DATA.education.degree}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8 text-[#242424]/85 text-base sm:text-lg leading-relaxed font-sans font-light">
            <div className="space-y-6">
              {RESUME_DATA.about.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Editorial Highlight Blocks with Clean Borders */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                style={{ y }}
                className="p-8 rounded-2xl border border-[#ACACAC]/60 bg-white/80 shadow-sm transition-all duration-300 hover:border-[#242424]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFE862] text-[#242424] flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-[#242424]" />
                  </div>
                  <span className="font-display font-bold text-sm uppercase tracking-wider text-[#242424]">
                    Target Role
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#242424]/75 font-sans leading-normal">
                  Applying generative AI integration, throughput optimization, and full-stack software development.
                </p>
              </motion.div>

              <motion.div
                style={{ y }}
                className="p-8 rounded-2xl border border-[#ACACAC]/60 bg-white/80 shadow-sm transition-all duration-300 hover:border-[#242424]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFE862] text-[#242424] flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#242424]" />
                  </div>
                  <span className="font-display font-bold text-sm uppercase tracking-wider text-[#242424]">
                    Specialization
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#242424]/75 font-sans leading-normal">
                  Generative AI (Google Cloud certified), LLM workflow integrations, and full-stack scalable web architecture.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
