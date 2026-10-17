import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KineticTicker } from './components/KineticTicker';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { MotionShowcaseSection } from './components/MotionShowcaseSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressIndicator } from './components/ScrollProgressIndicator';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Inertial smooth scrolling via Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Sync /privacy and /terms URLs
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/privacy') {
        setCurrentPage('privacy');
      } else if (path === '/terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    if (page === 'privacy') {
      window.history.pushState({}, '', '/privacy');
      window.scrollTo(0, 0);
    } else if (page === 'terms') {
      window.history.pushState({}, '', '/terms');
      window.scrollTo(0, 0);
    } else {
      window.history.pushState({}, '', '/');
      window.scrollTo(0, 0);
    }
  };

  const tickerKeywords = [
    { text: 'Generative AI', sub: 'Production Pipelines' },
    { text: 'Full-Stack Engineering', sub: 'MERN & Python' },
    { text: 'Creative 3D & GSAP', sub: 'Kinetic Interactions' },
    { text: 'High-Throughput Scrapers', sub: 'AI Integration' },
    { text: 'JWT Architectures', sub: 'Enterprise Security' },
  ];

  return (
    <div className="relative min-h-screen bg-[#F7F1ED] text-[#242424] selection:bg-[#FFE862] selection:text-[#242424]">
      {/* Editorial Vertical 5% Grid Guides (Signature Nithin M Warrier style) */}
      <div className="guide-line-left" />
      <div className="guide-line-right" />

      <CustomCursor />
      <ScrollProgressIndicator />
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      <main className="relative">
        {currentPage === 'privacy' && <PrivacyPage onBack={() => navigateTo('home')} />}
        {currentPage === 'terms' && <TermsPage onBack={() => navigateTo('home')} />}
        {currentPage === 'home' && (
          <>
            <HeroSection />

            {/* Scroll-coupled horizontal ticker */}
            <KineticTicker items={tickerKeywords} direction="left" />

            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />

            {/* Motion & Spatial 3D Showcase */}
            <MotionShowcaseSection />

            <SkillsSection />
            <EducationSection />
            <ContactSection onNavigate={navigateTo} />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
