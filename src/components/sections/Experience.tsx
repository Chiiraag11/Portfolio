'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'
import { EXPERIENCE } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

const COLOR_MAP: Record<string, string> = {
  blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/20 group-hover:border-blue-500/40',
  violet: 'from-violet-500/20 to-violet-600/10 border-violet-500/20 group-hover:border-violet-500/40',
}

const DOT_MAP: Record<string, string> = {
  blue: 'bg-blue-500',
  violet: 'bg-violet-500',
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Experience" subtitle="where i've worked" />

        <StaggerChildren className="space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <StaggerItem key={i}>
              <div className={`group relative glass rounded-2xl p-8 border bg-gradient-to-br ${COLOR_MAP[exp.color]} transition-all duration-300 hover:shadow-lg`}>
                {/* Left accent */}
                <div className={`absolute left-0 top-8 bottom-8 w-0.5 ${DOT_MAP[exp.color]} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${COLOR_MAP[exp.color].split(' ')[0]} border border-white/10`}>
                      <Briefcase size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-slate-200 text-sm">{exp.org}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-200 font-mono bg-white/5 px-3 py-1.5 rounded-lg border border-white/8 shrink-0">
                    <Calendar size={12} />
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.desc.map((d, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${DOT_MAP[exp.color]} bg-clip-text`} style={{ color: exp.color === 'blue' ? '#60a5fa' : '#a78bfa' }} />
                      {d}
                    </motion.li>
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
