import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SHOWCASE_ITEMS = [
  {
    title: 'Space Voyage',
    category: 'Interactive 3D Universe',
    gif: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    tech: 'Three.js / WebGL',
  },
  {
    title: 'CodeNest Ecosystem',
    category: 'Developer Architecture',
    gif: 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    tech: 'Full-Stack / React',
  },
  {
    title: 'Vex Ventures',
    category: 'Fintech & Analytics',
    gif: 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
    tech: 'Data Pipelines',
  },
  {
    title: 'Stellar AI Studio',
    category: 'Generative Intelligence',
    gif: 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    tech: 'PyTorch / LLMs',
  },
  {
    title: 'Transform Engine',
    category: 'High-Speed Scraper',
    gif: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    tech: 'Async Queues',
  },
  {
    title: 'Aethera Interactive',
    category: 'Spatial Motion Design',
    gif: 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
    tech: 'GSAP / Motion',
  },
];

export const MotionShowcaseSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#242424] text-white overflow-hidden border-b border-[#ACACAC]/40">
      <div className="max-w-[90%] mx-auto px-6 sm:px-12 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FFE862] font-bold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FFE862]" />
            Motion & Spatial Lab
          </span>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-serif italic text-4xl sm:text-6xl text-white tracking-tight">
            Kinetic Motion & Interactive Renders
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-sans font-light leading-relaxed">
            Exploring 60fps micro-interactions, Three.js spatial viewports, and kinetic scroll choreographies.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Sliding Gallery */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 35,
          }}
          className="flex gap-6 will-change-transform px-6"
        >
          {[...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS].map((item, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[320px] sm:w-[420px] h-[240px] sm:h-[300px] rounded-2xl overflow-hidden bg-black/50 border border-white/20 hover:border-[#FFE862] transition-all duration-300"
            >
              <img
                src={item.gif}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#FFE862] uppercase tracking-widest mb-1">
                  {item.tech}
                </span>
                <h4 className="font-serif italic text-2xl text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-300 font-sans font-light mt-0.5">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
