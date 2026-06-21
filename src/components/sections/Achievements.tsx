'use client'

import { ACHIEVEMENTS } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-paper-2/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Achievements"
          subtitle="Key accomplishments & milestones"
          eyebrow="/ 05 — wins"
        />

        <StaggerChildren className="grid sm:grid-cols-2 gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <StaggerItem key={i}>
              <article className="group surface surface-hover p-7 h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="text-4xl">{a.icon}</div>
                  <span className="chip !bg-ink !border-ink !text-paper !text-[0.65rem] font-semibold">
                    {a.highlight}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-medium text-ink leading-tight mb-1">
                  {a.title}
                </h3>
                <p className="text-brand text-sm font-medium mb-4">{a.subtitle}</p>
                <p className="text-ink-soft text-[0.95rem] leading-relaxed flex-1">{a.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
