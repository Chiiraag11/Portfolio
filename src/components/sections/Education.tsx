'use client'

import { GraduationCap, Calendar, Star } from 'lucide-react'
import { EDUCATION } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Education" subtitle="academic background" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-transparent hidden md:block" />

          <StaggerChildren className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center shrink-0">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 border-2 border-[#080B14] shadow-lg shadow-violet-500/30 z-10" />
                  </div>

                  {/* Card */}
                  <div className="group glass rounded-2xl p-7 border border-white/8 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10">
                          <GraduationCap size={20} className="text-blue-300" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-bold text-white">{edu.degree}</h3>
                          <p className="text-slate-200 text-sm">{edu.institute}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono bg-white/5 px-3 py-1.5 rounded-lg border border-white/8">
                          <Calendar size={11} />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-yellow-400 font-mono">
                          <Star size={11} fill="currentColor" />
                          {edu.gpa}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map(h => (
                        <span key={h} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/8 text-slate-400">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
