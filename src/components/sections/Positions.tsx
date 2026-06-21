'use client'

import { Users, Calendar, CheckCircle2 } from 'lucide-react'
import { POSITIONS } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

export default function Positions() {
  return (
    <section id="positions" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Positions of Responsibility"
          subtitle="Leadership & community"
          eyebrow="/ 06 — leadership"
        />

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {POSITIONS.map((p, i) => (
            <StaggerItem key={i}>
              <article className="surface surface-hover p-7 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-paper-2 border border-line">
                    <Users size={16} className="text-brand" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-medium text-ink truncate">{p.title}</h3>
                    <p className="text-brand text-xs font-medium truncate">{p.org}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-ink-muted font-mono mt-1 mb-5 ml-1">
                  <Calendar size={11} />
                  {p.duration}
                </div>

                <ul className="space-y-2.5 flex-1">
                  {p.impact.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-ink-soft text-sm leading-relaxed">
                      <CheckCircle2 size={14} className="text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
