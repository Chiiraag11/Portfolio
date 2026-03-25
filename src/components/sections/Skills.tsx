'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/data'
import { SectionHeader, FadeUp } from '@/components/ui/Animations'

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Skills" subtitle="what i work with" />

        <div className="grid sm:grid-cols-2 gap-6 justify-items-center">
          {SKILLS.map((cat, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="group glass rounded-2xl p-7 border border-white/8 ... w-full max-w-md">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-display text-lg font-bold text-white">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="skill-badge px-3 py-1.5 rounded-lg text-sm font-mono text-slate-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom strip — a horizontal scrolling tech marquee */}
        <FadeUp delay={0.4} className="mt-10 overflow-hidden">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080B14] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080B14] to-transparent z-10" />
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-3 w-max"
            >
              {[...SKILLS.flatMap(c => c.items), ...SKILLS.flatMap(c => c.items)].map((s, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl border border-white/6 text-sm font-mono text-slate-500 bg-white/3 whitespace-nowrap"
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
