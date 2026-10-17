import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-12 pb-16 px-6 sm:px-12 overflow-hidden bg-[#F7F1ED]"
    >
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-editorial-grid pointer-events-none opacity-70 z-0" />

      {/* Top Metadata Header */}
      <div className="relative z-20 max-w-[90%] mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-b border-[#ACACAC]/40 pb-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#FFE862] text-[#242424] border border-[#242424]/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#242424] animate-pulse" />
            Available for ML/AI and SWE Roles
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-[#242424]/70">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#242424]" />
            {RESUME_DATA.contact.location}
          </span>
          <span className="hidden md:inline">
            Class of {RESUME_DATA.education.expectedGraduation}
          </span>
        </div>
      </div>

      {/* Main Center Stage: Giant Typography + Layered Anime Portrait (Nithin M Warrier Style) */}
      <div className="relative z-10 my-auto py-12 flex flex-col items-center justify-center">
        {/* Giant Monolithic Text Behind the Portrait */}
        <motion.div
          style={{ y: textY, opacity }}
          className="absolute inset-x-0 flex flex-col items-center justify-center select-none pointer-events-none z-0"
        >
          <div className="font-display font-black text-[15vw] sm:text-[14vw] tracking-tighter text-[#242424]/10 leading-none text-center uppercase">
            MAYANK
          </div>
          <div className="font-display font-black text-[13vw] sm:text-[12vw] tracking-tighter text-[#242424]/10 leading-none text-center uppercase -mt-4 sm:-mt-8">
            SHARMA
          </div>
        </motion.div>

        {/* Central Character/Portrait Container */}
        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-[280px] sm:w-[380px] md:w-[440px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-[#242424] bg-[#FFE862] group"
        >
          {/* Warm Yellow Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFD640] via-[#FFE862] to-[#FFF4B8]" />

          {/* User provided anime portrait */}
          <img
            src="/hero-portrait.jpg"
            alt="Mayank Sharma"
            className="w-full h-full object-cover object-center relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Decorative Corner Tag */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#242424] text-[#FFE862] text-[10px] font-mono uppercase tracking-widest font-bold">
            Zenitsu Focus
          </div>

          <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-[#242424]/90 text-white text-[10px] font-mono uppercase tracking-widest">
            AI + Motion
          </div>
        </motion.div>

        {/* Foreground Title Overlay */}
        <div className="relative z-20 mt-8 text-center max-w-3xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif italic text-4xl sm:text-6xl md:text-7xl text-[#242424] tracking-tight"
          >
            Generative AI & Full-Stack Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-[#242424]/80 font-sans font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {RESUME_DATA.positioning}
          </motion.p>
        </div>
      </div>

      {/* Role Pill Indicators Bar (Like Nithin's Brand / Web / Product pills) */}
      <div className="relative z-20 max-w-[90%] mx-auto w-full pt-8 border-t border-[#ACACAC]/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="px-5 py-2 rounded-full bg-[#242424] text-white text-xs md:text-sm font-mono tracking-wide">
            Generative AI Engineer
          </span>
          <span className="px-5 py-2 rounded-full bg-[#242424] text-white text-xs md:text-sm font-mono tracking-wide">
            Plugin Architecture
          </span>
          <span className="px-5 py-2 rounded-full bg-[#242424] text-white text-xs md:text-sm font-mono tracking-wide">
            Creative 3D & Motion
          </span>
        </div>

        <a
          href="#works"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#242424] hover:text-black font-semibold"
        >
          <span>Scroll to Curated Works</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
