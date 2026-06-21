'use client'

import { GraduationCap, Calendar, Star } from 'lucide-react'
import { EDUCATION } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Education" subtitle="Academic background" eyebrow="/ 02 — study" />

        <StaggerChildren className="space-y-6">
          {EDUCATION.map((edu, i) => (
            <StaggerItem key={i}>
              <article className="surface surface-hover p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-paper-2 border border-line">
                      <GraduationCap size={18} className="text-brand" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-brand text-sm font-medium mt-1">{edu.institute}</p>
                    </div>
                  </div>
                  <div className="flex md:flex-col items-start md:items-end gap-3 md:gap-1.5 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs text-ink-muted font-mono">
                      <Calendar size={11} />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-ink font-mono font-semibold">
                      <Star size={11} fill="currentColor" className="text-brand" />
                      {edu.gpa}
                    </div>
                  </div>
                </div>

                <div className="hairline mb-6" />

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map(h => (
                    <span key={h} className="chip">
                      {h}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
