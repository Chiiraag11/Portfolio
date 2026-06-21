'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2, Download } from 'lucide-react'
import { EXPERIENCE } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Experience" subtitle="Where I've worked" eyebrow="/ 01 — work" />

        <StaggerChildren className="space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <StaggerItem key={i}>
              <article className="surface surface-hover p-8 md:p-10 grid md:grid-cols-[200px_1fr] gap-8">
                {/* Left meta column */}
                <div className="flex md:flex-col gap-4 md:gap-3 items-start">
                  <div className="p-2.5 rounded-lg bg-paper-2 border border-line">
                    <Briefcase size={18} className="text-brand" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-ink-muted font-mono">
                    <Calendar size={11} />
                    {exp.duration}
                  </div>
                </div>

                {/* Body */}
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-brand text-sm font-medium mt-1 mb-6">{exp.org}</p>

                  <ul className="space-y-3">
                    {exp.desc?.map((d, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-ink-soft text-[0.95rem] leading-relaxed"
                      >
                        <CheckCircle2 size={15} className="shrink-0 mt-1 text-brand" />
                        <span>{d}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {exp.report && (
                    <a
                      href={exp.report}
                      download
                      className="inline-flex items-center gap-2 mt-7 text-sm px-5 py-2.5 rounded-full border border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
                    >
                      <Download size={14} />
                      Download Report
                    </a>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
