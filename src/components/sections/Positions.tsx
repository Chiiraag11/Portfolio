'use client'

import { Users, Calendar, CheckCircle2 } from 'lucide-react'
import { POSITIONS } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

export default function Positions() {
  return (
    <section id="positions" className="section-pad">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Position of Responsibility" subtitle="positions" />

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {POSITIONS.map((p, i) => (
            <StaggerItem key={i}>
              <div className="group glass rounded-2xl p-7 border border-white/8 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10">
                    <Users size={18} className="text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                    <p className="text-slate-200 text-sm">{p.org}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-5 ml-1">
                  <Calendar size={11} />
                  {p.duration}
                </div>

                <ul className="space-y-2.5">
                  {p.impact.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-slate-300 text-sm">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
