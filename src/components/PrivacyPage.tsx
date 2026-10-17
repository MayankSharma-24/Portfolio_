import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface PrivacyPageProps {
  onBack: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
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
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-2">
            Last updated: October 17, 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
            1. Overview
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            This personal portfolio website is operated by {RESUME_DATA.name}. It functions as an informational portfolio to display engineering projects, academic background, and work experience. Your privacy is respected, and this page clearly describes what data is processed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
            2. Data Collected and Purpose
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            This site collects only information that you voluntarily choose to send through the contact form or direct email link:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
            <li>
              <strong>Contact Details:</strong> Your name and email address when you use the mail client trigger or send an email directly.
            </li>
            <li>
              <strong>Inquiry Message:</strong> The message content and project details you provide in your email communication.
            </li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            This information is used solely to respond to your professional inquiry. It is never sold, rented, or shared with third parties for marketing purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
            3. Cookies and Tracking
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            This website does NOT use third-party analytics trackers, advertising pixels, or profiling cookies. Only standard browser local storage is used solely to store your dark/light theme preference.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
            4. External Links
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            This site links to external platforms including GitHub, LinkedIn, and live project deployments. These external sites operate under their own independent privacy policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
            5. Contact Information
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            For questions about this Privacy Policy or your data, reach out directly:
          </p>
          <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-white/10 bg-neutral-100/80 dark:bg-white/5 text-xs text-neutral-600 dark:text-neutral-300 font-mono">
            {RESUME_DATA.name} <br />
            Email: {RESUME_DATA.contact.email} <br />
            Phone: {RESUME_DATA.contact.phone} <br />
            Location: {RESUME_DATA.contact.location}
          </div>
        </section>
      </div>
    </div>
  );
};
