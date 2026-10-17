import React from 'react';
import { RESUME_DATA } from '../data/resumeData';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home', onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F7F1ED]/80 border-b border-[#ACACAC]/30 transition-colors duration-200">
      <div className="max-w-[90%] mx-auto h-20 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            if (onNavigate && currentPage !== 'home') {
              e.preventDefault();
              onNavigate('home');
            }
          }}
          className="group flex items-center gap-3 font-display font-bold text-xl tracking-tight text-[#242424]"
        >
          <span className="w-8 h-8 rounded-full bg-[#242424] text-[#FFE862] flex items-center justify-center text-xs font-mono font-bold group-hover:scale-105 transition-transform">
            MS
          </span>
          <span className="font-serif italic text-2xl tracking-normal text-[#242424]">
            {RESUME_DATA.name}
          </span>
        </a>

        {/* Minimal Editorial Links */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-mono uppercase tracking-widest text-[#242424]/70">
          <a
            href="#about"
            onClick={(e) => {
              if (onNavigate && currentPage !== 'home') {
                e.preventDefault();
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-[#242424] transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#works"
            onClick={(e) => {
              if (onNavigate && currentPage !== 'home') {
                e.preventDefault();
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-[#242424] transition-colors"
          >
            Curated Works
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              if (onNavigate && currentPage !== 'home') {
                e.preventDefault();
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-[#242424] transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              if (onNavigate && currentPage !== 'home') {
                e.preventDefault();
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-[#242424] transition-colors"
          >
            Stack
          </a>
        </nav>

        {/* Contact CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              if (onNavigate && currentPage !== 'home') {
                e.preventDefault();
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="px-5 py-2.5 rounded-full bg-[#242424] text-white text-xs font-mono font-medium hover:bg-[#FFE862] hover:text-[#242424] transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};
