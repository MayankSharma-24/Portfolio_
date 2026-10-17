import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-32 px-6 sm:px-12 bg-[#F7F1ED] border-b border-[#ACACAC]/40">
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#242424] font-bold">
            05 // Academic Foundations
          </span>
          <div className="h-px bg-[#ACACAC]/40 flex-1" />
        </div>

        <div className="mb-16">
          <h2 className="font-serif italic text-4xl sm:text-6xl text-[#242424] tracking-tight">
            Education & Verified Certifications
          </h2>
          <p className="text-[#242424]/70 text-sm sm:text-base mt-3 max-w-xl font-sans font-light">
            Formal undergraduate degree in Computer Science paired with industry certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl border border-[#ACACAC]/60 bg-white/70 shadow-sm">
            <div className="flex items-center gap-3 text-[#242424] mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FFE862] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#242424]" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#242424]">
                Undergraduate Degree
              </span>
            </div>

            <h3 className="font-serif italic text-3xl sm:text-4xl text-[#242424] mb-3">
              {RESUME_DATA.education.degree}
            </h3>

            <div className="text-base sm:text-lg font-mono text-[#242424]/80 mb-6">
              {RESUME_DATA.education.college}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#636363] mb-8 pb-6 border-b border-[#ACACAC]/40">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#ACACAC]/50">
                <Calendar className="w-3.5 h-3.5 text-[#242424]" />
                Expected: {RESUME_DATA.education.expectedGraduation}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFE862] text-[#242424] font-bold">
                CGPA: {RESUME_DATA.education.cgpa}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#636363] block mb-2 font-semibold">
                Core Academic Rigor
              </span>
              <p className="text-sm text-[#242424]/80 font-sans font-light leading-relaxed">
                Focused coursework in Machine Learning, Object-Oriented Programming, Data Structures & Algorithms, and AI Integration.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl border border-[#ACACAC]/60 bg-white/70 shadow-sm">
            <div className="flex items-center gap-3 text-[#242424] mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FFE862] flex items-center justify-center">
                <Award className="w-5 h-5 text-[#242424]" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#242424]">
                Industry Credentials
              </span>
            </div>

            <h3 className="font-serif italic text-2xl text-[#242424] mb-6">
              Verified Certifications
            </h3>

            <div className="space-y-4">
              {RESUME_DATA.certifications.map((cert, certIndex) => (
                <div
                  key={certIndex}
                  className="p-4 rounded-2xl bg-white border border-[#ACACAC]/50"
                >
                  <div className="font-semibold text-sm text-[#242424]">
                    {cert.name}
                  </div>
                  <div className="text-xs font-mono text-[#636363] mt-1">
                    {cert.issuer} • {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
