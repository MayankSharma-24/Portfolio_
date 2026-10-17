import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, Copy, Check } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface ContactSectionProps {
  onNavigate?: (page: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${RESUME_DATA.contact.email}?subject=Portfolio Contact from ${encodeURIComponent(
      formState.name
    )}&body=${encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`)}`;
    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <section id="contact" className="py-32 px-6 sm:px-12 bg-[#F7F1ED] relative overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#242424] font-bold">
            06 // Inquiries & Communication
          </span>
          <div className="h-px bg-[#ACACAC]/40 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif italic text-4xl sm:text-6xl text-[#242424] tracking-tight">
                Let's discuss opportunities.
              </h2>
              <p className="text-[#242424]/75 text-sm sm:text-base mt-4 font-sans font-light leading-relaxed">
                Whether you have an ML/AI opening, full-stack software challenge, or want to explore collaborative projects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-[#ACACAC]/60 bg-white/80 flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-full bg-[#FFE862] text-[#242424] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#242424]" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#636363]">
                      Email
                    </div>
                    <a
                      href={`mailto:${RESUME_DATA.contact.email}`}
                      className="text-xs sm:text-sm font-mono font-medium text-[#242424] hover:underline truncate block"
                    >
                      {RESUME_DATA.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#242424]" />}
                </button>
              </div>

              <div className="p-5 rounded-2xl border border-[#ACACAC]/60 bg-white/80 flex items-center gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#FFE862] text-[#242424] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#242424]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#636363]">
                    Phone
                  </div>
                  <a
                    href={`tel:${RESUME_DATA.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-xs sm:text-sm font-mono font-medium text-[#242424]"
                  >
                    {RESUME_DATA.contact.phone}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-[#ACACAC]/60 bg-white/80 flex items-center gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#FFE862] text-[#242424] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#242424]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#636363]">
                    Location
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-medium text-[#242424]">
                    {RESUME_DATA.contact.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              {RESUME_DATA.contact.github && (
                <a
                  href={RESUME_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#242424] bg-white text-xs font-mono font-medium text-[#242424] hover:bg-[#242424] hover:text-white transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {RESUME_DATA.contact.linkedin && (
                <a
                  href={RESUME_DATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#242424] bg-white text-xs font-mono font-medium text-[#242424] hover:bg-[#242424] hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <a
                href={`mailto:${RESUME_DATA.contact.email}?subject=Resume Request for Mayank Sharma`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FFE862] text-xs font-mono font-semibold text-[#242424] hover:bg-[#FFD640] transition-colors"
              >
                <span>Request Resume (PDF)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl border border-[#ACACAC]/60 bg-white/80 shadow-md">
            <h3 className="font-serif italic text-3xl text-[#242424] mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#636363] mb-8 font-sans font-light">
              Fill out this direct dispatch form to reach Mayank's inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono font-medium text-[#242424] mb-2 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formState.name}
                  onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-5 py-3.5 rounded-xl border border-[#ACACAC]/60 bg-[#F7F1ED]/50 text-[#242424] text-sm focus:outline-none focus:border-[#242424] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-[#242424] mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-5 py-3.5 rounded-xl border border-[#ACACAC]/60 bg-[#F7F1ED]/50 text-[#242424] text-sm focus:outline-none focus:border-[#242424] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-[#242424] mb-2 uppercase tracking-wider">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe the opportunity or project timeline..."
                  value={formState.message}
                  onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-5 py-3.5 rounded-xl border border-[#ACACAC]/60 bg-[#F7F1ED]/50 text-[#242424] text-sm focus:outline-none focus:border-[#242424] transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#242424] hover:bg-black text-[#FFE862] font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <span>{isSent ? 'Dispatched to Email!' : 'Send Direct Message'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[#ACACAC]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#636363]">
          <div>
            © {new Date().getFullYear()} {RESUME_DATA.name} — Designed with intention.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('privacy');
                }
              }}
              className="hover:text-[#242424] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('terms');
                }
              }}
              className="hover:text-[#242424] transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
