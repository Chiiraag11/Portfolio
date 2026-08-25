'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FadeUp, Eyebrow, AccentBar } from '@/components/ui/Animations'
import { EXPERIENCE } from '@/lib/data'

function Row({ exp, index }: { exp: (typeof EXPERIENCE)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const numY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 40, reduceMotion ? 0 : -40])

  return (
    <FadeUp delay={index * 0.08}>
      <motion.div
        ref={ref}
        initial="rest"
        whileHover="hover"
        className="relative grid lg:grid-cols-12 gap-x-8 py-16 sm:py-24 border-t border-white/10 first:border-t-0 overflow-hidden"
      >
        <motion.span
          variants={{ rest: { scaleY: 0 }, hover: { scaleY: 1 } }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-coral origin-top"
        />

        <motion.div
          variants={{ rest: { x: 0 }, hover: { x: 6 } }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 lg:col-start-2 pl-4 sm:pl-8"
        >
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-4">
            <h3 className="font-display font-semibold text-[clamp(2rem,4.2vw,3.75rem)] leading-[1.05] text-white">
              {exp.role}
            </h3>
            <span className="font-mono text-xs sm:text-sm text-white/40 whitespace-nowrap">
              {exp.duration}
            </span>
          </div>
          <p className="text-accent-coral font-medium text-xl sm:text-2xl mb-6">{exp.org}</p>
          <p className="text-white/65 leading-relaxed text-lg sm:text-xl mb-8 max-w-2xl">{exp.desc}</p>
          <div className="flex flex-wrap gap-3">
            {exp.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-xs sm:text-sm text-white/60 px-3 py-1.5 rounded border border-white/15 hover:border-lime hover:text-lime hover:bg-lime/[0.08] transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ y: numY }}
          className="hidden lg:flex lg:col-span-3 lg:col-start-10 items-center justify-end pr-2 select-none"
        >
          <span className="numeral-outline text-lime text-[clamp(9rem,13vw,15rem)]">
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>
      </motion.div>
    </FadeUp>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 sm:px-10 lg:px-16 xl:px-24 py-28 sm:py-36 bg-rust overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <FadeUp>
          <Eyebrow label="experience" accent="coral" light />
          <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.5rem)] text-white mb-4 tracking-tight">
            Where I've worked
          </h2>
          <AccentBar accent="coral" />
        </FadeUp>

        <div>
          {EXPERIENCE.map((exp, i) => (
            <Row key={exp.org} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
