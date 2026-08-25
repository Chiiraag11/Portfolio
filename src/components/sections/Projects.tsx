'use client'

import { motion } from 'framer-motion'
import { FadeUp, FadeIn } from '@/components/ui/Animations'
import { PROJECTS } from '@/lib/data'
import Image from 'next/image'

const ACCENT_TEXT: Record<string, string> = {
  lime: 'text-lime',
  blue: 'text-electric',
  coral: 'text-accent-coral',
}
const ACCENT_BORDER: Record<string, string> = {
  lime: 'hover:border-lime hover:text-lime hover:bg-lime/[0.08]',
  blue: 'hover:border-electric hover:text-electric hover:bg-electric/[0.08]',
  coral: 'hover:border-accent-coral hover:text-accent-coral hover:bg-accent-coral/[0.08]',
}
const PANEL_BG: Record<string, string> = {
  lime: 'bg-lime/[0.06]',
  blue: 'bg-electric/[0.06]',
  coral: 'bg-accent-coral/[0.06]',
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 sm:px-10 lg:px-16 xl:px-24 py-28 sm:py-36 bg-inkbg text-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <FadeUp>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime pulse-dot" />
            <p className="eyebrow-light">selected work</p>
          </div>
          <h2 className="font-display font-semibold text-[clamp(2.25rem,4.5vw,4rem)] text-white mb-20 tracking-tight">
            Three things I've built
          </h2>
        </FadeUp>

        <div>
          {PROJECTS.map((p, i) => {
            const reversed = i % 2 === 1
            return (
              <FadeUp key={p.title} delay={i * 0.04}>
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center py-20 sm:py-28 border-t border-white/10 first:border-t-0">
                  <div
                    className={`lg:col-span-6 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="flex items-start gap-5 mb-6">
                      <span className={`numeral-outline text-5xl sm:text-6xl ${ACCENT_TEXT[p.variant]}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="pt-2">
                        <h3 className="font-display font-semibold text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] tracking-tight text-white">
                          {p.title}
                        </h3>
                        <p className={`font-mono text-base sm:text-lg mt-2 ${ACCENT_TEXT[p.variant]}`}>{p.tagline}</p>
                      </div>
                    </div>

                    <p className="text-white/60 leading-relaxed text-xl sm:text-xl max-w-xl mb-8">{p.desc}</p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                      <div className="flex flex-wrap gap-3">
                        {p.stack.map((t) => (
                          <span
                            key={t}
                            className={`font-mono text-xs sm:text-sm text-white/60 px-3 py-1.5 rounded border border-white/15 transition-colors duration-300 ${ACCENT_BORDER[p.variant]}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-5 font-mono text-sm sm:text-base">
                        {p.repo && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline group inline-flex items-center gap-1 text-white hover:text-lime transition-colors duration-300"
                          >
                            GitHub
                            <motion.span initial={{ x: 0, y: 0 }} whileHover={{ x: 2, y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }} className="inline-block">↗</motion.span>
                          </a>
                        )}
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline group inline-flex items-center gap-1 text-white hover:text-lime transition-colors duration-300"
                          >
                            Live
                            <motion.span initial={{ x: 0, y: 0 }} whileHover={{ x: 2, y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }} className="inline-block">↗</motion.span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <FadeIn
  delay={0.1}
  className={`lg:col-span-6 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}
>
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    className="relative aspect-[16/9] overflow-hidden rounded-xl"
  >
    <Image
      src={p.image}
      alt={`${p.title} project screenshot`}
      fill
      className="object-cover"
      priority={i === 0}
    />
  </motion.div>
</FadeIn>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
