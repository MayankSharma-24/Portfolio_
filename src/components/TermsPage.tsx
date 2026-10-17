import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface TermsPageProps {
  onBack: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  return (
    <div className="py-20 px-6 sm:px-8 max-w-4xl mx-auto text-neutral-900 dark:text-neutral-100">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium border border-neutral-200/80 dark:border-white/10 bg-white/80 dark:bg-[#121214]/80 text-neutral-800 dark:text-neutral-200 hover:text-rose-500 mb-10 transition-colors cursor-pointer shadow-sm"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Portfolio</span>
      </button>

      <div className="space-y-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-rose-500 font-semibold block mb-2">
            Legal
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-neutral-900 dark:text-white">
            Terms and Conditions
          </h1>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-2">
            Last updated: October 17, 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
            1. Agreement to Terms
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
            2. Intellectual Property and Content Ownership
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            All text, case studies, codebase architecture descriptions, and original materials displayed on this website are the property of {RESUME_DATA.name}, unless otherwise attributed. Projects completed for employers or clients (such as MHTECHIN) remain the intellectual property of their respective owners.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
            3. Permitted Use
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            You may view, browse, and evaluate this portfolio for prospective hiring, contracting, academic review, or professional networking. You may not republish, scrape, or reproduce the portfolio content as your own work without express written consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
            4. Disclaimer
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            This portfolio is provided "as is" for informational and demonstration purposes only. While every effort has been made to represent technical skills and project details accurately, no guarantees are made regarding third-party external demo availability or perpetual uptime.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
            5. Contact
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            If you have any questions about these Terms, please contact:
          </p>
          <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-white/10 bg-neutral-100/80 dark:bg-white/5 text-xs text-neutral-600 dark:text-neutral-300 font-mono">
            {RESUME_DATA.name} <br />
            Email: {RESUME_DATA.contact.email} <br />
            Location: {RESUME_DATA.contact.location}
          </div>
        </section>
      </div>
    </div>
  );
};
