'use client'

import { ACHIEVEMENTS } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Achievements" subtitle="key accomplishments & milestones" />

        <StaggerChildren className="grid sm:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((a, i) => (
            <StaggerItem key={i}>
              <div className="group glass rounded-2xl p-7 border border-white/8 hover:border-white/20 hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                
                {/* Icon */}
                <div className="text-3xl mb-4">
                  {a.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {a.title}
                </h3>

                {/* Subtitle */}
                <p className="text-slate-200 text-sm mb-3">
                  {a.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm flex-1 leading-relaxed">
                  {a.description}
                </p>

                {/* Highlight Badge */}
                <div className="mt-5">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/10 text-white rounded-full border border-white/10 backdrop-blur-sm">
                    {a.highlight}
                  </span>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}