'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/data'
import { SectionHeader, FadeUp } from '@/components/ui/Animations'

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Toolkit" subtitle="What I work with" eyebrow="/ 04 — skills" />

        <div className="grid sm:grid-cols-2 gap-5">
          {SKILLS.map((cat, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="surface surface-hover p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-display text-xl font-medium text-ink">{cat.category}</h3>
                  <span className="ml-auto font-mono text-xs text-ink-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.04, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 rounded-md text-sm font-mono text-ink-soft bg-paper-2 border border-line hover:border-brand hover:text-ink transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Marquee */}
        <FadeUp delay={0.3} className="mt-10 overflow-hidden">
          <div className="relative py-2">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-paper to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-paper to-transparent z-10" />
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="flex gap-3 w-max"
            >
              {[...SKILLS.flatMap(c => c.items), ...SKILLS.flatMap(c => c.items)].map((s, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-line text-sm font-mono text-ink-muted bg-paper-2/60 whitespace-nowrap"
                >
                  {s}
                </span>
              ))}
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
